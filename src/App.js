import React from 'react';
import './App.css';
import Preview from './Preview';
const defaultmarkdown = "# Welcome to my React Markdown Previewer!"+
"  \n  \n"+
"## This is a sub-heading..."+
"  \n"+
"### And here's some other cool stuff:"+
"  \n  \n"+
"Heres some code, `<div></div>`, between 2 backticks."+
"  \n  \n"+
"```  \n"+
"// this is multi-line code:"+
"  \n  \n"+
"function anotherExample(firstLine, lastLine) {"+
"  \n"+
"  if (firstLine == '```' && lastLine == '```') {"+
"  \n"+
"    return multiLineCode;"+
"  \n"+
"  }"+
"  \n"+
"}"+
"  \n"+
"```"+
"  \n  \n"+
"You can also make text **bold**... whoa!"+
"  \n"+
"Or _italic_."+
"  \n"+
"Or... wait for it... **_both!_**"+
"  \n"+
"And feel free to go crazy ~~crossing stuff out~~."+
"  \n  \n"+
"There's also [links](https://www.freecodecamp.com), and"+
"  \n"+
"> Block Quotes!"+
"  \n  \n"+
"And if you want to get really crazy, even tables:"+
"  \n  \n"+
"Wild Header | Crazy Header | Another Header?"+
"  \n"+
"------------ | ------------- | -------------"+
"  \n"+
"Your content can | be here, and it | can be here...."+
"  \n"+
"And here. | Okay. | I think we get it."+
"  \n  \n"+
"- And of course there are lists."+
"  \n"+
"  - Some are bulleted."+
"  \n"+
"     - With different indentation levels."+
"  \n"+
"        - That look like this."+
"  \n  \n  \n"+
"1. And there are numbererd lists too."+
"  \n"+
"1. Use just 1s if you want!"+
"  \n"+
"1. But the list goes on..."+
"  \n"+
"- Even if you use dashes or asterisks."+
"  \n"+
"* And last but not least, let's not forget embedded images:"+
"  \n  \n"+
"![React Logo w/ Text](https://goo.gl/Umyytc)"

//normal: editor-window       preview-window
//expand: editor-window-expand      preview-window-expand
//gone: editor-window-gone      preview-window-gone
//fa fa-arrows-alt    fa fa-compress    #57e2b1
class App extends React.Component{
  state={
    markdown: defaultmarkdown,
    editorStatus: "editor-window",
    previewStatus: "preview-window",
    buttonStatus: "fa fa-arrows-alt",
    textWidStatus: "",
    textHeiStatus:""
  }
  handleChange=()=>{
    const text = document.getElementById("editor").value;
    this.setState(
      {
        markdown: text
      }
    )
  }
  expandPreview=()=>{
    if(this.state.previewStatus==="preview-window"){
      this.setState({
        editorStatus: "editor-window-gone",
        previewStatus: "preview-window-expand",
        buttonStatus: "fa fa-compress"
      })
    }
    else{
      this.setState({
        editorStatus: "editor-window",
        previewStatus: "preview-window",
        buttonStatus: "fa fa-arrows-alt"
      })
    }
  }
  expandEditor=()=>{
    if(this.state.editorStatus==="editor-window"){
      this.setState({
        editorStatus: "editor-window-expand",
        previewStatus:"preview-window-gone",
        buttonStatus: "fa fa-compress",
        textWidStatus: "99.8%",
        textHeiStatus: "95%",
      })
    }
    else{
      this.setState({
        editorStatus: "editor-window",
        previewStatus: "preview-window",
        buttonStatus: "fa fa-arrows-alt",
        textWidStatus:"",
        textHeiStatus:""
      })
    }
  }
  render(){
    return(
      <div id="body">
        <div id="editor-container">
          <div id={this.state.editorStatus}> 
              <div id="editor-header">
                <div id="logoName1">
                <i className="fa fa-free-code-camp"></i>
               Editor
               </div>
              <i className={this.state.buttonStatus} onClick={this.expandEditor}></i>
              </div>
            <textarea id="editor" type="text" onChange={this.handleChange} style={{height: this.state.textHeiStatus, width: this.state.textWidStatus}}value={this.state.markdown} ></textarea>
          </div> 
        </div>
        
          <div id={this.state.previewStatus}>
            <div id="preview-header">
              <div id="logoName">
              <i className="fa fa-free-code-camp"></i>
              Previewer
              </div>
              <i className={this.state.buttonStatus} onClick={this.expandPreview}></i>
            </div>
            <Preview currentText={this.state.markdown}/>
          </div>
        
      </div>
    );
  }
}


export default App;
