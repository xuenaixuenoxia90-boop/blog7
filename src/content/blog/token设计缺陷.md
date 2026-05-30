---
title: token设计缺陷
slug: "0036"
---
# token复用

**基本信息**

提交时间：2022-01-25 22:09:12

漏洞类型：默认分类

危害等级评定：无影响 

安全币评定：评定中



**漏洞详情**

1. 漏洞url:

http://XXX.com.cn:9091

1. 我们直接把伪造的token值放进请求头：

eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaXJvb3AiLCJpZCI6IjE0MDciLCJjbGllbnRUeXBlIjoiYWRtaW4iLCJpYXQiOjE2NDMxMTg1MjcsImV4cCI6MTY0MzcyMzMyN30.ne8gxOLhzpuzRpv-g3j_H0SbHCb_9XP5HwBEzeo4BCk

1. ![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779961789249-d9b2690c-39b0-477b-83cb-63c59766d00a.png)
2. 最后直接访问后台界面就能成功进去：

http://XXX.com.cn:9091/ProjectReform/plan

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779961789126-bad5383e-85d4-401d-aa58-a07b1c2e57fa.png)
