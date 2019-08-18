import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    useres: []
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const useres = JSON.parse(xhr.response);
        this.setState({ useres: useres });
      }
      console.log(xhr.response);
    };
    xhr.send(null);
  }
  render() {
    const useres = this.state.useres.map(user => (
      <div className="user" key={user.id}>
        <h3>Imię i Nazwisko: {user.name}</h3>
        <h4>Pochodzi z: {user.address.city}</h4>
        <p>Telefon: {user.phone}</p>
      </div>
    ));
    return (
      <div>
        <div>{useres}</div>
      </div>
    );
  }
}

export default App;
