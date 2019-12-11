# [Angular Infinite Scrolling app](https://deadlyfingers.github.io/ng-infinite-scrolling/) [![Build Status](https://travis-ci.org/deadlyfingers/ng-infinite-scrolling.svg?branch=master)](https://travis-ci.org/deadlyfingers/ng-infinite-scrolling)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20 optimised for [Typescript](https://www.typescriptlang.org/) development in [VSCode](https://code.visualstudio.com/). The sample app features an infinite scrolling list fetching paginated data from a publicly available [source](https://anilist.co/graphiql) using a [GraphQL](https://graphql.org/) query.

| Developer Environment                 | Status |
| ------------------------------------- | ------ |
| Typescript                            | Yes    |
| SCSS                                  | Yes    |
| Linting                               | Yes    |
| Tests                                 | Yes    |
| Run tests coverage (ng test)          | Yes    |
| Debugging using VSCode                | Yes    |
| Debug tests using VSCode              | No     |
| Live reload (ng serve)                | Yes    |
| External device testing (BrowserSync) | Yes    |

There are a number of third party list view components available for Angular but I choose the [cdk-virtual-scroll-viewport](https://material.angular.io/cdk/scrolling/overview) component from the Angular [Component Dev Kit](https://material.angular.io/cdk) (CDK) as it supports recycling view cells which is important for responsive and fluid scrolling with 1000s of items.

| CDK Virtual Scroll Component features | Status  |
| ------------------------------------- | ------- |
| Recycled / virtualized elements       | Yes     |
| Pagination using infinite scrolling   | Yes     |
| List view                             | Yes     |
| Responsive list view styles           | Todo    |
| Responsive grid view styles           | Unknown |

## Future plans

- Further abstract ListViewContainer component with tests
- Further abstract GraphQL query with tests
- Add detail view
- Implement [Redux](https://redux.js.org/introduction/getting-started) for app state management

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Additional scripts

### `npm run test:coverage`

Shows project source code test coverage.

### `npm run dev`

Runs `ng serve` and starts a BrowserSync proxy on `http://localhost:3000/` and external IP to enable testing on multiple devices connected to the same network.

### `npm run deploy`

Triggers manual deployment to [GitHub Pages](https://pages.github.com/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
