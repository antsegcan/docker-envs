#!/usr/bin/env node

// we will need file system module to write the values
var fs = require("fs");
// this script is going to receive one parameter (see DockerFile)
var option = process.env.APP_ENV;
// taking all the possible configurations
var json = require("./environments.json");
// taking the chosen option (by default dev)
var environmentCfg = json[option];
// writing... It is important to do this task sync,
// because we need to be sure is finished before any step
fs.writeFileSync("./dist/environment.json", JSON.stringify(environmentCfg));
