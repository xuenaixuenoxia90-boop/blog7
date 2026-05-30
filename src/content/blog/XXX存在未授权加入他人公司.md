---
title: XXX存在未授权加入他人公司
slug: "0074"
---
# **XXX存在未授权加入他人公司**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其存在接口未授权漏洞，攻击者在未被邀请的情况下加入他人的公司**



**2.漏洞证明**

**首先创立 A，B，C 三个账号后申请免费企业用户**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786486202-af975e4d-b5f3-4244-b080-bc91f177d4dd.png)**

**点击企业管理**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786504860-080ff23a-c8dc-460d-bef7-612e4fc57a78.png)**

**点击这个 A 账户的链接邀请**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779805865258-073884a6-efb3-4d5b-bcc3-d27838f2d678.png)**

**然后在 B 账户浏览器里面打开这个链接，拦截抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786555675-b710a74c-e1ed-42ed-853c-1ecb27fd98b0.png)**

**抓到这个数据包，发现这个 enterprisedId 没有任何鉴权**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786625377-03ce5bc7-4875-49ed-93da-6a133c903ec9.png)**

**改成 C 账号的公司 Id 也能成功**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786651993-cfebcc70-5722-4476-847f-15c3dab6c947.png)**

**直接未授权加入**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786671264-5ed75224-49a0-4209-947c-ce1cc5b85e12.png)**



**3.修复方案**

**把邀请链接加入创立者的公司 ID，邀请时进行鉴权**
