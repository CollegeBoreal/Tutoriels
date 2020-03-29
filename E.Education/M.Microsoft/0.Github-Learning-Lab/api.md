

https://developer.github.com/v3/activity/events/

```
% curl  https://api.github.com/users/CollegeBoreal/events
```

```
$ JQ_COURS="lab-algorithme-du-bfs-en-python"
$ JQ_DATE="2020-03-28T13"
$ JQ_TABLE='.[] ' \
  JQ_WHERE_URL="| select (.repo.url   | contains(\"${JQ_COURS}\"))" \
  JQ_WHERE_DAT="| select (.created_at | contains(\"${JQ_DATE}\"))" \
  JQ_SELECT='| { progres: .payload.issue.title }' \
  JQ_QUERY=$JQ_TABLE$JQ_WHERE_URL$JQ_WHERE_DAT$JQ_SELECT
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

