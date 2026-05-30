---
title: XSS上传html
slug: "0042"
---
# XSS上传html

首先让你进行机构的基本信息填写，存在文件上传。

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779962113464-9c4368cd-5182-40e2-acd5-21d801fa0eeb.png)

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779962113902-6bc6f181-5170-44d6-a239-6b1277d2f8cd.png)

2.随便选择一个图片点击上传。抓包。发现文件名后缀为空，看返回包中显示的是上传的png格式，我们把 filename后面加上 html后缀，并且插入xss语句：<sCript>alert(1)</scriPt>;，放包。

3. 

4.![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779962113710-6e4e3b46-5f88-4535-956e-28132bcd74d6.png)

5.![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779962113871-4a550da6-81e5-4ab2-b186-f98027b5696b.png)

6.成功造成储存xss.

7.![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779962113658-226d8fe5-b7e8-4456-8f67-435bd2f9acc5.png)
