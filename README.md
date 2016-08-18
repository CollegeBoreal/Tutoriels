# Tutoriel
test

### Git guidelines:
```
1. git clone git@github.com:CollegeBoreal/Promotion.git
2. cd Promotion
3. git checkout -b add-feature-A
4. # Work on feature A
5. git add ...
6. git commit -m ...
7. # Push the branch to github so you can create a PR
8. git push origin add-feature-A
9. # Create a PR in github, dicuss etc
10. # Do some more work
11. git add ...
12. git commit -m ...
13. git push origin add-feature-A
14. # Before merging the PR, squash any unnecessary commits, and maybe rebase the branch to
15. git fetch origin
16. git rebase -i origin/master
17. # You need to force-push here. Make sure you are pushing to the correct branch! (not master!)
18. git push -f origin add-feature-A
19. # Now merge the PR in github
20. # Finally delete the topic branch (via github web or cli)
```
