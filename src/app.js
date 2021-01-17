console.log("App.js is running!")

const user = {
    name: 'JamesMikejones',
    age: 12,
    location: 'Udi'
};

function getLocation(location) {
    if (location) {
        return <p> Location: {location} </p>;
    }
}

const data = {
    title: "Some Title",
    subtitle: "This is the Subtitle",
    options: ['one', 'Two']
};

//JSX - Javascript XML
const templateOne = ( 
    <div> 
        <h1> {data.title} </h1> 
       <p>{data.subtitle && <p>{data.subtitle}</p>}</p>
        <p>{ data.options.length > 0 ? 'Here are your options' : 'No options' }</p>
    </div> 
);

//JSX - Javascript XML
const templateTwo = ( 
    <div> 
        <h1> {user.name ? user.name : 'Anonymous'} </h1> 
        <p> { (user.age && user.age >= 18) && <p> Age: {user.age} </p>} </p>
        <p> { getLocation(user.location) } </p>
    </div> 
);

var appRoot = document.getElementById('app');

var appRoot2 = document.getElementById('app2');

ReactDOM.render(templateOne, appRoot);

ReactDOM.render(templateTwo, appRoot2);