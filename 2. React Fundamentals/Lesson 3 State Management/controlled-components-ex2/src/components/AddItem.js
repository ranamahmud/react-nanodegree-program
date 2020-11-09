import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddItem extends Component {


    state = {
        value: '',
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    addItem = event => {
        event.preventDefault();
        this.props.addItem(this.state.value);
    };
    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {

        return (
            <form onSubmit={this.addItem} >
                <input
                    type="text"
                    placeholder="Enter New Item"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button disabled={this.inputIsEmpty()}>Add</button>
            </form>
        );
    }
};
AddItem.propTypes = {
    onAddItem: PropTypes.func.isRequired,
};

export default AddItem;