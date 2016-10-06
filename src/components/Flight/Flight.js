import React, { Component } from 'react';
import styles from './flight.css';

export default class Flight extends Component {
    parseDate(date) {
        const time = new Date(date);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        return {
            hours: time.getHours(),
            minutes: time.getMinutes(),
            date: time.getDate(),
            day: days[time.getDay()],
            month: months[time.getMonth()],
        };
    }

    render() {
        const {from, to, arrival, departure, carrier } = this.props
        const objArrival = this.parseDate(arrival);
        const objDeparture = this.parseDate(departure);

        return (
            <div className='flight' id={carrier}>
                <p>{carrier}</p>
                <p>There, {objDeparture.date} {objDeparture.month}, {objDeparture.day}</p>
                <p>{objDeparture.hours}:{objArrival.minutes} - {objArrival.hours}:{objDeparture.minutes}({objArrival.date} {objArrival.month})</p>
                <p>from the {from} to {to}</p>
            </div>
        )
    }
}
