# [Github Learning Lab](https://lab.github.com)

## Create 

https://lab.github.com/new


https://lab.github.com/docs/course-ownership-and-repositories



```
% LAB_GITHUB_TOKEN=`cat ~/.tokens/lab.github.com.tk`
```

```
% curl -H "Authorization: token ${LAB_GITHUB_TOKEN}" https://lab.github.com/api/v0 | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   125  100   125    0     0    176      0 --:--:-- --:--:-- --:--:--   176
{
  "documentation_url": "https://lab.github.com/docs/api",
  "course_url": "https://lab.github.com/api/v0/courses/{owner}/{course}"
}
```
