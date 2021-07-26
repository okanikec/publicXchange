

class IndecisionApp extends React.Component {
    render () {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a robot" 
        const options = ['Thing one', 'Thing Two', 'Thing Four']

        return (
            <div> 
                <Header title={title} subtitle={subtitle} />
                <Dropdown />
                <Options options={options}/>
                <AddOption />
                <Signup/>
                
            </div>
        )
    }
}


class Header extends React.Component {
    render () {
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h2> {this.props.subtitle} </h2>
            </div>
        ) 
    }
}

class Dropdown extends React.Component { 
    handlePick() {
        alert('handlePick')
    }
    render () {
        return (
            <div>
                <button onClick={this.handlePick}> What should I do? </button>
                
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    handleRemoveAll() {
        console.log(this.props.options)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}> Remove All </button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()

        if(option){
            alert(option)
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button> Add Option </button>
                </form>
            </div>
        )
    }
}


class Signup extends React.Component {
    selectedMe (e) {
        document.querySelector('#filter').addEventListener('change', (e) => { 
            if (e.target.value === "naira") {
                x = "Naira needed"
            }   
        })
    }
    

    render () {
        return (
            <div>
                <select id="filter" onChange={this.selectedMe}>
                    <option value="naira"> Naira</option>
                    <option value="dollar"> Dollar </option>
                    <option value="gbp"> British Pounds </option>
                    <option value="cd"> Canadian Dollars </option>
                    <option value="eu"> EU Euros </option>
                    <option value="aus"> Australian Dollars </option>
                    <option value="yu"> Chinese Yuan </option>
                </select>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))
    
    
            
    
