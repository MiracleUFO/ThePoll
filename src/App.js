import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/header'
import Question from './components/question';
import Display from './components/displayQuestions';

class App extends React.Component {
  state = {
    questions:[]
  } 
  
  addQuestions = (question) => {
    let questionArr = [...this.state.questions, question];
    this.setState({questions:questionArr});
}

  render () {
    return (
      <BrowserRouter>
      <div>
        <Header/>
        <Route exact path='/' render= {(props) => <Question {...props} addQuestions={this.addQuestions}/>} />
        <Route exact path='/displayQuestion' render= {(props) => <Display {...props} questions={this.state.questions}/>} />
      </div>
      </BrowserRouter>
      )
  }
}
export default App