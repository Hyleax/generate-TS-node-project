import { log } from 'console'
import fs from 'fs'
import { cwd } from 'process'
import path from 'path'


// file contents
export const tsConfigFileContents: string = 
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

export const packagejsonFileContents: string = 
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

export const instructionsMDContents: string = 
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

export const appTSContents: string = `console.log("Welcome to the world of TypeScript(TS)")`

export const gitIgnoreContents: string = `
/node_modules
/dist
instructions.md
`
