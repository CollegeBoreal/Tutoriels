# OCI CLI

Mac / Linux

```
bash -c "$(curl -L https://raw.githubusercontent.com/oracle/oci-cli/master/scripts/install/install.sh)"
```

When installing, follow the below in trying to install the OCI config files in `~/.oci` folder

```
===> In what directory would you like to place the install? (leave blank to use '/Users/b300098957/lib/oracle-cli'): ~/.oci/lib/oracle-cli
-- Creating directory '/Users/b300098957/.oci/lib/oracle-cli'.
-- We will install at '/Users/b300098957/.oci/lib/oracle-cli'.

===> In what directory would you like to place the 'oci' executable? (leave blank to use '/Users/b300098957/bin'): ~/.oci/bin           
-- Creating directory '/Users/b300098957/.oci/bin'.
-- The executable will be in '/Users/b300098957/.oci/bin'.

===> In what directory would you like to place the OCI scripts? (leave blank to use '/Users/b300098957/bin/oci-cli-scripts'): ~/.oci/bin/oci-cli-scripts
-- Creating directory '/Users/b300098957/.oci/bin/oci-cli-scripts'.
-- The scripts will be in '/Users/b300098957/.oci/bin/oci-cli-scripts'.

===> Currently supported optional packages are: ['db (will install cx_Oracle)']
What optional CLI packages would you like to be installed (comma separated names; press enter if you don't need any optional packages)?: 

...

===> Modify profile to update your $PATH and enable shell/tab completion now? (Y/n): Y

===> Enter a path to an rc file to update (leave blank to use '/Users/my-user/.bash_profile'): ~/.zshrc
-- Backed up '/Users/b300098957/.zshrc' to '/Users/my-user/.zshrc.backup'
-- Tab completion set up complete.
-- If tab completion is not activated, verify that '/Users/my-user/.zshrc' is sourced by your shell.



```

Set `.zshrc` file

```
# Oracle OCI PATH
export OCI_HOME=~/.oci
export PATH="$OCI_HOME/bin":$PATH
[[ -e "$OCI_HOME/lib/oracle-cli/lib/python3.8/site-packages/oci_cli/bin/oci_autocomplete.sh" ]] && source "$OCI_HOME/lib/oracle-cli/lib/python3.8/site-packages/oci_cli/bin/oci_autocomplete.sh"
```

https://console.ca-toronto-1.oraclecloud.com/

Take all the below info from the console i.e. OCID and Tenancy OCID:


```
% oci setup config
    This command provides a walkthrough of creating a valid CLI config file.

    The following links explain where to find the information required by this
    script:

    User API Signing Key, OCID and Tenancy OCID:

        https://docs.cloud.oracle.com/Content/API/Concepts/apisigningkey.htm#Other

    Region:

        https://docs.cloud.oracle.com/Content/General/Concepts/regions.htm

    General config documentation:

        https://docs.cloud.oracle.com/Content/API/Concepts/sdkconfig.htm


Enter a location for your config [/Users/b300098957/.oci/config]: 
Enter a user OCID: ocid1.user.oc1..aaaa-----------------------------------------------4hjfq
Enter a tenancy OCID: ocid1.tenancy.oc1..aaaa------------------------------------------------vpla
Enter a region (e.g. ap-hyderabad-1, ap-melbourne-1, ap-mumbai-1, ap-osaka-1, ap-seoul-1, ap-sydney-1, ap-tokyo-1, ca-montreal-1, ca-toronto-1, eu-amsterdam-1, eu-frankfurt-1, eu-zurich-1, me-jeddah-1, sa-saopaulo-1, uk-gov-london-1, uk-london-1, us-ashburn-1, us-gov-ashburn-1, us-gov-chicago-1, us-gov-phoenix-1, us-langley-1, us-luke-1, us-phoenix-1): ca-toronto-1
Do you want to generate a new API Signing RSA key pair? (If you decline you will be asked to supply the path to an existing key.) [Y/n]: Y
Enter a directory for your keys to be created [/Users/b300098957/.oci]: 
Enter a name for your key [oci_api_key]: 
Public key written to: /Users/b300098957/.oci/oci_api_key_public.pem
Enter a passphrase for your private key (empty for no passphrase): 
Private key written to: /Users/b300098957/.oci/oci_api_key.pem
Fingerprint: c7:c9:xx:xx:xx:xx:xx:xx:d9:e7
Config written to /Users/b300098957/.oci/config


    If you haven't already uploaded your API Signing public key through the
    console, follow the instructions on the page linked below in the section
    'How to upload the public key':

        https://docs.cloud.oracle.com/Content/API/Concepts/apisigningkey.htm#How2

```

Quick Test:

```
$ oci iam availability-domain list
```
Response

```
{
  "data": [
    {
      "compartment-id": "ocid1.tenancy.oc1..biglongID",
      "id": "ocid1.availabilitydomain.oc1..biglongID",
      "name": "Nbww:CA-TORONTO-1-AD-1"
    }
  ]
}
```




https://oracle.com/cloud/sign-in.html

https://github.com/oracle/oci-cli

https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/cliconcepts.htm

https://learncodeshare.net/2020/03/06/install-and-configure-the-oracle-cloud-command-line-interface/
