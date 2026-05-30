---
title: 首单VIP签约绕过
slug: "0164"
---
# **首单VIP签约绕过**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965658733-03b40336-c610-48c8-88d5-cacb4fcaa722.png)**

**规则显示: 仅限一次购买（表面上）**

**抓包看，发现生成订单路径**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965658740-3c8b1d5b-45af-4715-b5b5-b1cc3a5385da.png)**

**这是订单路径：[https://xxx.xxx.com/xxrbe/19YU9qM](https://wenku.baidu.com/qrbe/19YU9qM)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965658831-044a6eff-465a-470a-a154-93a5e993fe97.png)**

**付款后会自动签约自动续费，先取消自动续费**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965658916-30bf0362-8e12-4fa7-9a9a-3c4b7f46aa78.png)**

**查看vip到期时间，现在是2022-04-12**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965658947-e8abdc71-124d-4970-b4e7-720c4acc48e7.png)**

**将上述数据包发送到burp的repeater模块，重放数据包得到另外一个支付地址（[https://xxx.xxx.com/xxrbe/19YUF](https://wenku.baidu.com/qrbe/19YU9qM)pN）**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965659976-198efa83-9e97-47c2-bca8-488f346245f9.png)**

**用手机打开该支付路径**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965659937-fe20fc0a-e741-4e9a-87e4-2247b9c863dd.png)**

**依然能支付成功**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965659562-6f3b7b82-8410-4ef1-9b45-00eeaba3b090.png)**



**并且vip天数用之前的4月12日变为5月12日**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965660042-9e425e0a-effa-478c-ba5f-6ba8346a1234.png)**

**因为该优惠是集合包，相对应的其他月卡也依然会有，如下面的首汽约车月卡**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965660256-7ee2d34f-4e75-4630-861a-f5da50b85380.png)**

**经过实验得出数据包可以一直使用，只需要每次将自动续费关闭，就可以一直享受这个福利，并且经过观察生成的支付路径，可以看出来只是最后的6位不一样，所以猜想还可以通过爆破路径而不需要重放数据包来获取路径。**



**因为我开始点进去该活动的时候应该是多生成了一个订单，再去我的订单里查看时发现有两个订单（没截图，后面点我的订单进不去了）。最后发现，只要不付款，可以一直创建订单，并且订单编号也不一样。下面这个为我第一个创建的订单，我付款是付了第二个订单。**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965660116-bfd6b35e-37dd-40da-ab01-5f182fcd4ce9.png)**

**并且我一直没刷新支付页面，发现只需在该页面刷新二维码依然可以购买**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779965660422-35fc2261-4e69-4ba0-99c0-fe87dbb4d0fc.png)**

**而将该链接复制去另外一个页面后发现9元的活动消失了。但是依然可以通过生成支付地址的方式去进行支付刷vip，最后我也就付款了两个，来证明漏洞存在，并且证明了vip**时间可以叠加****

**最后得出只要不退出活动页面或者不支付就可以无限创建订单，并且vip时间可以一直叠加。**
