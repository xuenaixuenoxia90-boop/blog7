---
title: 绕过referer
slug: "0159"
---
# **绕过referer**

**这里存在callback回调，但是验证了referer，导致无法劫持信息，只能指定域名才能接受请求，但是经过多次测试发现可以绕过，referer导致了jsonp劫持**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964471914-3f2a009b-620a-4302-bc89-a6e1c28b9775.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964472545-8a7d4db4-74e2-41ab-9292-086d061aa030.png)**



**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964471745-df561e74-f998-40ea-bfbd-d9f39dce7136.png)**

**二、漏洞证明(在这里写POC)：**



**http://www.qq.com\&@qishi.sm.cn**

**http://www.qq.com\&@qishi.sm.cn  绕过的poc**
