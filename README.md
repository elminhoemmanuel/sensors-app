### Introduction

In this document I will be explaining some of the important decisions I have taken during the execution of this work as well as provide some good documentation about my completed solution.

## Features

Some of the features/pages I developed  as requested are;

- Dashboard Home Page
- Dashboard Menu View
- Add Sensor Page
- Edit Sensor Page
- Sensor Details Page ( 70% done )

### Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Key Decisions taken
- I had only about one instance where props had to be passed down two levels down the component tree , therefore there was no sufficient reason to use the context api  or a third party state management lib like redux. Hence I managed my state using react native solutions as the application is not very robust yet.

- I decided not to batch the api requests made on the Dashboard home page together as one of the endpoints involved data that needed to be called when the page changed and hence it would have caused unnecessary api calls. However on the Sensor details page I carried out proper batching of all the api calls to ensure elimination of unnecessary api calls.

- I used [React Apexcharts](https://apexcharts.com/docs/react-charts/) as my charting library as it offers extra features like zoom, pan and download data as csv which was not readily available on other solutions.

- I used interfaces mainly for api responses as those are usually shaped like objects and types for component props typing as it was more suited.

- I was unable to finish the [Sensor Details page](/src/pages/SensorDetails.tsx) due to time constraint as I am yet to add the remaining two graphs but I didnt want to exceed the given deadline.


### Future Improvements ( if I had more time )

- I improve the responsiveness of the entire project

- I will declare custom tailwind directives to reduce repeated use of certain tailwind utility classes.

- I will make use of a better third party lightweight library such as classnames library to handle dynamic application of classes as opposed to string literals used here.

- I will write more unit tests and even e2e & integration tests using cypress as I only wrote some tests here to properly demonstrate my abiloty to write tests but I intend to write more.

- I will utilize a better form validation solution for the pages with forms perhaps using libraries like yup and formik.

## How To Use

```bash

# Install dependencies
$ npm i

# Run the app
$ npm run start

# Run tests
$ npm run test
```