```yaml
apiVersion: v1
kind: Service
metadata:
  name: kuron-deployment-service
  annotations:
    eip.porter.kubesphere.io/v1alpha2: porter-layer2-eip-rigel
    lb.kubesphere.io/v1alpha1: porter
    protocol.porter.kubesphere.io/v1alpha1: layer2
spec:
  type: LoadBalancer
  selector:
    app: kuron
  ports:
    - name: http
      protocol: TCP
      port: 80
      targetPort: 8080
  externalTrafficPolicy: Cluster
```
