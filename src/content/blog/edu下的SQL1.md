---
title: edu下的SQL1
slug: 0020
---
# **edu下的SQL1**

**前言**

**1、漏洞挖掘一定要细，不要放过每一个角落。**

**2、还有的就是要学会重复挖掘老站，因为每隔一段时间，你的实力和你的思想都是不一样的，回到老站说不定就能挖到新的漏洞。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971380065-21139996-824e-45e3-a51f-8931c1105028.png)**

**SQL**注入一****

**这次的注入在一个"日志查询"的功能，在进行查询的时候，出现了注入。并且我可以告诉大家，在这种功能点很容易出现注入。**

**在AUD_RESOURCE这个参数后面，添加一个单引号，直接返回的是一个空白页面，什么数据也没有，但是在后面添加 ' and ''=' 后就成功闭合，将数据进行完整的返回，因此证明存在注入。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971378286-3f1a34f0-11c7-4d8f-8f73-9ae55adfc062.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971378404-2e678b45-780c-4267-aa93-273c3e93180b.png)**

**证明存在注入之后，还需要SQLMAP进行验证一下，否则edusrc不收取，或者使用sleep函数进行延迟也可以。**

- **** 

**python .\sqlmap.py -r post.txt --batch --dbms 数据库类型 --tamper "space2comment.py" -p AUD_RESOURCE** 

**可以看到这是一个时间盲注。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971378424-ad00f1c9-69b1-49be-8b2f-97b82fa6a797.png)**

**提交后给了四个积分。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971378108-fbc5d018-bca3-42ed-ae74-c50b85b6dd99.png)**

**原本提交这个漏洞后，再摸索一遍，什么也没有然后就走了。但是过了一星期又重新摸回这个站点，于是就有了下面的SQL注入八连杀。**

**SQL**注入二****

**这次的注入点在"账号管理"，点击账号管理的时候进行抓包。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971378652-2c077268-ace3-49d2-8d7a-2183c61d1df1.png)正常情况下，ZHCZLXID参数为空，但是能够成功返回出数据。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971379118-3b1feeed-40eb-4017-b7d0-43f0a3e95c43.png)**

**然后还是习惯性的添加一个单引号，发现只返回了一个{}，情况有变！**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971379406-17db502a-b27c-4432-b2ca-8474dc511a44.png)**

**然后继续尝试进行闭合，使用and ''='进行闭合。**

**发现返回值直接没有了，但是返回值没有，可不代表不存在注入！**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971379487-61e8f1c7-551b-4740-a395-42f318c04aa0.png)**

- **** 

**python .\sqlmap.py -r post1.txt -p ZHCZLXID --tamper=space2comment --random-agent --dbms 数据库类型** 

**可以看到成功跑出来注入漏洞，是个时间盲注。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971379583-167376d8-df62-4d5b-a1ba-6b50388f8762.png)**

**因为是同个系统，并且多次提交同类型漏洞，因此这次只给一个积分。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971379588-cf9cd28b-2878-4115-9f9d-dc40ae30cb22.png)**

**SQL**注入三****

**这次的漏洞出现在某服务的办理。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971379786-8f71a338-3d57-4845-a03c-3f0cbd1d7195.png)**

**进入办理后，发现这里有一个根据时间进行查询的功能，是不是跟上面的第一个注入漏洞一模一样，没错，这里也存在注入！**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971379862-15030833-3389-4b1a-837a-0d2cc1da596e.png)**

**点击查询的时候进行抓包，这是正常情况下的返回包**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971380000-38cfc652-3c61-4c37-a8c2-d5ed1260f63f.png)**

**但是在添加一个单引号之后，直接返回为空，发现存在了返回的变化！**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971380568-80eefad4-c3dd-4a4d-acb8-816b2e00ca71.png)**

**随后使用and ''='进行闭合，发现又成功返回了数据，因此存在注入！**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971380726-31ea0c37-eea7-4bc8-abc7-26cf3e5d14f1.png)**

**然后就丢入SQLmap中进行漏洞验证。**

- **** 

**python .\sqlmap.py -r .\post.txt --tamper=space2comment --dbms 数据库名 -p SQMC**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971380763-774fe369-4e04-4fe1-8812-2fcd54a5984f.png)**

**最后因为多次提交同类型漏洞，也是只给了一个积分。。。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971380502-38500a49-4b19-4844-b4e0-51aa54507825.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971381335-314e8569-26b2-4bda-ba86-f5bf36f98c25.png)**