import React, { Component } from 'react';
import Flight from '../Flight/Flight';
import SelectBox from '../SelectBox/SelectBox';
import styles from './flightList.css';

export default class FlightList extends Component {
    findUniqueAirlines(flights) {
        function unique(carriers) {
            const uniq = new Set(carriers);
            return [...uniq]
        }

        let carriers = flights.flights.map(item => {
            return item.carrier;
        })
        return unique(carriers);
    }

    renderFlight() {
      const { flights, setCarrier } = this.props;

        return (
          flights.flights.map(function (item) {
              if (flights.carrierToCheck === item.carrier || flights.carrierToCheck === 'all') {
                  return (
                      <Flight
                          key={item.id}
                          from={item.direction.from}
                          to={item.direction.to}
                          arrival={item.arrival}
                          departure={item.departure}
                          carrier={item.carrier}
                      />
                  )
              }
          })
        );
    }

    render() {
        const { flights, setCarrier } = this.props
        let uniqueAirlines = this.findUniqueAirlines(flights);
        uniqueAirlines.splice(0, 0, 'all');

        return (
            <div className='flightList'>
                <SelectBox
                    value={flights.carrierToCheck}
                    uniqueCarriers={uniqueAirlines}
                    setCarrier={setCarrier}
                />
                {this.renderFlight()}
            </div>
        )
    }
}
