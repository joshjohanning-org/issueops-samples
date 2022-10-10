# new-repo-issueops

## Features

- issue template and issue parsing
- posting back comment to repo with instructions after initial issue creation
- creating repo using `gh api`
- adds `created` issue label when the repo has been created successfully
- to do: add team permissions to repo

## Setup

1. Create a repo secret titled `ADMIN_TOKEN` with the value of a GitHub PAT (or modify the workflow code with the title of the secret with the GitHub PAT)
1. [Create a label](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label) titled `new-repo` AND `created`

## Example Issue

This contains the request and processing messages: https://github.com/joshjohanning-org/new-repo-issueops/issues/27

## Notes

It uses the current org to create the repo in. You would want to modify the `gh api` call appropriately if you wanted it to create in a different org.

```
/orgs/${{ github.REPOSITORY_OWNER }}/repos
```
