import React from 'react'
import marked from 'marked';
marked.setOptions({
    breaks: true
});
class Preview extends React.Component{
    state={
        markdown: marked(this.props.currentText)
    }
    componentWillReceiveProps(nextProps)
    {
        //nextprops biar gk telat updatenya
                this.setState(
                    {
                        markdown: marked(nextProps.currentText)
                    }
                )
    }
    render(){
        return(
            <div>
        <div id="preview" dangerouslySetInnerHTML={{__html:this.state.markdown}}/>
            </div>
        )
    }
}
export default Preview;