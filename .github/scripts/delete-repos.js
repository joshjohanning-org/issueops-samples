const core = require("@actions/core")
const { Octokit } = require("octokit");

const gh = new Octokit({
  auth: process.env.APP_TOKEN,
});

module.exports = async ({ repositories }) => {
  const repos = repositories
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  for (const repo of repos) {
    core.info(`Target repo name: ${process.env.TARGET_ORG}/${repo}`);

    await gh.rest.repos.delete({
      owner: process.env.TARGET_ORG, 
      repo: repo, 
    });
  }
};
