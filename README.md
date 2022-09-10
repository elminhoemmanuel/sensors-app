# cra-template-tailwindcss-typescript

A streamlined [Tailwind CSS v3.1](https://tailwindcss.com) template for [Create React App](https://github.com/facebook/create-react-app) in [TypeScript](https://www.typescriptlang.org/).

> This template installs and sets up [Tailwind CSS](https://tailwindcss.com) with TypeScript support.

## Usage

```bash
npx create-react-app --template tailwindcss-typescript
```

## Credits

This project was made possible thanks to the following projects.

1. [GeoffSelby/cra-template-tailwindcss](https://github.com/GeoffSelby/cra-template-tailwindcss) - A streamlined Tailwind CSS template for Create React App (in JavaScript).
2. [cra-template-typescript](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript) - An official TypeScript template for create-react-app.

## License

MIT © [Sung M. Kim](https://sung.codes)


Notes;
had only about one instance where props had to be passed down two levels down the component tree , therefore no sufficient reason to use context or a third party state management lib like redux

will make the project responsive

will declare custom tailwind directives to reduce repeated use of certain tailwind utility classes

why I didnt batch the requests on the home page together

used react apexcharts as it offers extra things like zoom, pan and download data as csv

why I used interfaces mainly for api responses as those are usually shaped like objects and types for component props typing

use a better third party lib to handle dynamic application of classes