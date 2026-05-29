---
title: XXX存在提交审核xss
slug: 0072
---
# **XXX存在提交审核xss**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其存在提交审核存储型 xss ，一旦审核打开恶意 pdf 文件，即可对身份凭证进行劫持**



**2.漏洞证明**

**创造一个设备，提交审核时上传恶意 xsspdf**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779788577932-65cf34c0-8a93-44a4-99d3-09c4c25a7d49.png)**

**只要审核点击文件的在线预览，即可触发漏洞**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779788588563-c3b1a87d-d3f4-40d4-a78d-17e3f8dd347b.png)**



**3.修复方案**

**对上传 pdf 文件禁用 javaScript**