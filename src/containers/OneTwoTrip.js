import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FlightList from '../components/FlightList/FlightList';
import * as actions from '../actions/index';

class OneTwoTrip extends Component {
    render() {
        const { flightlist } = this.props;
        const { setCarrier } = this.props.actions;

        return (
            <div>
                <FlightList
                  flights={flightlist}
                  setCarrier = {setCarrier}
                />
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        flightlist: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OneTwoTrip);
