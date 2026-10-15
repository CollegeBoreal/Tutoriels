# Tag a project

```sh
git tag --annotate v1.0.1 --message "Devoir 4.SQL-NoSQL"
```

```sh
git tag --list
```

```sh
 git show v1.0.1 
```

```sh
git checkout v1.0.1
```
<details>
 <summary>Imprime</summary>
 
```powershell
Note: checking out 'v1.0.1'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at 53934f6 .
```

</details>


---

### :x: fatal: refusing to merge unrelated histories

```bash
git pull
```

<details><summary>🪵 Log </summary>

```lua
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (3/3), 317 bytes | 52.00 KiB/s, done.
From github-boreal.com:CollegeBoreal/INF1083-200-26A-06
 + 9a1253b...27ddf06 main       -> origin/main  (forced update)
fatal: refusing to merge unrelated histories
```

</details>

# References

https://git-scm.com/book/en/v2/Git-Basics-Tagging
