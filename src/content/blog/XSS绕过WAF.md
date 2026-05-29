---
title: XSS绕过WAF
slug: 0041
---
# XSS绕过WAF

## Waf拦截图

## ![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979006552-d913be5c-79da-417f-b44b-d4c1d6dfe5ee.png)

## 复现：

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979005735-83a0c7e8-751c-4c5d-8c3e-d15cf1fc99df.png)

点击发私信，上传一张图片然后登上传成功，在点发布抓包将image_url替换成构造好的poc:

javascript:window['al'+'ert']('xss')



![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979005987-aad13a2c-dc23-4b09-8392-ddd20f7b7d26.png)

成功绕过

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979006565-6f77813e-c743-4570-9ecc-bf94cab5e69c.png)

我们看看效果

点开私信

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979006522-54c3d55a-9293-4e4e-bd75-4457369efeea.png)

弹出

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779979006256-a8971e51-35ef-4cc5-83d5-b9405af85cb0.png)