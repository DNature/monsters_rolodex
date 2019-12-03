import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "11",
          email: "zome@email.com"
        },
        {
          name: "Dracula",
          id: "12",
          email: "zome@email.com"
        },
        {
          name: "Zombie",
          id: "13",
          email: "zome@email.com"
        }
      ],
      searchField: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState(state => ({ monsters: [...users, ...state.monsters] }))
      );
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase()) ||
        monster.email.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="monster-font">Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder="Search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
