````
## Global Docker image parameters
## Please, note that this will override the image parameters, including dependencies, configured to use the global value
## Current available global Docker image parameters: imageRegistry and imagePullSecrets
##
# global:
#   imageRegistry: myRegistryName
#   imagePullSecrets:
#     - myRegistryKeySecretName
#   storageClass: myStorageClass

## Bitnami Moodle(TM) image version
## ref: https://hub.docker.com/r/bitnami/moodle/tags/
##
image:
  registry: docker.io
  repository: bitnami/moodle
  tag: 3.10.3-debian-10-r0
  ## Specify a imagePullPolicy
  ## Defaults to 'Always' if image tag is 'latest', else set to 'IfNotPresent'
  ## ref: http://kubernetes.io/docs/user-guide/images/#pre-pulling-images
  ##
  pullPolicy: IfNotPresent
  ## Optionally specify an array of imagePullSecrets.
  ## Secrets must be manually created in the namespace.
  ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/
  ##
  pullSecrets:
  #   - myRegistryKeySecretName

  ## Set to true if you would like to see extra information on logs
  ##
  debug: false

## Force target Kubernetes version (using Helm capabilites if not set)
##
kubeVersion:

## String to partially override moodle.fullname template (will maintain the release name)
##
nameOverride:

## String to fully override moodle.fullname template
##
fullnameOverride:

## Number of replicas (requires ReadWriteMany PVC support)
##
replicaCount: 1

## Skip Moodle(TM) installation wizard. Useful for migrations and restoring from SQL dump
## ref: https://github.com/bitnami/bitnami-docker-moodle#configuration
##
moodleSkipInstall: false

## Site name
## ref: https://github.com/bitnami/bitnami-docker-moodle#configuration
##
moodleSiteName: ""

## User of the application
## ref: https://github.com/bitnami/bitnami-docker-moodle#configuration
##
moodleUsername: user

## Application password
## Defaults to a random 10-character alphanumeric string if not set
## ref: https://github.com/bitnami/bitnami-docker-moodle#configuration
##
moodlePassword: ""

## Admin email
## ref: https://github.com/bitnami/bitnami-docker-moodle#configuration
##
moodleEmail: user@example.com

## Set to `yes` to allow the container to be started with blank passwords
## ref: https://github.com/bitnami/bitnami-docker-moodle#environment-variables
##
allowEmptyPassword: true

## Container command (using container default if not set)
##
command:
## Container args (using container default if not set)
##
args:

## Common annotations to add to all Harbor resources (sub-charts are not considered). Evaluated as a template
##
commonAnnotations: {}

## Common labels to add to all Harbor resources (sub-charts are not considered). Evaluated as a template
##
commonLabels: {}

## Update strategy - only really applicable for deployments with RWO PVs attached
## If replicas = 1, an update can get "stuck", as the previous pod remains attached to the
## PV, and the "incoming" pod can never start. Changing the strategy to "Recreate" will
## terminate the single previous pod, so that the new, incoming pod can attach to the PV
##
updateStrategy:
  type: RollingUpdate

## An array to add extra env vars
## For example:
##
extraEnvVars: []
#  - name: BEARER_AUTH
#    value: true

## ConfigMap with extra environment variables
##
extraEnvVarsCM:

## Secret with extra environment variables
##
extraEnvVarsSecret:

## Extra volumes to add to the deployment
##
extraVolumes: []

## Extra volume mounts to add to the container
##
extraVolumeMounts: []

## Extra init containers to add to the deployment
##
initContainers: []

## Extra sidecar containers to add to the deployment
##
sidecars: []

## Tolerations for pod assignment. Evaluated as a template.
## Ref: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
##
tolerations: []

## Use existing secret for the application password
##
existingSecret:

##
## External database configuration
##
externalDatabase:
  ## Database host
  ##
  host: ""

  ## Database host
  ##
  port: 3306

  ## Database user
  ##
  user: bn_moodle

  ## Database password
  ##
  password: ""

  ## Database name
  ##
  database: bitnami_moodle

## SMTP mail delivery configuration
## ref: https://github.com/bitnami/bitnami-docker-moodle/#smtp-configuration
##
smtpHost:
smtpPort:
smtpUser:
smtpPassword:
smtpProtocol:

##
## MariaDB chart configuration
##
## https://github.com/bitnami/charts/blob/master/bitnami/mariadb/values.yaml
##
mariadb:
  ## Whether to deploy a mariadb server to satisfy the applications database requirements. To use an external database set this to false and configure the externalDatabase parameters
  ##
  enabled: true

  ## MariaDB architecture. Allowed values: standalone or replication
  ##
  architecture: standalone

  ## MariaDB Authentication parameters
  ##
  auth:
    ## MariaDB root password
    ## ref: https://github.com/bitnami/bitnami-docker-mariadb#setting-the-root-password-on-first-run
    ##
    rootPassword: ""
    ## MariaDB custom user and database
    ## ref: https://github.com/bitnami/bitnami-docker-mariadb/blob/master/README.md#creating-a-database-on-first-run
    ## ref: https://github.com/bitnami/bitnami-docker-mariadb/blob/master/README.md#creating-a-database-user-on-first-run
    ##
    database: bitnami_moodle
    username: bn_moodle
    password: ""

  primary:
    ## Enable persistence using Persistent Volume Claims
    ## ref: http://kubernetes.io/docs/user-guide/persistent-volumes/
    ##
    persistence:
      enabled: true
      ## mariadb data Persistent Volume Storage Class
      ## If defined, storageClassName: <storageClass>
      ## If set to "-", storageClassName: "", which disables dynamic provisioning
      ## If undefined (the default) or set to null, no storageClassName spec is
      ##   set, choosing the default provisioner.  (gp2 on AWS, standard on
      ##   GKE, AWS & OpenStack)
      ##
      storageClass:
      accessModes:
        - ReadWriteOnce
      size: 8Gi
      ## Set path in case you want to use local host path volumes (not recommended in production)
      ##
      hostPath:
      ## Use an existing PVC
      ##
      existingClaim:

## Container ports
##
containerPorts:
  http: 8080
  https: 8443

## Kubernetes configuration
## For minikube, set this to NodePort, for ingress ClusterIP, elsewhere use LoadBalancer
##
service:
  type: LoadBalancer
  # HTTP Port
  port: 80
  # HTTPS Port
  httpsPort: 443
  ## clusterIP: ""
  ## Control hosts connecting to "LoadBalancer" only
  ## loadBalancerSourceRanges:
  ##   - 0.0.0.0/0
  ## loadBalancerIP for the Moodle(TM) Service (optional, cloud specific)
  ## ref: http://kubernetes.io/docs/user-guide/services/#type-loadbalancer
  ## loadBalancerIP:
  ##
  ## nodePorts:
  ##   http: <to set explicitly, choose port between 30000-32767>
  ##   https: <to set explicitly, choose port between 30000-32767>
  ##
  nodePorts:
    http: ""
    https: ""
  ## Enable client source IP preservation
  ## ref http://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip
  ##
  externalTrafficPolicy: Cluster

## Configure the ingress resource that allows you to access the
## Moodle(TM) installation. Set up the URL
## ref: http://kubernetes.io/docs/user-guide/ingress/
##
ingress:
  ## Set to true to enable ingress record generation
  ##
  enabled: false

  ## Set this to true in order to add the corresponding annotations for cert-manager
  ##
  certManager: false

  ## Ingress Path type
  ##
  pathType: ImplementationSpecific

  ## Override API Version (automatically detected if not set)
  ##
  apiVersion:

  ## When the ingress is enabled, a host pointing to this will be created
  ##
  hostname: minio.local

  ## The Path to Moodle(TM). You may need to set this to '/*' in order to use this
  ## with ALB ingress controllers.
  ##
  path: /

  ## Ingress annotations done as key:value pairs
  ## For a full list of possible ingress annotations, please see
  ## ref: https://github.com/kubernetes/ingress-nginx/blob/master/docs/user-guide/nginx-configuration/annotations.md
  ##
  ## If certManager is set to true, annotation kubernetes.io/tls-acme: "true" will automatically be set
  ##
  annotations: {}

  ## Enable TLS configuration for the hostname defined at ingress.hostname parameter
  ## TLS certificates will be retrieved from a TLS secret with name: {{- printf "%s-tls" .Values.ingress.hostname }}
  ## You can use the ingress.secrets parameter to create this TLS secret or relay on cert-manager to create it
  ##
  tls: false

  ## The list of additional hostnames to be covered with this ingress record.
  ## Most likely the hostname above will be enough, but in the event more hosts are needed, this is an array
  ## extraHosts:
  ## - name: minio.local
  ##   path: /
  ##

  ## Any additional arbitrary paths that may need to be added to the ingress under the main host.
  ## For example: The ALB ingress controller requires a special rule for handling SSL redirection.
  ## extraPaths:
  ## - path: /*
  ##   backend:
  ##     serviceName: ssl-redirect
  ##     servicePort: use-annotation
  ##

  ## The tls configuration for additional hostnames to be covered with this ingress record.
  ## see: https://kubernetes.io/docs/concepts/services-networking/ingress/#tls
  ## extraTls:
  ## - hosts:
  ##     - minio.local
  ##   secretName: minio.local-tls
  ##

  ## If you're providing your own certificates, please use this to add the certificates as secrets
  ## key and certificate should start with -----BEGIN CERTIFICATE----- or
  ## -----BEGIN RSA PRIVATE KEY-----
  ##
  ## name should line up with a tlsSecret set further up
  ## If you're using cert-manager, this is unneeded, as it will create the secret for you if it is not set
  ##
  ## It is also possible to create and manage the certificates outside of this helm chart
  ## Please see README.md for more information
  ##
  secrets: []
  ## - name: minio.local-tls
  ##   key:
  ##   certificate:
  ##

## Control where client requests go, to the same pod or round-robin
## Values: ClientIP or None
## ref: https://kubernetes.io/docs/user-guide/services/
##
sessionAffinity: "None"

## Enable persistence using Persistent Volume Claims
## ref: http://kubernetes.io/docs/user-guide/persistent-volumes/
##
persistence:
  enabled: true
  ## Moodle(TM) Data Persistent Volume Storage Class
  ## If defined, storageClassName: <storageClass>
  ## If set to "-", storageClassName: "", which disables dynamic provisioning
  ## If undefined (the default) or set to null, no storageClassName spec is
  ##   set, choosing the default provisioner.  (gp2 on AWS, standard on
  ##   GKE, AWS & OpenStack)
  ##
  # storageClass: "-"

  ## A manually managed Persistent Volume and Claim
  ## Requires persistence.enabled: true
  ## If defined, PVC must be created manually before volume will be bound
  ##
  accessMode: ReadWriteOnce
  size: 8Gi

  ## A manually managed Persistent Volume Claim
  ## Requires persistence.enabled: true
  ## If defined, PVC must be created manually before volume will be bound
  ##
  # existingClaim:

  ## If defined, the moodle-data volume will mount to the specified hostPath.
  ## Requires persistence.enabled: true
  ## Requires persistence.existingClaim: nil|false
  ## Default: nil.
  ##
  hostPath:

## Pod affinity preset
## ref: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity
## Allowed values: soft, hard
##
podAffinityPreset: ""

## Pod anti-affinity preset
## Ref: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity
## Allowed values: soft, hard
##
podAntiAffinityPreset: soft

## Node affinity preset
## Ref: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity
## Allowed values: soft, hard
##
nodeAffinityPreset:
  ## Node affinity type
  ## Allowed values: soft, hard
  ##
  type: ""
  ## Node label key to match
  ## E.g.
  ## key: "kubernetes.io/e2e-az-name"
  ##
  key: ""
  ## Node label values to match
  ## E.g.
  ## values:
  ##   - e2e-az1
  ##   - e2e-az2
  ##
  values: []

## Affinity for pod assignment
## Ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity
## Note: podAffinityPreset, podAntiAffinityPreset, and  nodeAffinityPreset will be ignored when it's set
##
affinity: {}

## Node labels for pod assignment. Evaluated as a template.
## ref: https://kubernetes.io/docs/user-guide/node-selection/
##
nodeSelector: {}

## Configure resource requests and limits
## ref: http://kubernetes.io/docs/user-guide/compute-resources/
##
resources:
  requests:
    memory: 512Mi
    cpu: 300m

## Init containers parameters:
## volumePermissions: Change the owner and group of the persistent volume mountpoint to runAsUser:fsGroup values from the securityContext section.
##
volumePermissions:
  enabled: false
  image:
    registry: docker.io
    repository: bitnami/bitnami-shell
    tag: "10"
    pullPolicy: Always
    ## Optionally specify an array of imagePullSecrets.
    ## Secrets must be manually created in the namespace.
    ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/
    ##
    pullSecrets: []
    ##   - myRegistryKeySecretName
  ## Init containers' resource requests and limits
  ## ref: http://kubernetes.io/docs/user-guide/compute-resources/
  ##
  resources:
    ## We usually recommend not to specify default resources and to leave this as a conscious
    ## choice for the user. This also increases chances charts run on environments with little
    ## resources, such as Minikube. If you do want to specify resources, uncomment the following
    ## lines, adjust them as necessary, and remove the curly braces after 'resources:'.
    ##
    limits: {}
    ##   cpu: 100m
    ##   memory: 128Mi
    ##
    requests: {}
    ##   cpu: 100m
    ##   memory: 128Mi
    ##

## Configure Pods Security Context
## ref: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-pod
##
podSecurityContext:
  enabled: true
  fsGroup: 1001

## Configure Container Security Context (only main container)
## ref: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-container
##
containerSecurityContext:
  enabled: true
  runAsUser: 1001

## Configure extra options for liveness and readiness probes
## Moodle(TM) core exposes /user/login to unauthenticated requests, making it a good
## default liveness and readiness path. However, that may not always be the
## case. For example, if the image value is overridden to an image containing a
## module that alters that route, or an image that does not auto-install Moodle(TM).
## ref: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/#configure-probes
##
livenessProbe:
  enabled: true
  path: /login/index.php
  initialDelaySeconds: 600
  periodSeconds: 10
  timeoutSeconds: 5
  failureThreshold: 6
  successThreshold: 1
readinessProbe:
  enabled: true
  path: /login/index.php
  initialDelaySeconds: 30
  periodSeconds: 5
  timeoutSeconds: 3
  failureThreshold: 6
  successThreshold: 1

## Custom Liveness probe
##
customLivenessProbe: {}

## Custom Readiness probe
##
customReadinessProbe: {}

## lifecycleHooks for the container to automate configuration before or after startup.
##
lifecycleHooks:

## Pod annotations
## ref: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
##
podAnnotations: {}

## Pod extra labels
## ref: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
##
podLabels: {}

## Prometheus Exporter / Metrics
##
metrics:
  enabled: false
  image:
    registry: docker.io
    repository: bitnami/apache-exporter
    tag: 0.8.0-debian-10-r335
    pullPolicy: IfNotPresent
    ## Optionally specify an array of imagePullSecrets.
    ## Secrets must be manually created in the namespace.
    ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/
    ##
    pullSecrets:
    #   - myRegistryKeySecretName

  ## Prometheus Exporter service configuration
  ##
  service:
    type: LoadBalancer
    port: 9117
    ## Annotations for Prometheus Exporter pods. Evaluated as a template.
    ## ref: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
    ##
    ##
    ## Use serviceLoadBalancerIP to request a specific static IP,
    ## otherwise leave blank
    # loadBalancerIP:
    annotations:
      prometheus.io/scrape: "true"
      prometheus.io/port: "{{ .Values.metrics.service.port }}"
  ## Metrics exporter resource requests and limits
  ## ref: http://kubernetes.io/docs/user-guide/compute-resources/
  ##
  # resources: {}
  ## Metrics exporter pod Annotation and Labels
  ##
  podAnnotations:
    prometheus.io/scrape: "true"
    prometheus.io/port: "{{ .Values.metrics.service.port }}"

# Add custom certificates and certificate authorities to redmine container
certificates:
  customCertificate:
    certificateSecret: ""
    chainSecret: {}
    # name: secret-name
    # key: secret-key
    certificateLocation: /etc/ssl/certs/ssl-cert-snakeoil.pem
    keyLocation: /etc/ssl/private/ssl-cert-snakeoil.key
    chainLocation: /etc/ssl/certs/mychain.pem
  customCAs: []
  ## Override container command
  ##
  command:
  ## Override container args
  ##
  args:
  # - secret: custom-CA
  # - secret: more-custom-CAs
  ## An array to add extra env vars
  ##
  extraEnvVars: []

  ## ConfigMap with extra environment variables
  ##
  extraEnvVarsCM:

  ## Secret with extra environment variables
  ##
  extraEnvVarsSecret:

  image:
    registry: docker.io
    repository: bitnami/bitnami-shell
    tag: "10"
    ## Specify a imagePullPolicy
    ## Defaults to 'Always' if image tag is 'latest', else set to 'IfNotPresent'
    ## ref: http://kubernetes.io/docs/user-guide/images/#pre-pulling-images
    ##
    pullPolicy: IfNotPresent
    # pullPolicy:
    pullSecrets: []
    #   - myRegistryKeySecretName

## Array with extra yaml to deploy with the chart. Evaluated as a template
##
extraDeploy: []

