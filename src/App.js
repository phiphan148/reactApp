import React, {Component} from 'react';
// import logo from './logo.svg';
import Hello from './Hello.js';
import Team from './Team.js';
import Button from './Button.js';
import './style.css';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'MYtinerary Project Team',
            showResults: true
        };
    }

    hideMember = () => {
        this.setState({ showResults: false });
    }

    showMember = () => {
        this.setState({ showResults: true });
    }

    render() {
        return (
            <div className="App">
                <div>
                    <Hello name={this.state.name}/>
                    <Button name="Show" onClick={this.showMember}></Button>
                    <Button name="Hide" onClick={this.hideMember}></Button>
                    { this.state.showResults ? <Team></Team> : null }

                </div>
                {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                {/*Edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*className="App-link"*/}
                {/*href="https://reactjs.org"*/}
                {/*target="_blank"*/}
                {/*rel="noopener noreferrer"*/}
                {/*>*/}
                {/*Learn React*/}
                {/*</a>*/}
                {/*</header>*/}
            </div>
        );
    }
}

export default App;
