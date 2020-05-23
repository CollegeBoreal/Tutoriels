

- [ ]  Step :zero:: Prerequisites
Install Terraform and a text editor of your choice.

- [ ]  Step :one:: Open Configuration File
Create an empty text file called main.tf in an empty folder.

```bash
% touch main.tf
```

- [ ] Step :two:: Initialize the aws Provider
Add the following code to configure the AWS provider:

```bash
cat <<EOF >> main.tf
provider "aws" 
{
  	access_key = "Your AWS Access Key"
  	secret_key = "Your AWS Secret Key"
	region=”us-east-1”
}
EOF
