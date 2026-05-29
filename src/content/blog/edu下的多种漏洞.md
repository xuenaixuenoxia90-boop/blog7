---
title: edu下的多种漏洞
slug: 0021
---
# **edu下的多种漏洞**

**第二套系统 ：任意用户注册&sql注入&存储XSS&未授权访问+验证码爆破->任意用户密码修改（八所学校，包括证书站和北某大学）**

**拿到系统 一个登录窗口，没有直观的注册功能，可能存在的漏洞点：弱口令，登录框sql注入(能遇到真的是天选之子) ，忘记密码逻辑缺陷 ，翻js可能存在注册功能，未授权访问。![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971567190-1605ea70-a84e-4211-9c7a-deb36fa56b6c.png)**

**弱口令和sql注入我这种倒霉蛋就别想了，测试忘记密码功能点：![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971567496-888b7bc8-0d37-48ed-823e-cc0848f7d4d3.png)**

**尝试burp修改响应包绕过验证  前端返回成功 但是处理部分是在后端一步完成的 验证码实际没有发送，无果。![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971566315-e68a6c00-e7c4-4dd8-9f07-e4fe3d8014d3.png)**

**去网络空间搜索引擎看看是不是通用的系统，发现有其他学校在用 lucky 发现一个学校 写了默认账号密码![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971566078-7795f9b2-a68f-4a92-95a2-952c8689b8cb.png)**

**登入后学生账号功能点很少，只有上传头像处可以上传html文件存储XSS +1**
**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971564003-b7f0b60c-76f8-4863-b425-354bbf89956a.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971566068-b8819313-52bb-4869-b67f-27aec27f7314.png)image.png**

**虽然才1rank 但是是通用系统，加起来 = getshell  ^ 就这点rank还得写一个个报告那太亏了，继续测试**

**网络空间搜索引擎中找到了一个用户个人中心，是企业的域名 ui和学校的ui很相似，看起来是一个让用户体验的系统，很明显很大可能就是供应商。![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971567271-c36e78c9-9f1b-4ec4-bb35-720ce6d265f1.png)**

**找到了供应商的注册功能点，注册一个账号![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971567537-633eb0c1-ef93-4c3b-9820-c983b2d93399.png)**

**提示注册成功，去看burp流量包发现了一个敏感参数![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971567561-53e41032-31a2-49a4-ad16-c0519ac08d2f.png)经验丰富的师傅已经知道在注册功能点出现这个参数意味这什么了 将这个参数改为1重新发包注册一个账号，直接登入到了供应商后台![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971568578-95f96623-fdc4-457a-93f9-af2479693c0f.png)这里就有了所有学校用户的信息，找到管理员账号和手机号，配合上面的找回密码模块爆破四位验证码 任意用户密码修改 +1![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971568405-f179e2cf-a624-43f5-a593-65103b343d1f.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971568618-551264b4-54c0-471d-a4ed-9a5dc7be44e4.png)image.png![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971569171-a2ad7487-3964-43ca-b953-8416712f673d.png)image.png**

**后台找到了一个有意思的页面, 写了系统的全部接口，全部扣下来跑下未授权岂不是美滋滋![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971569729-f62c7b66-fb43-4944-90bf-899e422c6feb.png)可惜返回包不是json还不是一页全部回显，这种得写个爬虫，为了rank！冲![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971570166-5b10a858-9c64-4a9e-88cd-62e6ac2903bc.png)结合chatgpt写的，成功全部爬出（gpt确实好用）![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971570267-5089b790-20b9-47af-aa8a-818461b91493.png)用burp插件跑一下，成功跑出来了很多未授权![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971571415-38ae6291-c4ba-40b2-9d2a-30e983b248b5.png)![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971570363-94d9f288-b8e3-4702-8f06-55debe75d747.png)![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971571011-8713fbc3-3f95-49df-b706-a2e042b40d18.png)![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971571784-62426c8e-fcd2-4622-8a35-b5291434d82b.png)支付设置！（后来看到这个系统是卖测评的每日流水3000+）给黑灰拿到就惨了![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971571637-669643d7-ec43-42e0-9bc5-d9e19fe31981.png)**

**然后就去后台点点点，然后去burp翻数据包，看看哪些地方传参了 测一测。![img](https://cdn.nlark.com/yuque/0/2026/jpeg/60657001/1779971572163-edd04dec-d617-4785-b77c-36cb47e53fd8.jpeg)**

**![img](https://cdn.nlark.com/yuque/0/2026/jpeg/60657001/1779971572170-bca66c65-4d8d-447d-83f2-291dba790364.jpeg)堆叠延迟注入+1**

**1';**
**if(1=(select%20is_srvrolemember('sysadmin')))%20WAITFOR%20DELAY%20'0:0:4'--`**



**这个注入语句是查询该数据库权限是否为高权限，如果不是的话延时4s，如果是的话可以getshell，可惜不是，但是是sqlserver数据库是有办法提权然后shell的。 因为是在hw休息的时候挖的，有点累了就没搞了，后面回头再想搞的时候已经修了。。。**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779971572262-316f7ede-b3bb-409e-95ca-095b240dc9df.png)这套系统学校少但是洞多，刷了70分左右，总结一下  当在一个站点没思路的时候看看能不能从通用的其他站点或者供应商下手。**

**感谢各位师傅能看到文末，觉得写的不错的话可以点个关注，因为最近在学习代码审计相关的内容，后面也会常更新，黑盒真是坐牢～**