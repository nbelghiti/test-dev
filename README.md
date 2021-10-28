# dev test

## Getting started

### Prerequisites

To run this project, you will need to install the following tools:

* [Docker desktop](https://docs.docker.com/get-docker/)
* [NodeJS (v12 or higher)](https://nodejs.org/en/download/)
* [VSCode](https://code.visualstudio.com/Download) or other IDE

### Configuration

#### Docker

Make sure to update your Docker settings to (not required for WSL):

* at least 2 CPU cores
* at least 6GB memory

#### NodeJS

Make sure the node executable is accessible and install `yarn` globally:

```bash
npm i -g yarn
```

#### VSCode

Make sure to install the following extensions:

* [EditorConfig](https://github.com/editorconfig/editorconfig-vscode)
* [TSLint](https://github.com/Microsoft/vscode-typescript-tslint-plugin)
* [ESLint](https://github.com/Microsoft/vscode-eslint)
* [StyleLint](https://github.com/stylelint/vscode-stylelint)

### First startup

#### Run API
To run the project, execute the `docker-compose up` command in the root of the API project:

```bash
cd api && docker-compose up
```

The API will be available at http://localhost:3000
<br>Documentation can be found at http://localhsot:3000/docs


#### Run client

Install the client dependencies:

```bash
cd client && yarn
```

Build the libraries:

```bash
yarn build:libs
```

Start the client:

```bash
yarn start
```

The client will be available at http://localhost:4300

Start storybook (in a separate shell):

```bash
yarn serve:storybook
```

Storybook will be available at http://localhost:4302

Make sure to check the `README.md` in the root of the client folder for more information.


```
fix(api): typo in Readme
feat(ui): added tooltip component
```

### Credentials

You will be working in an isolated Auth0 environment. You can use the following credentials to log in:

* username: `developer@service.com`
* password: `Developer1`
