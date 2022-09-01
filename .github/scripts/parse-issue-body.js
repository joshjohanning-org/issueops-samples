module.exports = ({context, core}) => {
    const issueBody = context.payload.issue.body
    const parsedIssueBody = issueBody.match(/### Repo name\s+`(?<repoName>[^`]+)`\s+### Template repository\s+`(?<templateRepository>[^`]+)`\s+### Team permissions\s+`(?<teamPermissions>[^`]+)`\s+### Enable issues\s+- \[(?<enableIssues>[^[]+)\] .*\n*\s+### Allow forking\s+- \[(?<allowForking>[^[]+)\] .*\n*/)
  
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
        core.setOutput('team-permissions', parsedIssueBody.groups.teamPermissions)
        core.setOutput('enable-issues', parsedIssueBody.groups.enableIssues)
        core.setOutput('allow-forking', parsedIssueBody.groups.allowForking)
      }
  
      return parsedIssueBody.groups
    }
  }