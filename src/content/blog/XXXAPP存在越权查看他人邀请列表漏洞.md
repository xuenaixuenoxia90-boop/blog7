---
title: XXXAPP存在越权查看他人邀请列表漏洞
slug: "0048"
---
# **XXXAPP存在越权查看他人邀请列表漏洞**

**1.漏洞详情**

**在对XXX APP 进行安全测试时，发现其存在越权查看他人邀请列表漏洞，攻击者可以获取邀请人的完整邀请列表甚至可以通过遍历短token 获取全站邀请列表。**



**2.漏洞详情**

**漏洞存在位置在XX APP 我的这个员工招聘这里**

**选择邀请他人，可以看到这里查询了当前账号的邀请 list**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779796773011-c08641d6-d6ed-4080-86ba-7c7e22c97606.png)**

**抓到这个查询的数据包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779796810584-c8a1ce80-f7a8-4bd2-8a11-36b0f8b0de7e.png)**

**删掉所有身份凭证发现任何无鉴权，即可查询，显然存在越权漏洞，只需要别人的 inferMobileToken 即可实现越权查询，而且这个token 可以进行全站遍历**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779796865875-65044006-9cde-49ce-84b2-1d2fd4c54994.png)**

**那么现在需要得到别人的 inferMobileToken，选择邀请好友报名**

**然后在电脑微信端点开这个公众号**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779796903433-45244df0-1279-4c89-ae1c-89e4d9e0d2cc.png)**

**投递岗位的时候看到邀请人的加密手机号，抓包**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779796925870-73b80a25-7936-434f-b686-5946bbd46be1.png)**

**发现如下数据包，泄露的邀请人完整的 mobileToken,复制**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779796978287-4d155847-6c2c-48a2-8b7e-72eb03d2b70c.png)**

**成功越权查询到邀请人的完整邀请列表**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779797015359-ba212875-dc3b-4de9-a7f0-6e3ec93202d4.png)**



**3.修复方案**

**查询数据包/api/emporg/empRecruitmentHitTService/queryRecommendationRecords 需要进行鉴权，至少要带上 token 和手机号对应**
