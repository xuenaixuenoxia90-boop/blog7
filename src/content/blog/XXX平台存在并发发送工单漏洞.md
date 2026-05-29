---
title: XXX平台存在并发发送工单漏洞
slug: 0088
---
# **XXX平台存在并发发送工单漏洞**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其平台存在并发漏洞，可以突破用户审核限制，能给工作人员造成严重工作负担**



**2.漏洞证明**

**首先注册一个XXX用户，并实名注册**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784266233-9ffb648f-b512-42ba-a4da-5c37b1fa3354.png)**

**点这个合作咨询**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784282946-8cad7e82-f427-4d88-89b5-53369f77c844.png)**

**创建一个应用，点这个交互管理**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784305704-c5e0ea78-9c89-4529-aa63-8164208bc8ec.png)**

**抓审核上线这个数据包**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784328640-df0efbd4-223e-48cb-bd37-5a8d17f26941.png)**

**成功利用 turbe 插件并发 30 次**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784374738-43d2e3a0-4abc-4e31-9c29-fce8cdcc4ca2.png)**

**严重突破一天 30 次的限制**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784400288-4a9c01a2-4227-4fc9-a476-7218b9e80996.png)**

**为了证明其确实成功提交审核，需要创立超过 5 个的应用**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784414232-cc1cb765-313b-4771-b272-351e0d9cd66c.png)**

**复制他们的 appid，然后同时发出**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784458174-b1051841-585f-48c4-91ad-cb58a324733a.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784484659-84d2a4e4-267a-4a26-afc1-f18e4a488caa.png)**

**由于没有审核应用界面是这样的**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784527947-ddadf8ad-0879-436d-8df4-645a09370b6f.png)**

**而看到刚才超限并发的任何一个应用的界面都是提示等待审核**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784544168-97c94f44-f136-473b-b196-5d040ace0b2a.png)**

**说明并发成功**



**3.修复方案**

**用工单 ID + 用户 ID 生成 key，加 5 秒缓存锁（Redis / 内存都行）同一工单同一人，5 秒内只允许一次操作**