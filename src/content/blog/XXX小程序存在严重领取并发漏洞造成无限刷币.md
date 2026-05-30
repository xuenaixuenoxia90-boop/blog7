---
title: XXX小程序存在严重领取并发漏洞造成无限刷币
slug: "0115"
---
# **XXX小程序存在严重领取并发漏洞造成无限刷币**

**1.漏洞详情**

**在对XXX小程序进行安全测试时，发现其平台存在领取并发漏洞，可以并发领取币（百个币相当于一块人民币），注销后币没有消失但是奖励刷新，利用这个办法可以进行无限刷币，造成严重财产损失，危害严重请尽快修复**



**2.漏洞证明**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784580875-9c2716d2-619f-4555-82cb-d950cd239828.png)**

**注册后领取抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784606669-049f8f09-70b0-46a1-8a97-c47086f48f7a.png)**

**发给 turbo 插件并发**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784644694-c1b39ae6-f84a-4050-aaa6-bbce34b61969.png)**

**同样的，对于完善用户信息和添加学习顾问也是同样的完成后点领取抓同样的包/market/vip/receiveCoin?c=3.0 进行并发**

**发现成功并发领取币**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784694361-27cead8d-aa3c-4a78-b873-da1eadfa45de.png)![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784713652-0155be0a-e92c-42c2-9376-5d7d6da67b0d.png)**

**这个币有价值的**

**注销后出现 bug，原来的 2000没有变没，并且奖励还刷新了！**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784888640-56e8bc64-a431-4c3b-ab27-950eddf638d5.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784820525-9b5f4b13-c12d-421e-8049-6afa71703d62.png)**

**继续按照刚才的办法并发，成功再次刷币**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784836750-bd8aab62-cec2-4b77-909a-8eee6afe9d97.png)**

**再次注销后发现飞飞币没有并没！说明每次注销账号只扣除正常领取的 900 飞飞币，并且奖励会刷新！通过这个办法可以无限刷币，危害及其严重，请立刻修复！**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784872414-957df91f-7098-4ddd-9c73-caa83531e717.png)**



**3.修复方案**

**用领取单 + 用户 ID 生成 key，加 5 秒缓存锁（Redis / 内存都行）同一工单同一人，5 秒内只允许一次操作**
