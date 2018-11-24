import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { personsFetchData } from "../actions/persons";


class App extends Component {
  componentDidMount() {
    this.props.fetchData("/api/muggers");
  }

  render() {
    return (
      <div>
          <ul>
              {this.props.persons.map((person, index)=> {
                return <li key={index}>
                  <div>Name is: {person.name}</div>
                  <div>Age is: {person.age}</div>
                  <div>Status is: {person.status}</div>
                  <div>Mugger ID is: {person._id}</div>
                </li>
              })}

          </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(personsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
