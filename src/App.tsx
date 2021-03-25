import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Counter from './features/counter/Counter';
import Home from './features/home/Home';
import Todo from './features/todo/Todo';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/todo" exact component={Todo} />
                <Route path="/counter" exact component={Counter} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
