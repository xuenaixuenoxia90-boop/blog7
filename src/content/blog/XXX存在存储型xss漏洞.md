---
title: XXX存在存储型xss漏洞
slug: "0063"
---
# **XXX存在存储型xss漏洞**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其存在存储型 xss 漏洞，能够对身份凭证进行劫持**



**2.漏洞证明**

**添加文件上传 xsspayload**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787010471-f2193b15-03c4-46ea-aeea-5d9e202cc1ca.png)**

**对话后点击 payload 成功触发**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787021506-65f1aacf-bbf3-440a-9f25-3496b02c9b4a.png)**



**3.修复方案**

**对 pdf 文件进行检测，禁止 javascript**
