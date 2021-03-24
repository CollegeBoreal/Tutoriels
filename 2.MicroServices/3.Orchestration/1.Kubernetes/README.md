# :wheel_of_dharma: Kubernetes


<img src="images/kube-control-planes.png" width="720" height="484" ></img>

## Cheat Sheet

[ :blue_book: ](./Kubernetes-Cheat-Sheet_07182019.pdf) https://linuxacademy.com/blog/containers/kubernetes-cheat-sheet/

Kubernetes (communément appelé « K8s2 ») est un système open source qui vise à fournir une « plate-forme permettant d'automatiser le déploiement, la montée en charge et la mise en œuvre de conteneurs d'application sur des grappes de serveurs. Il fonctionne avec toute une série de technologies de conteneurisation, et est souvent utilisé avec Docker. Il a été conçu à l'origine par Google, puis offert à la [CNCF](https://www.cncf.io/) (Cloud Native Computing Foundation) .


## :a: `kubectl` Client

:gear: Installer l'utilitaire client `kubectl` permetant de controller la grappe

:computer: Sous Windows avec choco

```
PS > choco install kubernetes-cli
```

:apple: Sous MacOS avec HomeBrew

```
brew install kubernetes-cli
```


https://kubernetes.io/docs/tasks/tools/install-kubectl/


- [x] La version

```
% kubectl version --client --output=json
{
  "clientVersion": {
    "major": "1",
    "minor": "15",
    "gitVersion": "v1.15.5",
    "gitCommit": "20c265fef0741dd71a66480e35bd69f18351daea",
    "gitTreeState": "clean",
    "buildDate": "2019-10-15T19:16:51Z",
    "goVersion": "go1.12.10",
    "compiler": "gc",
    "platform": "darwin/amd64"
  }
}
```

## Autocompletion (bash or zsh)

https://kubernetes.io/docs/tasks/tools/install-kubectl/#enable-kubectl-autocompletion

```
$ source <(kubectl completion bash) # for zsh replace bash with zsh
```

- [ ] Source the completion script in your `~/.bashrc` or `~/.zshrc`file:

```
$ echo 'source <(kubectl completion bash)' >>~/.bashrc # for zsh replace bash with zsh
```

- [ ] Add the completion script to the `/etc/bash_completion.d` directory: (on Linux)

```
$ kubectl completion bash >/etc/bash_completion.d/kubectl
```

- [x] Le context

:star: Switching Kubernetes Context


```
PS > kubectl config get-contexts
CURRENT   NAME                                 CLUSTER                              AUTHINFO                          NAMESPACE
          docker-desktop                       docker-desktop                       docker-desktop
          docker-for-desktop                   docker-desktop                       docker-desktop
          minikube                             minikube                             minikube
          gke_b300098957_us-central1-a_kubia   gke_b300098957_us-central1-a_kubia   gke_b300098957_us-central1-a_kubia   
*         kubia                                kubia                                clusterUser_college-boreal_kubia    
```

:star: Set the context to use as docker-for-desktop:

```
PS > kubectl config use-context docker-for-desktop
```

## :ab: Interacting with cluster



| cheatsheet                                                                                            | Comments | 
|-------------------------------------------------------------------------------------------------------|----------|
| [Kubectl Autocomplete](https://kubernetes.io/docs/reference/kubectl/cheatsheet/#kubectl-autocomplete) |          |
| [bash](https://kubernetes.io/docs/reference/kubectl/cheatsheet/#bash)                                 |          |
| [zsh](https://kubernetes.io/docs/reference/kubectl/cheatsheet/#zsh)
| Kubectl context and configuration
| Kubectl apply
| Creating objects
| Viewing, finding resources
| Updating resources
| Patching resources
| Editing resources
| Scaling resources
| Deleting resources
| Interacting with running Pods
| [Interacting with Nodes and cluster](https://kubernetes.io/docs/reference/kubectl/cheatsheet/#interacting-with-nodes-and-cluster) | |
| Resource types
| Formatting output
| Kubectl output verbosity and debugging
| What's next



https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/

```
$ kubectl cluster-info dump
```

## :interrobang:  Merge Config

``` 
$ KUBECONFIG=~/.kube/orion:~/.kube/config kubectl config view --flatten > ~/.kube/config
``` 

https://stackoverflow.com/questions/46184125/how-to-merge-kubectl-config-file-with-kube-config

## :star: IDE

https://k8slens.dev/

:apple: Mac OS

```
$ brew install --cask lens
```

:computer: Windows

```
PS > choco install lens
```

# Références

[Google To The World](https://cloud.google.com/blog/products/gcp/from-google-to-the-world-the-kubernetes-origin-story)

https://kubernetes.io/case-studies/

https://zero-to-jupyterhub.readthedocs.io/en/stable/

https://rancher.com/blog/2019/2019-04-12-understanding-kubernetes-node/ (images à récupérer)
