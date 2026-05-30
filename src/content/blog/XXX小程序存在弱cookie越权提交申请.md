---
title: XXX小程序存在弱cookie越权提交申请
slug: "0110"
---
# **XXX小程序存在弱cookie越权提交申请**

**1.漏洞详情**

**在对XX小程序进行安全测试时，发现其存在弱 cookie 越权提交申请，通过修改 cookie 让别人的账号申请企业版，给别的用户和工作人员造成大量不便。**



**2.漏洞证明**

**美团主站小程序点这个企业服务**

**点进去申请，抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779792367968-ad9c4cc5-7832-41fd-b434-264bf07ecacf.png)**

**就是这个个人申请的数据包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779792391894-42398c76-30d1-4a41-8171-da8b9b3ee655.png)**

**发现这个在查询当前账号手机号只在 cookie 这个 userid 里面**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779792425951-7d1ede7f-53e9-45c2-85eb-003d2b15e855.png)**

**修改成别的 cookie 越权提交**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779792506948-8272d45e-4a95-4def-831b-72914f9ab80b.png)**



**3.修复方案**

**不要把手机号直接和 cookieuserid 绑一起**
