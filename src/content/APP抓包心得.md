---
title: APP抓包心得
slug: 0002
---
# **APP抓包心得**

**方法一：使用模拟器，个人推荐夜神模拟器或者是网易的MuMu模拟器****

**场景：需要抓取HTTPS的数据包**

**1、使用模拟器：夜神模拟器**

**第二步是最关键的一步，不管是Android系统还是IOS系统，抓APP数据包都比不可少**

**2、安装burp证书，burp设置好代理**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977627490-a9f4d932-dbaa-46cc-a758-93ac56c80161.png)**

**·        来到模拟器—>设置—>WALN—修改网络—>手动，如下图：主机名和端口与burp一致**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977627862-bee67e9c-dd26-44cb-8f90-f4e2f4cb346e.png)**

**·        设置完成之后，需要导入burp证书，访问http://burp，下载证书。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977627187-c4267d93-1142-419f-b650-e299a73ee9c6.png)**

**·        下载完成后把证书改名：crt格式（ps**：模拟器或手机支持的格式**）**

**·        导入到模拟器中**

**·        设置->安全->SD卡安装证书，找到对应的证书**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977627589-b820d2ac-7f62-4b6d-9ba1-be9288a5929c.png)**

**·        安装下一步，任意命名即可。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977627599-6901d7fb-6fff-4e8b-ab55-6fc034b90ced.png)**

**3、burp抓包成功，如下图**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977634798-e33a1a6f-4c68-4463-aaea-e74ee9176bff.png)**



**方法二（在安装有证书的前提下没有安装证书的回头看方法一）：**Proxifier+burp****

**场景：APP识别到模拟器开有代理，导致数据包错误或者hi不能正常打开访问APP，这种情况我们可以利用以代理的方式，达到绕过的效果。**

**1、burp设置好代理**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977631155-45913c2f-1b54-4eea-a89b-d56a18240d42.png)**

**2、关闭模拟器的代理，不需要开启代理！**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977629139-9744f747-32fe-4b91-a555-52e5a616980e.png)**



**3、下载Proxifier并打开修改完成，如下图：IP与端口需要对应BURP设置的IP和端口**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977629205-13405c6e-d008-403a-b2ce-bb3779d4d0e6.png)**

**4、点击配置文件—>代理规则—>设置代理规则—>添加一条代理规则**

**代理的名称任意填，应用程序需要抓取模拟器程序的进程，这里用的夜神。**

**multiplayermanager.exe; nox.exe; noxrepair.exe; noxvmsvc.exe; noxvmhandle.exe**

**选取进程试最好是点击浏览，找到该进程的文件路径，并选取防止找不到路径导致找不到包**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977629338-fbaa8a66-742f-4d01-a617-3bd969576d3b.png)**

**5、确定完成即可，运行APP可以看到模拟器的数据，如下图：**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977631500-9cc586ea-c47f-44f9-a736-fbef58f65510.png)**

**6、burp抓包成功，如下图**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977631720-40ff9e22-d7e4-493f-a926-46b30c04c7bd.png)**



**方法三：夜神**+xposed+JustTrustMe** 可突破双向验证**

**环境准备：**

**夜神模拟器（Android 5版本）、JustTrustMe、xposed**

**安装完成如下图：**

**·        安装xposed生成一个APP**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977636906-c5d1c911-314d-4d12-aba7-748e978e5322.png)**

**·        安装完成之后会打个绿√（踩坑点：xposed貌似不支持Android 7版本的）**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977632286-4372f9aa-be5e-48cb-8c06-0458d90be3da.png)**

**·        安装完成后，可以专门绕过一些对模拟器有防护的APP，然后抓包方式与方法一一致。**



**方法四：使用真机（**Android and IOS）的方式****

**场景：在实际的环境中，有很多的APP在模拟器中打开，会直接闪退，或者提示检测到使用模拟器打开。**



**1、安装burp证书，burp设置好代理（ps:设置的IP和端口要与真机的一致）**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977633965-33c2ad46-f44c-400b-9186-3759cd73198b.png)**



**Android 环境**

**·        来到真机（本人的P20如下图）—>设置—>WALN—修改网络—>手动，如下图：主机名和端口与burp一致**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977634881-2f76c849-e088-4600-a762-a93cb5d1f4e6.png)**

**·        设置完成之后真机也需要安装BURP的证书，如下图，访问http://burp,下载好证书**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977634652-b89aded8-27e8-4161-92db-3ca75c0d3ae6.png)**

**·        下载完成后，回到设置—>安全—>更多安全设置—>加密和凭据—>从存储设备安装证书，找到下载的证书（**ps：证书的命名要以.crt的格式作为后缀名），如下图：****

**·        ![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977635346-0aa161d5-f410-4c15-a9fc-0bd14b01f231.png)**

**·        点击安装，默认安装，安装完成即可。**



**IOS 环境**

**·        来到真机（本人的IOS如下图）—>设置—>WALN—点击网络—>配置代理—>自动修改为手动，如下图：主机名和端口与burp一致**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977639987-dc433a95-ab18-4f5c-b836-1ebc97089bbd.png)**



**·        设置完成之后真机也需要安装BURP的证书，如下图，访问http://burp,点击右上角的证书，并安装，出现相关提示**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977639549-a0b0190a-807e-425e-b8b8-26ce3a1d84e9.png)**

**·        根据提示，回到设置—>通用—>关于本机—>证书信任设置—>针对根证书启用完全信任，把PortSwigger CA选择即可安装完成，如下图：**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779977639566-07c45e0a-52ea-4baf-9291-b3f7d5f8a746.png)**