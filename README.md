# issueops-samples

## Solutions

- 🆕 Create Repo (IssueOps)
- 🪓 Delete Repo (IssueOps)
- 🏷️ Labelops
- ✨ [Reusable Worfklow repo onboarder](https://github.com/joshjohanning-org/reusable-workflow-issueops-onboarder) (IssueOps) (separate repository)

## General Features

- issue template and issue parsing
- uses GitHub App for authentication
- posting back comment to repo with instructions after initial issue creation
- renames the issue after creation for consistency
- creating repo using Octokit JavaScript SDK
- adds issue label when the repo after job completion

## Setup

### Credentials

- The solution uses a [GitHub App for authentication](https://josh-ops.com/posts/github-apps/)
  - Actions secrets/variables:
    - Secret: `PRIVATE_KEY`
    - Variable: `APP_ID`
  - Permissions required:
    - Repository:
      - `administration`: read/write (for creating/deleting repos)
      - `contents`: read/write (for pushing code to the new repo)
      - `issues`: read/write (for updating/closing issues)
      - `workflows`: read/write (for pushing workflow files)
    - Organization:
      - none

### Labels

Create the appropriate labels

```bash
gh label create create-repo
gh label create created

gh label create delete-repos
gh label create deleted
```

> [!TIP]
> If your terminal isn't running under the cloned repository, you can pass in the `--repo` flag to the `gh` command. For example:
> `gh label create create-repo --repo joshjohanning-org/issueops-samples`

## Example Issue

- Create repo [example](https://github.com/joshjohanning-org/issueops-samples/issues/35)
- Delete repo(s) [example](https://github.com/joshjohanning-org/issueops-samples/issues/57)

## Notes

- This often assumes the org that the IssueOps repo is hosted in is the org you are using for API calls (ie: to create/delete repos). Update the owner as appropriate or modify the issue template to allow that as an input.
