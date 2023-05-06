/* import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import { memeTemps } from './memes.js';
import defaultDoge from './memeTemplates/doge.jpeg';

export default function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [meme, setMeme] = useState(defaultDoge);
  const [finalMeme, setFinalMeme] = useState(
    `https://api.memegen.link/images/${meme}/${topText}/${bottomText}`,
  );
  function generateMeme(event) {
    event.preventDefault();
    setFinalMeme(
      `https://api.memegen.link/images/${meme}/${topText}/${bottomText}`,
    );
    console.log(finalMeme);
  }
  // Download and save Meme
  const downloadMeme = () => {
    const url = finalMeme;
    saveAs(url, meme); // ???? save as importiert- noch ka was wie wo
  };
  return (
    <div className="GeneratorButton">
      <h1>Meme Generator</h1>
      <form>
        <label>
          Top text:
          <input
            value={topText}
            onChange={(event) => {
              setTopText(event.target.value);
            }}
          />
        </label>
      </form>
      <form>
        <label>
          Bottom text:
          <input
            value={bottomText}
            onChange={(event) => {
              setBottomText(event.target.value);
            }}
          />
        </label>
      </form>
      <p>Juice your fresh picture !</p>
      <form>
        <div>
          Meme Templates:
          <select
            defaultValue={defaultDoge}
            value={meme}
            onChange={(e) => {
              setMeme(e.target.value);
            }}
          >
            {memeTemps.map((choice) => (
              <option value={choice.value} key={choice}>
                {choice.value}
              </option>
            ))}
          </select>
          <img src={meme} alt="wtf" />
        </div>
      </form>
      <div>
        <button onClick={generateMeme}>Generate Meme</button>
        <button onClick={downloadMeme}>Download Meme</button>
      </div>
    </div>
  );
}
 */
