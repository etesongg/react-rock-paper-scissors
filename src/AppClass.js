import React, { Component } from "react";
import { Button } from "react-bootstrap";

import BoxClass from "./component/BoxClass";
import ResultImgBoxClass from "./component/ResultImgBoxClass";

const choice = {
  rock: {
    name: "Rock",
    img: "https://i.pinimg.com/564x/36/69/e9/3669e921fe419e00ca6dc3d274caeabb.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://helloartsy.com/wp-content/uploads/kids/school/how-to-draw-scissors/how-to-draw-scissors-step-6.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://helloartsy.com/wp-content/uploads/kids/school/how-to-draw-paper/how-to-draw-paper-step-6.jpg",
  },
};

const resultImages = {
    Default: {
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWBmlC8AhsYmHJyJ4wDnO5ZnvioVxpQz9R8_09y2IDiCDeiilKF2eqnC459E3Z4ZeydO35MjWgVstMseI9joqQjBjNl4bFS4-6NpAZLj8cfwzpdHxqBf8wm-rJ2jsAbErM4VNq91NOhpg/s400/animal_dance_rabbit.png",
    },
    Win: {
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgx-hG3cv1inc_RWkGIXVwcCwhY0urLWRBjwrmGFGhHHSRFLZLHFRqmLyG2E3j6PTRIcIU0qJu3T-QjVlqAdIPiEficf65fDtZSU4Z8DGfVpuBQ9wQ_7V66zuNStZWybQZYmwWgsZbA6do/s300/douzo_usagi_left.png",
    },
    Lose: {
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEih-pjgVz3CJR0yaxmMZsKiopMwl1rarbmptXCLWd5l3K6pOC4nXlf1B02Psu0dyiS-vkOKZpYCQZ3vHz9l1KCptd2QMcSvJQ8UHbwAhfEwuew-oVbn70ExWl0lGKTYXDo0qPvUzYfLZTM/s300/douzo_usagi_right.png",
    },
  };

export default class Appclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      resultImage: resultImages.Default
    };
  }
  play = (userChoice) => {
    const computerChoice = this.randomChoice();
    const judgementResult = this.judgement(choice[userChoice], computerChoice);
    const resultImage = this.getResultImage(judgementResult)
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: judgementResult,
      resultImage: resultImage
    });
  };

  getResultImage = (my_result) => {
    if (my_result === "Win") {
        return resultImages.Win;
      } else if (my_result === "Lose") {
        return resultImages.Lose;
      } else {
        return resultImages.Default;
      }
    };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Scissors" ? "Lose" : "Win";
    else if (user.name === "Scissors")
      return computer.name === "Rock" ? "Lose" : "Win";
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };
  render() {
    return (
      <div>
        <div className="main">
          <h1>가위바위보!</h1>
        </div>
        <div className="main">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
          <ResultImgBoxClass img={this.state.resultImage}/>
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}/>
        </div>
        <div className="main">
          <Button variant="danger" onClick={() => this.play("scissors")}>가위</Button>
          <Button variant="danger" onClick={() => this.play("rock")}>바위</Button>
          <Button variant="danger" onClick={() => this.play("paper")}>보</Button>
        </div>
      </div>
    );
  }
}
