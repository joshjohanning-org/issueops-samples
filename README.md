# issueops-samples

## Solutions

- 🆕 Create Repo (IssueOps)
- 🪓 Delete Repo (IssueOps)
- 🏷️ Labelops
- ✨ [Reusable Worfklow repo onboarder](${{ github.SERVER_URL }}/joshjohanning-org/reusable-workflow-issueops-onboarder) (IssueOps) (separate repository)

## General Features

- issue template and issue parsing
- uses GitHub App for authentication
- posting back comment to repo with instructions after initial issue creation
- renames the issue after creation for consistency
- creating repo using Octokit JavaScript SDK
- adds issue label when the repo after job completion

## Setup

### Creds

1. Create a repo secret titled `ADMIN_TOKEN` with the value of a GitHub PAT (or modify the workflow code with the title of the secret with the GitHub PAT)
1. [Create a label](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label) titled `create-repo` AND `created`

### Labels

Create the appropriate labels

```bash
gh label create create-repo -R joshjohanning-org/issueops-samples
gh label create created -R joshjohanning-org/issueops-samples

gh label create delete-repos -R joshjohanning-org/issueops-samples
gh label create deleted -R joshjohanning-org/issueops-samples
```

## Example Issue

This contains the request and processing messages: ${{ github.SERVER_URL }}/joshjohanning-org/issueops-samples/issues/35

## Notes

This often assumes the org that the IssueOps repo is hosted in is the org you are using for API calls (ie: to create/delete repos). Update the owner as appropriate or modify the issue template to allow that as an input.
