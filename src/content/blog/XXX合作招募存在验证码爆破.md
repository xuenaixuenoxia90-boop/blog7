---
title: XXX合作招募存在验证码爆破
slug: "0085"
---
# **XXX合作招募存在验证码爆破**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其验证码存在爆破漏洞，攻击者能使用别人的手机号进行报名。**



**2.漏洞证明**

**报名抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779791957611-d24f5f8f-2e3c-4766-97ef-31af5daaa7e7.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779791985959-097c469d-a68a-4217-9651-07a46c2a8ad4.png)**

**爆破**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779792006000-efc2c79d-44c7-4dc8-9dea-5dbc6fbfafb7.png)**

**成功报名**



**3.修复方案**

**对报名接口限制单次验证码使用次数**
