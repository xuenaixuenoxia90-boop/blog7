---
title: XXX开发者社区某处存在ssrf漏洞
slug: "0086"
---
# **XXX开发者社区某处存在ssrf漏洞**

**漏洞url：**



**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964505119-e6da0ac1-9342-42fa-9a5d-a9f586b3b6a9.png)**

**漏洞描述以及危害：**



**SSRF也就是服务端请求伪造，是指攻击者向服务端发送包含恶意URI链接的请求，借由服务端去访问此URI，以获取保护网络资源的安全漏洞，是常见的web安全漏洞的一种**

**就攻击者发送链接，由服务端去请求。这种方式常常可以用来绕过网络的限制，攻击我们无法直接访问的网络**



**漏洞复现：**



**1.      访问该**web站点帮助中心—个人中心—问题描述功能,发现一尺添加url链接位置：****

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964505443-06f13cc6-55c5-4d7c-b509-83123063f08f.png)**



**2.**尝试将dnslog地址插入，查看回显,** 发现带**MD5的回显以及内网ip****



**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964505863-7fd84b73-c054-402c-bf4f-227623192c7f.png)**

**3.**查询ip属地进一步确认该请求是ssrf服务端发起的****

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964505453-cfcea6f7-9d13-4c7d-a022-bff22608802b.png)**

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964505282-5b440a4a-d47d-45b7-b2a9-2651334c27e6.png)**

**2.      dnslog**的回显MD5****

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964505584-64217699-db33-4931-abc8-1ae28dff771a.png)**



**3.      使用一个图片地址，看看**nc是否反弹shell****

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964505781-091535a9-8b4f-47ef-b274-86062ff55921.png)**



**4.      发现**vps反弹了shell说明存在ssrf漏洞****

**![img](/proxy/https://cdn.nlark.com/yuque/0/2026/png/60657001/1779964506084-ef8d529b-44a0-4acc-920b-51686d844ce1.png)**



**修复方案：**

**1）禁用不需要的协议，限制协议为HTTP、HTTPS**

**2）禁止30x跳转**

**3）设置URL白名单或者限制内网IP**
