import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Redirect from './components/Redirect';
import Home from './components/Home';

const App = (props) => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Redirect} />
                    <Route path="/home" component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
