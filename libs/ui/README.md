<center>

![enter image description here](https://www.guiabolso.com.br/wp-content/uploads/2020/04/logo.png)

</center>

<br />

# Guiabolso UI

React components for the construction of layouts based on the Design System of Guiabolso.

## Components

Check the components in our [Chromatic](https://www.chromatic.com/library?appId=5f1f22ccab17b9002215a487) and [Storybook](https://5f1f22ccab17b9002215a487-mwedezrmbd.chromatic.com/)

## Installation

```bash
# with npm

npm install @material-ui/core @guiabolsobr/ui

# with yarn

yarn add @material-ui/core @guiabolsobr/ui
```

`@guiabolsobr/ui` uses [material-ui](https://material-ui.com/) as a _peer dependency_. So it is necessary to install it too.

## Usage

To get started you must first encapsulate your project with our **Provider** and pass the theme, which is also exported by our library, for it:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Theme, themeGuiaBolso, Button } from '@guiabolsobr/ui';

const App = () => (
  <Theme theme={themeGuiaBolso}>
    <Button appearance="primary" scale="narrow">
      Hello World
    </Button>
  </Theme>
);

ReactDOM.render(<App />, document.querySelector('#root'));
```

## Questions

For any questions or suggestions visit our [Github Issues](https://github.com/GuiaBolso/pink-lemonade-web/issues) page.
