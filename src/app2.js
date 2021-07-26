console.log("App.js is running!")

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