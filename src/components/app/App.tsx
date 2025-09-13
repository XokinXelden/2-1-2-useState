import { useState } from "react";
import "./App.scss";

function App() {
  const [somethingObject, setSomethingObject] = useState([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const addObject = (name: any, value: any) => {
    if (name === "" || undefined)
      return alert(
        "Берега попутал? хочешь не дать название? может быть ты ещё и мир в гиену огненную подтолкнёшь? войну мировую устроишь, детишек сам лично задушешь и котят с щенятами зарубишь топором пока они скулят и зовут свою мамочку? а? если нет, то давай ка исправляйся и пиши всё по человечески, жестокий психопат. Мы тут таких как ты не любим, которые назавание объектам не дают"
      );

    setSomethingObject([...somethingObject, { [name]: value }]);
    setName("");
    setValue("");
  };

  return (
    <div className="main">
      <div className="inputZone">
        <div className="inputZone-Elem">
          <label>Название поля:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            placeholder="Как дела?"
          />
        </div>
        <div className="inputZone-Elem">
          <label>Значение поля:</label>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            placeholder="Максим"
          />
        </div>
      </div>
      <button onClick={() => addObject(name, value)}>Создать поле в объекте</button>
      <div>
        <p>
          Object:&#123;
          {somethingObject
            .map((obj) => {
              const keys = Object.keys(obj);
              if (keys.length === 0) return null;
              const key = keys[0];
              const val = obj[key];
              const someObj = `"${key}":"${val}"`;
              return someObj;
            })
            .join(", ")}
          &#125;
        </p>
      </div>
    </div>
  );
}

export default App;
