import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, Platfom, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/api'
import UdaciFitnessCalendar from 'udacifitness-calendar-fix'
import DateHeader from './DateHeader';
import { white } from '../utils/colors'
class History extends Component {
    componentDidMount() {
        console.log(Platform.OS)
        const { dispatch } = this.props
        fetchCalendarResults()
            .then((entries) => dispatch(receiveEntries(entries)))
            .then(({ entries }) => {
                console.log(entries)
                console.log("timeToString")
                console.log(timeToString())
                console.log("value" + entries[timeToString()])
                if (!entries[timeToString()]) {
                    console.log("not found")
                    dispatch(addEntry({
                        [timeToString()]: getDailyReminderValue()
                    }))
                }
            })
    }
    renderItem = ({ today, ...metrics }, formattedDate, key) => {
        <View style={styles.item}>
            {
                today ?
                    <Text>{JSON.stringify(today)}</Text> :
                    <Text>{JSON.stringify(metrics)}</Text>
            }
        </View>
    }
    renderEmptyDate = (formattedDate) => {
        return (
            <View>
                <Text>No Data for this day</Text>
            </View>
        )
    }
    render() {
        const { entries } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <UdaciFitnessCalendar
                    items={entries}
                    renderItem={this.renderItem}
                    renderEmptyDate={this.renderEmptyDate} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    }
})
function mapStateToProps(entries) {
    return {
        entries
    }
}
export default connect(mapStateToProps)(History)