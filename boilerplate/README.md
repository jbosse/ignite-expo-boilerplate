#  <%= props.name %>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * run `yarn start`

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## Using this Boilerplate

`ignite { new, n } ProjectName -b ../path/to/ignite-expo-boilerplate`

`ignite { new, n } ProjectName -b ignite-expo-boilerplate`

## Optional: Adding ignite-dev-screens-expo

If developing locally:
`cp -r ../path/to/ignite-dev-screens-expo ./node_modules/`
`ignite add ./node_modules/ignite-dev-screens-expo`

Otherwise during the boilerplate setup it'll ask if you want to add *dev-screens*, select yes and it'll download https://www.npmjs.com/package/ignite-dev-screens-expo from NPM.

## Optional: Adding Generators

Not particularly intuitive, but to add generators having added the expo boilerplate, you need `ignite add` expo-boilerplate again.

If developing locally:
`cp -r ../path/to/ignite-expo-boilerplate ./node_modules/`
`ignite add ./node_modules/ignite-expo-boilerplate`

Otherwise

`ignite add ignite-expo-boilerplate`

Should be able to then `ignite { generate, g } { component, container, list, listview, redux, saga, screen }`
