# :o: Obelisk

To build the **Obelisk starter app**, you'll need **Nix**, because Obelisk's entire toolchain is built around it. Obelisk supports web, Android, and iOS targets from the same Haskell codebase. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets)

## 1. Install Nix

On Linux or macOS:

```bash
sh <(curl -L https://nixos.org/nix/install) --daemon
```
<details><summary>🪵 Log</summary>

```lua
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100  4499  100  4499    0     0  13622      0 --:--:-- --:--:-- --:--:-- 13622
downloading Nix 2.35.1 binary tarball for aarch64-darwin from 'https://releases.nixos.org/nix/nix-2.35.1/nix-2.35.1-aarch64-darwin.tar.xz' to '/var/folders/c3/1jkjmwxx5vncr00sw0gklknr0000gp/T/nix-binary-tarball-unpack.XXXXXXXXXX.xgIHCtpNZm'...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 17.8M  100 17.8M    0     0  20.4M      0 --:--:-- --:--:-- --:--:-- 20.4M
Switching to the Multi-user Installer
Welcome to the Multi-User Nix Installation

This installation tool will set up your computer with the Nix package
manager. This will happen in a few stages:

1. Make sure your computer doesn't already have Nix. If it does, I
   will show you instructions on how to clean up your old install.

2. Show you what I am going to install and where. Then I will ask
   if you are ready to continue.

3. Create the system users (uids [351..382]) and groups (gid 350)
   that the Nix daemon uses to run builds. To create system users
   in a different range, exit and run this tool again with
   NIX_FIRST_BUILD_UID set.

4. Perform the basic installation of the Nix files daemon.

5. Configure your shell to import special Nix Profile files, so you
   can use Nix.

6. Start the Nix daemon.

Would you like to see a more detailed list of what I will do?
[y/n] y

I will:

 - make sure your computer doesn't already have Nix files
   (if it does, I will tell you how to clean them up.)
 - create local users (see the list above for the users I'll make)
 - create a local group (nixbld)
 - install Nix in /nix
 - create a configuration file in /etc/nix
 - set up the "default profile" by creating some Nix-related files in
   /var/root
 - back up /etc/bashrc to /etc/bashrc.backup-before-nix
 - update /etc/bashrc to include some Nix configuration
 - back up /etc/zshrc to /etc/zshrc.backup-before-nix
 - update /etc/zshrc to include some Nix configuration
 - create a Nix volume and a LaunchDaemon to mount it
 - create a LaunchDaemon (at /Library/LaunchDaemons/org.nixos.nix-daemon.plist) for nix-daemon

Ready to continue?
[y/n] y


---- let's talk about sudo -----------------------------------------------------
This script is going to call sudo a lot. Every time I do, it'll
output exactly what it'll do, and why.

Just like this:

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo echo

to demonstrate how our sudo prompts look


This might look scary, but everything can be undone by running just a
few commands. I used to ask you to confirm each time sudo ran, but it
was too many times. Instead, I'll just ask you this one time:

Can I use sudo?
[y/n] y

Yay! Thanks! Let's get going!

~~> Fixing any leftover Nix volume state
Before I try to install, I'll check for any existing Nix volume config
and ask for your permission to remove it (so that the installer can
start fresh). I'll also ask for permission to fix any issues I spot.

~~> Checking for artifacts of previous installs
Before I try to install, I'll check for signs Nix already is or has
been installed on this system.

---- Nix config report ---------------------------------------------------------
        Temp Dir:	/var/folders/c3/1jkjmwxx5vncr00sw0gklknr0000gp/T/tmp.9Qts9gtjMe
        Nix Root:	/nix
     Build Users:	32
  Build Group ID:	350
Build Group Name:	nixbld

build users:
    Username:	UID
     _nixbld1:	351
     _nixbld2:	352
     _nixbld3:	353
     _nixbld4:	354
     _nixbld5:	355
     _nixbld6:	356
     _nixbld7:	357
     _nixbld8:	358
     _nixbld9:	359
     _nixbld10:	360
     _nixbld11:	361
     _nixbld12:	362
     _nixbld13:	363
     _nixbld14:	364
     _nixbld15:	365
     _nixbld16:	366
     _nixbld17:	367
     _nixbld18:	368
     _nixbld19:	369
     _nixbld20:	370
     _nixbld21:	371
     _nixbld22:	372
     _nixbld23:	373
     _nixbld24:	374
     _nixbld25:	375
     _nixbld26:	376
     _nixbld27:	377
     _nixbld28:	378
     _nixbld29:	379
     _nixbld30:	380
     _nixbld31:	381
     _nixbld32:	382

Ready to continue?
[y/n] y


---- Preparing a Nix volume ----------------------------------------------------
    Nix traditionally stores its data in the root directory /nix, but
    macOS now (starting in 10.15 Catalina) has a read-only root directory.
    To support Nix, I will create a volume and configure macOS to mount it
    at /nix.

~~> Configuring /etc/synthetic.conf to make a mount-point at /nix

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/ex -u NONE -n /etc/synthetic.conf

to add Nix to /etc/synthetic.conf

Password:

~~> Creating a Nix volume

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/diskutil apfs addVolume disk3 APFS Nix Store -nomount

to create a new APFS volume 'Nix Store' on disk3


---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/diskutil unmount force disk3s7

to ensure the Nix volume is not mounted

disk3s7 was already unmounted

~~> Configuring /etc/fstab to specify volume mount options

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/vifs

to add nix to fstab


~~> Encrypt the Nix volume

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/diskutil mount Nix Store

to mount your Nix volume for encrypting

Volume Nix Store on Nix Store mounted

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/security -i

to add your Nix volume's password to Keychain


---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/diskutil apfs encryptVolume Nix Store -user disk -stdinpassphrase

to actually encrypt your Nix volume

Encrypting with the new "Disk" crypto user on disk3s7
The new "Disk" user will be the only one who has initial access to disk3s7
The new APFS crypto user UUID will be A7D3F57D-4E43-49A7-BCFD-0FFBF0A81D26
Encryption has likely completed due to AES hardware; see "diskutil apfs list"

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/diskutil unmount force Nix Store

to unmount the encrypted volume

Volume Nix Store on disk3s7 force-unmounted

~~> Configuring LaunchDaemon to mount 'Nix Store'

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/ex -u NONE -n /Library/LaunchDaemons/org.nixos.darwin-store.plist

to install the Nix volume mounter


---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo launchctl bootstrap system /Library/LaunchDaemons/org.nixos.darwin-store.plist

to launch the Nix volume mounter


---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo launchctl kickstart -k system/org.nixos.darwin-store

to launch the Nix volume mounter



~~> Setting up the build group nixbld

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o create -r Nix build group for nix-daemon -i 350 nixbld

Create the Nix build group, nixbld

            Created:	Yes

~~> Setting up the build user _nixbld1

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld1 UniqueID 351

Creating the Nix build user (#1), _nixbld1

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 1
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld1 nixbld

Add _nixbld1 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld1 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld2

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld2 UniqueID 352

Creating the Nix build user (#2), _nixbld2

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 2
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld2 nixbld

Add _nixbld2 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld2 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld3

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld3 UniqueID 353

Creating the Nix build user (#3), _nixbld3

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 3
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld3 nixbld

Add _nixbld3 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld3 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld4

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld4 UniqueID 354

Creating the Nix build user (#4), _nixbld4

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 4
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld4 nixbld

Add _nixbld4 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld4 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld5

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld5 UniqueID 355

Creating the Nix build user (#5), _nixbld5

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 5
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld5 nixbld

Add _nixbld5 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld5 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld6

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld6 UniqueID 356

Creating the Nix build user (#6), _nixbld6

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 6
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld6 nixbld

Add _nixbld6 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld6 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld7

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld7 UniqueID 357

Creating the Nix build user (#7), _nixbld7

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 7
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld7 nixbld

Add _nixbld7 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld7 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld8

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld8 UniqueID 358

Creating the Nix build user (#8), _nixbld8

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 8
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld8 nixbld

Add _nixbld8 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld8 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld9

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld9 UniqueID 359

Creating the Nix build user (#9), _nixbld9

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 9
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld9 nixbld

Add _nixbld9 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld9 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld10

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld10 UniqueID 360

Creating the Nix build user (#10), _nixbld10

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 10
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld10 nixbld

Add _nixbld10 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld10 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld11

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld11 UniqueID 361

Creating the Nix build user (#11), _nixbld11

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 11
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld11 nixbld

Add _nixbld11 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld11 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld12

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld12 UniqueID 362

Creating the Nix build user (#12), _nixbld12

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 12
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld12 nixbld

Add _nixbld12 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld12 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld13

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld13 UniqueID 363

Creating the Nix build user (#13), _nixbld13

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 13
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld13 nixbld

Add _nixbld13 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld13 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld14

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld14 UniqueID 364

Creating the Nix build user (#14), _nixbld14

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 14
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld14 nixbld

Add _nixbld14 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld14 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld15

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld15 UniqueID 365

Creating the Nix build user (#15), _nixbld15

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 15
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld15 nixbld

Add _nixbld15 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld15 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld16

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld16 UniqueID 366

Creating the Nix build user (#16), _nixbld16

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 16
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld16 nixbld

Add _nixbld16 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld16 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld17

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld17 UniqueID 367

Creating the Nix build user (#17), _nixbld17

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 17
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld17 nixbld

Add _nixbld17 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld17 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld18

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld18 UniqueID 368

Creating the Nix build user (#18), _nixbld18

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 18
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld18 nixbld

Add _nixbld18 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld18 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld19

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld19 UniqueID 369

Creating the Nix build user (#19), _nixbld19

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 19
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld19 nixbld

Add _nixbld19 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld19 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld20

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld20 UniqueID 370

Creating the Nix build user (#20), _nixbld20

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 20
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld20 nixbld

Add _nixbld20 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld20 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld21

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld21 UniqueID 371

Creating the Nix build user (#21), _nixbld21

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 21
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld21 nixbld

Add _nixbld21 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld21 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld22

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld22 UniqueID 372

Creating the Nix build user (#22), _nixbld22

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 22
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld22 nixbld

Add _nixbld22 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld22 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld23

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld23 UniqueID 373

Creating the Nix build user (#23), _nixbld23

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 23
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld23 nixbld

Add _nixbld23 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld23 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld24

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld24 UniqueID 374

Creating the Nix build user (#24), _nixbld24

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 24
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld24 nixbld

Add _nixbld24 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld24 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld25

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld25 UniqueID 375

Creating the Nix build user (#25), _nixbld25

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 25
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld25 nixbld

Add _nixbld25 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld25 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld26

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld26 UniqueID 376

Creating the Nix build user (#26), _nixbld26

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 26
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld26 nixbld

Add _nixbld26 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld26 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld27

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld27 UniqueID 377

Creating the Nix build user (#27), _nixbld27

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 27
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld27 nixbld

Add _nixbld27 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld27 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld28

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld28 UniqueID 378

Creating the Nix build user (#28), _nixbld28

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 28
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld28 nixbld

Add _nixbld28 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld28 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld29

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld29 UniqueID 379

Creating the Nix build user (#29), _nixbld29

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 29
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld29 nixbld

Add _nixbld29 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld29 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld30

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld30 UniqueID 380

Creating the Nix build user (#30), _nixbld30

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 30
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld30 nixbld

Add _nixbld30 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld30 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld31

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld31 UniqueID 381

Creating the Nix build user (#31), _nixbld31

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 31
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld31 nixbld

Add _nixbld31 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld31 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the build user _nixbld32

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . create /Users/_nixbld32 UniqueID 382

Creating the Nix build user (#32), _nixbld32

           Created:	Yes
            Hidden:	Yes
    Home Directory:	/var/empty
              Note:	Nix build user 32
   Logins Disabled:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/dseditgroup -o edit -t user -a _nixbld32 nixbld

Add _nixbld32 to the nixbld group

  Member of nixbld:	Yes

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/dscl . -create /Users/_nixbld32 PrimaryGroupID 350

to let the nix daemon use this user for builds (this might seem redundant, but there are two concepts of group membership)

    PrimaryGroupID:	350

~~> Setting up the basic directory structure

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/sbin/chown -R root:nixbld /nix

to take root ownership of existing Nix store files

chown: /nix/.Trashes: Operation not permitted
chown: /nix/.Trashes: Operation not permitted

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo install -dv -m 0755 /nix /nix/var /nix/var/log /nix/var/log/nix /nix/var/log/nix/drvs /nix/var/nix /nix/var/nix/db /nix/var/nix/gcroots /nix/var/nix/profiles /nix/var/nix/temproots /nix/var/nix/userpool /nix/var/nix/daemon-socket /nix/var/nix/gcroots/per-user /nix/var/nix/profiles/per-user

to make the basic directory structure of Nix (part 1)

install: mkdir /nix/var
install: mkdir /nix/var/log
install: mkdir /nix/var/log/nix
install: mkdir /nix/var/log/nix/drvs
install: mkdir /nix/var/nix
install: mkdir /nix/var/nix/db
install: mkdir /nix/var/nix/gcroots
install: mkdir /nix/var/nix/profiles
install: mkdir /nix/var/nix/temproots
install: mkdir /nix/var/nix/userpool
install: mkdir /nix/var/nix/daemon-socket
install: mkdir /nix/var/nix/gcroots/per-user
install: mkdir /nix/var/nix/profiles/per-user

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo install -dv -g nixbld -m 1775 /nix/store

to make the basic directory structure of Nix (part 2)

install: mkdir /nix/store

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo install -dv -m 0555 /etc/nix

to place the default nix daemon configuration (part 1)

install: mkdir /etc/nix

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo install -m 0644 /var/folders/c3/1jkjmwxx5vncr00sw0gklknr0000gp/T/tmp.9Qts9gtjMe/.nix-channels /var/root/.nix-channels

to set up the default system channel (part 1)


~~> Installing Nix

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo cp -RPp ./store/0kg126smgk3cppfm4n1n3mw0s35bh526-krb5-1.22.2-lib ./store/17rwk3nhwcfq28fm283nv4rmvpds35lr-zstd-1.5.7 ./store/1fha2fgg6x9sfvkalmc5cbd2885r0hwr-nix-store-2.35.1 ./store/1is0q7ygbqd3h2j8xl2rs5h766h468ys-aws-c-s3-0.8.7 ./store/1lhfaycm5fznrydp51q1dvgr6acp1xjm-libsodium-1.0.22-unstable-2026-04-09 ./store/40pwxy81wdyi38wdsaas00pk1n0p1f77-aws-checksums-0.2.7 ./store/4dkpfxp4hdy17gznps9yp30y23r4mv9s-lowdown-3.0.1-lib ./store/57zg2mx587ycaihfbb3g6c6hiqns69lq-sqlite-3.51.2 ./store/5d5b48r1zxgdrjb3v4927k17c9wp1vqi-nix-cmd-2.35.1 ./store/5ya380l3qxlxqngvdrw8nw6l7r8s4v05-openssl-3.6.2 ./store/78bv7pa16n4bjbn4sdgfr3wwl208l3xv-aws-c-compression-0.3.1 ./store/80pq4m7gqd21xz9i0mpgni6ggnv3wfd4-libgit2-1.9.4-lib ./store/8l8z3q2qkbsgsw6d9dv60f3cl2abz7k5-boehm-gc-8.2.12 ./store/8xxpkrh1v8ycpnqiq0l1ih31xi11pix1-llhttp-9.4.1 ./store/9739i4agnq3phw2p9392ciby32679v84-libresolv-93 ./store/9mjprxvx6xj51qfg3bf7w8qiaknpmlk8-libiconv-1.19 ./store/ammkkg30yjyf22f8nlj1xx4ik8929qyk-aws-c-sdkutils-0.2.4 ./store/annylz5apn08v8hd9gbsww4dlznjvnrj-libxml2-2.15.3 ./store/azk9ni0ks4gbvy7msvaz7j7h32zllpja-bash-5.3p9 ./store/azy6q6wzzhnaqw2ajwj3nm5gnm7147aa-libssh2-1.11.1 ./store/b9jx7x9xch0syi6589kbhcafzw9zlsll-ngtcp2-1.22.1 ./store/ca53kcnn27yx7psipfvb7bw05sw54237-nix-2.35.1 ./store/cklz7m43f2wwixjn0nzn3cvml14g2isn-libunistring-1.4.2 ./store/cqwnx52f947zgjp0fmlwvc06qc999nwx-editline-1.17.1-unstable-2025-05-24 ./store/csh770p7r7q4a19lf4jjmsb87y9ajbsg-aws-c-event-stream-0.7.0 ./store/d2ljjimry90przf7g61xc0x4j9k4kxvy-nix-manual-2.35.1-man ./store/dsajmm345dpw9pspg69sb87r8m6r5qx2-aws-c-io-0.22.0 ./store/dzzq4nrka9zij464wp63jchjdcamiak2-bzip2-1.0.8 ./store/fc39m2aga7hnfd6k4ncngg2xy113zjh6-nix-util-2.35.1 ./store/gym73vccz34i0k5xv7rg7grxfdcwakh8-aws-c-auth-0.9.1 ./store/hsbd2giip3y68djwakbw4p1r51rx4034-nix-flake-2.35.1 ./store/hyr4444204ghz8iyrlz6k2bil9bgljzk-aws-c-http-0.10.4 ./store/i0x9grpb2vg5jgyc03wjdl2lhphipwsf-aws-c-mqtt-0.13.3 ./store/if967v1prdksq5363yr765xk2h0hjbr7-aws-c-common-0.12.4 ./store/j3w0f8nk1wb6f1y6nrsx3j6z2cprzihs-zlib-1.3.2 ./store/jjr7004giah45yh0m89g54qds51qwa72-libpsl-0.21.5 ./store/jv43fv92wpkds1kjvhrgmdy6g0wn5kln-aws-c-cal-0.9.2 ./store/k0ykr6xp3iwjvpbsc5psirmwfhqxx0gm-pcre2-10.46 ./store/k87gapwdfra4gnf09rp1nrr3050y95xm-brotli-1.2.0-lib ./store/m88s5fv8as6zdj19qqsji30wm9w6h615-nix-main-2.35.1 ./store/n6lpqsyyhzq6qyhfmvnhmmzra6rswz7d-nghttp2-1.69.0-lib ./store/n8f3r30mx7ac306pwdica4iii66gp162-nghttp3-1.15.0 ./store/nhc3m83lna4xk0gvvhds4d6q8lp634kd-publicsuffix-list-0-unstable-2026-05-13 ./store/p2xp38nk6y6rf9r18m109ysmk9h47xs0-nix-expr-2.35.1 ./store/qla3pimj2nqrklkhar0yv7127fcd1v86-libiconv-113 ./store/qspfpl0sjj8qf17h9aq5by3lr8pfcdb6-nix-fetchers-2.35.1 ./store/rdrrlaq086albbwbm0j41nisw5qq82r7-gettext-1.0 ./store/sxa010h5l9d65rdx1lmfd293fwwkwqzh-libarchive-3.8.7-lib ./store/w061h13wwwdi629v9ll8604wyp3q10a9-libblake3-1.8.5 ./store/w0hwcvhjihq11g77w0h5drqklxxj4ih2-curl-8.20.0 ./store/wl206zghys2x1s7cv9jlzgyph9b7a1bc-aws-crt-cpp-0.34.3 ./store/x4h61y39a7rgqnds9ha0n9x8y6dlzrn4-xz-5.8.3 ./store/xhdbrfx8ml3z1g5j3d93n0719gi6xp00-boost-1.89.0 ./store/xig2alhf611w1pan6n4wdqjmz74avgbz-nss-cacert-3.123 ./store/z0abibj62yi83z2aa2zd29nli4bj2c7q-libidn2-2.3.8 /nix/store/

to copy the basic Nix files to the new store at /nix/store


---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo chmod -R ugo-w /nix/store/

to make the new store non-writable at /nix/store

      Alright! We have our first nix at /nix/store/ca53kcnn27yx7psipfvb7bw05sw54237-nix-2.35.1

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo HOME=/var/root /nix/store/ca53kcnn27yx7psipfvb7bw05sw54237-nix-2.35.1/bin/nix-store --load-db

to load data for the first time in to the Nix Database

      Just finished getting the nix database ready.

~~> Setting up shell profiles: /etc/bashrc /etc/profile.d/nix.sh /etc/zshrc /etc/bash.bashrc /etc/zsh/zshrc

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo cp /etc/bashrc /etc/bashrc.backup-before-nix

to back up your current /etc/bashrc to /etc/bashrc.backup-before-nix


---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo tee /etc/bashrc

extend your /etc/bashrc with nix-daemon settings


# Nix
if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then
  . '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh'
fi
# End Nix

# System-wide .bashrc file for interactive bash(1) shells.
if [ -z "$PS1" ]; then
   return
fi

PS1='\h:\W \u\$ '
# Make bash check its window size after a process completes
shopt -s checkwinsize

[ -r "/etc/bashrc_$TERM_PROGRAM" ] && . "/etc/bashrc_$TERM_PROGRAM"

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo cp /etc/zshrc /etc/zshrc.backup-before-nix

to back up your current /etc/zshrc to /etc/zshrc.backup-before-nix


---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo tee /etc/zshrc

extend your /etc/zshrc with nix-daemon settings


# Nix
if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then
  . '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh'
fi
# End Nix

# System-wide profile for interactive zsh(1) shells.

# Setup user specific overrides for this in ~/.zshrc. See zshbuiltins(1)
# and zshoptions(1) for more details.

# Correctly display UTF-8 with combining characters.  We'll assume UTF-8 if the
# locale(1) binary is missing entirely.
if [[ ! -x /usr/bin/locale ]] || [[ "$(locale LC_CTYPE)" == "UTF-8" ]]; then
    setopt COMBINING_CHARS
fi

# Disable the log builtin, so we don't conflict with /usr/bin/log
disable log

# Save command history
HISTFILE=${ZDOTDIR:-$HOME}/.zsh_history
HISTSIZE=2000
SAVEHIST=1000

# Beep on error
setopt BEEP

# Use keycodes (generated via zkbd) if present, otherwise fallback on
# values from terminfo
if [[ -r ${ZDOTDIR:-$HOME}/.zkbd/${TERM}-${VENDOR} ]] ; then
    source ${ZDOTDIR:-$HOME}/.zkbd/${TERM}-${VENDOR}
else
    typeset -g -A key

    [[ -n "$terminfo[kf1]" ]] && key[F1]=$terminfo[kf1]
    [[ -n "$terminfo[kf2]" ]] && key[F2]=$terminfo[kf2]
    [[ -n "$terminfo[kf3]" ]] && key[F3]=$terminfo[kf3]
    [[ -n "$terminfo[kf4]" ]] && key[F4]=$terminfo[kf4]
    [[ -n "$terminfo[kf5]" ]] && key[F5]=$terminfo[kf5]
    [[ -n "$terminfo[kf6]" ]] && key[F6]=$terminfo[kf6]
    [[ -n "$terminfo[kf7]" ]] && key[F7]=$terminfo[kf7]
    [[ -n "$terminfo[kf8]" ]] && key[F8]=$terminfo[kf8]
    [[ -n "$terminfo[kf9]" ]] && key[F9]=$terminfo[kf9]
    [[ -n "$terminfo[kf10]" ]] && key[F10]=$terminfo[kf10]
    [[ -n "$terminfo[kf11]" ]] && key[F11]=$terminfo[kf11]
    [[ -n "$terminfo[kf12]" ]] && key[F12]=$terminfo[kf12]
    [[ -n "$terminfo[kf13]" ]] && key[F13]=$terminfo[kf13]
    [[ -n "$terminfo[kf14]" ]] && key[F14]=$terminfo[kf14]
    [[ -n "$terminfo[kf15]" ]] && key[F15]=$terminfo[kf15]
    [[ -n "$terminfo[kf16]" ]] && key[F16]=$terminfo[kf16]
    [[ -n "$terminfo[kf17]" ]] && key[F17]=$terminfo[kf17]
    [[ -n "$terminfo[kf18]" ]] && key[F18]=$terminfo[kf18]
    [[ -n "$terminfo[kf19]" ]] && key[F19]=$terminfo[kf19]
    [[ -n "$terminfo[kf20]" ]] && key[F20]=$terminfo[kf20]
    [[ -n "$terminfo[kbs]" ]] && key[Backspace]=$terminfo[kbs]
    [[ -n "$terminfo[kich1]" ]] && key[Insert]=$terminfo[kich1]
    [[ -n "$terminfo[kdch1]" ]] && key[Delete]=$terminfo[kdch1]
    [[ -n "$terminfo[khome]" ]] && key[Home]=$terminfo[khome]
    [[ -n "$terminfo[kend]" ]] && key[End]=$terminfo[kend]
    [[ -n "$terminfo[kpp]" ]] && key[PageUp]=$terminfo[kpp]
    [[ -n "$terminfo[knp]" ]] && key[PageDown]=$terminfo[knp]
    [[ -n "$terminfo[kcuu1]" ]] && key[Up]=$terminfo[kcuu1]
    [[ -n "$terminfo[kcub1]" ]] && key[Left]=$terminfo[kcub1]
    [[ -n "$terminfo[kcud1]" ]] && key[Down]=$terminfo[kcud1]
    [[ -n "$terminfo[kcuf1]" ]] && key[Right]=$terminfo[kcuf1]
fi

# Default key bindings
[[ -n ${key[Delete]} ]] && bindkey "${key[Delete]}" delete-char
[[ -n ${key[Home]} ]] && bindkey "${key[Home]}" beginning-of-line
[[ -n ${key[End]} ]] && bindkey "${key[End]}" end-of-line
[[ -n ${key[Up]} ]] && bindkey "${key[Up]}" up-line-or-search
[[ -n ${key[Down]} ]] && bindkey "${key[Down]}" down-line-or-search

# Default prompt
PS1="%n@%m %1~ %# "

# Useful support for interacting with Terminal.app or other terminal programs
[ -r "/etc/zshrc_$TERM_PROGRAM" ] && . "/etc/zshrc_$TERM_PROGRAM"

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo touch /etc/bash.bashrc

to create a stub /etc/bash.bashrc which will be updated


---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo tee /etc/bash.bashrc

extend your /etc/bash.bashrc with nix-daemon settings


# Nix
if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then
  . '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh'
fi
# End Nix


~~> Setting up shell profiles for Fish with conf.d/nix.fish inside /etc/fish /usr/local/etc/fish /opt/homebrew/etc/fish /opt/local/etc/fish

~~> Setting up the default profile

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo HOME=/var/root /nix/store/ca53kcnn27yx7psipfvb7bw05sw54237-nix-2.35.1/bin/nix-env -i /nix/store/ca53kcnn27yx7psipfvb7bw05sw54237-nix-2.35.1

to install a bootstrapping Nix in to the default profile

installing 'nix-2.35.1'
building '/nix/store/0h1vh180l23c7a9zq2qcylzcc09v6vj5-user-environment.drv'...

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo HOME=/var/root /nix/store/ca53kcnn27yx7psipfvb7bw05sw54237-nix-2.35.1/bin/nix-env -i /nix/store/d2ljjimry90przf7g61xc0x4j9k4kxvy-nix-manual-2.35.1-man

to install Nix man pages in to the default profile

installing 'nix-manual-2.35.1-man'
building '/nix/store/yzm4fxcc2azq9pxkamhcdv6c93z5q7f9-user-environment.drv'...

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo HOME=/var/root /nix/store/ca53kcnn27yx7psipfvb7bw05sw54237-nix-2.35.1/bin/nix-env -i /nix/store/xig2alhf611w1pan6n4wdqjmz74avgbz-nss-cacert-3.123

to install a bootstrapping SSL certificate just for Nix in to the default profile

installing 'nss-cacert-3.123'
building '/nix/store/510v2dkcrnj1xv87fh9ii1v65v9dnrif-user-environment.drv'...

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo HOME=/var/root NIX_SSL_CERT_FILE=/nix/var/nix/profiles/default/etc/ssl/certs/ca-bundle.crt /nix/store/ca53kcnn27yx7psipfvb7bw05sw54237-nix-2.35.1/bin/nix-channel --update nixpkgs

to update the default channel in the default profile

unpacking 1 channels...

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo install -m 0644 /var/folders/c3/1jkjmwxx5vncr00sw0gklknr0000gp/T/tmp.9Qts9gtjMe/nix.conf /etc/nix/nix.conf

to place the default nix daemon configuration (part 2)


~~> Setting up the nix-daemon LaunchDaemon

---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo /usr/bin/install -m u=rw,go=r /nix/var/nix/profiles/default/Library/LaunchDaemons/org.nixos.nix-daemon.plist /Library/LaunchDaemons/org.nixos.nix-daemon.plist

to set up the nix-daemon as a LaunchDaemon


---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo launchctl load /Library/LaunchDaemons/org.nixos.nix-daemon.plist

to load the LaunchDaemon plist for nix-daemon


---- sudo execution ------------------------------------------------------------
I am executing:

    $ sudo launchctl kickstart -k system/org.nixos.nix-daemon

to start the nix-daemon

Alright! We're done!
Try it! Open a new terminal, and type:

  $ nix-shell -p nix-info --run "nix-info -m"

Thank you for using this installer. If you have any feedback or need
help, don't hesitate:

You can open an issue at
https://github.com/NixOS/nix/issues/new?labels=installer&template=installer.md

Or get in touch with the community: https://nixos.org/community

---- Reminders -----------------------------------------------------------------
[ 1 ]
Nix won't work in active shell sessions until you restart them.

Press enter/return to acknowledge.



```
  
</details>

Then restart your shell.

Verify:

```bash
nix --version
```
> nix (Nix) 2.35.1

<image src=images/disk-utility-nix.png width=50% height=50% > </image>

Obelisk uses Nix for reproducible builds and dependency management. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets), [\[developer....ndroid.com\]](https://developer.android.com/samples/)

***

## 2. Clone Obelisk

```bash
git clone https://github.com/obsidiansystems/obelisk.git
cd obelisk
```

Enter the development environment:

```bash
nix-shell
```
<details><summary>😧 Log</summary>

```lua
unpacking 'https://github.com/reflex-frp/reflex-platform/archive/f231e2425ac92339b8491cdd970930d63d9ad1ad.tar.gz' into the Git cache...
unpacking 'https://github.com/obsidiansystems/nixpkgs/archive/22cf53eb29f52af963398de744c422d6fe15a3d4.tar.gz' into the Git cache...
unpacking 'https://github.com/hercules-ci/gitignore.nix/archive/7415c4feb127845553943a3856cbc5cb967ee5e0.tar.gz' into the Git cache...
copying path '/nix/store/6w31h3gy9a6f2nikjh4qjgwrs8aivxsn-bash-5.1-p16' from 'https://cache.nixos.org'...
copying path '/nix/store/vfqi6wdsw47sifqz7zi689ass6kyxvih-gnumake-4.3' from 'https://cache.nixos.org'...
copying path '/nix/store/7hjyb7lgj5x3ph8h0g0km7c09a90hdh5-cabal2nix-2.19.0.tar.gz' from 'https://cache.nixos.org'...
copying path '/nix/store/p7d68gc28vim9z2v6hshvig1mc26wzia-gawk-5.1.1' from 'https://cache.nixos.org'...
copying path '/nix/store/q7dmrwr28fqrvav3km2nwzrjb1jwb271-gnused-4.8' from 'https://cache.nixos.org'...
copying path '/nix/store/qx7fv5yc380q366gbhh6d3bz2vfdyknm-adv_cmds-119-locale' from 'https://cache.nixos.org'...
copying path '/nix/store/1kyqzdj19w12yf51w30g269y0jgg9dfz-xz-5.2.6' from 'https://cache.nixos.org'...
copying path '/nix/store/fb72q45ljsxqjfzdxb7d92a7iw49kl09-lens-5.0.1.tar.gz' from 'https://cache.nixos.org'...
copying path '/nix/store/f2cyqvdhnd9ncqipz99mpsd572vdqwrv-aeson-2.0.3.0.tar.gz' from 'https://cache.nixos.org'...
copying path '/nix/store/nh6lz0fy1hbkixf1y83813ga26q7j83v-lens-5.0.1-r3.cabal' from 'https://cache.nixos.org'...
copying path '/nix/store/vbcisx90wrx657pa1iapmk38wvrv9p6p-hscolour-1.24.4.tar.gz' from 'https://cache.nixos.org'...
copying path '/nix/store/0kdq95wgya8nhysrfsc29qzp156zpx9p-yaml-0.11.8.0.tar.gz' from 'https://cache.nixos.org'...
copying path '/nix/store/cs98nvhialmb1v1vb908n350mykh836h-aeson-2.0.3.0-r1.cabal' from 'https://cache.nixos.org'...
copying path '/nix/store/aplsbi78ad9i580nfxysfx15f4lrc24p-language-nix-2.2.0.tar.gz' from 'https://cache.nixos.org'...
copying path '/nix/store/3bs6j6a96q59visfqdvnqsaax35csmj8-pcre-8.45' from 'https://cache.nixos.org'...
copying path '/nix/store/zgr8h9n0zsmpn304k2z1scyx9vqzbq0l-97d0b0a367e4c6a52a17c3299439ac7de129da24.patch' from 'https://cache.nixos.org'...
copying path '/nix/store/648bdlavl7b09llwsvgzxlf3kj8di0mg-1482.patch' from 'https://cache.nixos.org'...
copying path '/nix/store/nicg0178dkd9hw9rwknylqksxz71z2xm-369c4a0a54ad08a9e6b0d3bd303fedd7b5e5a336.patch' from 'https://cache.nixos.org'...
copying path '/nix/store/5dyfg66bx9jc1216aslinr4bcx9mq0v6-cabal-host.patch' from 'https://cache.nixos.org'...
copying path '/nix/store/3c0xsj980klrccwabmvf33crknsqz4dl-ghc-8.10.7-src.tar.xz' from 'https://cache.nixos.org'...
copying path '/nix/store/kqy1mi2w8xxk8rw7y9gjb5fawxzqxgfq-libffi-3.4.2' from 'https://cache.nixos.org'...
copying path '/nix/store/swvami08dvmv9ph62r565xsw8446n2il-ansi-wl-pprint-0.6.9.tar.gz' from 'https://cache.nixos.org'...
copying path '/nix/store/2j17zwqki29h364gcnxi17f07sn8n67z-mockery-0.3.5.tar.gz' from 'https://cache.nixos.org'...
copying path '/nix/store/gygchdhnb6k5z598gmqrdg4af6z25rqg-split-0.2.3.5.tar.gz' from 'https://cache.nixos.org'...
********
After a damn while!!!
```
  
</details>

My recommendation: leave it alone and let it finish.
The real question now is:

**How long has nix-shell been running?**

- 5-20 minutes → totally normal.
- 20-60 minutes → still believable.
- 2+ hours → I'd start investigating cache issues.

But from the process list you've shown, you're currently in the middle of a genuine compilation workload, not a freeze. 🚀

The Obelisk command-line tool `ob` will become available. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets), [\[developer....ndroid.com\]](https://developer.android.com/samples/)

***

## 3. Create a New Project

From any directory:

```bash
ob init my-app
cd my-app
```

This generates the standard project structure:

```text
my-app/
├── backend/
├── frontend/
├── common/
├── config/
└── static/
```

The `common` package is where you place code shared by client and server. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets), [\[developer....ndroid.com\]](https://developer.android.com/samples/)

***

## 4. Run Locally

Start the development server:

```bash
ob run
```

Open:

```text
http://localhost:8000
```

Obelisk provides live reload while editing your code. [\[developer....ndroid.com\]](https://developer.android.com/samples/), [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets)

***

## 5. Modify the Frontend

Edit:

```text
frontend/src/Frontend.hs
```

A simple example:

```haskell
{-# LANGUAGE OverloadedStrings #-}

module Frontend where

import Obelisk.Frontend
import Obelisk.Route

frontend :: Frontend (R FrontendRoute)
frontend = Frontend
  { _frontend_head = blank
  , _frontend_body = text "Hello from Obelisk!"
  }
```

Save and refresh the browser. The page updates automatically. [\[developer....ndroid.com\]](https://developer.android.com/samples/)

***

## 6. Build for Android

Install Android SDK and required tooling.

Then build:

```bash
ob android build
```

The build process creates an APK. Obelisk includes Android target support as part of its mobile workflow. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets), [\[developer....ndroid.com\]](https://developer.android.com/samples/)

Install to a connected device:

```bash
adb install app.apk
```

***

## 7. Build for iOS

On macOS:

```bash
ob ios build
```

Open the generated Xcode project and deploy to a simulator or device. Obelisk supports iOS targets alongside Android. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets), [\[developer....ndroid.com\]](https://developer.android.com/samples/)

***

## Is it beginner-friendly?

Honestly: **no**.

If your experience is:

* Flutter → easy
* React Native → moderate
* Obelisk → advanced

You'll need to learn:

* Haskell
* Functional Reactive Programming (Reflex)
* Nix
* Obelisk project structure

before becoming productive. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets)

For a chess app as a personal Haskell project, Obelisk is a great learning experience. For quickly shipping a mobile app, Flutter is considerably easier and has far more tutorials and community support. [\[deepwiki.com\]](https://deepwiki.com/obsidiansystems/obelisk/5-static-assets)
