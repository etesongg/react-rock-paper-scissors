import { useState } from "react";
import { Button } from 'react-bootstrap';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from "./component/Box";
import ResultImgBox from "./component/ResultImgBox"

// 1. 유저는 박스 두개를 볼 수 있다.(타이틀, 사진, 결과).
// 2. 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
// 3. 버튼을 클릭하면 클릭한 아이템이 유저 박스에 보인다.
// 4. 버튼을 클릭하면 컴퓨터 아이템은 랜덤하게 선택이 된다.
// 5. 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
// 6. 박스 테두리가 결과에 따라 색이 변한다. 지면 빨간색, 이기면 초록색, 비기면 검정색이 보인다.

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
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWBmlC8AhsYmHJyJ4wDnO5ZnvioVxpQz9R8_09y2IDiCDeiilKF2eqnC459E3Z4ZeydO35MjWgVstMseI9joqQjBjNl4bFS4-6NpAZLj8cfwzpdHxqBf8wm-rJ2jsAbErM4VNq91NOhpg/s400/animal_dance_rabbit.png"
  },
  Win: {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgx-hG3cv1inc_RWkGIXVwcCwhY0urLWRBjwrmGFGhHHSRFLZLHFRqmLyG2E3j6PTRIcIU0qJu3T-QjVlqAdIPiEficf65fDtZSU4Z8DGfVpuBQ9wQ_7V66zuNStZWybQZYmwWgsZbA6do/s300/douzo_usagi_left.png"
  },
  Lose: {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEih-pjgVz3CJR0yaxmMZsKiopMwl1rarbmptXCLWd5l3K6pOC4nXlf1B02Psu0dyiS-vkOKZpYCQZ3vHz9l1KCptd2QMcSvJQ8UHbwAhfEwuew-oVbn70ExWl0lGKTYXDo0qPvUzYfLZTM/s300/douzo_usagi_right.png"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [resultImage, setResultImage] = useState(resultImages.Default);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    let judgementResult = judgement(choice[userChoice], computerChoice);
    setResult(judgementResult)
    setResultImage(getResultImage(judgementResult))
  };

  const getResultImage = (my_result) => {
    if(my_result === "Win") {
      return resultImages.Win;
    } else if (my_result === "Lose"){
      return resultImages.Lose;
    }else{
      return resultImages.Default;
    }
  }

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Scissors" ? "Lose" : "Win";
    else if (user.name === "Scissors")
      return computer.name === "Rock" ? "Lose" : "Win";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // ['scissors', 'rock', 'paper'] 각 인덱스를 가짐
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <ResultImgBox img={resultImage.img}/>
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <Button variant="danger" onClick={() => play("scissors")}>가위</Button>
        <Button variant="danger" onClick={() => play("rock")}>바위</Button>
        <Button variant="danger" onClick={() => play("paper")}>보</Button>
      </div>
    </div>
  );
}

export default App;
