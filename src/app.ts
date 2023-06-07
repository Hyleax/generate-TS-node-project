#!/usr/bin/env node

// THIS CODE GENERATES A TYPESCRIPT-NODE PROJECT

import { log, time, timeEnd, clear } from 'console'
import fs from 'fs'
import { cwd } from 'process'
import path from 'path'
import { execSync } from 'child_process'

// import file contents 
import { 
  tsConfigFileContents, 
  packagejsonFileContents, 
  instructionsMDContents, 
  appTSContents, 
  gitIgnoreContents 
} 
  from './file-contents'

// file paths
const tsconfigFilePath: string = `${cwd()}/tsconfig.json`
const packagejsonFilePath: string = `${cwd()}/package.json`
const instructionsMDFilePath: string = `${cwd()}/instructions.md`
const srcDirectoryPath: string = `${cwd()}/src`
const gitIgnorePath: string = `${cwd()}/.gitignore`


// Creating all files and directories
type pathContents= {
  path: string,
  contents: string
}

const pathAndContents: pathContents[] = [
  {
    path: tsconfigFilePath,
    contents: tsConfigFileContents
  },
  {
    path: packagejsonFilePath,
    contents: packagejsonFileContents,  
  },
  {
    path: `${srcDirectoryPath}/app.ts`,
    contents: appTSContents
  },
  {
    path: gitIgnorePath,
    contents: gitIgnoreContents
  },
  {
    path: instructionsMDFilePath,
    contents: instructionsMDContents
  }
]

const createDirectory = (pathAndContent: pathContents[]) => {
  
  // check if directory with name '/src' already exists in folder
  if (!fs.existsSync(srcDirectoryPath)){
   
    // clear console
    clear()

    // create the ./src directory
    fs.mkdirSync(srcDirectoryPath);
    log('created /src directory - 1/6')
  }
  
  createFiles(pathAndContent)
} 


const createFiles = (pathAndContent: pathContents[]) => {
  pathAndContent.forEach((item, index) => {
    
    // create each file one by one
    fs.writeFileSync(item.path, item.contents)
    log(`created ${path.basename(item.path)} - ${index + 2}/6`)
  })

  log(`all files and directories successfully created`)

  // install all dev dependencies in package.json
  log(`installing Dependencies...
  `)
  time("all Dependencies have been installed")
  execSync("npm install -D");
  timeEnd(`all Dependencies have been installed`)

  log(`new TypeScript-Node Project generated
  `)
}

createDirectory(pathAndContents);