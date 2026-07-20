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

### :x: If compilation fails rerun:

```bash
nix-build
```

- [ ] Test

```bash
./result/bin/ob --help
```
<details><summary>🪵 Log</summary>

```text
Usage: ob [-v|--verbose] COMMAND
  Manage Obelisk projects

Available options:
  --no-handoff             Do not hand off execution to project-specific
                           implementation of this command
  -v,--verbose             Be more verbose
  -h,--help                Show this help text

Available commands:
  init                     Initialize an Obelisk project
  deploy                   Prepare a deployment for an Obelisk project
  run                      Run current project in development mode
  profile                  Run current project with profiling enabled
  thunk                    Manipulate thunk directories
  repl                     Open an interactive interpreter
  watch                    Watch current project for errors and warnings
  shell                    Enter a shell with project dependencies or run a
                           command in such a shell. E.g. ob shell -- ghc-pkg
                           list
  doc                      List paths to haddock documentation for specified
                           packages
  hoogle                   Run a hoogle server locally for your project's
                           dependency tree
  internal                 Internal Obelisk commands with unstable APIs
```

</details>

- [ ] in Obelisk directory, get onto the shell

```bash
nix-shell default.nix -A shell
```
```text
these 4 paths will be fetched (3.4 MiB download, 55.9 MiB unpacked):
  /nix/store/s4kx452x9dms6qz41fd9yf8q53k7bkv9-bash-interactive-5.3p9
  /nix/store/wl602np9yz9kw3a9ydpn68nqd63g0xda-libiconv-115.100.1
  /nix/store/99qhf0b1ry7sgfnvz4f071llnz2wgc05-ncurses-6.6
  /nix/store/c144rwm03qgbhwxixhlqpzxgmm2m5q29-readline-8.3p3
copying path '/nix/store/99qhf0b1ry7sgfnvz4f071llnz2wgc05-ncurses-6.6' from 'https://cache.nixos.org'...
copying path '/nix/store/wl602np9yz9kw3a9ydpn68nqd63g0xda-libiconv-115.100.1' from 'https://cache.nixos.org'...
copying path '/nix/store/c144rwm03qgbhwxixhlqpzxgmm2m5q29-readline-8.3p3' from 'https://cache.nixos.org'...
copying path '/nix/store/s4kx452x9dms6qz41fd9yf8q53k7bkv9-bash-interactive-5.3p9' from 'https://cache.nixos.org'...
```

```
[nix-shell:~/Developer/obelisk]$ which ob
```
> /nix/store/q7dazghyvyk3qwbgs253w4r297dirzyj-obelisk-command-0.9.0.1/bin/ob


***

## 3. Create a New Project

From any directory:

```bash
mkdir -p ~/Developer/myapp
cd ~/Developer/my-app
ob init
```
<details>

```text
Cloning into '/private/tmp/nix-shell-85042-2090977474/ob-init-78f913144daa9044/.obelisk/impl'...
HEAD is now at d1250974 Update LICENSE
⇾ Setting up obelisk ✔ Built on /private/tmp/nix-shell-85042-2090977474/ob-init-78f913144daa9044/.obelisk/impl [command]
/private/tmp/nix-shell-85042-2090977474/ob-init-78f913144daa9044/.obelisk/impl: command not cached, building ...
⇾ Setting up obelisk ✔ Built on /private/tmp/nix-shell-85042-2090977474/ob-init-78f913144daa9044/.obelisk/impl [command]
/private/tmp/nix-shell-85042-2090977474/ob-init-78f913144daa9044/.obelisk/impl: skeleton not cached, building ...
Tip: Press Ctrl+E to display full output
⇾ Setting up obelisk ✔ Built on /private/tmp/nix-shell-85042-2090977474/ob-init-78f913144daa9044/.obelisk/impl [skeleton]
✔ Setting up obelisk
✔ Copying project skeleton
An obelisk project has been successfully initialized. Next steps:
  'ob run': Start a development server
  'ob watch': Watch for changes without starting a server
  'ob repl': Load your project into GHCi

```
  
</details>

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
OBELISK_VERBOSE=1 ob run
```
<details><summary>🪵 Log</summary>

```lua
./.obelisk/impl: command not cached, building ...
✔ Built on ./.obelisk/impl [command]

error: evaluation aborted with the following error message: '
       This version of Nixpkgs requires an implementation of Nix with the following features:
       - `builtins.nixVersion` reports at least 2.18

       You are evaluating with Nix 2.11.0, please upgrade:

       - If you are running NixOS, `nixos-rebuild' can be used to upgrade your system.

       - Alternatively, with Nix > 2.0 `nix upgrade-nix' can be used to imperatively
         upgrade Nix. You may use `nix-env --version' to check which version you have.

       - If you installed Nix using the install script (https://nixos.org/nix/install),
         it is safe to upgrade by running it again:

             curl -L https://nixos.org/nix/install | sh

       For more information, please see the NixOS release notes at
       https://nixos.org/nixos/manual or locally at
       /nix/store/c68jza2s5pvrrfzz7sm4z1qcg20bmzp1-nixpkgs/nixpkgs/nixos/doc/manual/release-notes.

       If you need further help, see https://nixos.org/nixos/support.html
       '
will use bash from your environment
this derivation will be built:
  /nix/store/58d0wyy3379c1q7ff50jch9pia0vijl5-ghc-8.10.7-with-packages.drv
building '/nix/store/58d0wyy3379c1q7ff50jch9pia0vijl5-ghc-8.10.7-with-packages.drv'...
/nix/store/r01vspy216cyzw7klcxw4p5b4wa39mn6-reflex-dom-0.6.3.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/rc6dhw68v6gic06b7hbf9qb3ks3cln64-obelisk-asset-manifest-0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/7gn3i81y35w2l5swyqrf672pzci8d2id-obelisk-generated-static-0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/yjxv0r6zpxcia4p82q8vsd43c7y9np2j-tls-session-manager-0.0.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/0fr02rnb25v1bw4ffw0ldk5lskzfba7h-x509-validation-1.6.12/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/arcyaw3kjb91b2hvlf2jbcwxvh7fjspg-x509-store-1.6.9/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/d48nq04zb3aaczyacvr33fqfy71wsyzg-tls-1.5.8/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/k8ls1xcwykp32ic0wb82pd87zm9id315-warp-tls-3.3.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/faclqkas1gr3jvqi3wsazpgyyj6baci4-utf8-string-1.0.1.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/jvblc1dhrl4jgqbqy56nkb07rs61qz35-universe-some-1.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/h0izyi9f2qm8bvzk3m4hfww6rp73fbak-universe-reverse-instances-1.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/n20cgnfwljl8p3c5cyxwimwyl9lqd2ax-universe-instances-extended-1.1.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/r8rf2d64mc4ash64vxmyqsksl5jwf0xi-universe-base-1.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/88zx6z5hcic4s21lyiq6dzy5bdqv6qjk-universe-1.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/sbca5wir8lkv3fq5g1zrafdyy4wdg3f0-th-extras-0.0.0.6/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/cqmrcags1ni5akqyq96hxrbw1p4jzjq4-tabulation-0.1.0.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/kh9by86p07mzl5pzv97b3k4a83gn6i7m-either-5.0.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/f13brjkpgqxph8fxwrlgb85j2av0rngd-obelisk-route-0.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/gwvdzvnn7x90cjzpqs4d7m394ynwnsf9-obelisk-frontend-0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/h6f3l46kp308hr5qh3ympf2vzs9wn7yd-obelisk-executable-config-lookup-0.1.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/8lngybw8mv9yn62cjygx8glmawf74fyb-prim-uniq-0.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/sg5nircbr6jcfcrkrgb1sln405lmkmhh-patch-0.0.8.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/f9g84p62s1dayxnq0j8vhmwq13js0wij-monoidal-containers-0.6.3.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/9xmqcnrwlfy5wvdv9dnvmcl0m5pcvkpc-mmorph-1.1.5/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/7fhjkx999w1sqrapqfsnrrw73sk3f82l-MemoTrie-0.6.10/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/s71qyls41p8zjmfv4z0w7c7yzj0zk10j-th-expand-syns-0.4.10.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/fgpyi9pxkcazcpd681fdamhki0vy6x0x-th-reify-many-0.1.10/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/83xzn28xjrljrjyf9hbq35hg070bzr7c-th-lift-instances-0.1.19/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/sx93j9rw9v1cj1w8m6yfs9hha1jl6ajn-th-lift-0.8.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/l72x5fddq1pwb6cby6zjanxbyy2q11hi-th-orphans-0.13.13/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/dqigw6g4g73mh5vmv9ynw4jgx6lk4pvr-haskell-src-meta-0.8.10/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/663jvnrjsh2b7sbsvsdcxl70q9gdy9vd-haskell-src-exts-1.23.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/vc7p8sc6z9zyvd0jcqhpbdnqjdl7k938-reflex-0.9.2.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/rv8j38d2ycg881kficak6i11ja29dly7-keycode-0.2.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/qrrq96wxzrzh4sc1rqkw60ic9mkkjqz5-exception-transformers-0.4.0.11/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/g5g0xzh21c52k87w6wsfd0lg7kc4g0lh-dependent-map-0.4.0.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/qxxm2g8pimmvg5blgyzwfkv152h075da-commutative-semigroups-0.1.0.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/3plwhabj4kncrk5qy13zjc7cblyc5j9l-bimap-0.4.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/wm3hqcq6qzs0h9s4yznxpgn1bpc0f5hk-reflex-dom-core-0.8.0.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/1fb4mw8361ziwiyjq61h4i286wn7iqlp-obelisk-executable-config-inject-0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/kwbfvq7r65hrnwbddsic4yixjzl004pv-data-default-instances-old-locale-0.0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/4rccbmb7mcvc979439vghpvgn4cqr80m-data-default-instances-dlist-0.0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/2nz2fylk9jmp7p6yzyhprs9fqn8c4sv9-data-default-instances-containers-0.0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/h5asvm6cv2fpdmimw03s1fadvqbm56bi-data-default-0.7.1.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/akbsxd2gsbyld556qpv1ii7n1j2rgani-categories-1.0.7/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/qw5zm7k6c9ik4kzvsnlbmkrmgrwb5l4q-obelisk-backend-0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/6w3p6jvrgvmvqh9yc1pkf38xmp26ja0q-openssl-streams-1.2.3.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/sv7kqfmaiacp6g8nqx4w2a9a2v9gg0mm-io-streams-haproxy-1.0.1.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/91ycdjvxxcrdnyz7z3dwqlwx54nvhs42-snap-server-1.1.2.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/4diiw34s4blb28mksg0jihlfd7i3x7am-cryptohash-0.11.9/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/swf8338f75s6y8xpmcr44vnv88d5kwd2-pwstore-fast-2.4.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/f220rfj7c1n08ns1s72mh5p3w0xwvg27-math-functions-0.3.4.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/yd0y6yvzbgkkingpnfyl221lh9mk14x6-mwc-random-0.15.0.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/92l3q3d17hkq0ppbxsr4nli817lgjjm7-xmlhtml-0.2.5.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/7d27d2df50l8a6g3g6dsg7kn4wkkh1jz-map-syntax-0.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/nkqaszpxmvcpgdfhw7x9fbwiv5nd0h0b-heist-1.1.1.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/hy0k4a4hjnxaxz2iw92cdhr151n8kl9i-directory-tree-0.12.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/9wx0p2pvb67il06r18fqlv75zks56hs5-configurator-0.3.0.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/8kykg3gzyc7k38par4drjkx61z042f67-skein-1.0.9.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/5dsgfw2g67i6gl6r8mlcbq6zfm0l8jcz-setenv-0.1.1.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/469bxn385gf7vvvcqhx3jijlcg3wnabl-crypto-api-0.13.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/xck2fnn6y927aiqckk9mh1njbagswsyp-crypto-random-0.0.9/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/df9jfwr5i6ls90gq8syr500j4j0k3ffd-cprng-aes-0.6.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/ha83l3l44j777q23yr1n2jjnhj5a7ynw-securemem-0.1.10/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/a4gc08kjihn18h513rmg7i9h4fzlwzam-crypto-cipher-types-0.0.9/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/jyix687vnlxpz05kbkmrlyb3v3zhcii5-byteable-0.1.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/7bipaf204wcwqq5vwravklbscb2zygim-cipher-aes-0.2.11/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/91kmmyl4288z4vzajf50q3n16i8aq9r8-clientsession-0.9.1.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/v4gdw1kkq8c8bw1pk70g742z6dcwx8sp-cereal-0.5.8.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/c0pwh1zzw7ycwh0psjlmx7y84dksdg4h-snap-1.1.3.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/wf46j7q3aqnf0zm9029aixfgvya38q2v-regex-base-0.94.0.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/a9nl9rhbj1ng656plkcbacwnsykk4cji-regex-posix-0.96.0.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/6b76n4pi9w8hin8pijydr5vfxpfmj218-readable-0.3.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/ifxqp1wr8a1iyk3f1b7ddfa0h95hmiw7-monad-control-1.0.3.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/gp8lbi4h1ka6b6ajjya2wpqsc6mp160i-lifted-base-0.2.3.12/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/vx26byimxi8q3daif5ph3k4z12g46p5x-zlib-bindings-0.1.1.5/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/l1a6zc3i2b04jzwjsyp8hbx1i6c6n7jv-io-streams-1.5.2.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/g27m2p35x204krf0sz5q75hwff8clhg6-snap-core-1.0.5.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/vwdlaq6lfd8sjcb458w2z0dp24dby3qm-obelisk-snap-extras-0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/ksvpf0gawi93sy9g9liq3lpszsyb3j8v-obelisk-asset-serve-snap-0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/4z507kw7r0p70wj230mpqkiwbqcis2z2-megaparsec-9.2.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/1z76bw6wpfny8fxr3ihlpk32dnvsjlwz-modern-uri-0.3.4.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/d7i01cp4p1wgs205y8sp85skvz00dfmr-pem-0.2.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/952dgr1nhx92rw298l3x88yywy9p8ha9-asn1-parse-0.9.5/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/krr2l586pgxny6p0xxsbrznq9pbdfxr6-hourglass-0.2.12/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/0ppwafn44qgqbx7lrp77cv24sy4i6n0w-asn1-types-0.3.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/7xlhz0vkk77b8jh29dl81rghscm8lb5r-asn1-encoding-0.9.6/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/d2ihqfmcbnqrj9fm6c93q2qi831vibi5-x509-1.7.7/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/0mnsl85f7gdq5zc4jcv71jbcw8r6c1gb-simple-sendfile-0.2.30/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/vj26n0vdccwfcrxaci0jpwinqk6ihymc-bsb-http-chunked-0.0.0.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/389jd4irmjm0nf2xv5zi1gcn0rrlcg1z-warp-3.3.21/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/c2m8vcnn5hp0ns5f2v15cs0klbmsnbnk-HUnit-1.6.2.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/428b1w4bv29r5dgzxqmdcc8dmfnkgnh2-time-manager-0.0.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/60nbiqhs49sdzfsgf120mgjqhmh98jyl-psqueues-0.2.7.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/mrh94azn9a444zhjhrhpnkx5jxf0gzha-network-byte-order-0.1.6/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/8mggwiifqvff78h7gwwb146m4m8wzbj9-http2-3.0.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/07nm9jxgz9q1yzyamhpzghqgy3i7jxfk-wai-extra-3.1.12.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/xsq3q372dw1qii2hw3rfrmc3zb7fkfk8-ansi-terminal-0.11.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/5bipl8031x7lv9zggjmda28bx3k3hs33-ansi-wl-pprint-0.6.9/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/p3z4j0dp5dq3jh51qs40pdlswn6zx5j6-optparse-applicative-0.16.1.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/sldr5prj867lp8bg9yq5wkv5j5pwfklg-http-date-0.0.11/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/aqirv73rkbx1k6nwsz7bwif670gfckpa-memory-0.16.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/0a00fkckwaysg6wnd1sqas7m5brh4p4z-basement-0.0.15/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/f2sv2m7il7p1wclmb9wwz3d44l28wyyf-cryptonite-0.29/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/78mgq0sbki9gcbrm4hm80zp6myk738l6-blaze-markup-0.8.2.8/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/7d2k2bvi9plr6gmpbb9dbngp52n7wanr-blaze-html-0.9.1.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/xpqfjqdv0g81yw31qp41x617i9x51awg-wai-app-static-3.1.7.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/s9y8z7k50zirzvzw93nicy8db275rmda-file-embed-0.0.15.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/4fkh5q0593wfszc75sz8h1lznwkmbxv3-SHA-1.6.4.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/xmgymfzjak35r9jw5rh2p4y0p5k5dk76-entropy-0.4.1.7/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/xm4fzpnvm3m6qmjynyslvc297jlnx1vm-bytestring-builder-0.10.8.2.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/a2kshmhfwn37jzc97inzdkld39qvfks7-websockets-0.12.7.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/qi6gq9p9d5fzcqc4b1zbf1wihvia0298-wai-websockets-3.0.1.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/r65d08gizjmzz1w3r3hmcgx43lyzykj3-jsaddle-warp-0.9.8.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/npk0xbych19kvq4kd1xlaksypan9glyv-old-time-1.1.0.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/r21hl24bmlvbrqb6fr0jyv99cw0qw4wb-unix-time-0.4.7/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/flf7ml09pqkbn1if77806hfcj5k9bfpw-unix-compat-0.5.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/gya18lpvinsr6c3fy817dndwznvndqw8-easy-file-0.2.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/sf71921dqq119pbk963jwb40f8kf862r-fast-logger-3.1.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/gyhijc06bnzgm4ywkv7id4zx1dggvlx4-wai-logger-2.4.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/j24342pd4rp19an9x1pdafdn5ll9qv4m-vault-0.3.1.5/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/zhpfa8x7997iyaalr7p4qwj97jcws7j9-wai-3.2.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/2yvpy0hq3zcjn9j1m33jy8apvr3k05yf-safe-exceptions-0.1.7.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/c8s7hsdlsxbnsmrq8a0ak1x33rgrcbad-unliftio-0.2.24.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/as33mvpvdbw9f6xhy05jgs5ar1gl8dp2-typed-process-0.2.10.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/ykzw0ijqlzjbl09xf5cfw0g4s5py2r8i-conduit-extra-1.3.6/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/sd1l68nkkwyh7xa5m0752zs93sjmw3yw-resourcet-1.2.4.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/khb4lmig0sd5a39fqpgf06rfykfvpdlv-vector-algorithms-0.8.0.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/3dp5baampmfm8cpnsgc9n14l1qhzhxir-mono-traversable-1.0.15.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/y9602ngkfxzakr88r6zvmq1rwvyvyrz2-conduit-1.3.4.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/xp0d6llr0d2pfwwvjj50hc48r2b73mg6-http-reverse-proxy-0.6.0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/wja1khxvwzwl2zjzh21s7c09gpjapwsi-zlib-0.6.3.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/dh7qmas5bpk6mdm92fi4jz068qjbwg1g-streaming-commons-0.2.2.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/i1ndbq0v7x2dgd7ym78njij64slgqnmc-th-compat-0.1.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/hlhbpkkiwsic815wkjhxlbczi5ild8r7-network-uri-2.6.4.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/ik1mrpng7lza1m3zd8b2x875shvpnlh6-mime-types-0.1.0.9/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/52xl09p96y28wlpakawmlf3kc1cynich-appar-0.1.8/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/4s6kmdc19nq4qsipiym6wxiz4qpwacg7-iproute-1.7.12/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/3pnlrdlfj4yg6rcwjjs2zxzj2bxi7skp-blaze-builder-0.4.2.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/1r74jqxyx7xw92mbf2374wq65azandcb-async-2.2.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/iw7zlkp6nccm5qbf06dsrg4n18grm18h-http-client-0.7.13.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/ys3xrhxk4x0djb0psjm9sznry6iq3yy7-network-3.1.2.7/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/82dlinjixxcpq1x65brh21bxkmb628zj-HsOpenSSL-0.11.7.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/kfl14iyv9s38qqicxf68yv38qh0lni0x-unliftio-core-0.2.0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/k2bvg175m78p7y1yw6npajrgdzdmw3yi-ref-tf-0.5.0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/yrgpbggscw70rcwrrclfry2l5ii6y3q3-reflection-2.1.6/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/r36lri94acd8j7vlbb6cv3am7cfhg6z8-parallel-3.2.2.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/pib80ndcn0f3rgnlgi91aqm6839ny212-invariant-0.5.6/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/xb1md53s1zvxq51b9s46vlsjv9j2wn4r-adjunctions-4.4.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/d7sn60cab7jf53nix0zi2rv0fqyywrb7-kan-extensions-5.2.5/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/wriz04nggrrvx9vmrjr4r9056zk5n2ix-transformers-base-0.4.6/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/g3naa6fvqg6lj19zbw13djiq878b82ym-profunctors-5.6.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/pl6rycbgq3whmcwdp81lg6z09nn0bz8r-free-5.1.9/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/8n5qhibvggby7kdk76y6v84fnj3vf77p-lens-5.0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/jlx3rn44gpzwrlggabbz9mgrfqrjzcrf-case-insensitive-1.2.1.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/bbw8pqcg0i8nhl8hfqpaq83m4jmps6bx-http-types-0.12.3/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/qi6zrzvxfrm7rf9nq9pninppd2zl1vyz-base64-bytestring-1.2.1.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/h08ydw872ddmyw6r6c10h1k664h5wm43-jsaddle-0.9.8.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/j1gsbvfimmspfi21q3mfw2hak795flrv-jsaddle-dom-0.9.4.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/r421iv2l8xac72yf4z2y7gg60y0pylcg-ghcjs-dom-jsaddle-0.9.4.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/j24wfc480qpf49fi37vm8l9an57glmmd-ghcjs-dom-0.9.4.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/2wgrydp5kpxlnwswb1g6324gq72c5bhm-dependent-sum-template-0.1.2.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/sc21173m78ijilbir1l83lmbhgk5d7jf-some-1.0.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/wb7qk09ash7bj982rpnv7wc1ksnz5fhx-witherable-0.4.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/7ay9a5ar6y07c95bgmm98lnvpik1bv7r-uuid-types-1.0.5/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/ahf7q0pg10vpk56fzd4bizi4739k0wqj-time-compat-1.9.6.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/sr2y70c9c4wx50sm08qwcx0lgbqm54i5-text-short-0.1.5/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/giqd0qvyp1flkgc964cpp2z7clmj6p0i-strict-0.4.0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/mb9k74csxgs0x5vn8n624y0i7sffrfsf-assoc-1.0.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/8h43gziaxr9w4bx9i6h34x6mshbfz85y-these-1.1.1.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/8k64sgr2i7zdiirr5framxxm94vfk2dc-StateVar-1.2.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/zjgp2mr4faqcsp3z9l1zd2mbg08yfs37-contravariant-1.5.5/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/r8mxjhgn1s1vfab8ijsimsmch3vs6qfi-th-abstraction-0.4.3.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/sylr3ffn93j55j9fva6cmarflhv01n26-distributive-0.6.2.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/apwrjsdrlf5mj5vysrl8a0079cpprlbb-comonad-5.0.8/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/nclj5r1vp782fyng2mf27d4yrmgby99b-bifunctors-5.5.12/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/9xhmf00y6ylfq2cpdsb875rhs5aahgik-semigroupoids-5.3.7/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/yxfn2xxnzzb99qx4kjc9dvc1b0w78y4q-vector-0.12.3.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/czfsgq9k5wngiv6654jgkhx1lv8c7q79-unordered-containers-0.2.17.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/snaymy84l8261janmml7djd5sxyhnhgm-tagged-0.8.6.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/w97qpvrbikvdz0syicnsd2fzx51d7ipy-indexed-traversable-instances-0.1.1.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/wyynkg06ykivrvg4niv3mz9h74adddlm-semialign-1.2.0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/6nq9plymijdmipd12bdl8rj66f8qvq3h-splitmix-0.1.0.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/sn0zsm3yqzwl39ypxhj0xfrs2idkki64-random-1.2.1.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/zl4dqq0pv6vvm8aid8yqjflh2pzh9vq3-QuickCheck-2.14.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/5indjz3vy6f4bhgv1bxksd489d55v78w-base-orphans-0.8.7/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/7295fmc70bl8bc56x9hcj06m6irczzk4-OneTuple-0.3.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/l8w36wnmcfdzg9hp43hx38183aafg0hh-indexed-traversable-0.1.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/73a8l0rj2c2025bzp89ll0ssmvlyfhhb-dlist-1.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/b2q2szqy4jjrdpmci7kizw3xqkpz3pgg-data-fix-0.3.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/n3szr8r8w0bdi59f85yv5nrkfkb9b7ir-base-compat-0.11.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/qlvnr36689avspnng6s4ns5zj226rk20-base-compat-batteries-0.11.2/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/0229gcri8m3f0ddnfj0rbxm0wrd9mkh4-aeson-2.1.1.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/4zmqk7s802angsqj25k0nbc8f828dgaw-transformers-compat-0.6.6/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/4aiq6kwrwkwy5rr9dbcxk78kzdwpw6ap-constraints-0.13.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/ll10d8g4jhza4zz3amb42a4748xmw4ps-constraints-extras-0.4.0.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/krzs8yrj5rw1g2sjh565l24r1331szp7-dependent-sum-0.7.2.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/zw7hvkxwii12i95pqwiikymns513g1i8-cookie-0.4.5/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/xnpr70xwv7vsavyxkjiby2b08jk3fij3-primitive-0.7.3.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/ijzpw87wgv83bjag2vn1rm6m0mvvsjf5-integer-logarithms-1.0.3.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/31n61k1lm4dqag55a8p1j7w4ahzywnpv-hashable-1.3.5.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/89c291hq5wdz9ar0kn2r84gnp98ra6zg-scientific-0.3.7.0/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/q6k3dnfz2fkzlvc6ba8c71rc6587vqj5-attoparsec-0.14.4/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
/nix/store/0wh1ysvm10x95n08g26i6x1gyds7rqyp-obelisk-run-0.1/nix-support:
propagated-build-inputs: /nix/store/xlaz1zdjqkhkr7afxrpjzllivfl67w5x-jsaddle-wkwebview-0.9.8.2/nix-support/propagated-build-inputs
Warning: haddock-interfaces: /nix/store/xm4fzpnvm3m6qmjynyslvc297jlnx1vm-bytestring-builder-0.10.8.2.0/share/doc/aarch64-osx-ghc-8.10.7/bytestring-builder-0.10.8.2.0/html/bytestring-builder.haddock doesn't exist or isn't a file
Warning: haddock-html: /nix/store/xm4fzpnvm3m6qmjynyslvc297jlnx1vm-bytestring-builder-0.10.8.2.0/share/doc/aarch64-osx-ghc-8.10.7/bytestring-builder-0.10.8.2.0/html doesn't exist or isn't a directory
Warning: haddock-interfaces: /nix/store/q6k3dnfz2fkzlvc6ba8c71rc6587vqj5-attoparsec-0.14.4/share/doc/aarch64-osx-ghc-8.10.7/attoparsec-0.14.4/html/attoparsec.haddock doesn't exist or isn't a file
Warning: haddock-html: /nix/store/q6k3dnfz2fkzlvc6ba8c71rc6587vqj5-attoparsec-0.14.4/share/doc/aarch64-osx-ghc-8.10.7/attoparsec-0.14.4/html doesn't exist or isn't a directory
Warning: haddock-interfaces: /nix/store/wssd4hvhv0r43r8vl7nqkza4rv1a4bh7-fail-4.9.0.0/share/doc/aarch64-osx-ghc-8.10.7/fail-4.9.0.0/html/fail.haddock doesn't exist or isn't a file
Warning: haddock-html: /nix/store/wssd4hvhv0r43r8vl7nqkza4rv1a4bh7-fail-4.9.0.0/share/doc/aarch64-osx-ghc-8.10.7/fail-4.9.0.0/html doesn't exist or isn't a directory
Warning: haddock-interfaces: /nix/store/q6k3dnfz2fkzlvc6ba8c71rc6587vqj5-attoparsec-0.14.4/share/doc/aarch64-osx-ghc-8.10.7/attoparsec-0.14.4/html/attoparsec.haddock doesn't exist or isn't a file
Warning: haddock-html: /nix/store/q6k3dnfz2fkzlvc6ba8c71rc6587vqj5-attoparsec-0.14.4/share/doc/aarch64-osx-ghc-8.10.7/attoparsec-0.14.4/html doesn't exist or isn't a directory
Warning: haddock-interfaces: /nix/store/r421iv2l8xac72yf4z2y7gg60y0pylcg-ghcjs-dom-jsaddle-0.9.4.0/share/doc/aarch64-osx-ghc-8.10.7/ghcjs-dom-jsaddle-0.9.4.0/html/ghcjs-dom-jsaddle.haddock doesn't exist or isn't a file
Warning: haddock-html: /nix/store/r421iv2l8xac72yf4z2y7gg60y0pylcg-ghcjs-dom-jsaddle-0.9.4.0/share/doc/aarch64-osx-ghc-8.10.7/ghcjs-dom-jsaddle-0.9.4.0/html doesn't exist or isn't a directory
Warning: haddock-interfaces: /nix/store/7gn3i81y35w2l5swyqrf672pzci8d2id-obelisk-generated-static-0/share/doc/aarch64-osx-ghc-8.10.7/obelisk-generated-static-0/html/obelisk-generated-static.haddock doesn't exist or isn't a file
Warning: haddock-html: /nix/store/7gn3i81y35w2l5swyqrf672pzci8d2id-obelisk-generated-static-0/share/doc/aarch64-osx-ghc-8.10.7/obelisk-generated-static-0/html doesn't exist or isn't a directory
Warning: haddock-interfaces: /nix/store/jvblc1dhrl4jgqbqy56nkb07rs61qz35-universe-some-1.2/share/doc/aarch64-osx-ghc-8.10.7/universe-some-1.2/html/universe-some.haddock doesn't exist or isn't a file
Warning: haddock-html: /nix/store/jvblc1dhrl4jgqbqy56nkb07rs61qz35-universe-some-1.2/share/doc/aarch64-osx-ghc-8.10.7/universe-some-1.2/html doesn't exist or isn't a directory
Loading ghci -ignore-dot-ghci -no-user-package-db -hide-all-packages -package-env - -DOBELISK_ASSET_PASSTHRU -F -pgmF /nix/store/q7dazghyvyk3qwbgs253w4r297dirzyj-obelisk-command-0.9.0.1/bin/.ob-wrapped -optF __preprocessor-apply-packages -optF /Users/valiha/Developer/obelisk/my-app/backend/backend.cabal -optF /Users/valiha/Developer/obelisk/my-app/common/common.cabal -optF /Users/valiha/Developer/obelisk/my-app/frontend/frontend.cabal -optF /nix/store/pyn57knhd98vbk4gjxph0a264r7d8rn4-asset-manifest-haskellManifest/obelisk-generated-static.cabal -i/Users/valiha/Developer/obelisk/my-app/backend/src':/Users/valiha/Developer/obelisk/my-app/common/src:/Users/valiha/Developer/obelisk/my-app/frontend/src:/nix/store/pyn57knhd98vbk4gjxph0a264r7d8rn4-asset-manifest-haskellManifest/src' -package-id base-4.14.3.0 -package-id jsaddle-0.9.8.2-6A4fe7QPSTbD0xStKNutFO -package-id lens-5.0.1-3RpbhDeZn3QLRwBj1CjP46 -package-id obelisk-asset-manifest-0.1-BgCoblmajvbDOlbB7AJXj9 -package-id obelisk-backend-0.1-7CqUq8VHIHDG5SKyoqLcF9 -package-id obelisk-executable-config-lookup-0.1.1-94gL2P32DeD7L4S96I20pX -package-id obelisk-frontend-0.1-iZ7UYWJPRxAJI6tamNIQp -package-id obelisk-route-0.2-ITymGlCiQ95DN25bTAaB6g -package-id obelisk-run-0.1-6AysYd7kUFq5ubpFuoGNjh -package-id reflex-dom-core-0.8.0.0-1MiVef1BDPPLefYcFAvTds -package-id template-haskell-2.16.0.0 -package-id text-1.2.4.1 -XNoImplicitPrelude -ghci-script /private/tmp/nix-shell-85042-2090977474/ob-ghci-1a0753177108097c/.ghci ...
GHCi, version 8.10.7: https://www.haskell.org/ghc/  :? for help
Module Prelude not found
Ok, no modules loaded.
[1 of 5] Compiling Common.Api       ( /Users/valiha/Developer/obelisk/my-app/common/src/Common/Api.hs, interpreted )
[2 of 5] Compiling Common.Route     ( /Users/valiha/Developer/obelisk/my-app/common/src/Common/Route.hs, interpreted )
[3 of 5] Compiling Backend          ( /Users/valiha/Developer/obelisk/my-app/backend/src/Backend.hs, interpreted )
[4 of 5] Compiling Obelisk.Generated.Static ( /nix/store/pyn57knhd98vbk4gjxph0a264r7d8rn4-asset-manifest-haskellManifest/src/Obelisk/Generated/Static.hs, interpreted )
[5 of 5] Compiling Frontend         ( /Users/valiha/Developer/obelisk/my-app/frontend/src/Frontend.hs, interpreted )
Ok, five modules loaded.
Loaded GHCi configuration from /private/tmp/nix-shell-85042-2090977474/ob-ghci-1a0753177108097c/.ghci

All good (5 modules, at 08:51:24)
Running test...

Frontend running on http://localhost:8000/
Publicly accessible route: http://localhost:8000
```

</details>

🎉 **You got it working.**

The key lines are:

```text
Frontend running on http://localhost:8000/
Publicly accessible route: http://localhost:8000
```

and later:

```text
GET /static/main.css HTTP/1.1 200
GET /static/lib.js HTTP/1.1 200
GET /static/obelisk.jpg HTTP/1.1 200
```

Those `200` responses mean the browser successfully connected to the Obelisk development server and downloaded the assets.

### What happened?

You had **two separate issues**:

1. **Nix config**

```text
experimental Nix feature 'nix-command' is disabled
```

Fixed by adding:

```text
experimental-features = nix-command flakes
```

to:

```text
/etc/nix/nix.conf
```

2. **Long first build**

Obelisk had to build:

* GHC 8.10.7
* cabal2nix
* obelisk-command
* your project dependencies

which took quite a while on a fresh setup.

### Why localhost appeared empty earlier

At that time the project was still compiling.

Now we can see:

```text
All good (5 modules)
```

and

```text
Frontend running on http://localhost:8000/
```

which means GHCi, the backend, and the frontend all loaded successfully.

### For future projects

Your workflow is now:

```bash
cd my-app

nix-shell default.nix -A shell

ob run
```

Then open:

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
