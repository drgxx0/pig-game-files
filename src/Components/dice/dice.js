import React from "react";

import "./dice.css";

const Dice = ({ num }) => {
  return (
    <div>
      {num && num !== 1 ? (
        <img src={require(`../assets/img/dice-${num}.png`)} alt="dice" />
      ) : null}
    </div>
  );
};

export default Dice;
