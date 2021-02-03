# [k3s](https://k3s.io/)



https://github.com/alexellis/k3sup

```
% curl -SLsf https://get.k3sup.dev | sudo sh
```

<img src="images/tce-ke3up-install.png" width="2234" heigth="1150"></img>

```
$ k3sup install --ip 10.13.5.54 --user Administrator
Running: k3sup install
Public IP: 10.13.5.54
ssh -i /home/docker/.ssh/id_rsa -p 22 Administrator@10.13.5.54
Error: unable to load the ssh key with path "/home/docker/.ssh/id_rsa": open /home/docker/.ssh/id_rsa: no such file or directory
```

```
$ export HOST="10.13.237.195" k3sup install --host $HOST --user Administrator  --ssh-key ~/.ssh/$HOST.pk
```

https://github.com/alexellis/arkade

```
# Note: you can also run without `sudo` and move the binary yourself
curl -sLS https://dl.get-arkade.dev | sudo sh
```

<img src="images/tce-arkade-install.png" width="2232" heigth="1152"></img>


# References

https://blog.alexellis.io/raspberry-pi-homelab-with-k3sup/
