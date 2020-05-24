
variable "tenancy_ocid" {}
variable "user_ocid" {}
variable "region" {}

# Configure the Oracle Cloud Infrastructure provider with an API Key
provider "oci" {
  tenancy_ocid = "${var.tenancy_ocid}"
  user_ocid = "${var.user_ocid}"
  region = "${var.region}"
}
