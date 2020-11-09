import React from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './components/Items';
import AddItem from './components/AddItem';
import DeleteLast from './components/DeleteLast';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };


  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  handleDeleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItem addItem={this.addItem} inputIsEmpty={this.inputIsEmpty} />
        <DeleteLast handleDeleteLastItem={this.handleDeleteLastItem} noItemsFound={this.noItemsFound} />


        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
