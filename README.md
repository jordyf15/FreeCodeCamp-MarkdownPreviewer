# Markdown Previewer
For the second project of FreeCodeCamp Frontend Library Curriculum, we have to make a markdown previewer using any mix of technology such as HTML, Javascript, CSS, Bootstrap, SASS, React, Redux, and jQuery.

## Test/User Stories
1. I can see a textarea element with a corresponding id="editor".
2. I can see an element with a corresponding id="preview".
3. When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
4. When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
5. When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
6. When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

We need to include the CDN link in the public\index.html file to be able to run the test in any environment we like. The example to include it:
```
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
```

## Live Demo on Codepen
https://codepen.io/jordyf15/full/PoZoKqz

## Technology used
1. HTML
2. CSS
3. Javascript
3. React version 16.13.1
4. Fontawesome version 5.8.1
5. Marked Library version 1.1.1
## List of React Components

### App Component
The App component rendered the div that will hold both the editor and the preview. This is where the editor is and user can input their markdown here. The App component is also the parent of the Preview Component.
  
#### States
The App component have 5 states, they are:
1. markdown: this is the current markdown text where it can be edited by the user and it will be parsed into html in the Preview component.
2. editorStatus: this is the current editor window status which control whether the editor window is being expand or minimize.
3. previewStatus: this the current preview window status which control whether the preview window is being expand or minimized.
4. buttonStatus: this is the current button status which will change the logo of the button when the editor or preview is minimized or expanded.
5. textHeiStatus: this is the current height of the text area of the editor that will be changed when the user minimized or expand the editor.
5. textWidStatus: this is the current width of the text area of the editor that will be changed when the user minimized or expand the editor.
  
#### Functions
The App component has 3 function, they are:
1. handleChange: this will setState the markdown state of the app component depending on the input of the user.
2. expandPreview: this will setState the previewStatus and also the editorStatus where the preview window will expand and the editor window will be minimized. If this function was called when the preview window was expanded than it will return to its original size.
3. expandEditor: this will setState the editorStatus and also the previewStatus where the editor window will expand and the preview window will be minimized. If this function was called when the editor window was expanded than it will return to its original size. This function also setState the textHeiStatus and textWidStatus to match the editor window.
  
#### Renders
The App component will render the following:
1. A div container to hold both the editor and preview
2. A div editor container to hold both the editor header and text area which will form the editor window.
3. A div preview container to hold both the preview header and the markdown parsed text which will form the preview window.
4. The editor header which also contain the button to expand and minimize the editor window.
5. Editor text area where user can enter their markdown which will also trigger the handleChange function.
6. The Preview header which also contain the button to expand and minimize the preview window.
7. The Preview component which accept a prop currentText which value is the markdown state of the App component.

### Preview Component
The Preview component rendered the markdown inputted by the user where it also has been parsed to its HTML version. The marked library is also imported in this component.
#### States
The Preview component only has 1 state, the markdown state. This state is the markdown text inputted by the user where it will be parsed into its HTML version later.
  
#### Functions
The Preview component only has 1 function, the componentWillReceiveProps. This function will be triggered when there is a change in the prop received from the App component. In this function it will setState the markdown  with the props from the App component where it will be marked(or change into markdown).
  
#### Renders
The Preview component only render 1 element which is a div. This div will display the markdown states parsed as a HTML.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
