import './article.css';
import React, { useState } from 'react';

function Article() {
  const [inputs, setInputs] = useState({
    name: '',
    age: '',
  });

  const { name, age } = inputs;

  // const [text, setText] = useState('');
  const onChange = (e) => {
    // setText(e.target.value);
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    // setText('');
    setInputs({
      name: '',
      age: '',
    });
  };

  return (
    <>
      <article>
        <div>
          <h1>값: </h1>
          {name} ({age})
        </div>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
        ></input>
        <input
          name="age"
          placeholder="나이"
          onChange={onChange}
          value={age}
        ></input>
        <button onClick={onReset}>초기화</button>
      </article>
    </>
  );
}

export default Article;
