# Anonos Homework.

<style>
#logo_img {
    background-color: #002e6d;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-direction: column;
}

#logo_img img {
    margin-top: 20px;
}
</style>

[logo]: https://github.com/carlosjunod/homework_anonos/blob/feature/styling/src/assets/logo.svg 'Logo Title Text 2'

<div id="logo_img">

![alt text](./src/assets/logo.svg?sanitize=true 'Logo Anonos')

<h6>multi-dimensional link menu</h6>

</div>

##Instructions:
Build a multi-dimensional link menu as a stand-alone component in React.js

1. Data model for the menu provided below. Consider it coming from a HTTP source.
2. The items can be on n-levels deep, keep recursivity in mind.
3. Build the tree menu component(s) to be searchable as shown in the picture.
4. Start from scratch, try not to use any boilerplate code, the idea is to see your thought process clearly.
5. Optimize your code as you see fit. Do not over analyze. Keep it simple.
6. Mind the code quality.
7. Write unit or e2e tests.
8. Use any preferred CSS styling of the menu. The only thing to keep in mind is the simplicity and clarity of the UI.
9. OPTIONAL: Make the links valid route urls. Content of the pages is not important.
10. Put the project on your GitHub profile in a repo. Repository must have working code and setup.

---

## How to Run the project?

This project it's a React app that runs locally over Parcer-js (application bundler)

### 1. Clone Repository

Clone this repo using `git@github.com:carlosjunod/homework_anonos.git`

### 2. Install dependencies

`cd` into the folder, then Use `npm i` or `yarn` to install from the command line.

### 3. Start up the application

In order to make this application run, it's necessary to start two processes, 1) mock API, which will feed content to the multi-dimensional link menu, and 2) the React UI bundle by Parcer-js.

To run this application, you must have Node.js installed locally.

<style>

    #table_info {
        width: 100%
    }

    #table_info table td:first-Child {
        width: 40%;
        text-align: left;
    }


</style>

<div id="table_info">

| Script        | Description                                                                                                                                                                                                                                                                                                            |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dev`         | Executing this script will start both services (Mock API and React UI) at the same time using [Concurrently](https://github.com/kimmobrunfeldt/concurrently). The `json-service` (port `:3001`) will serve the menu content data, which will be consumed by the parcel instance running the React UI app(port `:1234`) |
| `start`       | This script will only execute the UI (React)                                                                                                                                                                                                                                                                           |
| `json-server` | This script will only execute the json-server API                                                                                                                                                                                                                                                                      |
| `test`        | This command will execute [Cypress](https://www.cypress.io/), an e2e testing framework. To run Cypress without the GUI, please add `--headless` to the run script.                                                                                                                                                     |

</div>

### 4. Run e2e Testing.

This app, is running end to end testing using [Cypress](https://www.cypress.io/) which allow to display a visual interface of the testing. The current avialable test cases are:

- Check API (json-server) status **200 OK** ✅
- Navigate to a Link ✅
- Filter by "First" keyword ✅
- No Results ✅
- 🎨 Change Theme ✅

---

#### Contact infromation:

Please let me know if there is any question regarding this submission.
hello@carlosjunod.me.

Any Feedback is very welcome
