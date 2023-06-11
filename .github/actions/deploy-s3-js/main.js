const core = require('@actions/core') // contains utility methods
const github = require('@actions/github') // gives access to gh rest apis(oct kit) and some contexts
const exec = require('@actions/exec')

async function run() {
  core.notice('Hello from JS workflow') // used as console.log

  //  1 get some input values using core
  const bucket = core.getInput('bucket', { required: true }) // allows us get input
  const bucketRegion = core.getInput('bucket-region', { required: true })
  const distFolder = core.getInput('dist-folder', { required: true })

  // 2 upload these values from the input using the exec package
  // we'll use the aws cli which is already preinstalled
  const s3Uri = `s3://${bucket}`
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`)

}
run();
