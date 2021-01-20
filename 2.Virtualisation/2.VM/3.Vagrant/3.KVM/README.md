## :ab: Vagrant


- [ ] Install Vagrant `libvirt` plugin development environment

* Install `gcc` and `libvirt` development environment

```
$ sudo apt install gcc libvirt-clients libvirt-dev
```

* Install `ruby` development environment

```
$ sudo apt install libxslt-dev libxml2-dev zlib1g-dev ruby-dev ruby-libvirt 
```

* Install other libraries 

    - [ebtables](https://flylib.com/books/en/3.105.1.88/1/)

    - [dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html)

```
$ sudo apt install ebtables dnsmasq-base
```

- [ ] Install Vagrant `libvirt` plugin

* plugin

```
$ vagrant plugin install vagrant-libvirt
```

* plugin which converts vagrant boxes to work with different providers

```
$ vagrant plugin install vagrant-mutate
```

:round_pushpin: Start a VM

```
$ mkdir vagrant && cd vagrant
```

[boxes per provider](https://app.vagrantup.com/boxes/search?provider=libvirt)


```
$ vagrant init generic/ubuntu2010
```

| providers | Comments  |
|-----------|-----------|
| hyperv    | Microsoft |
| libvirt   | KVM Linux |


```
$ vagrant up --provider=libvirt
...
==> default:  -- Base box:          generic/ubuntu2010
==> default:  -- Storage pool:      default
==> default:  -- Image:             /var/lib/libvirt/images/vagrant_default.img (128G)
==> default:  -- Volume Cache:      default
==> default:  -- Kernel:            
==> default:  -- Initrd:            
==> default:  -- Graphics Type:     vnc
==> default:  -- Graphics Port:     -1
==> default:  -- Graphics IP:       127.0.0.1
==> default:  -- Graphics Password: Not defined
==> default:  -- Video Type:        cirrus
==> default:  -- Video VRAM:        256
==> default:  -- Sound Type:	
==> default:  -- Keymap:            en-us
==> default:  -- TPM Path:          
==> default:  -- INPUT:             type=mouse, bus=ps2
==> default: Creating shared folders metadata...
==> default: Starting domain.
==> default: Waiting for domain to get an IP address...
==> default: Waiting for SSH to become available...
    default: 
    default: Vagrant insecure key detected. Vagrant will automatically replace
    default: this with a newly generated keypair for better security.
    default: 
    default: Inserting generated public key within guest...
    default: Removing insecure key from the guest if it's present...
    default: Key inserted! Disconnecting and reconnecting using new SSH key...
```

```
$ vagrant status
Current machine states:

default                   running (libvirt)

The Libvirt domain is running. To stop this machine, you can run
`vagrant halt`. To destroy the machine, you can run `vagrant destroy`.
```

https://www.vagrantup.com/docs/networking/private_network#static-ip

https://www.vagrantup.com/docs/networking/public_network

```
$ vagrant ssh default
Last login: Tue Jan 19 01:18:24 2021 from 192.168.121.1
vagrant@ubuntu2010:~$ 
```



:round_pushpin: Virsh

```
$ virsh list
```


## :x: Troubleshooting

```
$ vagrant up --provider=libvirt
Bringing machine 'default' up with 'libvirt' provider...
Error while connecting to Libvirt: Error making a connection to libvirt URI qemu:///system?no_verify=1&keyfile=/home/ubuntu/.ssh/id_rsa:
Call to virConnectOpen failed: Failed to connect socket to '/var/run/libvirt/libvirt-sock': Permission denied
```

```
$ sudo adduser $USER libvirt
```

Exit and return to the Terminal


# References

https://ostechnix.com/how-to-use-vagrant-with-libvirt-kvm-provider/

https://linuxize.com/post/how-to-install-vagrant-on-ubuntu-20-04/
