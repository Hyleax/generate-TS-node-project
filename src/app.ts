#!/usr/bin/env node

// generates a ts node template
import { log } from 'console'
import fs from 'fs'
import { cwd } from 'process'
import path from 'path'

// file paths
const tsconfigFilePath = `${cwd()}/tsconfig.json`
const packagejsonFilePath = `${cwd()}/package.json`
const instructionsMDFilePath = `${cwd()}/instructions.md`
const srcDirectory = `${cwd()}/src`
const gitIgnorePath = `${cwd()}/.gitignore`

// file contents
const tsConfigFileContents = 
`
{
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "declaration": true,
      "outDir": "./dist",
      "rootDir": "./src",
      "strict": true,
      "types": ["node"],
      "esModuleInterop": true,
      "resolveJsonModule": true
    }
  }

`

const packagejsonFileContents = 
`
{
  "name": "${path.basename(cwd())}",
  "version": "1.0.0",
  "description": "",
  "main": "dist/app.js",
  "scripts": {
    "start": "nodemon src/app.ts",
    "create": "npm run build && npm run test",
    "build": "tsc -p .",
    "refresh": "rm -rf ./node_modules ./package-lock.json && npm install"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
`

const instructionsMDContents = 
`

# Please run the following command in the terminal to download all the dependencies for the project: 
npm i @types/node nodemon ts-node typescript --save-dev

## Run this command if you would like to create an express-TS project:
npm i express @types/express
### Copy this import statement into app.ts
import express, { Application, Request, Response, NextFunction } from 'express';

* please install all TypeScript(TS) related dependencies before executing the scripts located in 'package.json'
* enter all TS code in /src folder
* enter 'npm start' to run 'app.ts' with fast refresh(nodemon)
* compile TS code by running 'npm run build' 
* all compiled TS code will be located in the './dist' folder
* if you have tests, run 'npm run create' to both compile and test your code




# Enjoy your happy times with TypeScript
`

// Creating all files and directories

// creating tsconfig
fs.writeFileSync(tsconfigFilePath, tsConfigFileContents)
log("created tsconfig.json - 1/6")

// creating packag.json
fs.writeFileSync(packagejsonFilePath, packagejsonFileContents)
log("created package.json - 2/6")

// creating src/app.ts
// create src directory
if (!fs.existsSync(srcDirectory)) {
  fs.mkdirSync(srcDirectory)
  log('created /src directory -3/6')
}

// adding app.ts file
fs.writeFileSync(`${srcDirectory}/app.ts`, `console.log("Welcome to the world of TypeScript(TS)")`)
log("created app.ts - 4/6")

// generate .gitignore
fs.writeFileSync(gitIgnorePath,
  `
  /node_modules
  /dist
  instructions.md
  `)
log("created .gitignore -5/6")

// generating instructions.md 
fs.writeFileSync(instructionsMDFilePath, instructionsMDContents)
log("created instructions.md 6/6")


log(`
all files and directories created
a TypeScript-Node Project has been successfully generated
`)
