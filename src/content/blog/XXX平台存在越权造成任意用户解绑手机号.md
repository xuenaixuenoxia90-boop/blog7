---
title: XXX平台存在越权造成任意用户解绑手机号
date: 2026-05-17
cover: "https://pkq1.qzz.io/file/1779203112196_gallery.png"
description: 在对XXX平台进行安全测试中，发现其更改手机号功能存在验证码爆破，会覆盖别的用户手机号，进而使受害者无法登录账号
---

## 1.漏洞详情

**在对XXX平台进行安全测试中，发现其更改手机号功能存在验证码爆破，会覆盖别的用户手机号，进而使受害者无法登录账号**



## 2.漏洞证明

**随便注册两个账号 A，B**

**A点击修改手机号，把自己的手机号换成 B 的**

![image-20260517080303933](C:\Users\yexin\AppData\Roaming\Typora\typora-user-images\image-20260517080303933.png)

**点击抓包进行爆破**

![image-20260517080649596](C:\Users\yexin\AppData\Roaming\Typora\typora-user-images\image-20260517080649596.png)

![image-20260517080723310](C:\Users\yexin\AppData\Roaming\Typora\typora-user-images\image-20260517080723310.png)

**原来 B 的账号是这个**

![image-20260517080806964](C:\Users\yexin\AppData\Roaming\Typora\typora-user-images\image-20260517080806964.png)

**成功绑定他人手机号后点击账号管理发现多出来一个号**

![image-20260517080926764](C:\Users\yexin\AppData\Roaming\Typora\typora-user-images\image-20260517080926764.png)

**点击解绑就能实现把他人的手机号和他人的账号解绑了**

![image-20260517080906800](C:\Users\yexin\AppData\Roaming\Typora\typora-user-images\image-20260517080906800.png)

## 3.修复方案

**限制手机号只能注册一个账号**
