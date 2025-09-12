# Delete file to be recovered

https://www.quora.com/How-can-I-recover-a-file-I-deleted-in-my-local-repo-from-the-remote-repo-in-Git

* If the deletion has not been committed, the command below will restore the deleted file in the working tree.

```sh
git checkout -- <file>
```

* You can get a list of all the deleted files in the working tree using the command below.

```sh
git ls-files --deleted
```


* If the deletion has been committed, find the commit where it happened, then recover the file from this commit.

```sh
git rev-list -n 1 HEAD -- <file>
git checkout <commit>^ -- <file>
```

* In case you are looking for the path of the file to recover, the following command will display a summary of all deleted files.

```sh
git log --diff-filter=D --summary
```

*[ How to list all the files in a commit?](https://stackoverflow.com/questions/424071/how-to-list-all-the-files-in-a-commit)

```sh
git diff-tree --no-commit-id --name-only  -r bdfec3
```
