---
title: edu下的逻辑缺陷
slug: "0023"
---
# edu下的逻辑缺陷

XXX平台存在逻辑缺陷，可越权访问其他用户敏感信息

URL：https://XXXedu.cn/login.aspx

202103120201 / 123456

登陆后在个人中心可查看个人信息

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970862521-5c3ef2ae-b777-4445-82d6-448b6f954228.png)

开启bp拦截，刷新页面，修改webUserName（用户名）参数，可越权查看其他用户个人敏感信息

这里将202103120201改为202103120202

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970862764-0c5f6b86-b9b6-49f7-aa5d-2a3c9f425b5d.png)

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970862729-2bd6b2ac-a4bb-42a6-94f0-d5ea6dc917a5.png)

成功越权
