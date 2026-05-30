---
title: XXX存在并发破限生成PPT漏洞
slug: "0058"
---
# **XXX存在并发破限生成PPT漏洞**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其由于先生成 PPT后扣除XX值，而生成 PPT 的时间有足够长的时间空挡可以并发，破限生成大量 PPT，造成财产损失**



**2.漏洞证明**

**首先选模板后生成提纲**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787440544-6f1616f7-da4a-4a91-9d39-f13ab6eca3d3.png)**

**然后点击生成 PPT 拦截抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787448315-d1f34f8f-da58-42e5-b8ff-1e654375d1a7.png)**

**把这个包扔到重放器里面，拦截的这个数据包必须丢弃**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787492949-f6e57016-79c6-4e19-9a34-763b2e173d35.png)**

**重复以上操作多次上述操作，然后并发在重放器里面的数据包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787521222-6c0ce46f-31e4-43c5-946b-209112eb5c80.png)**

**就会发现所有并发全部成立，这是因为先生成 PPT后扣除星火值，而生成 PPT 的时间有足够长的时间空挡可以并发**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787551021-8b1c16c3-7dfc-4b0a-a92e-127e4d192c66.png)**

**每一个 PPT 都能正常查看**

**原来我的XX值是 30，并发 8 次每一次 PPT XX值是 7，直接水掉了 26 个XX值**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787607261-d42cb79c-eec5-4c8e-b66f-fcbbde0647cb.png)**



**3.修复方案**

**先扣XX值，再生成 PPT，防止时间差**
