---
title: XXXAPPXXX存在匿名者信息泄露
slug: "0045"
---
# **XXXAPPXXX存在匿名者信息泄露**

**1.漏洞详情**

**在对XXX APP 进行安全测试时，发现其XXX匿名功能点存在信息泄露，通过甚至添加匿名者联系对其骚扰。**



**2.漏洞证明**

**看到别人的匿名评论**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779797395823-22e7904d-2800-4aff-b68c-1507d35b0771.png)**

**抓包，发现泄露了匿名者的 userid**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779797427329-dfc5fec0-20f7-418b-8db4-a6d4a2f5d2fe.png)**

**点击匿名用户的头像发现不能加好友，于是点一下别的没有匿名用户的头像抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779797438049-6a20e8fb-b2d4-4280-93bc-075553a8cf67.png)**

**这里看到 friendId 就是 userid**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779797513092-3b906455-9047-45c7-81fb-0676b2473811.png)**

**于是把 userid 改成匿名用户的，直接看到匿名用户的完整名字**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779797548328-6c6ac9a8-1494-45b8-8f03-c1031965b8f5.png)**

**这里还有一个添加审友的功能点，发送申请抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779797554156-bbf2b4a3-1876-4933-88af-1e47eb2dc35c.png)**

**把 targetUserId 改成匿名用户的，申请请求就有可能被攻击者利用写一下攻击性的语句，攻击这个匿名用户。**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779797577984-714232ae-eb2d-47a0-b62e-2e1fa6b39c68.png)**

**3.修复方案**

**评论处不返回匿名用户的 userid**
