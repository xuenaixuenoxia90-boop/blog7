---
title: CatfishCMS 4.5.7 csrf getshell
slug: 0004
---
# CatfishCMS 4.5.7 csrf getshell

## 一、漏洞简介

## 二、漏洞影响

CatfishCMS 4.5

## 三、复现过程

思路：

前台评论出插入xss代码->诱骗后台管理员访问网站-内容管理-评论管理-自动执行xss代码->通过csrf插入一条新文章->通过csrf清除缓存->在通过js访问前端任意页面生成缓存建立shell
大概的想法就是这样做了。

后台创建文章方法

地址：application\admin\controller\Index.php

方法：write();

这个方法没有什么可以讲的只是后面的组合漏洞要使用到他

后台清除缓存方法

地址：application\admin\controller\Index.php

方法：clearcache()

这个方法没有什么可以讲的只是后面的组合漏洞要使用到他

例子：

1，准备好脚本

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978116394-260f992d-ced6-4361-89d4-538068374cf0.png)

2，利用前面的xss漏洞，配合这个脚本形成xsrf漏洞

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978113790-8d8c826c-b757-4d14-ba21-f57cf58658a4.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978112105-78dcaa48-9589-43d7-ab88-3ec1618a8d89.png)

这样我们在前端的事情就完事了。接着我们模拟后台管理员进入后台的操作

模拟的后端管理员操作：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978115302-b4d5a90e-c2fb-4924-a8ba-ff6a0a20797b.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978116345-788c6eb1-cd11-46ee-b1da-bc56f49d81c9.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978116778-9115865d-960e-47db-b940-4d904a39fc39.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978121533-96734bde-fd2a-4004-9d6f-5d5ff0ec60af.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978124391-157625af-61ca-4ed3-99d1-324740d737d2.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978120339-88f3b548-5146-4e55-bb32-5d84cf227441.png)

### 漏洞原理与流程：

1,后台创建文章方法
地址：application\admin\controller\Index.php
方法：write();
这个方法没有什么可以讲只是单纯的从前端获取数据然后写入数据库罢了

2,后台清除缓存方法
地址：application\admin\controller\Index.php
方法：clearcache()
这个方法没有什么可以讲的。只是单纯的删除缓存数据

3,访问前端重新生成缓存
地址： application\index\controller\Index.php
方法：index()

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978121755-e900110a-cac8-42a2-a90a-fccf9018b906.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978124381-6183ddda-622e-4be7-9c9d-c0018ad60e9f.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978125487-98c0efa9-968e-48e1-b7db-a47409e84745.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978126973-ae32d796-7d43-4735-895c-79c0d89039c1.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978126104-9bea12d6-a0a1-4a38-bbb0-174b2c40757c.png)

缓存的名字由来
缓存的名字组成就是比较简单的了。

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978129386-8832ce60-f785-4a10-a6c6-2b9d44c821f6.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978126746-9748722b-8886-4784-b25e-770aa8099581.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978127502-d7c5bb73-ad28-4f27-9671-edcffadcd136.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978127131-5b9e1dd9-ab6e-4b73-95f4-5039ff70e673.png)

这上面几幅图就是缓存的名字了什么意思呢？很简单

首先是从index目录里面的index模块下面的index方法
调用了一个方法
$template
= $this->receive('index'); = index

然后是ndex目录里面的Common模块里面的receive 方法
获取了变量$source 值 = index
获取了变量$page 值 = 1

Cache::set('hunhe_'.$source.$page,$hunhe,3600); 缓存方法
最后就是

MD5(hunhe_index1) = 9040ab6906a15768edcd9e5b1d57fcda

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779978131936-00b84746-1e9c-4234-a291-d9bd583700fe.png)

### 后记：

使用此方法的话，尝试一下在url中输入

http://www.xxxxxxx.com/runtime
http://www.xxxxxxx.com/runtime/cache
http://www.xxxxxxx.com/runtime/cache/8d6ab84ca2af9fccd4e4048694176ebf.php
按顺序输入如果前两个访问得到的结果是403  最后的结果不是403或是404 而是返回正常的页面，那么说明站点的缓存目录是可以访问的，这个时候可以使用此漏洞。配合xss+csrf 获取getshell