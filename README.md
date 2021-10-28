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

Make sure to check the `README.md` in the root of the api folder for more information.

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

## Dev test details

For this dev test, we expect you to develop a new feature in the provided codebase. Adherance to existing code style & guidelines as well as project structure and implementation are important.

### Summary

A news section will be added to the application, where users can view the latest updates from the company. Users can navigate and sort a list of articles as well as view an article detail where the contents, author and other related articles are visible.

You can find a visual representation of what is expected in the `mockups` folder.

### Requirements

#### Req 1: a user can access the news page and see a list of articles

* the last 6 articles are shown in a grid of 3 articles per row
* more articles can be loaded via a `load more` button
* articles can be sorted on created date or title

#### Req 1.b: flagged articles can only be accessed by a privileged user

* articles flagged with `internal` can only be accessed by users who have the `internal` permission (root level)
* the filtering on the `internal` flag has no impact on pagination for other users

#### Req 2: a user can see an article detail

* a user can navigate to the article detail by clicking a `read more` link in the list view
* the article detail is shown on a separate page that can be accessed on a unique url

#### Req 2.a: a user can see author details on the article detail

* when viewing an article detail, the details of the author are visible (first name, last name & avatar)

#### Req 2.b: a user can see related articles on the article detail

* when viewing an article detail, other related articles are shown (max 3)
* articles are related by tag

### Additional info

You are free to structure the data, endpoints and pages as you see fit. You can find some examples in the provided codebase as a reference.

You can find an example of the data in the `data` folder. Feel free to restructure this to better fit the needs of the feature.

Commit often to reflect your aproach better. We use a loose version of [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) internally. Try to at least prefix your commits with a type and the application component your commit relates to, e.g.:

```
fix(api): typo in Readme
feat(ui): added tooltip component
```

### Credentials

You will be working in an isolated Auth0 environment. You can use the following credentials to log in:

* username: `developer@service.com`
* password: `Developer1`
