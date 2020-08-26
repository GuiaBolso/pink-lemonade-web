<center>

![enter image description here](https://www.guiabolso.com.br/wp-content/uploads/2020/04/logo.png)

</center>

<br />

# Pink Lemonade Web by GuiaBolso

PinkLemonadeWeb use:

- Nx: It's a set of extensible dev tools for monorepos.
- Typescript: Superset javascript for types and abstraction.
- React: A JavaScript library for building user interfaces
- Styled Components: Powerful preprocessor css (Css-in-Js) in javascript
- Others...?

## Guiabolso UI Documentation

Check the documentation for our interface library [here](https://github.com/GuiaBolso/pink-lemonade-web/tree/master/libs/ui)

## Guiabolso Utils Documentation

Check the documentation for our utils library [here](https://github.com/GuiaBolso/pink-lemonade-web/tree/master/libs/utils)

## Running unit tests

Run `nx test <PROJECT>` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e <PROJECT>` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Running Doc Storybook

Run `nx run <PROJECT>:storybook` to execute the storybook via [Storybook](https://storybook.js.org).

> You can use `nx run ui:storybook` for make your components

## Generate an component in UI

Run `nx g component --name=<Component> --project=ui --pascalCaseFiles --export --directory=<Category>/<component>` to generate an application.

> exemple: `nx g component --name=Button --project=ui --pascalCaseFiles --export --directory=myCategory/button`

Components are sharable across libraries and applications. They can be imported from npm using `npm i @pink-lemonade-web/ui`.

## Generate a library

Run `nx g @nrwl/workspace:lib <LIB_NAME> --pascalCaseFiles --publishable` to generate a library typescript.

> You can also use any code parts to reuse in others project through npm.

Libraries are sharable across libraries and applications. They can be imported from npm using `npm i @pink-lemonade-web/<LIB_NAME>`.

## Generate a new library UI

Run `nx g @nrwl/react:lib --name=Ui --pascalCaseFiles --publishable` to generate a library React.

## Build

Run `nx build <PROJECT|LIB>` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
