const core = require('@actions/core') // contains utility methods
const github = require('@actions/github')
const exec = require('@actions/exec')

async function run() {
  core.notice('Hello from JS workflow') // used as console.log
}
run();
