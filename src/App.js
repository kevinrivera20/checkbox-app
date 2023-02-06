import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const [response1, setResponse1] = useState("");
  const [response2, setResponse2] = useState("");
  const [response3, setResponse3] = useState("");
  const [resultResponse1, setResultResponse1] = useState(false);
  const [sentForm, setSentForm] = useState(false);


  const checkList = [
    {
      option: "Her",
      correct: false
    },
    {
      option: "He",
      correct: false
    },
    {
      option: "She",
      correct: true
    },
    {
      option: "His",
      correct: false
    }
  ];

  const checkListTwo = [
    {
      option: "Her",
      correct: false
    },
    {
      option: "He",
      correct: true
    },
    {
      option: "She",
      correct: false
    },
    {
      option: "His",
      correct: false
    }
  ];

  const checkListThree = [
    {
      option: "Her",
      correct: false
    },
    {
      option: "He",
      correct: false
    },
    {
      option: "She",
      correct: false
    },
    {
      option: "Him",
      correct: true
    }
  ]

  const handleClick = (e) => {
    e.preventDefault();

    console.log(response1);
    console.log(response2);
    console.log(response3);

    const result = checkList.find((opt) => {
      return opt.option == response1
    }).correct;
    setResultResponse1(result);

    const resultTwo = checkListTwo.find((opt) => {
      return opt.option == response2
    })?.correct

    const resultThree = checkListThree.find((opt) => {
      return opt.option == response3
    })?.correct

    console.log(result);
    console.log(resultTwo);
    console.log(resultThree);
    setSentForm(true);
  }


  // Return classes based on whether item is checked
  const isChecked = (option) => {
    return "true";
    setChecked(option)
    //return checked.includes(option) ? "checked-item" : "not-checked-item";
  }
  const onChangeValue1 = (e) => {
    console.log(e.target.value);
    setResponse1(e.target.value)
  }
  const onChangeValue2 = (e) => {
    console.log(e.target.value);
    setResponse2(e.target.value)
  }
  const onChangeValue3 = (e) => {
    console.log(e.target.value);
    setResponse3(e.target.value)
  }



  return (
    <div className="app">
      <form>
        <div className="checkList">
          <div className="title">Who is Kate? Kate is my friend ___ is a teacher.</div>
          <div className="list-container">
            {checkList.map((item, index) => (
              <div key={index}>
                <input required value={item.option} onChange={onChangeValue1} type="radio" name='q1' />
                <span className={isChecked(item.option)}>{item.option}

                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="checkListTwo">
          <div className="title">Who is this man? This is Henry ___ is my boss.</div>
          <div className="list-container">
            {checkListTwo.map((item, index) => (
              <div key={index}>
                <input required value={item.option} type="radio" name='q2' onChange={onChangeValue2} />
                <span className={isChecked(item.option)}>{item.option}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="checkListThree">
          <div className="title">Do you know Tom? Yes, I know ___</div>
          <div className="list-container">
            {checkListThree.map((item, index) => (
              <div key={index}>
                <input required value={item.option} type="radio" name='q3' onChange={onChangeValue3} />
                <span className={isChecked(item.option)}>{item.option}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <button type='submit' className='button' onClick={handleClick}>Enviar</button>
      </form>
    </div>
  );
}

export default App;
