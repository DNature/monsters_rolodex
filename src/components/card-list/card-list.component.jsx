import React from "react";
import "./cardlist.styles.css";
import { Card } from "../card/card.component";

export const CardList = props => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster, index) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
