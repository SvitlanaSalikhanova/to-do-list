import './App.css';
import React from 'react';
import Header from './components/header/Header';
import MainController from './controllers/MainController';

function App() {
    return (
        <div className="App">
            <Header />
            <MainController />
        </div>
    );
}

export default App;
