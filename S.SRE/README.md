# S. Site Reliability Engineer (SRE)


    Hope is not a strategy.

    Traditional SRE saying


[Salaires](https://www.payscale.com/research/US/Job=Site_Reliability_Engineer_(SRE)/Salary)

<img src="images/SRE-Skills.png" width=323 height=597></img>

## :a: Security

#### oAuth2

https://medium.com/@darutk/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb

https://medium.com/@adriencrovetto/create-an-oauth2-provider-with-play-and-scala-c94f27cae44b


https://github.com/epot/play-silhouette-angular-typescript.g8

#### Quic

https://www.chromium.org/quic


#### cerbot

https://certbot.eff.org/

[certbot](certbot) letsencrypt


# :id: Identity Management - (SSH Keys) 

- [ ] Listing all identities

```
$ ssh-add -l
2048 SHA256:yvO+DdkJO+DdkJektruO+DdkJek+DdkJekUah+oO+DdkJekNjBBZg /Users/meMyself/.ssh/github.com-myid.pk (RSA)
```

- [ ] Removing all identities

```
$ ssh-add -D
All identities removed.
```

- [ ] Adding a single identity by using the Identity's `primary` key

```
$ ssh-add ~/.ssh/github.com-myid.pk 
Identity added: /Users/meMyself/.ssh/github.com-myid.pk (/Users/meMyself/.ssh/github.com-myid.pk)
```

- [ ] Removing a single identity by using the Identity's `public` key


```
$ ssh-add -d /Users/meMyself/.ssh/github.com-myid.pub 
Identity removed: /Users/meMyself/.ssh/github.com-myid.pub (meMyself@mydomain.com)
```


# Reference

https://landing.google.com/sre/books/


