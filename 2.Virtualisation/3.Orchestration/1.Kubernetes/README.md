# Kubernetes


:o: Installer l'utilitaire client `kubectl` permetant de controller la grappe

:computer: Sous Windows avec choco

```
PS > choco install kubernetes-cli
```

:apple: Sous MacOS avec HomeBrew

```
brew install kubernetes-cli
```


https://kubernetes.io/docs/tasks/tools/install-kubectl/

:a: Changer de context

:star: Switching Kubernetes Context


```
PS > kubectl config get-contexts
CURRENT   NAME                                 CLUSTER                              AUTHINFO                          NAMESPACE
          docker-desktop                       docker-desktop                       docker-desktop
          docker-for-desktop                   docker-desktop                       docker-desktop
          minikube                             minikube                             minikube
*         gke_b300098957_us-central1-a_kubia   gke_b300098957_us-central1-a_kubia   gke_b300098957_us-central1-a_kubia   
```

:star: Set the context to use as docker-for-desktop:

```
PS > kubectl config use-context docker-for-desktop
```
