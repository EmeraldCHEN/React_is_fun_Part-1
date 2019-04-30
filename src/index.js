// Make the code more concise

// import React from 'react';
import React, {Component} from 'react';

//import ReactDOM from 'react-dom';
import {render} from 'react-dom';


// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();


/*
let style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

const title = React.createElement(
    'h1', // First argument is the type of element
    {id: 'title', className: 'header', style: style}, // Second is attribute
    'Hello World' // Display child element
)


const title = React.createElement(
    'li', 
    {id: 'title', className: 'header', style: style}, 
    React.createElement(
        'ul',
        {},
        'item on the list'
    )
)

ReactDOM.render(
    title, // First argument is what we want to render
    document.getElementById('root') // // Second is where we want to render this
)

****************************************************************************************
    
    Use JSX syntax to make it cleaner

****************************************************************************************
 
ReactDOM.render(
    <div style = {style} >
        <h1 id="heading">Hello React</h1>
        <p>Happy coding (#^.^#)</p>
    </div>,
    document.getElementById('root')
)
****************************************************************************************
 |    |    |    |    |    |    |    |    |     |    |    |     |    |    |
 |    |    |    |    |    |    |    |    |     |    |    |     |    |    |
****************************************************************************************
****************************************************************************************
    
    Component based structure

    Creat a user interface simply by creating & nesting a collection of components

****************************************************************************************/

// Creates a component using React's class syntax
// Note that all components must be capitalized


// class Message extends React.Component {
//     // The most important method to describe what to render to the DOM
//     render() {
//         return (
//             console.log(this.props),
//             <div>
//                 {/* <h1>Hello Everyone</h1> */}

//                 {/* Pass a style object into this expression */}
//                 <p style={{color: this.props.color}}> 
//                     {this.props.msg}
//                 </p>
//                 <p>{this.props.age}</p>
//                 <ul>I'll check back in {this.props.minutes} minutes</ul>
//             </div>
//         )
//     }
// } 

// Use React Props to make components dynamic
// ReactDOM.render(
//     // Use JSX expression whenever passing in a number or a boolean
//     <Message  msg="How old are you?" color='orange' age={3} minutes={20} />, 
//     document.getElementById('root')
// );


let swimData = {
    total: 50,
    goal: 100
}
const styles ={
    color: 'orange',
    fontWeight: 'bold'
}
//class SwimDayCounter extends React.Component {
class SwimDayCounter extends Component {
    // Add custom methods to a React component using an ES6 class
    getPercent = decimal => {
        return decimal * 100 + '%';
    }
    calcGoalProgress = (total, goal) =>{
        return this.getPercent(total/goal);
    }
    render() {
        const {total, goal} = this.props; //Use a slightly shorter syntax to make the code a little easier to read
        return (
            <section>
                <div>
                    {/* <p>Total Days: {this.props.total} </p> */}
                    <p>Total: {total} days</p>
                </div>
                <div>
                    {/* <p>Goal: {this.props.goal} </p> */}
                    <p>Goal: {goal} days </p>
                </div>
                <div>
                    {/* <p>Goal: {this.props.goal} </p> */}
                    <p style={styles}>Goal progress: {this.calcGoalProgress(total, goal)} </p>
                </div>
            </section>
        )
    }
}
//ReactDOM.render
render(
    <SwimDayCounter 
        total = {swimData.total}   
        goal = {swimData.goal} 
    />,
    document.getElementById('root')
)