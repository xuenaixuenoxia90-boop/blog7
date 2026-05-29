---
title: XXX认证存在一卷通考漏洞
slug: 0097
---
# **XXX认证存在一卷通考漏洞**

**1.漏洞详情**

**在对XXX进行安全测试中，发现在领取证书考试中考试并未与考试问题绑定，通过同一张试卷的答案发不同考试号的包可以直接获得不同的证书，甚至能直接把未经公布的证书考试考满分，并且证书有价值**



**2.漏洞证明**

**来到这个认证界面，选一个证书报名，抓到报名的数据包 1 号**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779785757130-7ecc4ea8-bc8c-48e3-89d8-97f06a35ffef.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779785786816-ce865975-5a24-4bcb-ad41-56eb5ccf0321.png)**

**然后直接考试，抓到考试的数据包 2 号**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779785824149-cccc4f8c-e333-452a-b2c3-ecebae3cd092.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779785845878-225f9709-b3b4-4609-ad67-1cdaf9609ce4.png)**

**问题就出在这个数据包中，考试的 id 和 quenstionId 没有进行绑定，导致一卷通考**

**这里审核直接用我的这个满分 payload 就行，不用自己做了**

**{"answers":[{"questionId":672,"answer":"B"},{"questionId":679,"answer":"B"},{"questionId":643,"answer":"D"},{"questionId":641,"answer":"B"},{"questionId":671,"answer":"B"},{"questionId":676,"answer":"A"},{"questionId":635,"answer":"B"},{"questionId":681,"answer":"C"},{"questionId":670,"answer":"A"},{"questionId":662,"answer":"B"},{"questionId":667,"answer":"A"},{"questionId":646,"answer":"C"},{"questionId":680,"answer":"C"},{"questionId":636,"answer":"C"},{"questionId":638,"answer":"B"},{"questionId":656,"answer":"C"},{"questionId":651,"answer":"D"},{"questionId":653,"answer":"D"},{"questionId":673,"answer":"A"},{"questionId":642,"answer":"A"}]}**

**然后再抓到领取证书的数据包 3 号**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779785886874-75e7dd78-2eda-47f9-ae99-29b70e1d626c.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779785923024-1aa2e9c7-397b-4685-99d1-ef02018b2973.png)**

**接下来，按照 1，2，3 号的顺序把 POST 请求中的考试 id 改成 14就能直接领取 14 号考试的证书了**

**同理能领取 16，17 号考试的证书**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779785951729-83e84a3d-0d86-472b-8a11-b3965fef066b.png)**

**甚至能对未经公布的考试进行报名和考试**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779785967161-d2f41517-852d-40f2-ab8c-6c4f8391655c.png)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786019449-1acd1d1a-fbf0-4298-af14-675bc1ac9614.png)**

**也就是说等证书公布能够直接领取，不管证书是否付费**

**证书是由价值的，只是限制免费：**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779786049437-d6c63999-788c-4c0b-8f12-ed91bb5ff4e8.png)**



**3.修复方案**

**把 questionId 和考试 Id 绑定**