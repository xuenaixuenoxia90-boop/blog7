---
title: SQL绕过WAF
slug: 0033
---
# SQL绕过WAF

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965402863-7f17c9e2-31fe-4884-9192-8accbd151b55.png)



单引号请求报错了

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965402612-014a72f2-f353-4cf0-b4f5-4d6699bbd21c.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965402801-1fccb2cc-d797-406f-ad95-953277864337.png)



上面两个图片可以看到单引号双 = 正确  单引号单位数=错误



这里很明显是 jsp+Oracle的才会出现这种规则



但是我测试 and它是直接无网络访问，



![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965402689-9aed45c3-f00c-4721-b6cc-c480d6941ea2.png)



这里是有防火墙的应该是



在扫到了一个深信服的登录



用协议未覆盖绕过WAF

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965403134-0bdd60cc-b9e7-4ba0-a102-55ec11098f7c.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965403239-63f205dc-7d24-44d9-acd8-4d6105bfda1f.png)





修改后的数据包丢进sqlmap 跑可以跑，盲注最好自己写脚本

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965403069-db77b638-9832-4e31-8104-3077ed4841b5.png)