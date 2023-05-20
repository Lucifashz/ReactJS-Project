class MyComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: placeholder
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({
      userInput: event.target.value
    })
  }
  
  getMarkdownText() {
    var rawMarkup = marked(this.state.userInput,
                           {sanitize: true,
                            breaks: true});
    return { __html: rawMarkup };
  }
  render() {
    return (
    <div id="container">
    <div id="header">
      <h1>Markdown Previewer</h1>
    </div>
    <div id="wrapper">
      <div id="c-wrapper">
        <div className="c-header">
          <div className="header-c">Editor</div>
        </div>
        <div className="c-header">
          <textarea value={this.state.userInput} onChange={this.handleChange} id="editor"></textarea>
        </div>
      </div>
      <div id="resizer"></div>
      <div id="c-wrapper">
        <div className="c-header">
          <div class="header-c">Frame</div>
        </div>
        <div className="c-header-ta-none">
          <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()}></div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

const placeholder = `# Markdown Previewer

[![Markdown Previewer](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg "Markdown Previewer")](https://achranggam.blogspot.com)

## FreeCodeCamp | Front End Libraries Projects

A *FreeCodeCamp* challenge on using front end libraries to build a markdown previewer with the below user stories to be fulfilled:

> **Required**
> 1. I can see a \`textarea\` element with a corresponding \`id="editor"\`.
> 2.  I can see an element with a corresponding \`id="preview"\`.
> 3. When I enter text into the \`#editor\` element, the \`#preview\` element is updated as I type to display the content of the textarea.
> 4. When I enter GitHub flavored markdown into the \`#editor\` element, the text is rendered as HTML in the \`#preview\` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
> 5. When my markdown previewer first loads, the default text in the \`#editor\` field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
> 6. When my markdown previewer first loads, the default markdown in the \`#editor\` field should be rendered as HTML in the \`#preview\` element.

> **Optional Bonus**
> 1. When I click a link rendered by my markdown previewer, the link is opened up in a new tab (HINT: read the Marked.js docs for this one!).
> 2. When I click a link rendered by my markdown previewer, the link is opened up in a new tab (HINT: read the Marked.js docs for this one!).

---

\`\`\`                      
   <p>Hello world! This is HTML CODE BLOCK.</p>          
\`\`\`

---

#### More about the challenge [Build a Markdown Previewer](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer).
#### See it in action [HERE](https://amr-adel.github.io/fcc-markdown-previewer/).`;

ReactDOM.render(<MyComponent/>, document.getElementById('root'));