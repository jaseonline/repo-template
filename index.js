// index.js
const Mustache = require("mustache");
const fs = require("fs");
const fetch = require("node-fetch");
const MUSTACHE_MAIN_DIR = "./main.mustache";

const generateReadMe = async () => {
  /*** Fetch some async date ***/
  const mockData = await new Promise((resolve) =>
    resolve({
      title: "Dynamic GitHub Profile Readme Template",
      getStartedInstructions: [
        "Click on `Use this template` button on the top right corner",
        "Name your repository as GitHub username",
        "Clone the repository",
        "Run `yarn install`",
        "Run `yarn dev`",
        "Edit [./main.mustache](./main.mustache) and save",
        "See changes being made to [./README.md](./README.md)",
      ],
      features: [
        "Templating through [Mustache](https://github.com/janl/mustache.js)",
        "Load data for Mustache template in [./index.js](./index.js)",
        "Auto update README.md on file changes",
        "CRON job to update README.md with GitHub Actions",
        "Make sure to allow the GitHub action to commit changes by going to `Settings > Actions > General > Workflow permissions` and select 'Read and write permissions'",
        "Edit or disable with [./.github/workflows/main.yml](./.github/workflows/main.yml)",
      ],
    })
  );

  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), mockData);
    fs.writeFileSync("README.md", output);
  });
};

generateReadMe();
