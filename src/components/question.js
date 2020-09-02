import React from 'react';
import {NavLink} from 'react-router-dom';

class  Question extends React.Component {
	state = {
			question:null,
			options:[],
			i:0,
			formWrapRef: React.createRef(),
			formRef:React.createRef(),
			divRef: React.createRef(),
			errorRef:React.createRef(),
			answerRef: React.createRef()
	}

	handleSubmit = (e) => {
		e.preventDefault(); 
		if (this.state.question && this.state.options.length>0) {
			this.props.addQuestions(this.state.question);
			this.state.formWrapRef.current.style.display = 'none';
			this.state.answerRef.current.style.display = 'block';
		} else { 
			this.state.errorRef.current.style.display = 'block'	
		}
	}

	handleBlur = (e) => {
		if (e.target.value) {
			this.setState({question:e.target.value});
		} else {e.target.setAttribute('placeholder', 'Input a question')}
		
	}

 	handleBlurOptions = (e) => {
 		let option = [...this.state.options, e.target.value];
 		if (e.target.value) {
 			this.setState({options:option});
 		}
 	}

 	displayForm = (e) => {
 		this.state.formWrapRef.current.style.display = 'block';
 		this.state.answerRef.current.style.display = 'none';
 		this.setState({options:[]});
 		for (let i=0; i<this.state.divRef.current.childNodes.length; i++) {
 			this.state.divRef.current.childNodes[i].value = '';
 		}
 		this.state.formRef.current.childNodes[0].value = '';
 		this.setState({question:''})
 	}

	addOption = (e) => {
		const input = document.createElement('input');
		if (this.state.i===0) {
			input.setAttribute('placeholder', 'E:');
		}
		if (this.state.i===1) {
			input.setAttribute('placeholder', 'F:');
		} 
		if (this.state.i===2) {
			input.setAttribute('placeholder', 'G:');
		}
			if (this.state.i>2) {
			return 0;
		}
		this.state.divRef.current.appendChild(input);
		this.state.i++;
	}

	render() {
		let correctOpt = this.state.options[Math.floor(Math.random()*this.state.options.length)];
		const optionList = this.state.options.map((option, index) => {
		if (option !== correctOpt) {
		return (<div key={index}>{option}</div>)
		} else {return (<div className='green' key={index}>{option}</div>)} 
			});

		return (
		<section>
			<div ref={this.state.formWrapRef}>
		    	<form onSubmit={this.handleSubmit} ref={this.state.formRef}>
		        	<input type='text' placeholder='Question:' onBlur={this.handleBlur} id='question'/>
		        	<div id='options' ref={this.state.divRef}>
		        		<input type='text' placeholder='A:' onBlur={this.handleBlurOptions}/>
		        		<input type='text' placeholder='B:' onBlur={this.handleBlurOptions}/>
		        		<input type='text' placeholder='C:'  onBlur={this.handleBlurOptions}/>
		        		<input type='text' placeholder='D:'  onBlur={this.handleBlurOptions}/>
		        	</div>  
				</form>

				<div>
					<button onClick={this.addOption} id="buttonOption">+Option</button>
					<button onClick={this.handleSubmit}>See answer</button>
				</div>

				<p ref={this.state.errorRef} style={{display:'none', color:'red'}}>Pls input something in the fields.</p>
			</div>

		    <div ref={this.state.answerRef} style={{display:'none'}}>
		        	{optionList}
		        	<button onClick={this.handleSubmit}>Toggle answer</button>
		        	<button onClick={this.displayForm}>Ask another question</button>
		        	<button><NavLink to='/displayQuestion'>View Questions</NavLink></button>
		        	
		    </div>
		</section>
		);
}}
	
export default Question