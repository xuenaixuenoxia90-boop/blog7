---
title: XXX平台存在短信轰炸漏洞
slug: "0092"
---
# **XXX平台存在短信轰炸漏洞**

**1.漏洞详情**

**在对XXX进行安全测试中，发现通过绕过图形验证和爆破参数，可以实现对目标手机号的爆破**



**2.漏洞证明**

**注册账号后点击这个获取验证码抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779785330602-874b70be-74b3-45b1-b39e-74d54bde7206.png)**

**把&X=126&Y=5 这个图形验证码删掉就能绕过验证码**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779785360313-5a82d19d-4ee2-4964-94f9-3ce5fe01d3fc.png)**

**爆破 loginName 这个参数**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779785396271-66b9fe0a-a61e-4ec7-bb3e-aeaf0bb59a3a.png)**

**成功对目标手机号短时间爆破**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779785425071-60bf4674-325f-4907-803a-457ee9d6eacc.png)**

3. **修复方案**

**加强图形验证码的校验使其不能通过删除参数成功**
