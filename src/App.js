import React, { Component } from 'react';
import './App.css';
import Annotation from 'react-image-annotation'
import CustomAnnotation from './components/ContainerWrapper';
import Editor from './components/Editor';
import ContainerWrapper from './components/ContainerWrapper';

class App extends Component {
  state = {
    annotations: [],
    annotation: {},
    data: {},
    image: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
  }
 
  onChange = (annotation, text) => {
    console.log(text)
    this.setState({ 
      annotation,
      data: {
        content: text,
        id: (Math.random() * 1000) 
    }})
  }


  onSubmit = () => {
    const { geometry } = this.state.annotation
    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: this.state.data
      })
    })
  }

  
  render() {
    console.log(this.state.annotations)
    const {image} = this.state;
    return (
      <div className="App">
       <Annotation
          src={image}
          alt='Two pebbles anthropomorphized holding hands'
          annotations={this.state.annotations}
          type={this.state.type}
          value={this.state.annotation}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          renderEditor={() => 
          <ContainerWrapper
           onChange={this.onChange}
           annotation={this.state.annotation} 
           onSubmit={this.onSubmit}/> 
          }
        />
      </div>
    );
  }
}

export default App;
