# CISCO Anywhere VPN Client

:warning: Ne fonctionne pas sur Catalina utiliser [openconnect-gui](https://openconnect.github.io/openconnect-gui)


![image](images/AnywhereMobilityClient.png)



```
$  sudo /opt/cisco/anyconnect/bin/vpn connect vpn.collegeboreal.ca
Cisco AnyConnect Secure Mobility Client (version 4.7.04056) .

Copyright (c) 2004 - 2019 Cisco Systems, Inc.  All Rights Reserved.


  >> state: Disconnected
  >> state: Disconnected
  >> notice: Ready to connect.
  >> registered with local VPN subsystem.
  >> contacting host (vpn.collegeboreal.ca) for login information...
  >> notice: Contacting vpn.collegeboreal.ca.
Group: RA-VPN

Username: [BOREAL-ID] 
Password: 
  >> state: Connecting
  >> notice: Establishing VPN session...
  >> notice: The AnyConnect Downloader is performing update checks...
  >> notice: Checking for profile updates...
  >> notice: Checking for product updates...
  >> notice: Checking for customization updates...
  >> notice: Performing any required updates...
  >> notice: The AnyConnect Downloader updates have been completed.
  >> state: Connecting
  >> notice: Establishing VPN session...
  >> notice: Establishing VPN - Initiating connection...
  >> notice: Establishing VPN - Examining system...
  >> notice: Establishing VPN - Activating VPN adapter...
  >> notice: Establishing VPN - Configuring system...
  >> notice: Establishing VPN...
  >> state: Connected
```


#### :x: Disconnect

```
$  sudo /opt/cisco/anyconnect/bin/vpn disconnect vpn.collegeboreal.ca
Cisco AnyConnect Secure Mobility Client (version 4.7.04056) .

Copyright (c) 2004 - 2019 Cisco Systems, Inc.  All Rights Reserved.


  >> state: Connected
  >> state: Connected
  >> registered with local VPN subsystem.
  >> state: Disconnecting
  >> notice: Disconnect in progress, please wait...
  >> state: Connected
  >> notice: Connected to vpn.collegeboreal.ca.
  >> state: Disconnecting
  >> notice: Disconnect in progress, please wait...
  >> state: Disconnecting
  >> state: Disconnected
  >> notice: Ready to connect.
VPN> 
```

#### :o: Check Status

```
$  sudo /opt/cisco/anyconnect/bin/vpn status vpn.collegeboreal.ca
Cisco AnyConnect Secure Mobility Client (version 4.7.04056) .

Copyright (c) 2004 - 2019 Cisco Systems, Inc.  All Rights Reserved.


  >> state: Disconnected
  >> state: Disconnected
  >> state: Disconnected
  >> notice: Ready to connect.
  >> registered with local VPN subsystem.
VPN> 
```

# References

| Title                               | Link                                             |
|-------------------------------------|--------------------------------------------------|
| Cisco AnyConnect broken on Catalina | https://forums.developer.apple.com/thread/117603 |
| anyconnect-mac-os-x-client-certificate-authentication | https://community.cisco.com/t5/vpn-and-anyconnect/anyconnect-mac-os-x-client-certificate-authentication/td-p/1543603 |
| [Anyconnect 4.8](https://www.cisco.com/c/en/us/td/docs/security/vpn_client/anyconnect/anyconnect48/release/notes/b_Release_Notes_AnyConnect_4_8.html) | AnyConnect 4.8 Download Page |


