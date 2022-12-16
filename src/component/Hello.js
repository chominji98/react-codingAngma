import { useState } from "react";

const Hello = (props) => {

  // let name = "minji";
  // 단순한 변수. 값이 바뀌어도 react가 인지하지 못함.
  // -> UI를 업데이트 해주지 않음
  const [name, setName] = useState("Minji");
  const [age, setAge] = useState(props.age);

  function changeName() {
    setName(name === "Minji" ? "MinYoung" : "Minji");
  }

  return (
    <div>
      <h1>state</h1>
      <h2 id="name">
        {name}({props.age})
      </h2>
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export default Hello;