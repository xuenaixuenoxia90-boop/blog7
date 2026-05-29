---
title: 越权+SQL
slug: 0186
---
**系统登录页面，找到某条js，js中带有部分路径，加入userid=参数，可以发现该参数存在sql注入，以及后台接口可以被越权利用**



**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964859314-2ffeeda5-e0f7-4183-a2b0-c7316670ef29.png)**



**接口手工测试，这里可以看到我加入单引号，系统显示空白，字节数变少了**



**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964859379-aae6358a-4638-4bb4-a043-6a608f80cf24.png)**





**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964859457-6d15bd48-682e-4969-878f-ab68cde8dbb0.png)**

**正常访问接口可以看到存在返回数据的**



**在测试and**



**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964859446-10afdbd0-e840-4a53-a4df-118ebfd109fe.png)**

**测试and 没法判断出是否存在注入**



**了解到系统是jsp那么jsp常用的数据库就是Oracle**



**用了Oracle语句**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964859521-854a097a-36ed-443f-a808-4bb5a458c6d8.png)**