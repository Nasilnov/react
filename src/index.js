// import { Test } from "@components/app"
import React from "react"
import ReactDOM from "react-dom"
// import styles from "./index.module.css"
import "./index.css"

class HtmlComponent extends  React.Component {
constructor(props) {
    super(props);
    this.state = {
        mess: "",
        messages: ["Hello"],
    };
}

    handleChange = (e) =>{
        this.setState({mess: e.target.value});
    }

    addMessages = () => {
        this.state.messages.push(this.state.mess);
        this.setState({mess: ""});
        console.log(this.state.messages);
    }

    render() {
        return (
            <div>
                <h1>messages</h1>
                {this.state.messages.map((message) => (
                    <p key={this.state.messages}>{message}
                    </p>
                ))}
                <input placeholder="Введите сообщение"  value={this.state.mess} onChange={ (e) => this.handleChange(e)}/>
                <button onClick={this.addMessages}>Отправить</button>

            </div>
        );
    }
}

ReactDOM.render(
  <>
    <HtmlComponent />
  </>,
  document.querySelector("#root"),
)
