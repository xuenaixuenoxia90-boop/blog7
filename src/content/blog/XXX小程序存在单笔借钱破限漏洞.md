---
title: XXX小程序存在单笔借钱破限漏洞
slug: 0107
---
# **XXX小程序存在单笔借钱破限漏洞**

**1.漏洞详情**

**在对XXX小程序进行安全测试时，发现其存在前端绕过漏洞，突破了对单笔借钱最大限额。**



**2.漏洞证明**

**借钱这里根据对信用平分之后显示最大可借额度是 2000 块**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779792191735-e579bcce-64aa-41c3-a2c4-e03e103b0ceb.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1774796906623-ab94ab2f-8a40-4579-9015-56fbf54f7566.png)**

**点确认抓包**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779792224328-7afe2948-6faa-4f75-9a4b-c81222fade4a.png)**

**发现这个数据包把 loanAmount 改成更大的数字也能生成订单**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779792282224-21f2ad1e-3d03-4abf-b843-a57c9746d89c.png)**

**自动替换跳过心跳检测**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779792288678-ae4ab490-838d-4894-8541-9a79858a61de.png)**

**成功破限借钱**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779792315578-29ec3abc-9a7b-4fa7-91a9-5dd2b3a54d09.png)**



**3.修复方案**

**后端限制 maxloanAmount**