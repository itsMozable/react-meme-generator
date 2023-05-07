/* import './styles.css';
import React, { useState } from 'react';

export default function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [meme, setMeme] = useState('doge');
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
  return (
    <section>
      <div className="GeneratorButton">
        <h1>Meme Generator</h1>
        <p>Juice your fresh picture !</p>
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
        <form>
          <div>
            Meme Templates:
            <select
              defaultValue={meme}
              value={meme}
              onChange={(e) => {
                setMeme(e.target.value);
              }}
            >
              <option value="doge">Doge</option>
              <option value="captain">Captain</option>
              <option value="fry">Fry</option>
              <option value="grumpy">Grumpy</option>
              <option value="honest">Honest</option>
              <option value="kermit">Kermit</option>
              <option value="noone">Noone</option>
              <option value="scared">Scared</option>
              <option value="wonka">Wonka</option>
            </select>
          </div>
        </form>
        <button type="button" onClick={generateMeme}>
          Generate Meme
        </button>
        <div className="Meme">
          <img className="finalMeme" src={finalMeme} alt="Meme" />
        </div>
      </div>
    </section>
  );
}
 */
