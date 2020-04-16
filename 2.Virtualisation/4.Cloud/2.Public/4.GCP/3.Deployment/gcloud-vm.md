# Explorer `gcloud` CLI (Optionnel, sert uniquement à tester les commandes gcloud)

* Se connecter à une machine existante avec `gcloud`

```
% gcloud beta compute ssh --zone "us-central1-a" "cb-gcp-test" --project "b300098957"
You do not currently have this command group installed.  Using it 
requires the installation of components: [beta]


Your current Cloud SDK version is: 286.0.0
Installing components from version: 286.0.0

┌─────────────────────────────────────────────┐
│     These components will be installed.     │
├──────────────────────┬────────────┬─────────┤
│         Name         │  Version   │   Size  │
├──────────────────────┼────────────┼─────────┤
│ gcloud Beta Commands │ 2019.05.17 │ < 1 MiB │
└──────────────────────┴────────────┴─────────┘

For the latest full release notes, please visit:
  https://cloud.google.com/sdk/release_notes

Do you want to continue (Y/n)?  Y

╔════════════════════════════════════════════════════════════╗
╠═ Creating update staging area                             ═╣
╠════════════════════════════════════════════════════════════╣
╠═ Installing: gcloud Beta Commands                         ═╣
╠════════════════════════════════════════════════════════════╣
╠═ Creating backup and activating new installation          ═╣
╚════════════════════════════════════════════════════════════╝

Performing post processing steps...done.                                                                                                                                      

Update done!

Restarting command:
  $ gcloud beta compute ssh --zone us-central1-a cb-gcp-test --project b300098957

ERROR: (gcloud.beta.compute.ssh) You do not currently have an active account selected.
Please run:

  $ gcloud auth login

to obtain new credentials, or if you have already logged in with a
different account:

  $ gcloud config set account ACCOUNT

to select an already authenticated account to use.

```

:pushpin: Creer sa cle SSH en se connectant a la machine

```
% gcloud beta compute ssh --zone us-central1-a cb-gcp-test --project b300098957

WARNING: The public SSH key file for gcloud does not exist.
WARNING: The private SSH key file for gcloud does not exist.
WARNING: You do not have an SSH key for gcloud.
WARNING: SSH keygen will be executed to generate a key.
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/b300098957/.ssh/google_compute_engine.
Your public key has been saved in /Users/b300098957/.ssh/google_compute_engine.pub.
The key fingerprint is:
SHA256:SAjs2IsFnkjdn9KOjaimMzkEOD0SBTl8OKeuZ6sE3dg b300098957@ramena
The key's randomart image is:
+---[RSA 2048]----+
|o== .            |
|==.= o           |
|=O* . + .        |
|B=*+ o =         |
|+=ooE B S        |
|oo.. o o         |
|oo.              |
|Boo              |
|=B..             |
+----[SHA256]-----+
Updating instance ssh metadata...⠶Updated [https://www.googleapis.com/compute/beta/projects/b300098957/zones/us-central1-a/instances/cb-gcp-test].                            
Updating instance ssh metadata...done.                                                                                                                                        
Waiting for SSH key to propagate.
Warning: Permanently added 'compute.2839761481240567167' (ECDSA) to the list of known hosts.
Welcome to Ubuntu 16.04.2 LTS (GNU/Linux 4.10.0-27-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  Get cloud support with Ubuntu Advantage Cloud Guest:
    http://www.ubuntu.com/business/services/cloud

249 packages can be updated.
157 updates are security updates.

New release '18.04.4 LTS' available.
Run 'do-release-upgrade' to upgrade to it.


b300098957@cb-gcp-test:~$ 
```

:pushpin: Fichier de cles SSH crees 

```
% ls -l ~/.ssh/google_compute_*
-rw-------  1 b300098957  staff  1823 Mar 31 21:27 /Users/b300098957/.ssh/google_compute_engine
-rw-r--r--  1 b300098957  staff   399 Mar 31 21:27 /Users/b300098957/.ssh/google_compute_engine.pub
-rw-r--r--  1 b300098957  staff   189 Mar 31 21:28 /Users/b300098957/.ssh/google_compute_known_hosts
```
