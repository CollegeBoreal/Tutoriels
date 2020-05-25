# cerbot

https://certbot.eff.org/

## :o: Installation

:apple: sur Mac

```
$ brew install certbot
```


# References

```
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server at
https://acme-v02.api.letsencrypt.org/directory
```


```
% certbot-auto certonly \
     --manual \
     --preferred-challenges=dns \
     --email 300098957@collegeboreal.ca \ 
     --server https://acme-v02.api.letsencrypt.org/directory \
     --agree-tos \
     -d *.boreal.codes
```
