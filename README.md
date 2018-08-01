
# Content Editor Prototype build with React.

To be used for educational and demonstration purposes. 
Represents an attempt to build a shell for a very basic content or graphics editor. Allows user to add pictures and YouTube videos to the work surface, move them around, resize and delete. Implements powerful UNDO feature, which keeps record of all  actions to allow user to undo them.

Some key features: 

* Written in [React.js](https://reactjs.org/tutorial/tutorial.html) one of the most performant JavaScript frameworks.
* Utilizes [react-rnd](https://github.com/bokuweb/react-rnd) component to implement drug and resize features.
* Has modular design for easy scalability.
* Works great in all browsers including mobile! (Thanks to responsive web design and [Bulma](https://bulma.io) CSS framework)
* UNDO feature illustrates the "Time travel" one of React's core concepts, made possible through state immutability.

It still has a lot you can try to add yourself:

* Resize actions generate a LOT of undo steps - find the way to avoid this!
* Implement Layers and layer change for items.
* Grid - make items stick to a grid.
* Any other fun features you can think of.
So get creative, go for it :)!

## DEMO

Thanks to [GitHub pages](https://pages.github.com/), live demo is available [HERE](https://aseevia.github.io/content-editor-react/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).