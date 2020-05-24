resource "aws_vpc" "vpc_name" {
        count=2
        cidr_block="192.168.0.0/16"
        instance_tenancy="default"
}
