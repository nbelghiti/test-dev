# Dev Test

## Specifications
This project has been generated using:

- `Angular CLI `: 8.2.9
- `Angular`: 8.2.9
- `nodejs`: 10.16.3
- `npm`: 6.9.0

## Working on the project

### Local development

Install depencies with `yarn install`.

You can run `yarn start` to start the project for local development.

#### UI library

When working on the UI library, you need to run the following commands in this order, wait for the first one to end before starting the next:
    1. `ng build ui --watch`: this will build the UI library and set a watch for changes.
    2. `yarn serve:storybook`: this will start the Storybook setup of the project.

#### Snapshots

To update the snapshots for a project run `ng run <project>:snapshot`, this will run Jest with the `updateSnapshot` option enabled.

*Do this with caution! The snapshots are ment to fail as an indication that something changed, look at the changes before updating them!*

### npm scripts

All commands are executable by running `yarn [COMMAND-NAME]`.

| Command          | Description
| ---------------- | -----------
| start            | Runs `yarn serve`
| preserve         | Runs `yarn build:env`
| serve            | Runs `ng serve --host=0.0.0.0`
| serve:styleguide | Runs `start-storybook -p 4302`
| prebuild         | Runs `yarn build:env`
| build            | Runs `/bin/sh ./scripts/build.sh`
| build:env        | Runs `node \"./scripts/env.js\"`
| build:storybook  | Runs `yarn build:ui && build-storybook -c .storybook -o dist/storybook`
| test             | Runs `/bin/sh ./scripts/test.sh`
| lint             | Runs `/bin/sh ./scripts/lint.sh`
| extract:i18n      | Runs `ngx-translate-extract --input ./projects --output ./projects/dev-test/src/assets/i18n/en.json --clean --sort --format namespaced-json`

### angular-cli

You can run all builders described in each projects' `builder` section in the `angular.json` by running either (for built-in builders):

```bash
ng <builder> <project>

# e.g.
ng build ui
```

or (for custom builders):

```bash
ng run <project>:<builder>

# e.g.
ng run ui:snapshot
```

For all other commands and a CLI reference, see [Angular CLI](https://angular.io/cli).
