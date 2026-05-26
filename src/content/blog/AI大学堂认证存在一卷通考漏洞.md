# AI大学堂认证存在一卷通考漏洞

1.漏洞详情

在对 AI 大学堂（https://www.aidaxue.com/）进行安全测试中，发现在领取证书考试中考试并未与考试问题绑定，通过同一张试卷的答案发不同考试号的包可以直接获得不同的证书，甚至能直接把未经公布的证书考试考满分，并且证书有价值



2.漏洞证明

来到这个认证界面，选一个证书报名，抓到报名的数据包 1 号

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1772179081392-2e06164a-e72c-42b3-914d-5fa2a67efe2a.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1772179196178-51b64ac5-668c-4db7-acb7-406c1918c2b1.png)

然后直接考试，抓到考试的数据包 2 号

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1772179125112-0cb3f500-cbcd-4166-8f53-5475b377fa9f.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1772179231374-c5b9dc2e-4709-47bf-975e-f510314d68fa.png)

问题就出在这个数据包中，考试的 id 和 quenstionId 没有进行绑定，导致一卷通考

这里审核直接用我的这个满分 payload 就行，不用自己做了

{"answers":[{"questionId":672,"answer":"B"},{"questionId":679,"answer":"B"},{"questionId":643,"answer":"D"},{"questionId":641,"answer":"B"},{"questionId":671,"answer":"B"},{"questionId":676,"answer":"A"},{"questionId":635,"answer":"B"},{"questionId":681,"answer":"C"},{"questionId":670,"answer":"A"},{"questionId":662,"answer":"B"},{"questionId":667,"answer":"A"},{"questionId":646,"answer":"C"},{"questionId":680,"answer":"C"},{"questionId":636,"answer":"C"},{"questionId":638,"answer":"B"},{"questionId":656,"answer":"C"},{"questionId":651,"answer":"D"},{"questionId":653,"answer":"D"},{"questionId":673,"answer":"A"},{"questionId":642,"answer":"A"}]}

然后再抓到领取证书的数据包 3 号

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1772179411924-1e9632bb-fa6c-4574-bee3-9fcaf5b6ba8f.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1772179451723-6f21e53f-5509-4e9c-b4d4-225c0a3dc5aa.png)

接下来，按照 1，2，3 号的顺序把 POST 请求中的考试 id 改成 14就能直接领取 14 号考试的证书了

同理能领取 16，17 号考试的证书

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1772179662537-162e9e23-24fa-495f-a509-981832a910b8.png)

甚至能对未经公布的考试进行报名和考试

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1772179734827-f7f8612e-eec3-4e9c-890d-0ca07c797ba1.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1772179748526-20faddc1-1c1b-40b6-9cce-7e380fe7dace.png)

也就是说等证书公布能够直接领取，不管证书是否付费

证书是由价值的，只是限制免费：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1772179860846-2344e7c0-0ec3-4f03-af82-cae078ec94b9.png)



3.修复方案

把 questionId 和考试 Id 绑定