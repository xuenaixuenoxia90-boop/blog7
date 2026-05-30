---
title: XXX存在未授权使用VIP功能漏洞
slug: "0075"
---
# **XXX存在未授权使用VIP功能漏洞**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其存在未授权使用 VIP 功能漏洞，造成经济损失**



**2.漏洞证明**

**限制 1：人设最多添加 3 个**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786852406-45b9a4b4-7e08-4bc6-8982-8baaf26311d6.png)**

**限制 2：无法使用矩阵号运营**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786875157-68b6d52b-1ae4-4cfa-82e4-2e5f5eb068d1.png)**

**刷新看到下面的数据跑中 viptype 等为 free**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786910904-6f287958-5433-41c0-a59a-040279cd9c8a.png)**

**通过代理自动替换为最高 VIP 等级 studio(这个是在 js 里面查的)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786923125-9bd4484e-d533-4320-9c13-fcc258219b5c.png)**

**刷新后，突破限制 1，人设能加 20 个了**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786938127-8bd501ef-ab3e-46a1-8641-79d0c33bfe38.png)**

**限制 2 也同样解除，能够正常使用里面的功能点**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786954217-c9a0124b-eb17-4065-8bef-021fe67f4156.png)**



**3.修复方案**

**在相关功能点后端进行二次权限校验**
