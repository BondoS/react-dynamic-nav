# Recursive navigation menu built with React-TypeScript

#### You can view this project hosted on https://react-dynamic-nav.vercel.app/

#### Check the system design planning document [here](https://miro.com/app/board/uXjVO-gALlY=/?share_link_id=96023496855)

#### How to run the project

- run `yarn install` to install all dependencies.
- run `yarn start` to start the project.
- run `yarn test` to run the tests.
- run `yarn test:coverage` to create test coverage report.

### Requirements

- Show a multi tier navigation menu on the left of the page. The menu itself can be expanded & collapsed.
- Populate the navigation by pulling in data from an API – an example JSON response is in `/mockData` folder.

### Tests

- [React testing library](https://testing-library.com/docs/react-testing-library/intro/) with [Jest](https://jestjs.io/) are used to test some functionalities in the project.
- Test coverage
  ![image](https://user-images.githubusercontent.com/2457873/163713192-5ab5ac5d-0368-4616-8dfd-1f5bf7c97e5f.png)

### Store

- [Redux toolkit](https://redux-toolkit.js.org/) with [Saga](https://redux-saga.js.org/) are used to create the store <br />
  ![image](https://user-images.githubusercontent.com/2457873/163710006-0d49c099-0ead-4667-ad16-0fcdf55ab1b8.png)

### Future improvements

- Shimmer effect to present the loading state.
- Add more detailed tests for the dynamic menu.
  - Check if the menu expands and collapses as expected?
  - Check if the correct amount of children are present for a menu item parent?
  - Check hasAlert is visualized correctly?
- Change header logo with smaller image in Mobile.
- Add `aria-live` announcement for users that may not see when the NavList is imported and rendered.
