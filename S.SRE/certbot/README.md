# cerbot

https://certbot.eff.org/

## :o: Installation

:apple: sur Mac

```
$ brew install certbot
```


## :a: WildCard

```
% sudo certbot certonly \
      --manual \
      --agree-tos \
      --preferred-challenges dns \
      --email me@mydomain.com \
      --manual-public-ip-logging-ok -d '*.mydomain.com' \
      -d mydomain.com
```
Response
```
Password:
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator manual, Installer None
Obtaining a new certificate
Performing the following challenges:
dns-01 challenge for mydomain.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name
_acme-challenge.mydomain.com with the following value:

MyBJe-----------------------------------o8KfGTD

Before continuing, verify the record is deployed.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/mydomain.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/mydomain.com/privkey.pem
   Your cert will expire on 2020-08-23. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

## :b: cross verify certificate

```
% sudo certbot certificates
```
Response
```
Password:
Saving debug log to /var/log/letsencrypt/letsencrypt.log

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Found the following certs:
  Certificate Name: mydomain.com
    Serial Number: 3490c099214099d090f90293099a0934
    Domains: *.mydomain.com mydomain.com
    Expiry Date: 2020-08-23 16:10:25+00:00 (VALID: 89 days)
    Certificate Path: /etc/letsencrypt/live/mydomain.com/fullchain.pem
    Private Key Path: /etc/letsencrypt/live/mydomain.com/privkey.pem
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```


# References

https://www.macstrategy.com/article.php?211#install_letsencrypt

https://dev.to/nabbisen/let-s-encrypt-wildcard-certificate-with-certbot-plo (worked)

https://medium.com/@saurabh6790/generate-wildcard-ssl-certificate-using-lets-encrypt-certbot-273e432794d7
