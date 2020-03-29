

https://developer.github.com/v3/activity/events/

```
% curl  https://api.github.com/users/CollegeBoreal/events
```

```
JQ_QUERY='.[] | select (.repo.url | contains("lab-algorithme-du-bfs-en-python")) | select ( .created_at | contains( "2020-03-28T13")) | { progres: .payload.issue.title }'
% curl  https://api.github.com/users/setrar/events |  jq $JQ_QUERY
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 90514  100 90514    0     0   457k      0 --:--:-- --:--:-- --:--:--  455k
{
  "progres": "Installer son projet"
}
{
  "progres": "Installer son projet"
}

