````
kind: Service
apiVersion: v1
metadata:
  name: kuron-deployment-service
  namespace: default
  annotations:
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip-rigel
    layer2.porter.kubesphere.io/v1alpha1: rigel
    lb.kubesphere.io/v1alpha1: porter
    protocol.porter.kubesphere.io/v1alpha1: layer2
spec:
  ports:
    - name: http
      protocol: TCP
      port: 80
      targetPort: 8080
      nodePort: 32494
  selector:
    app: kuron
  type: LoadBalancer
  sessionAffinity: None
  externalTrafficPolicy: Cluster
```
