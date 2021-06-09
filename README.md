# Simple Setup
> A simple template repo for NodeJS, Jest with ESM and debug launch options for VSCode 

Simple NodeJS setup with ESM and Jest. Works best with Node 14 and above. Jest tests work with ESM too and can be debugged easily from inside of VSCode.
Uses `tsconfig` to allow better type support in NodeJS/Javascript code.

## Run default NodeJS app
`yarn start`

## Run Jest tests
`yarn test`

## VSCode Config

Supports the following debug options:

*  `Jest Debug Current file` : To debug the current test
*  `Node Debug Current file` : To debug node file itself

## Jest Config
 
 Solution for running Jest with ESM comes from [this stackoverflow discussion](https://stackoverflow.com/questions/60372790/node-v13-jest-es6-native-support-for-modules-without-babel-or-esm)

 The config part can be found in `package.json` file.