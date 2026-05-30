---
title: cookie弱验证
slug: "0008"
---
# **cookie弱验证**

**首先访问主页，然后在查看返回的数据包，正常访问这个系统页面，是需要登录后才能够正常访问**



**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965379186-5490944f-3e8f-4d60-bfa9-f0659071d86d.png)**



**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965378969-5cd7f48c-2dc8-4e62-b8a9-c534e30036a0.png)**



**可以看到返回包是跳转到 login.php 判断你没登录这时候只需要添加一串cookie的username验证用户名验证即可任意登录**



**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965379073-79850674-f785-40a1-9caa-4126a73dcfbc.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965379304-75cb8607-a408-4140-b600-60e57ce6a59f.png)**
