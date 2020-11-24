import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';
class NewTweet extends Component {

    state = {
        text: '',

    }

    handleChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { text } = this.state;
        const { dispatch, id } = this.props;
        dispatch(handleAddTweet(text, id))
        this.setState(() => ({
            text: ''
        }))

    }
    render() {
        const { text } = this.state;


        const tweetLeft = 280 - text.length;
        return (
            <div>
                <h3 className="center">Compose New Tweet</h3>

                <form onSubmit={this.handleSubmit} className="new-tweet">
                    <textarea
                        placeholder="What's happening"
                        value={text}
                        onChange={this.handleChange}
                        className="textarea"
                        maxLength={280}
                    />

                    {tweetLeft <= 100 && (
                        { tweetLeft }
                    )}
                    <button className="button"
                        type="submit"
                        disabled={text === ''}>
                        Submit
                        </button>
                </form>
            </div>
        );
    }
}

export default connect()(NewTweet);