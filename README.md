Project: CV Builder
A CV Builder app created with React.js exploring usage and implementation of function components. The project is inspired by The Odin Project curriculum.

<a href="https://dicristea.github.io/cv-builder/">🔗Live Preview</a>

Overview
Features:
- add, delete and edit cv information
- write descriptions for experiences, choose start/end dates
- preview finalized CV information as presentable/printable CV

Todo:
- 
- html semantic elements for better accessibility?

Tools:
- ESLint + Airbnb JavaScript Style Guide
- Prettier Code Formatter
- Constraint Validation API

What I learned:
- React functionality: function components, hooks
- Form Validation: Constraint Validation API
- CSS tricks/animations
  - conditional class rendering 
    ToggleButton => Ex. className={`toggle ${toggle ? 'toggle--checked': ''}`}
  - touchscreen css (touch-action: pan-x;)
- Practiced github branch workflow

Tips:

- Use gh-pages to host page on github
  -> https://github.com/gitname/react-gh-pages
  -> run `npm run deploy`

- For inline styling:
  - React will automatically append a “px” suffix to certain numeric inline style properties. If you want to use units other than “px”, specify the value as a string with the desired unit.
- Can use ternary operator or utils js for repeated parts

Sources: 
- Favicon:
    <a href="https://www.flaticon.com/free-icons/success" title="success icons">Success icons created by Freepik - Flaticon</a>
    
- CV-Header: 
    <a href="https://www.flaticon.com/free-icons/curriculum" title="curriculum icons">Curriculum icons created by Freepik - Flaticon</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
