import React, { Component } from 'react';
import styles from './selectBox.css';

export default class SelectBox extends Component {
    constructor(props) {
        super(props);
    }

    handlerChange(e) {
        this.setState({
            value: e.target.value
        });
        this.props.setCarrier(e.target.value);
    }

    render() {
        const {uniqueCarriers, value} = this.props;

        return (
            <div className='form-group'>
                <label htmlFor='select'>Select the flight for display</label>
                <select
                    value={value}
                    onChange={this.handlerChange.bind(this)}
                    className='form-control'
                >
                    {uniqueCarriers.map(option => {
                        return (
                            <option
                                value={option}
                                key={option}
                            >
                                {option}
                            </option>
                        )
                    })}
                </select>
            </div>
        )
    }
}
