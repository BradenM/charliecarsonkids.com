#!/usr/bin/env node
/*
* Sync Local and S3 Assets
*
*/

const shelljs = require('shelljs');
const path = require('path');

const args = process.argv.slice(2)

// Update or pull
// 1 => push
// 0 => pull
const Direction = args[0] === "push" ? 1 : 0;

// Paths
const RootDir = path.resolve(__dirname, '../../');

const Assets = {
  local: path.join(RootDir, 'app/assets'),
  remote: 's3://static.charliecarsonkids.com/assets'
}

shelljs.echo("Syncing S3 Assets...")


// Sync

if(Direction === 1) {
  // Local => Remote
  if (shelljs.exec(`aws s3 sync ${Assets.local} ${Assets.remote}`).code !== 0) {
    shelljs.echo("Error: Failed to sync LOCAL => REMOTE ")
  }
} else {
  // Remote => Local
  // eslint-disable-next-line no-lonely-if
  if (shelljs.exec(`aws s3 sync ${Assets.remote} ${Assets.local}`).code !== 0) {
    shelljs.echo("Error: Failed to sync REMOTE => LOCAL ")
  }
}

shelljs.echo("Assets synced!")
