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

## :bulb: php-fpm

Config

```
% sudo vi /etc/php/7.2/fpm/pool.d/www.conf 
```

```
$ ss -tapn
State           Recv-Q                Send-Q                 Local Address:Port                   Peer Address:Port       
...
LISTEN           0                     128                             *:9000                               *:*      
LISTEN           0                     128                          [::]:22                              [::]:*  
```

# References

https://vyspiansky.github.io/2018/11/08/set-up-php-7.2-on-macos-mojave-with-homebrew/

https://getgrav.org/blog/macos-catalina-apache-multiple-php-versions

https://getcomposer.org/
