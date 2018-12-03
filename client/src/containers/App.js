import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {personsFetchData, personsPushData} from "../actions/persons";


class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            data: {
                name: "",
                age: "",
                status: ""
            }
        };
    }

    componentDidMount() {
        this.props.fetchData("/api/muggers");
    }

    componentDidUpdate(prevProps) {
        if(this.props.wasUpdated !== prevProps.wasUpdated) {
            this.props.fetchData("/api/muggers")
        }
    }

    handleChange(e){
        let {...data} = this.state.data;
        data[e.target.id] = e.target.value;
        this.setState({
            data
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.pushData("/api/muggers", this.state.data);
        this.setState({
            data: {
                name: "",
                age: "",
                status: ""
            }
        })
    }

    render() {

        if (this.props.hasErrored) {
            return <p> Извините, произошла ошибка </p>
        }
        if (this.props.isLoading) {
            return <p> Загрузка... </p>
        }
        return (
            <div>
                <ul>
                    {this.props.persons.map((person, index) => {
                        return <li key={index}>
                            <div>Name is: {person.name}</div>
                            <div>Age is: {person.age}</div>
                            <div>Status is: {person.status}</div>
                            <div>Mugger ID is: {person._id}</div>
                        </li>
                    })}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Введите имя</label>
                    <input
                        id="name"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.data.name}/>
                    <label htmlFor="age">Введите возраст</label>
                    <input
                        id="age"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.data.age}/>
                    <label htmlFor="status">Ведите статус</label>
                    <input
                        id="status"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.data.status}/>
                    <button type="submit">Добавить</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons,
        hasErrored: state.personsHasErrored,
        isLoading: state.personsIsLoading,
        wasUpdated: state.personsUpdated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(personsFetchData(url)),
        pushData: (url, data) => dispatch(personsPushData(url, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
