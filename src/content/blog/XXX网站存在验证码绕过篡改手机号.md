---
title: XXX网站存在验证码绕过篡改手机号
slug: "0101"
---
## **XXX网站存在验证码绕过篡改手机号**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其平台修改手机号功能点存在逻辑绕过，在未收到原有手机号验证码的情况下修改手机号。**



**2.漏洞证明**

**修改手机号，输入任意验证码点下一步抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779795205804-ccfde72a-1a2b-4842-91f6-82b07ca3539f.png)**

**这个数据包把 false 改成 true,40040410 改成 0**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779795233825-f6949023-6c2e-441c-9e13-f23dc99f74bf.png)**

**绕过直接下一步修改**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779795253263-ad6c54c7-8ce9-49d1-8342-2ec0cf60ddb4.png)**

**直接成功**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779795262664-21bd8064-ca69-4729-a2a0-d9ebea6a8de0.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779795325973-2a60b40c-75c2-4314-8c94-1697a4a1ea88.png)**

**后续我发现这里其实是要二次校验的，但是 token 为 null 照样可以更改手机号**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779795345240-babe15b4-3e02-42dd-81fb-24b2505a7703.png)**

**3.修复方案**

**二次校验中 token 进行鉴定，不能直接 null 就过了**
