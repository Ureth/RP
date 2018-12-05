import React, { Component } from "react";
import "./PopUp.css"

class PopUp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={`pop-up ${this.props.visibility}`}>
                <form>
                    <label className="pop-up-label" htmlFor="name">Изменить Имя</label>
                    <input id="name" type="text"/>
                    <label className="pop-up-label" htmlFor="age">Изменить возраст</label>
                    <input id="age" type="text"/>
                    <label className="pop-up-label" htmlFor="status">Изменить статус</label>
                    <input id="status" type="text"/>
                    <button className="pop-up-btn" type="submit">Обновить</button>
                </form>
                <div className="close-btn" onClick={this.props.closePopUp}>X</div>
            </div>
        )
    }
}

export default PopUp;