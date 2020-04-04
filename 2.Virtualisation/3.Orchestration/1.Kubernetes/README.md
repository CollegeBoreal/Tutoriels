# :wheel_of_dharma: Kubernetes

## Cheat Sheet

[ :blue_book: ](./Kubernetes-Cheat-Sheet_07182019.pdf) https://linuxacademy.com/blog/containers/kubernetes-cheat-sheet/

Kubernetes (communément appelé « K8s2 ») est un système open source qui vise à fournir une « plate-forme permettant d'automatiser le déploiement, la montée en charge et la mise en œuvre de conteneurs d'application sur des grappes de serveurs. Il fonctionne avec toute une série de technologies de conteneurisation, et est souvent utilisé avec Docker. Il a été conçu à l'origine par Google, puis offert à la [CNCF](https://www.cncf.io/) (Cloud Native Computing Foundation) .


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
