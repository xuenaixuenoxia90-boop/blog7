---
title: XXX管理系统存在并发发送语音验证码漏洞
slug: "0084"
---
# **XXX管理系统存在并发发送语音验证码漏洞**

**1.漏洞详情**

**在对XXX管理系统进行安全测试时，发现其存在并发发送语音验证码漏洞，短时间内发送大量验证码使其爆破验证码更有可能**



**2.漏洞证明**

**手机号登录**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779794634757-deff5cc0-fa6d-490c-8db3-5994a3ccedd8.png)**

**点没收到验证码**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779794657418-9f376801-f7d8-4d7a-b53e-5299d142eaf4.png)**

**确认抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779794669704-c999895e-7d4e-4389-ae9d-91dddda21563.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779794764147-8547eaee-d0b0-4ca8-a3d0-e3def2bf97d9.png)**

**并发**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779794790546-1bb696dd-f728-4b24-9727-f7997a0ec5f0.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779794806518-faa07921-2d00-4cf6-810d-926be28a5ef6.png)**

**使其爆破验证码更有可能**



**3.修复方案**

**加 5 秒缓存锁**
