---
title: XXX存在文件覆盖漏洞
slug: "0076"
---
# **XXX存在文件覆盖漏洞**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其 AI 生成 PPT 接口存在文件覆盖漏洞，可以对别人生成的 PPT 进行覆盖，并且对方无法查看、下载自己的 PPT。生成 PPT 是需要星火值，造成财产损失**



**2.漏洞证明**

**首先创立 A，B 账户，A 账户生成任意 PPT，抓包拦截**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787204182-bf14e3d6-a6d9-4a29-a189-035c0fa3f0af.png)**

**正常生成提纲的数据包是这样的，recordId 为空**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787231955-50536b58-3b76-4a83-ab23-c1cc0896c32d.png)**

**这个是利用 AI 生成的 PPT，注意这个 URL 里面的 recordId**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787281129-17271cc2-797b-43f9-a7a1-b53042ad21e0.png)**

**在 B 账户复制相同的 url 访问点击，再生成一篇，拦截抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787297317-c4f528a7-d1ec-4724-baa7-8040311991df.png)**

**发现这个数据包，这里请求中带着 recordId，但是这个 recordId 应该是返回给我们的，接口不应该设置这个 recordId，就是这个地方造成了 B 账户覆盖 A 的 PPT**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787334594-4aa3e6c7-431c-4f7e-a2e4-10d54b69b2a2.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787380336-5bc976da-1436-4600-aeb7-a1d7966bd513.png)**

**访问 A 账户的 PPT**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787367357-2d06ba94-9611-4a16-8412-8423f9eb1d39.png)**

**直接弹出 PPT 不存在**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787356288-34dfeadb-117a-4c0e-bc98-e037c6333f06.png)**

**通过这个接口遍历 recordId 的后面 20 位即可实现全站 PPT 覆盖空文件**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779787408535-8b1e3ab4-de5a-434e-99ca-7a475327956c.png)**



**3.修复方案**

**把/api/spark/ppt/gen/create/outline 的 recordId 删掉**
