---
title: 安卓APP渗透
slug: 0127
---
# 安卓APP渗透

**0x1 简述**

在对银行APP进行渗透测试时，遇到了APP被加壳以及流量被加密。此篇文章针对以上问题以修改SO文件方式进行绕过。

**0x2** **反编译****APP**

首先APP作了加固，加固方式无从得知，从MT管理器提供的加固方法为：**娜迦加固**。仔细分析发现并不是，说明了MT管理器有时候提供的加固方法也会出错。反编译截图如下：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971856426-95a88a8e-7752-48c3-884c-8616e4dfaaea.png)image-20230415154512501

由于反编译后的包较少，直接挨个查看发现了一个可疑函数：

private static void copyAssets(String output, String input, Context context) {
        try {
            InputStream inputStream = context.getAssets().open(input);
            File localFile = new File(output);
            byte[] bytes = new byte[65536];
            BufferedInputStream bufferedInput = new BufferedInputStream(inputStream);
            BufferedOutputStream bufferedOutput = new BufferedOutputStream(new FileOutputStream(localFile));
            boolean first = true;
            byte[] nagic = {78, 71, 0, 0};
            byte[] magic = {100, 101, 120, 10};
            while (true) {
                int i = bufferedInput.read(bytes);
                if (first) {
                    first = false;
                    if (!(output.endsWith(Defines._DEX) && bytes[0] == nagic[0] && bytes[1] == nagic[1] && bytes[2] == nagic[2] && bytes[3] == nagic[3]) && output.endsWith(Defines._DEX) && bytes[0] == 110 && bytes[1] == 97 && bytes[2] == 103 && bytes[3] == 97) {
                        System.arraycopy(magic, 0, bytes, 0, magic.length);
                    }
                }
                if (i <= 0) {
                    bufferedOutput.flush();
                    bufferedOutput.close();
                    bufferedInput.close();
                    return;
                }
                bufferedOutput.write(bytes, 0, i);
            }
        } catch (Exception e) {
        }
    }



![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971856894-3c5bf568-3d87-4aff-b58f-0bf929817694.png)image-20230415154629629

仔细分析可以看出magic字段为：**{100, 101, 120, 10}**，换算成ASCII码值为：dex ，可推测为dex文件的文件头，继续往下看会发现最后使用

bufferedOutput.write(bytes, 0, i);

将文件写出，往上追溯代码可以得出输出目录：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971856647-04e9c177-ab33-43a2-8f81-f266f0744324.png)image-20230415155240237

按住Ctrl并点击对应变量可以得到输出目录在应用程序的数据目录中.cache目录下，这样我们安装APP并运行后，前往该目录的.cache目录，便可以看到对应的dex文件，这就是原生的dex文件，将其导入IDA继续进行分析

我们在抓包时可以看到API目录为：**mobile**开头的，如下图所示：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971861062-36c60c3d-5628-4211-8481-e2c94cd0b403.png)image-20230415155702946

接下来直接搜索**mobile**开头的API，找到其中一个查看源码，可以在源码附近发现加密函数：**telecomSMEncrypt**

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971857298-bb301c05-d460-4482-80ab-3edb935900f5.png)image-20230415160053204

跟进**telecomSMEncrypt**函数可以发现使用了Native调用so文件里的函数进行加解密：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971857319-e0c300da-110e-4ce3-b39c-cf81c0a65f96.png)image-20230415160206246

**0x3** **分析****so**

那么我们便来分析一下这个so文件，使用ida打开so文件，在左侧函数框处直接搜索：**getNativeSM4EncryptValue**，发现搜索不到，于是搜索**JNI_Onload**函数，幸运的是这个函数并没有被混淆，于是开始分析：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971862971-5fa5e76f-8294-4c85-a7af-77146cd3541c.png)image-20230415160514393

进入后发现函数名显示出来了，我们进入：**getNativeSM4EncryptValue**函数

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971860119-fc4db2d2-ec3a-46ba-b64a-066c1b2acc9f.png)image-20230415160612178

双击进入函数***Z10getSMValueP7_JNIEnvP8_jobjectP8_jstringS4***：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971861251-05a1890a-f3f7-412c-8323-b69cac9d4a92.png)image-20230415160903415

进入这个函数后发现使用return返回一个函数，继续往里跟：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971860836-c03b77de-723f-4f8a-8522-83f268129d22.png)image-20230415161044925

跟进来发现有SM4加密的特征了，这里分析了一下，推测**byte_1FFDB9**为key值，**a1**为待加密的原文，我们看上面的**byte_1FFDB9s**是如何生成的：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971862645-39aa9007-2d9b-481e-b369-bb4e632e3551.png)image-20230415161426194

分析出来key是32位**byte_18703A**数组的随机值，并且可以看到依据是**byte_1FFDB8**的值为0的情况下，推测为每次打开APP都会初始化这个key值。知道key值得生成方法后，我们需要确定SM4算法的模式是什么，我们跟进**SM4Encrypt**函数发现：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971864803-f6878893-8464-468a-9fd8-862de3098f39.png)image-20230415161816590

得了，ECB模式，不需要IV，所以这里就分析完SM4算法了。这里应该会有一个疑问：**既然每次打开****APP****时，****key****都会变，我们都知道****ECB****模式的****SM4****算法是使用****key****进行解密的，服务端肯定不知道****key****是多少呀，那么是怎么去解密呢？**既然如此，我们继续回头分析后面的代码：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971862158-445d8ce8-40d7-4f41-ab6e-cd5adf02e952.png)image-20230415162202270

我们注意到上方的代码中出现了：**%s|%s|%s**，回去观察请求体发现也出现了两个 **|** ，因此我们需要确定一下这三个 **%s** 都是什么，我们往前分析v12，v13和v8

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971863880-a7710b45-5ded-4716-a271-bc89d00173a5.png)image-20230415162702746

可以看到v12是SM2加密key的值**（但是****SM2****是非对称加密，没有私钥是无法解出****key****值的。而私钥只能在服务端有）**，下方图中可以看到v13是SM4加密的值

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971864516-cb3f9357-0971-4047-b7b6-02a39a6a8fa2.png)image-20230415162846065

再来看v8的值，可以看出v8的值是HMAC加密后的值，这里应该是SM3加密后的值

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971863587-eac12685-7967-440b-8939-18579ef3f26a.png)image-20230415163022563

那么其实我们只需要固定住key值，之后的所有密文都可以使用我们固定的key值进行加解密了，这里有一个思路：把前面的**byte_18703A**变量中的所有值改成同一个。

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971865815-27e7ca06-8ba3-407b-8eba-91a73af7cd8f.png)image-20230415163357418

使用上方方法，修改如下，全部固定成大写的A：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971864497-04ef241e-ba8f-4696-ae2a-1a8fb48f4522.png)image-20230415163338155

这样做的好处就是获取的key值只能是32个A了，我们就可以直接使用32个A作为key去进行SM4解密了。

**0x4** **替换****so**

我们将修改好的so进行保存：**Edit - Patch program - Apply patches input file...**

然后将其替换值APK路径：**/data/app/~~xxxxxxxxx==/lib/arm/**目录下，重启应用程序进行抓包即可。