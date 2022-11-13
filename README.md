Project: CV Builder

A CV Builder app created with React.js exploring usage and implementation of function components. The project is inspired by The Odin Project curriculum.

<a href="https://dicristea.github.io/cv-builder/">🔗Live Preview</a>

Overview
Features:

- add, delete and edit cv information
- write descriptions for experiences, choose start/end dates
- preview finalized CV information as presentable/printable CV

## Todos

- Make UI responsive for phone screens
- Store user information in localStorage or other data storage on toggling preview mode and fetch data into updated UI
- For date values equal to present month, replace with "Present" OR add checkbox for "currently working here"
- Format UI for Preview Mode
- html semantic elements for better accessibility?
- Form Validation: Constraint Validation API

## Tools

- react.js, ES6
- ESLint + Airbnb JavaScript Style Guide
- Prettier Code Formatter

## What I learned

- React functionality: function components, hooks
- Using prevState in setState callback (state before the callback was triggered)

  - solution found for item deletion in educationList array in Education.jsx:
    => "assigning the array was copying the reference - and react wouldn't see that as a change - since the ref to the array isn't being changed - only content within it."
    => https://stackoverflow.com/questions/25937369/react-component-not-re-rendering-on-state-change/67354136#67354136?newreg=1c096d41180843cca995a8c81a7fabc8
    => had to return new array with editted info from prevState

- CSS tricks/animations
  - conditional class rendering
    ToggleButton => Ex. className={`toggle ${toggle ? 'toggle--checked': ''}`} or style={ isPreviewActive ? {
    border: "none",
    fontSize: "1.2em",
    }
    : {}
  - touchscreen css (touch-action: pan-x;)
- Practiced github branch workflow

Tips:

- For future projects, when adding components on click to DOM, add via an object from data storage that renders with newly updated state (Education/Experience components)
- if something is rendering twice => Strictmode problem? https://stackoverflow.com/questions/66464124/update-inside-react-usestate-setter-being-called-twice
- Instead of "Prop drilling", use global variable called React Context/ useContext() => https://stackoverflow.com/questions/69675357/react-what-is-the-proper-way-to-do-global-state

- Use gh-pages to host page on github
  -> https://github.com/gitname/react-gh-pages
  -> run `npm run deploy`

Sources

-
- Favicon:
  <a href="https://www.flaticon.com/free-icons/success" title="success icons">Success icons created by Freepik - Flaticon</a>
- CV-Header:
  <a href="https://www.flaticon.com/free-icons/curriculum" title="curriculum icons">Curriculum icons created by Freepik - Flaticon</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
