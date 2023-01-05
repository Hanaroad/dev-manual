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
  };

  return (
    <>
      <article>
        <h2>input</h2>
        <input onChange={onChange} value={text}></input>
        <button onClick={onReset}>초기화</button>
        <input type="text"></input>
        <input type="text"></input>
      </article>
    </>
  );
}

export default Article;
