import {useState} from 'react';

function TextRepeaterButton() {
  const [repetitions, setRepititions] = useState(1);

  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }

  const handleClick = () => {
    setRepititions(repetitions + 1);
  };

  return (
    <button onClick={handleClick} className='TextRepeaterButton'>
      {textArray}
    </button>
  );
}

export default TextRepeaterButton;
