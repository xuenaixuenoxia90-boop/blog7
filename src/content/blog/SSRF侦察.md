---
title: SSRF侦察
slug: "0034"
---
# SSRF侦察

感谢 it小丑大佬  hello world大佬两位大佬的帮助下真实确认了此处ssrf漏洞的存在，在此学习了。





当时在众测360旗下的产品

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779961919824-3cda66c6-5295-4eec-aa0b-cf0f7c17d23e.png)

找到一个可疑点，这个位置是用来找外部的文章的，但是通过自己的感觉，这个位置感觉存在ssrf，当时抓个包，然后写成百度的地址，不太敢确认这个漏洞是否存在，但是还是没放弃，深入挖掘



当时请教了两个信任的朋友，hello world 跟it小丑，在两位表哥的帮助下，确实确认了这个漏洞的存在，it小丑师傅找到一处存在80端口的内网ip给我

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779961919738-88775e23-dc82-427b-b67f-f3ec8a21d3ae.png)

返回到了内网的信息，很明显是内网某处位置的，下面在对这个10.121.95.*的ip段扫描了一下，再次确认了成功的侦测内网ip

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779961919640-26cccd87-da77-4656-92c1-e9504549fc6c.png)

![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779961919769-e886f1b3-8e08-47d2-b4ff-e8dc1c4227e1.png)
