
```
$ vagrant up --provider=hyperv
Bringing machine 'default' up with 'hyperv' provider...
==> default: Verifying Hyper-V is enabled...
==> default: Verifying Hyper-V is accessible...
==> default: Box 'generic/ubuntu2010' could not be found. Attempting to find and install...
    default: Box Provider: hyperv
    default: Box Version: >= 0
==> default: Loading metadata for box 'generic/ubuntu2010'
    default: URL: https://vagrantcloud.com/generic/ubuntu2010
==> default: Adding box 'generic/ubuntu2010' (v3.1.22) for provider: hyperv
    default: Downloading: https://vagrantcloud.com/generic/boxes/ubuntu2010/versions/3.1.22/providers/hyperv.box
Download redirected to host: vagrantcloud-files-production.s3.amazonaws.com
    default:
    default: Calculating and comparing box checksum...
==> default: Successfully added box 'generic/ubuntu2010' (v3.1.22) for 'hyperv'!
==> default: Importing a Hyper-V instance
    default: Creating and registering the VM...
    default: Successfully imported VM
    default: Configuring the VM...
    default: Setting VM Enhanced session transport type to disabled/default (VMBus)
==> default: Starting the machine...
==> default: Waiting for the machine to report its IP address...
    default: Timeout: 120 seconds
    default: IP: 172.17.110.115
==> default: Waiting for machine to boot. This may take a few minutes...
    default: SSH address: 172.17.110.115:22
    default: SSH username: vagrant
    default: SSH auth method: private key
    default:
    default: Vagrant insecure key detected. Vagrant will automatically replace
    default: this with a newly generated keypair for better security.
    default:
    default: Inserting generated public key within guest...
    default: Removing insecure key from the guest if it's present...
    default: Key inserted! Disconnecting and reconnecting using new SSH key...
==> default: Machine booted and ready!
```


```
$ vagrant status
Current machine states:

default                   running (hyperv)
```
