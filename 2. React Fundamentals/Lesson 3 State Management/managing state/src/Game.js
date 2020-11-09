import React, { Component } from 'react'

export class Game extends Component {
    constructor(props) {
        super(props);
        const valueArray = this.makeNewQuestion();
        this.state = {
            value1: valueArray[0],
            value2: valueArray[1],
            value3: valueArray[2],
            proposedAnswer: valueArray[3],
        };
    }
    makeNewQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
        return [value1, value2, value3, proposedAnswer];
    }

    updateState = newValueArray => {
        this.setState(currState => ({
            value1: newValueArray[0],
            value2: newValueArray[1],
            value3: newValueArray[2],
            proposedAnswer: newValueArray[3],
        }));
    };

    handleAnswer = e => {
        const newValueArray = this.makeNewQuestion();
        this.updateState(newValueArray);
        const answerWasCorrect = this.evaluateAnswer(e.target.name);
        this.props.handleAnswer(answerWasCorrect);
    }
    evaluateAnswer(givenAnswer) {
        const { value1, value2, value3, proposedAnswer } = this.state;
        const correctAnswer = value1 + value2 + value3;
        return (
            (correctAnswer === proposedAnswer && givenAnswer == "true") || (correctAnswer !== proposedAnswer && givenAnswer === "false")
        )
    }
    render() {
        const { value1, value2, value3, proposedAnswer } = this.state;
        return (
            <div>
                <div className="equation">
                    <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
                </div>
                <button onClick={this.handleAnswer} name="true">True</button>
                <button onClick={this.handleAnswer} name="false"> False</button>
            </div>
        )
    }
}

export default Game
