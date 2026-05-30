---
title: XXX系统存在未授权使用接口
slug: "0105"
---
# **XXX系统存在未授权使用接口**

**1.漏洞详情**

**在对XXX进行安全测试时，发现其平台存在未授权漏洞，可以未授权使用收费体验接口和未授权查询别人报名情况**



**2.漏洞证明**

**未授权体验收费接口：**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779783621482-13ccc917-5e1e-487d-8462-857f7a157276.png)**

**进入时候修改返回，false 改 true![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779783638623-f5808164-889d-4c18-817b-9dfe3b0fcc91.png)**

**可以直接进行体验**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779783663677-a9dd94f0-6c43-453a-b2a3-e5422a4fe8f1.png)**

**可以看到这个接口是收费的，即使是对于结果付费，但是在实际体验中会发现它会和服务器交流并给出建议，能充分证明体验会消耗资源的**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1767530820713-fb6ffb27-5980-47eb-a9d5-48893b85cc13.png)**

**体验时返回临时 aksk![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779783723731-ec090496-d3f3-4f08-849e-bc966d2e1879.png)**

**返回建议和提示**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779783769951-b98c2ac9-901c-457c-8d2f-7fe4902de912.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779783790685-8c96251d-40c6-4618-88fc-fe6f4113e871.png)**

**未授权查询接口：**

**在对 js 进行检查时发现了这样一个隐藏的路由接口/help60**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779783865342-fee7b977-e9a1-4a74-b71a-7b85360fa691.png)**

**随便试试发现可以查询别的考生报名情况**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779783910051-f6e90dec-767e-4609-80f3-6df647a8f43c.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779783935809-e48209d9-f6aa-472a-bbb7-b0ca0738b0d2.png)**

**我主动进行报名，报名之后再去查询，发现可以查询**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779783973396-1a56d0e0-a744-40fc-b663-f429487f75a6.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779784017922-d40905d0-1bc1-457b-b92a-327490101e1b.png)**



**3.修复方案**

**在隐藏路由和相关接口做好权限校验或者增加路由守卫**
