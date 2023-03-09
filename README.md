# 说明:

方法一：

GitHub 网速优化工具。https://github.com/aardio/Ghips

使用 GitHub 官方 API 获取当前系统访问速度最快的 IP ，并更新 hosts 文件。  

>[&gt;&gt;点这里下载 Ghips](https://github.com/aardio/Ghips/releases/latest/download/Ghips.7z) 体积仅 601 KB [&gt;&gt; 国内镜像](https://gitcode.net/aardio/Ghips/)  
支持 Win7，Win8，Win10，Win11 等操作系统。   


![Ghips](./screenshots/Ghips1.gif)

刷新间隔时间设为非 0 则定时获取最快 IP 并自动刷新域名解析。
>更新 IP 后首次访问 GitHub 可能会略慢，稍等就快了。 

本程序需要以管理权限运行才能修改 hosts。  
建议右键点 Ghips 托盘图标，在弹出菜单中勾选「开机启动」。

这样开机就会静默获取管理权限启动，不会再弹出警告。

访问速度快的 IP 经常变更，单击 Ghips 托盘图标能快速刷新 IP 测速结果。   


方法二：

1. 修改本地hosts文件

windows系统的hosts文件的位置如下：C:\Windows\System32\drivers\etc\hosts

mac/linux系统的hosts文件的位置如下：/etc/hosts


2. 增加http://github.global.ssl.fastly.net和http://github.com的映射

获取Github相关网站的ip，访问 https://www.ipaddress.com

分别输入github.global.ssl.fastly.net和github.com，查询ip地址

下面是我的配置

140.82.114.3    github.com

199.232.69.194    github.global.ssl.fastly.net

4. 刷新dns

打开cmd 输入 ipconfig /flushdns 刷新DNS解析缓存即可

