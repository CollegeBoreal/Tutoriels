provider "aws" {
        access_key="AKIAIXZHHL47QYGVDSMQ"
        secret_key="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"
        region="us-east-1"
}
resource "aws_vpc" "vpc_name" {
        count=2
        cidr_block="192.168.0.0/16"
        instance_tenancy="default"
}
