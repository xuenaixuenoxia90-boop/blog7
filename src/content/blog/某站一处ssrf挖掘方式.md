---
title: 某站一处ssrf挖掘方式
slug: 0153
---
# **某站一处ssrf挖掘方式**

**百度某站一处ssrf挖掘方式**





**扫描子域名找到一个站点，访问了是错误的，但是解析存在ns**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964600230-91590bf1-dbf4-4a61-8327-a2ed695833fe.png)**

**可疑的测试，我fuzz一次目录层找到了一个chack.jsp，访问空白，**

**这里面很有可能存在东西，在对参数层进行fuzz测试发现xxx？url=http：//www.baidu.com**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964600594-a8cd4e45-5f5e-4154-a766-730471212b64.png)**

**在链接后面再加上@符号绕过了，访问到了内网信息**



**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964600661-12f73f5b-66c9-444d-9ae9-255ae53dc9b2.png)**