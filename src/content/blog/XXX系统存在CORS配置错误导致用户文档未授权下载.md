---
title: XXX系统存在CORS配置错误导致用户文档未授权下载
slug: 0103
---
**XXX系统存在CORS配置错误导致用户文档未授权下载**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其平台存在CORS配置错误，可以进行对用户的文档进行下载**



**2.漏洞证明**

**注册后点历史文档**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784031789-4a428baf-8f22-422a-a86e-3fe8c040f680.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784072339-06151b5a-2da0-4f75-9eba-3d401adb9ac2.png)**

**更改 orgin,发现能够改成任意 access-control-allow-origin，并且这里有 acess-control-allow-credentials:true，明显存在 CORS 配置错误**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784094011-a4988221-d4d6-4792-aa19-3ea7fc82f7fc.png)**

**（这里改成 test.com)可以看到文章 id**

**下载功能点的请求数据包，可以通过前面的 id 获得这个 result**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784193631-6f996905-2b18-4ebc-ae81-a96ecf963aaa.png)**

**只要拿到 result 在任何情况下都可以未授权进行下载，因为下载的这个请求是不需要 cookie 或者任何凭证信息的**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784224059-d504b34c-bb26-4c1d-a8db-89eeb0e1294e.png)**

**3.修复方案**

**修改 CORS 的配置错误**