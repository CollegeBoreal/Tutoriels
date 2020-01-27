# CISCO Anywhere VPN Client


![image](images/AnywhereMobilityClient.png)

https://community.cisco.com/t5/vpn-and-anyconnect/anyconnect-mac-os-x-client-certificate-authentication/td-p/1543603

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

