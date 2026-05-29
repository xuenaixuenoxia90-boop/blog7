---
title: XX邮箱附件上传html存储xss
slug: 0121
---
# **XX邮箱附件上传html存储xss**

**XX附件上传html存储xss**

**formaction事件是没有被过滤的**

**但直接插入不行**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965361268-80b94d9e-7957-41d5-bdcf-c3839babfbbb.png)**

**我们包裹img标签，直接插入也不行，**

**经过几天的挖掘发现，</:>会变成注释，在拼接在一起.**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965361786-bead8977-e644-4d4b-aeaa-d32baa415cb6.png)**

**</:> 会注释。那么本地构造个poc**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965361786-ab5c51c0-cc7c-40a6-b15f-246da6b3f7b4.png)**

**</:>变成注释就会执行后面，进行拼接**



**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965361550-78379b57-eba8-4b01-958c-6bce3735020d.png)**

**最终poc：<img src=http://www.baidu.com x=”⋌”  </:>1><</:>button formaction\=alert(1)<">M<<br>**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965361666-19218b8f-f120-43f4-94e9-d2ffe70167fa.png)**