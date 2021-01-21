# Bridge In Linux

## :gear: Install Bridge Utils

- [ ] Install on debian based Linux

```
$ sudo apt install bridge-utils
```

- [ ] Test if installed

```
$ brctl --version
bridge-utils, 1.6
```

## :a: Usage

```
$ brctl show 
bridge name	      bridge id		      STP enabled	interfaces
br-f544812764d4		8000.024221108772	no		      veth0b3a2c3
							                                  veth52e9961
                                                veth7509cb5
                                                veth8176944
                                                veth8e9c840
                                                veth9720a57
                                                vethcf6a6de
                                                vethe01aa1d
docker0		        8000.024242364083	no		      veth984ab6a
							                                  vethfe88f62
mpqemubr0		      8000.5254007969de	no		      mpqemubr0-dummy
							                                  tap-83d46e15649
virbr0		        8000.525400a6ccee	yes		      virbr0-nic
virbr1		        8000.5254005a371b	yes		      virbr1-nic
```
