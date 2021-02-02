'use strict';

console.log("App.js is running!");

// const app = {
//     title: 'Indecision App',
//     subtitle: 'Put your life in the hands of a computer',
//     options: []
// }

// const onFormSubmit = (e) => {
//     e.preventDefault();

//     const option = e.target.elements.option.value

//     if(option){
//         app.options.push(option);
//         e.target.elements.option.value = '';
//         render();
//     }
// }

// const onRemoveAll = () => {
//     app.options = [];
//     render();
// }

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length)
//     const option = app.options[randomNum]
//     alert(option);
// }


// const appRoot = document.getElementById('app');


// const render = () => {

//     const template = (
//         <div>
//             <h1> {app.title} </h1>
//             {app.subtitle && <p> {app.subtitle} </p>}
//             <p> {app.options.length > 0 ? 'Here are your options' : 'No options'} </p>
//             <button  disabled= {app.options.length=== 0} onClick={onMakeDecision}> What should I do? </button>
//             <button onClick={onRemoveAll}> Remove All </button>
//             <ol>
//                 {
//                     app.options.map((option) => {
//                         return <li key={option}> {option} </li>;
//                     })
//                 }
//             </ol>
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name="option"/>
//                 <button> Add Option </button>
//             </form>
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// render();


var x = void 0;

var selectedMe = function selectedMe(e) {
    e.preventDefault();
    document.querySelector('#filter').addEventListener('change', function (e) {
        if (e.target.value === "naira") {
            x = "Naira needed";
        }

        if (e.target.value === "dollar") {
            x = "US Dollar needed";
        }

        if (e.target.value === "gbp") {
            x = "British Pounds needed";
        }

        if (e.target.value === "cd") {
            x = "Canadian Dollars needed";
        }

        if (e.target.value === "eu") {
            x = "Euros needed";
        }

        if (e.target.value === "aus") {
            x = "Australian Dollars needed";
        }

        if (e.target.value === "yu") {
            x = "Chinese Yuan needed";
        }
    });

    render();
};

var appRoot = document.getElementById('app');

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'select',
            { id: 'filter', onChange: selectedMe },
            React.createElement(
                'option',
                { value: 'naira' },
                ' Naira'
            ),
            React.createElement(
                'option',
                { value: 'dollar' },
                ' Dollar '
            ),
            React.createElement(
                'option',
                { value: 'gbp' },
                ' British Pounds '
            ),
            React.createElement(
                'option',
                { value: 'cd' },
                ' Canadian Dollars '
            ),
            React.createElement(
                'option',
                { value: 'eu' },
                ' EU Euros '
            ),
            React.createElement(
                'option',
                { value: 'aus' },
                ' Australian Dollars '
            ),
            React.createElement(
                'option',
                { value: 'yu' },
                ' Chinese Yuan '
            )
        ),
        React.createElement(
            'h1',
            null,
            ' ',
            x,
            ' '
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
