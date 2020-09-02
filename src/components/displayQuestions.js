import React from 'react';

class Display extends React.Component {
	render () {
		function foo (arr) {
			let a = [], b = [], prev;
			arr.sort();
			for (let i = 0;i  < arr.length; i++) {
				if (arr[i] !== prev) {
					a.push(arr[i]);
					b.push(1);
				} else {b[b.length-1]++}
				prev = arr[i];
	}
		return [a,b]
	}

	let questionList = foo (this.props.questions)[0];
	let popularity = foo (this.props.questions)[1];
	let displayQuestion = questionList.map((question, index) => {
		return (<div key={index}>{question} ?</div>);		
		});
	let displayPoplarity = popularity.map((popularity, index) => {
		return (<div key={index} >{popularity}</div>)
		});
	
	return (
		<div id='displayQuestions'>
		<span><span className='bold'>Questions</span>{displayQuestion}</span><span className='green'><span>No. of times asked</span>{displayPoplarity}</span>
		</div>
		)
	}	
}
	

export default Display













































































