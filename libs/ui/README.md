<center>

![enter image description here](https://www.guiabolso.com.br/wp-content/uploads/2020/04/logo.png)

</center>

<br />

# Guiabolso UI

Componentes React para a construção de layouts baseado no Design System do Guiabolso.

## Componentes

Veja os componentes no nosso [Chromatic](https://www.chromatic.com/library?appId=5f1f22ccab17b9002215a487) e [Storybook](https://5f1f22ccab17b9002215a487-mwedezrmbd.chromatic.com/)

## Instalação

```bash
# with npm

npm install @material-ui/core @material-ui/icons @guiabolsobr/ui

# with yarn

yarn add @material-ui/core @material-ui/icons @guiabolsobr/ui
```

O `@guiabolsobr/ui` utiliza o [material-ui](https://material-ui.com/) como _peer dependency_. Portanto é necessário a instalação dele também.

## Uso

Para começar a usar é necessário primeiro encapsular o seu projeto com nosso **Provider** e passar o tema, que também é exportado pela nossa biblioteca, para ele:

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

## Perguntas

Para qualquer dúvida ou sugestão acesse nossa página do [Github Issues](https://github.com/GuiaBolso/pink-lemonade-web/issues).
