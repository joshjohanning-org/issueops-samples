module.exports = ({context, core}) => {
    const issueBody = context.payload.issue.body
    const parsedIssueBody = issueBody.match(/### Repo name\s+`(?<repoName>[^`]+)`\s+### Template Repository\s+`(?<templateRepository>[^`]+)`\s+### Rename master\s+(?<renameMaster>Yes|No)\s+### Git LFS\s+(?<hasLfs>Yes|No)/)
  
    if (parsedIssueBody) {
      if (core) {
  
        // core.setOutput('repository', parsedIssueBody.groups.repositoryName)
        // core.setOutput('template-repository', parsedIssueBody.groups.templateRepository)
        // core.setOutput('team-permission', parsedIssueBody.groups.teamPermission)
        // core.setOutput('enable-issues', parsedIssueBody.groups.enableIssues)
        // core.setOutput('rename-master', parsedIssueBody.groups.renameMaster)
        // core.setOutput('has-lfs', parsedIssueBody.groups.hasLfs)

        core.setOutput('repo-name', parsedIssueBody.groups.repoName)
        core.setOutput('template-repository', parsedIssueBody.groups.templateRepository)
        core.setOutput('rename-master', parsedIssueBody.groups.renameMaster)
        core.setOutput('has-lfs', parsedIssueBody.groups.hasLfs)
      }
  
      return parsedIssueBody.groups
    }
  }