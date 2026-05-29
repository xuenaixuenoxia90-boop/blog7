---
title: XXX网站存在pdfxss
slug: 0098
---
# **XXX网站存在pdfxss**

**1.漏洞详情**

**在对XXX进行安全测试时，发现存在人工客服帮助页面存在 pdfxss，通过给人工客服提供不安全的文件，客服点击后即可造成危害。**



**2.漏洞证明**

**人工客服这里，提交恶意 pdf 文件**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779795059376-b3bb170b-4f39-45d9-b36e-93c5efe9c6c0.png)**

**点击弹窗**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779795066664-26a5486a-13bc-4463-a265-640b61063c20.png)**





**3.修复方案**

**禁止文件使用 javascript 等语言。**