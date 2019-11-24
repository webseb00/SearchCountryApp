import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions-countries';
import CountryFlagList from '../presentational/flag-list.component';

class ContinentsContainer extends Component {
    constructor(props) {
        super(props);
    }

    chooseContinent(event) {
        this.props.dispatch(setContinent(event.target.value))
    }

    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }

    componentDidMount() {
        this.props.dispatch(setContinent('Europa'));
    }

    render() {
        return (
            <div className="main-content">
                <div className="form-group text-center">
                    <label className="font-weight-bolder" htmlFor="selectContinent">Wybierz kontynent:</label>
                    <select onChange={e => this.chooseContinent(e)} className="form-control" id="selectContinent">
                        <option value="Europa">Europa</option>
                        <option value="Afryka">Afryka</option>
                    </select>
                </div>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = store => ({
    visibleCountries: store.countriesReducer.visibleCountries
});

export default connect(mapStateToProps)(ContinentsContainer);