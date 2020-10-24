


```
$ gcloud components install app-engine-python
```


```
$ gcloud app create --project=$DEVSHELL_PROJECT_ID
```


```
$ git clone https://github.com/GoogleCloudPlatform/python-docs-samples
```

```
$ cd python-docs-samples/appengine/standard_python37/hello_world
```

:bulb: Current Python is 2.7

```
$ python --version
********************************************************************************
Python 2 is deprecated. Upgrade to Python 3 as soon as possible.
See https://cloud.google.com/python/docs/python2-sunset
To suppress this warning, create an empty ~/.cloudshell/no-python-warning file.
The command will automatically proceed in  seconds or on any key.
********************************************************************************
Unknown option: --
usage: /usr/bin/python [option] ... [-c cmd | -m mod | file | -] [arg] ...
Try `python -h' for more information.
$ python --version
********************************************************************************
Python 2 is deprecated. Upgrade to Python 3 as soon as possible.
See https://cloud.google.com/python/docs/python2-sunset
To suppress this warning, create an empty ~/.cloudshell/no-python-warning file.
The command will automatically proceed in  seconds or on any key.
********************************************************************************
Python 2.7.13
```

```
$ sudo apt-get update
```

```
$ sudo apt-get install virtualenv
```


```
$ virtualenv -p python3 venv
```


```
$ source venv/bin/activate
```
