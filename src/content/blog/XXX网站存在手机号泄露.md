---
title: XXX网站存在手机号泄露
slug: "0100"
---
# XXX网站存在手机号泄露

1.漏洞详情

在对XXX进行安全测试时，发现其平台收货人手机号存在前端加密，后端可以直接查看。



2.漏洞证明

收货地址界面刷新抓包

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779795393465-489a8f64-e6fe-47b0-9988-8cbef2866579.png)

抓包看到收货人的完整手机号

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779795413681-46ed1c42-4d3e-488b-b9dd-ed8ffe5b14a1.png)



3.修复方案

后端不返回完整手机号
