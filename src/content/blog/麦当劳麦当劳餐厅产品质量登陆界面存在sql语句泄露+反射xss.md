---
title: 麦当劳麦当劳餐厅产品质量登陆界面存在sql语句泄露+反射xss
slug: 0151
---
# **麦当劳麦当劳餐厅产品质量登陆界面存在sql语句泄露+反射xss**

**处理进度**

- 审核中
- 已确认
- 已修复
- 已忽略

**基本信息**

提交时间：2022-01-25 18:34:29

漏洞类型：默认分类

危害等级评定：无影响 

安全币评定：评定中

**漏洞详情**

漏洞url:

https://XXXcom.cn/index.php/admin/login

1. 登陆处账号填写xss语句点击登陆，不仅会返回xss代码，而且还会泄露sql语句
2. xss语句：![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779961884746-d24dc318-af04-4185-ac69-eff6bd1dc682.png)
3. ![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779961884790-5b23f513-6a94-402b-927f-38320143fd7c.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779961884814-6bd892a1-1abf-4bcc-82e2-74ae522e8d5f.png)![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779961884870-e27bb1fe-ca95-4edd-804d-dca7a11f9c78.png)