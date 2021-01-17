'use strict';

console.log("App.js is running!");

var user = {
    name: 'JamesMikejones',
    age: 12,
    location: 'Udi'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            ' Location: ',
            location,
            ' '
        );
    }
}

var data = {
    title: "Some Title",
    subtitle: "This is the Subtitle",
    options: ['one', 'Two']
};

//JSX - Javascript XML
var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        data.title,
        ' '
    ),
    React.createElement(
        'p',
        null,
        data.subtitle && React.createElement(
            'p',
            null,
            data.subtitle
        )
    ),
    React.createElement(
        'p',
        null,
        data.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

//JSX - Javascript XML
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        user.name ? user.name : 'Anonymous',
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' ',
        user.age && user.age >= 18 && React.createElement(
            'p',
            null,
            ' Age: ',
            user.age,
            ' '
        ),
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' ',
        getLocation(user.location),
        ' '
    )
);

var appRoot = document.getElementById('app');

var appRoot2 = document.getElementById('app2');

ReactDOM.render(templateOne, appRoot);

ReactDOM.render(templateTwo, appRoot2);
