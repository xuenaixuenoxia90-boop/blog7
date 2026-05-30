---
title: XXXcors配置不当漏洞挖掘
slug: "0051"
---
# **XXXcors配置不当漏洞挖掘**

**最近在研究cors，这不刚找了个网站练练手，**

**我相信在座的各位一定都是不喜欢看原理什么的 在此也就不多赘述，直接开始吧。**

**简单说下cors: CORS全称Cross-Origin Resource Sharing, 跨域资源共享，是HTML5的一个新特性，已被所有浏览器支持，不同于古老的jsonp只能get请求。**

**但如果长满头发的程序员犯了错误，配置出错怎么办？那就，嘿嘿嘿![img](/proxy/https://cdn.nlark.com/yuque/0/2026/jpeg/60657001/1779970565006-38ad3410-887d-40a0-b71d-f3c8d1964cee.jpeg)**

**具体参照文章https://www.anquanke.com/post/id/97671讲解十分详细！**



**start:**

**官网：https://XXX com/**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970566516-1d3b17ef-eb9f-43a9-90fb-8ee477458555.png)**



**首先注册个账号这边我已经注册好了，**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970565106-17a7c8a3-0f3a-486e-a9b5-57d7f669b03a.png)**



**由此可见我的用户名是ys724514，要用curl请求看响应包。**

**于是启动kali，burp开干。**



**首先kali里用curl访问出现cors的接口**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970566052-17f44962-64cd-4e72-bec1-ae3e02b40a29.png)**

**因为我这边是加了origin字段的，但他的返回包Access-Control-Allow-Origin: https://test.com**

**居然还是test.com 这程序员就该挨板子了啊。**



**开启burp 抓取![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970565288-310f238e-622e-4539-ba61-53bad69a0359.png)**

**概况处的包，send to repeater ，go**



**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970565778-20c09aea-fd83-4410-9785-e9b6b1daa184.png)**



**尝试放包后得到response 大家注意这个包的origin字段是和返回的**

**Access-Control-Allow-Origin也是相同的，这表明了什么不言而喻啊**



**Ok 其实刚刚curl的地址也是这个页面抓过来的 copy过去就可以了**



**可以看到响应包返回了一个地址，我们去多余斜杠，用浏览器看看。**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970565687-0903f3f5-d882-47d8-a9c8-e48bec3ae30f.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970566355-fe619e8a-97f7-4bf6-954a-01e0e9cbfc93.png)**



**是一个二维码我们扫描他试试，估计是返回用户信息的，**

**扫描后是关注公众号，不过不要紧公众号里有用户信息**



**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970566264-ccfa50cc-ec18-472b-8055-dd46d45c67b7.png)**









**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/jpeg/60657001/1779970566351-5f178587-9f15-4882-a7bd-2532867011b2.jpeg)**

**可以看到用户是ys724514**



**此时可以编写一波poc**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970566485-8ed1af35-c969-458d-bdc0-cc926a053a2a.png)**



**把最重要的部分改为他的接口即可接下来部署好服务器模拟黑客给用户发送这个页面用户打开的效果！**





**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970566645-7e6d6c4e-f985-41c6-b813-a6be6496fd82.png)**



**用户点开之后是这样的，然后我们点击exploit 即可获取用户的二维码！**



**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970566743-facdad78-ef7a-44a4-bbe7-1a318e37b995.png)**

**可以看到已经成功获取了，是跟原二维码一模一样的黑客进行扫描即可获取用户数据。**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970567029-ffe0ff3b-e84d-4462-8e1a-c6ae9705ed17.png)**

**不妨设想我刚刚没有进行实名认证若受害者是位实名用户，那危害不言而喻啊。**



**Ok，分享结束，其实本例站点的类似接口还挺多的大家可以去找找好的拜拜！**
