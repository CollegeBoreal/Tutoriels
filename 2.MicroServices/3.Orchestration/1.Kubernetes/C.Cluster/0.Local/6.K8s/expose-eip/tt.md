````
kind: Service
apiVersion: v1
metadata:
  name: kuron-deployment-service
  namespace: default
  selfLink: /api/v1/namespaces/default/services/kuron-deployment-service
  uid: 9f5ef408-bd9d-4f97-8129-d309e30dc2a3
  resourceVersion: '1800667'
  creationTimestamp: '2021-03-18T23:20:30Z'
  labels:
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip-rigel
  annotations:
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip-rigel
    kubectl.kubernetes.io/last-applied-configuration: >
      {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{"eip.porter.kubesphere.io/v1alpha2":"porter-layer2-eip-rigel","lb.kubesphere.io/v1alpha1":"porter","protocol.porter.kubesphere.io/v1alpha1":"layer2"},"name":"kuron-deployment-service","namespace":"default"},"spec":{"externalTrafficPolicy":"Cluster","ports":[{"name":"http","port":80,"targetPort":8080}],"selector":{"app":"kuron"},"type":"LoadBalancer"}}
    layer2.porter.kubesphere.io/v1alpha1: rigel
    lb.kubesphere.io/v1alpha1: porter
    protocol.porter.kubesphere.io/v1alpha1: layer2
  finalizers:
    - finalizer.lb.kubesphere.io/v1alpha1
  managedFields:
    - manager: kubectl-client-side-apply
      operation: Update
      apiVersion: v1
      time: '2021-03-18T23:20:30Z'
      fieldsType: FieldsV1
      fieldsV1:
        'f:metadata':
          'f:annotations':
            .: {}
            'f:eip.porter.kubesphere.io/v1alpha2': {}
            'f:kubectl.kubernetes.io/last-applied-configuration': {}
            'f:lb.kubesphere.io/v1alpha1': {}
            'f:protocol.porter.kubesphere.io/v1alpha1': {}
        'f:spec':
          'f:externalTrafficPolicy': {}
          'f:ports':
            .: {}
            'k:{"port":80,"protocol":"TCP"}':
              .: {}
              'f:name': {}
              'f:port': {}
              'f:protocol': {}
              'f:targetPort': {}
          'f:selector':
            .: {}
            'f:app': {}
          'f:sessionAffinity': {}
          'f:type': {}
    - manager: porter-manager
      operation: Update
      apiVersion: v1
      time: '2021-03-18T23:24:52Z'
      fieldsType: FieldsV1
      fieldsV1:
        'f:metadata':
          'f:annotations':
            'f:layer2.porter.kubesphere.io/v1alpha1': {}
          'f:finalizers':
            .: {}
            'v:"finalizer.lb.kubesphere.io/v1alpha1"': {}
          'f:labels':
            .: {}
            'f:eip.porter.kubesphere.io/v1alpha2': {}
        'f:status':
          'f:loadBalancer':
            'f:ingress': {}
spec:
  ports:
    - name: http
      protocol: TCP
      port: 80
      targetPort: 8080
      nodePort: 32494
  selector:
    app: kuron
  clusterIP: 10.97.150.128
  type: LoadBalancer
  sessionAffinity: None
  externalTrafficPolicy: Cluster
status:
  loadBalancer:
    ingress:
      - ip: 10.13.15.202

```
