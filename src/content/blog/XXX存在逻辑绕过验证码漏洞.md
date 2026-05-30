---
title: XXX存在逻辑绕过验证码漏洞
slug: "0067"
---
# **XXX存在逻辑绕过验证码漏洞**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其平台服务商入驻功能点存在逻辑绕过联系人验证码漏洞，能够设置任意联系人。**



**2.漏洞证明**

**设置联系人功能点，随便输入一个验证码，点击下一步拦截**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779788916066-f5846363-5b9c-46c1-be0e-e8c416d8cbad.png)**

**把响应直接改成正常的响应**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779788941717-d49a2e4c-7a16-467f-b68a-17f285e3f8ea.png)**

**正常响应需要先用正常逻辑获得**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779788973887-96f5e455-627e-434c-9613-8419110480cf.png)**

**并把想要修改的 contactPhone 改成想要骚扰的手机号**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779789018947-e7d20d62-17d1-4a77-ad6e-b63cdd2fe04a.png)**

**直接下一步**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779789062655-6d168090-2304-44c9-8e64-902b9f5416c1.png)**

**成功提交**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779807249183-e4725295-4d5e-49e4-81d1-599026d2d365.png)**



**3.修复方案**

**在第二步带上验证码检测**
