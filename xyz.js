import React, { useState } from 'react';

const ReplaceWordComponent = () => {
  const [originalText, setOriginalText] = useState('Hello World');
  const [replacementWord, setReplacementWord] = useState('');
  const [updatedText, setUpdatedText] = useState('');

  const replaceWord = () => {
    // Replace the word in the original text with the user-provided replacement word
    const newText = originalText.replace('World', replacementWord);
    setUpdatedText(newText);
  };

  return (
    <div>
      <p>Original Text: {originalText}</p>
      <label>
        Replacement Word:
        <input
          type="text"
          value={replacementWord}
          onChange={(e) => setReplacementWord(e.target.value)}
        />
      </label>
      <button onClick={replaceWord}>Replace Word</button>
      <p>Updated Text: {updatedText}</p>
    </div>
  );
};
export default ReplaceWordComponent;