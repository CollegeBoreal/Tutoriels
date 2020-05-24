

- [ ]  Step :zero:: Prerequisites
Install Terraform and a text editor of your choice.

- [ ]  Step :one:: Open Configuration File
Create empty text files called `provider.tf` and `main.tf` in an empty folder.

```bash
% touch provider.tf main.tf
```

- [ ] Step :two:: Initialize the aws Provider
Add the following code to configure the AWS provider:

```zsh
% cat <<EOF >> provider.tf
provider "aws" {
   region="us-east-1"
   profile="aws"
}
EOF
```

- [ ] Step :three:: Define an aws_vpc Resource

```zsh
% cat <<EOF >> main.tf
resource "aws_vpc" "vpc_name" {
        cidr_block="192.168.0.0/16"
        instance_tenancy="default"
}
EOF
```

- [ ] Step :four:: Execute Terraform Configuration file

```zsh
% terraform init
```

```zsh
% terraform plan
```

```zsh
%  terraform apply
```

