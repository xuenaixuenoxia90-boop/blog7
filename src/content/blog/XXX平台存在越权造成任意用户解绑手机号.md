﻿﻿---
title: XXX平台存在越权造成任意用户解绑手机号
slug: "0095"
---
# **XXX平台存在越权造成任意用户解绑手机号**

**1.漏洞详情**

**在对XXX进行安全测试中，发现其更改手机号功能存在验证码爆破，会覆盖别的用户手机号，进而使受害者无法登录账号**

**2.漏洞证明**

**随便注册两个账号 A，B**

**A点击修改手机号，把自己的手机号换成 B 的**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779770123255-8393f3ed-5a02-4dd4-85b6-c6e1873a7046.png)**

**点击抓包进行爆破**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779770158351-dea70966-52ca-430e-9efd-2e74e0761f5f.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779770194072-06dd88f1-3ca3-4194-bc6c-1671f5ba00b3.png)**

**原来 B 的账号是这个**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779770226156-6fad2e1f-e440-4fc9-aca0-983ccd9a506d.png)**

**成功绑定他人手机号后点击账号管理发现多出来一个号**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779770239014-e0d7215d-e0e7-4d56-bccc-faab7f9db046.png)**

**点击解绑就能实现把他人的手机号和他人的账号解绑了**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779770271800-39ce7d65-524f-4175-b3de-dc7218c0eab1.png)**



**3.修复方案**

**限制手机号只能注册一个账号**

