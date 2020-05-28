# P.PHP

## :a: Install with Package Managers

:pushpin: Windows

```
PS > choco install php
```

:pushpin: Apple

```
% brew install ph
```

## :b: Testing

```
% php --version
```

Where is the `.ini` file

```
% php --ini
Configuration File (php.ini) Path: /etc
Loaded Configuration File:         (none)
Scan for additional .ini files in: (none)
Additional .ini files parsed:      (none)
```

## :o: Configuration

## :one: php-fpm on Linux

Config

```
% sudo vi /etc/php/7.2/fpm/pool.d/www.conf 
...
; Note: This value is mandatory.
;listen = /run/php/php7.2-fpm.sock
listen = 9000
```

```
% sudo systemctl restart php7.2-fpm.service
```

```
$ ss -tapn
State           Recv-Q            Send-Q                 Local Address:Port               Peer Address:Port       
...
LISTEN           0                 128                             *:9000                           *:*      
LISTEN           0                 128                          [::]:22                          [::]:*  
```


## :two: php-fpm on Docker

```
% ls -l /usr/local/etc/php-fpm.d
total 48
-rw-r--r-- 1 root root   357 May 15 13:35 docker.conf
-rw-r--r-- 1 root root 19624 May 15 13:35 www.conf
-rw-r--r-- 1 root root 19624 May 15 13:34 www.conf.default
-rw-r--r-- 1 root root    45 May 15 13:35 zz-docker.conf
```

```
# cat /usr/local/etc/php-fpm.d/www.conf | grep "listen ="
listen = 127.0.0.1:9000
```

# References

https://vyspiansky.github.io/2018/11/08/set-up-php-7.2-on-macos-mojave-with-homebrew/

https://getgrav.org/blog/macos-catalina-apache-multiple-php-versions

https://getcomposer.org/

https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-ubuntu-18-04

https://blog.joshwalsh.me/docker-nginx-php-fpm/#docker-nginx-for-php-fpm

https://www.tecmint.com/enable-monitor-php-fpm-status-in-nginx/
