---
title: XSS上传执行
slug: "0043"
---
# xss上传

1.https://XXX.com/#/incomeCenter?type=incomeSet

点击上传身份证并抓包![img](/proxy/https://cdn.nlark.com/yuque/0/2026/jpeg/60657001/1779964531087-54effdc6-3899-40a3-a475-6e714096361e.jpeg)

2.选择上传html文件，对后缀没有过滤，返回包返回上传文件的地址![img](/proxy/https://cdn.nlark.com/yuque/0/2026/jpeg/60657001/1779964531237-660f911b-4b3f-4707-a213-ac6187e9271e.jpeg)

3.打开，发现html文件成功被解析，执行xss

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/jpeg/60657001/1779964531048-11a2a6ce-73b3-4fad-8142-1281c6be707e.jpeg)

iQIYI Security Response Center
