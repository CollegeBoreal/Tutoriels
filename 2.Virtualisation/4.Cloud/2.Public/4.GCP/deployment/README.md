# Docker Machine sous GCP

:pushpin: repérer son numero de projet

```
$ docker-machine create --driver google --google-project b300098957 cb-gcp-test
Running pre-create checks...
(cb-gcp-test) Check that the project exists
(cb-gcp-test) Check if the instance already exists
Creating machine...
(cb-gcp-test) Generating SSH Key
(cb-gcp-test) Creating host...
(cb-gcp-test) Opening firewall ports
(cb-gcp-test) Creating instance
(cb-gcp-test) Waiting for Instance
(cb-gcp-test) Uploading SSH Key
Waiting for machine to be running, this may take a few minutes...
Detecting operating system of created instance...
Waiting for SSH to be available...
Detecting the provisioner...
Provisioning with ubuntu(systemd)...
Installing Docker...
Copying certs to the local machine directory...
Copying certs to the remote machine...
Setting Docker configuration on the remote daemon...
Checking connection to Docker...
Docker is up and running!
To see how to connect your Docker Client to the Docker Engine running on this virtual machine, run: docker-machine env cb-gcp-test
```

# :pushpin: Parametres

```
--google-project GCE Project [$GOOGLE_PROJECT]

--google-zone "us-central1-a" GCE Zone [$GOOGLE_ZONE]

--google-disk-size "10" GCE Instance Disk Size (in GB) [$GOOGLE_DISK_SIZE]

--google-disk-type "pd-standard" GCE Instance Disk type [$GOOGLE_DISK_TYPE]
```

:round_pushpin: Type de machines 

https://cloud.google.com/compute/docs/machine-types

```
--google-machine-type "f1-micro" GCE Machine Type [$GOOGLE_MACHINE_TYPE]
```

* Autres parametres

```
--google-address GCE Instance External IP [$GOOGLE_ADDRESS]

--google-auth-token GCE oAuth token [$GOOGLE_AUTH_TOKEN]

--google-preemptible GCE Instance Preemptibility [$GOOGLE_PREEMPTIBLE]

--google-scopes "https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write"
                  GCE Scopes (comma-separated if multiple scopes) [$GOOGLE_SCOPES]

--google-username "docker-user" GCE User Name [$GOOGLE_USERNAME]
```


# References

https://rominirani.com/docker-machine-to-control-docker-hosts-on-google-cloud-3a48b46809dc
