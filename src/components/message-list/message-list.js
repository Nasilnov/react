import React, { Component } from "react"

import { Message } from "../message"

export class MessageList extends Component {
  state = {
    mess: "",
    messages: [{ author: "User", value: "Тест сообщение" }],
  };

  handleChange = (e) => {
    this.setState({mess: e.target.value});
  };

  sendMessage = () => {
    this.setState({
      messages: [...this.state.messages, { author: "User", value: this.state.mess }]
    });
    this.setState({mess: ""});
  }

  componentDidUpdate() {
    // let user = this.state.messages[this.state.messages.length - 1].author;
    if ( this.state.messages.length % 2 === 0) {
        setTimeout(() =>
            this.setState(
                { messages: [...this.state.messages, {author: "Robot", value: "Привет я робот"}]}), 1000);
      }
    }




  render() {
    const messages = this.state.messages

    return (
        <div>
        <input placeholder="Введите сообщение"  value={this.state.mess} onChange={ (e) => this.handleChange(e)}/>
        <button onClick={this.sendMessage}>Отправить сообщение</button>

        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    )
  }
}
