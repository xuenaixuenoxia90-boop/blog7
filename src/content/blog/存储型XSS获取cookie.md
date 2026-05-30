---
title: 存储型XSS获取cookie
slug: "0132"
---
# 存储型XSS获取cookie

两处存储xss



1. 点击剧本平台验证码登录，然后进去后想要填一些信息，填完就会出现一个新增线上剧本功能点按图所示点击超链接插入payload点击保存然后鼠标放上面就会触发xss

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979055547-39e28350-8095-481a-90cb-7aee6f407913.png)



会来到该界面

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979055553-3c935e5a-fcc1-44ae-ba5c-1cbb7c3272a2.png)

1. 角色信息的角色剧本

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979055439-5e073e19-5224-4ff1-8aa1-45fd5d90f0ca.png)

直接插入payload

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979055449-0f2ce674-6897-4ca1-91af-d54666d51aba.png)

2.主持人处



![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979055595-fe860fc1-175b-4397-a8ad-c205d85f7acb.png)

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979056149-858926c4-414f-465f-baf5-71f2f7cfaed4.png)

3，提交审核打审核账号cookie / 因为该处商家也是可以观看然后购买进店的同理可打商cookie

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979056121-8e52375f-3049-4436-af42-3d7419edc75c.png)
