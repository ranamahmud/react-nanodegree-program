import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers';
import DateHeader from './DateHeader';
import UdaciSlider from './UdaciSlider';
import UdaciSteppers from './UdaciSteppers';
import { Ionicons } from '@expo/vector-icons';
import TextButton from './TextButton';
import { submitEntry, removeEntry } from '../utils/api'
function SubmitBtn({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>SUBMIT</Text>
        </TouchableOpacity>
    )
}
export default class AddEntry extends Component {
    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0,
    }

    increment = (metric) => {
        const { max, step } = getMetricMetaInfo(metric)
        this.setState((state) => {
            const count = state[metric] + step;
            return {
                ...state,
                [metric]: count > max ? max : count
            }
        })
    }
    decrement = (metric) => {

        this.setState((state) => {
            const count = state[metric] - getMetricMetaInfo(metric).step;
            return {
                ...state,
                [metric]: count < 0 ? 0 : count,
            }
        })
    }

    slide = (metric, value) => {
        this.setState(() => (
            {
                [metric]: value,
            }
        ))
    }

    submit = () => {
        const key = timeToString();
        const entry = this.state;

        // Update Redux
        this.setState(() => ({
            run: 0,
            bike: 0,
            swim: 0,
            sleep: 0,
            eat: 0,
        }))
        // Navigate to Home
        // Save to Database
        submitEntry({ key, entry })
        // Clear the local notification
    }
    reset = () => {
        const key = timeToString();
        alert("hi")
        // Update Redux

        // Route to Home

        // Update "DB"
        removeEntry(key)
    }
    render() {
        const metaInfo = getMetricMetaInfo()
        if (this.props.alreadyLogged) {
            return (
                <View>
                    <Ionicons name='ios-happy-outline'
                        size={100} />
                    <Text>You already logged in your information for today</Text>
                    <TextButton onPress={this.reset}>
                        RESET
                    </TextButton>
                </View>
            )
        }
        return (
            <View>
                <Text>{JSON.stringify(this.state)}</Text>
                <DateHeader date={(new Date().toLocaleDateString())} />
                {
                    Object.keys(metaInfo).map((key) => {
                        const { getIcon, type, ...rest } = metaInfo[key]
                        const value = this.state[key]
                        return (
                            <View key={key}>
                                {
                                    getIcon()}
                                {
                                    type === 'slider' ?
                                        <UdaciSlider value={value} onChange={(value) => this.slide(key, value)} {...rest} /> :
                                        <UdaciSteppers value={value}
                                            onIncrement={() => this.increment(key)}
                                            onDecrement={() => this.decrement(key)}
                                            {...rest}
                                        />
                                }



                            </View>
                        )
                    })
                }
                <SubmitBtn onPress={this.submit} />
            </View>
        )
    }
}

