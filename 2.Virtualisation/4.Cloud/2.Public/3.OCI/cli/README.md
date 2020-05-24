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


https://github.com/oracle/oci-cli

https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/cliconcepts.htm
