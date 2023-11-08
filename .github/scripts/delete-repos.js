const core = require("@actions/core")
const { Octokit } = require("octokit");

let fetch;
import('node-fetch').then(nodeFetch => {
  fetch = nodeFetch;

const gh = new Octokit({
  auth: process.env.APP_TOKEN,
  request: {
    fetch: fetch,
  },
});

module.exports = async ({ repositories }) => {
  const repos = repositories
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  for (const repo of repos) {
    core.info(`Target repo name: ${process.env.GITHUB_REPOSITORY_OWNER}/${repo}`);

    await gh.rest.repos.delete({
      owner: process.env.GITHUB_REPOSITORY_OWNER, 
      repo: repo, 
    });
  }
};
