import React, { Component } from "react";
import "./PopUp.css"

class PopUp extends Component {
    constructor(props) {
        super(props);
        this.handlePopUpChange = this.handlePopUpChange.bind(this);
    }

    handlePopUpChange(e) {
        return this.props.handlePopUpChange(e)
    }

    render() {
        return(
            <div className={`pop-up ${this.props.visibility}`}>
                <form onSubmit={this.props.update}>
                    <label className="pop-up-label" htmlFor="name">Изменить Имя</label>
                    <input id="name" type="text" value={this.props.updatedData.name} onChange={this.handlePopUpChange}/>
                    <label className="pop-up-label" htmlFor="age">Изменить возраст</label>
                    <input id="age" type="text" value={this.props.updatedData.age} onChange={this.handlePopUpChange}/>
                    <label className="pop-up-label" htmlFor="status">Изменить статус</label>
                    <input id="status" type="text" value={this.props.updatedData.status} onChange={this.handlePopUpChange}/>
                    <button className="pop-up-btn" type="submit">Обновить</button>
                </form>
                <div className="close-btn" onClick={this.props.closePopUp}>X</div>
            </div>
        )
    }
}

export default PopUp;