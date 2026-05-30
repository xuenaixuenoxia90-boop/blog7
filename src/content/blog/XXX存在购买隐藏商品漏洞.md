---
title: XXX存在购买隐藏商品漏洞
slug: "0064"
---
# **XXX存在购买隐藏商品漏洞**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其存在购买隐藏商品漏洞，通过遍历可以购买大量隐藏商品，造成财产损失**



**2.漏洞证明**

**来到网站随便选一个商品购买，抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787782114-0fdf1ae2-0d15-4154-8e5a-2a1f415c1d84.png)**

**抓到如下数据包对 id 遍历**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787803149-dc982f72-61ce-4854-82c8-22761dbfeaae.png)**

**跑出大量隐藏商品，其中有全场最低 9.9 的隐藏商品，还有 78，169，349，599 等商品，这些商品在网站前端无法看到**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787825824-13bdbc76-8ff2-4f25-9977-89a71b6c5f65.png)**

**对同意并支付，拦截抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787864460-68ea04d2-1f41-4af8-947f-e2ddd3e27aeb.png)**

**改成隐藏商品 id**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787882177-20352c2d-1b6f-43fd-9818-a287c29b9fd8.png)**

**扫码发现可以购买**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787889568-2e1a3988-a753-44d6-8c71-6a17575eddb5.png)**





**3.修复方案**

**对传入的商品 id 做二次校验**
