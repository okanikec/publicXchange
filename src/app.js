console.log("App.js is running!")

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



let x;

const selectedMe = (e) => {
    e.preventDefault();
    document.querySelector('#filter').addEventListener('change', (e) => { 
        if (e.target.value === "naira") {
            x = "Naira needed"
        }

        if (e.target.value === "dollar") {
            x = "US Dollar needed"
        }

        if (e.target.value === "gbp") {
            x = "British Pounds needed"
        }

        if (e.target.value === "cd") {
            x = "Canadian Dollars needed"
        }

        if (e.target.value === "eu") {
            x = "Euros needed"
        }

        if (e.target.value === "aus") {
            x = "Australian Dollars needed"
        }

        if (e.target.value === "yu") {
            x = "Chinese Yuan needed"
        }
    
    })
    
    render();
       

}


const appRoot = document.getElementById('app');

const render = () => {

    const template = (
        <div> 
                
                <select id="filter" onChange={selectedMe}>
                    <option value="naira"> Naira</option>
                    <option value="dollar"> Dollar </option>
                    <option value="gbp"> British Pounds </option>
                    <option value="cd"> Canadian Dollars </option>
                    <option value="eu"> EU Euros </option>
                    <option value="aus"> Australian Dollars </option>
                    <option value="yu"> Chinese Yuan </option>
                </select>
                <h1> { x } </h1>
            
        </div>
        
    )
    
    
    ReactDOM.render(template, appRoot)
}
    
render();

