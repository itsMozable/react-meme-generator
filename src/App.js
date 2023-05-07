import './styles.css';
import { saveAs } from 'file-saver';
import React, { useEffect, useState } from 'react';

export default function MemeGenerator() {
  const [topText, setTopText] = useState(' ');
  const [bottomText, setBottomText] = useState(' ');
  const [options, setOptions] = useState([]);
  const [meme, setMeme] = useState('fry');
  const [finalMeme, setFinalMeme] = useState(
    `https://api.memegen.link/images/${meme}/${topText}/${bottomText}`,
  );

  // fetch all the meme templates
  useEffect(() => {
    fetch(`https://api.memegen.link/templates`)
      .then((response) => response.json())
      .then((data) => {
        setOptions(data);
        console.log(data);
      });
  }, []);

  function clearText(event) {
    event.preventDefault();
    setTopText('');
    setBottomText('');
  }
  // generate final meme
  function generateMeme(event) {
    event.preventDefault();
    if (topText === '' || bottomText === '') {
      setFinalMeme(`https://api.memegen.link/images/${meme}/ / `);
    } else {
      setFinalMeme(
        `https://api.memegen.link/images/${meme}/${topText}/${bottomText}`,
      );
      console.log(finalMeme);
    }
  }

  // Download and save Meme
  const downloadMeme = () => {
    const url = finalMeme;
    saveAs(url, meme);
  };

  return (
    <main>
      <div className="GeneratorButton">
        <h1>Meme Generator</h1>
        <p>Juice your fresh picture !</p>
        <form>
          <div className="meme template">
            <label className="template">
              Meme template:
              <select
                /* select the option from dropdown */
                value={meme}
                onClick={clearText}
                onChange={(e) => {
                  setMeme(e.target.value);
                  generateMeme(e);
                }}
                onKeyDown={(e) => {
                  setMeme(e.target.value);
                  generateMeme(e);
                }}
              >
                {/* Dropdown options */}
                {options.map((templates) => (
                  <option
                    key={`templates-${templates.id}`}
                    value={templates.id}
                  >
                    {templates.id}
                  </option>
                ))}
              </select>
            </label>
            {/* alternative random meme button */}
            {/* <button onClick={randomImage}>Random Meme</button> */}
          </div>
        </form>
        <section className="text input">
          <div className="text boxes">
            <form>
              <label>
                Top text:
                <input
                  size="54"
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
                  size="50"
                  value={bottomText}
                  onChange={(event) => {
                    setBottomText(event.target.value);
                  }}
                />
              </label>
            </form>
          </div>
        </section>

        <section>
          <button type="button" onClick={generateMeme}>
            Generate Meme
          </button>
          <button onClick={downloadMeme}>Download Meme</button>
        </section>
        <div className="Meme Image">
          <img
            data-test-id="meme-image"
            className="finalMeme"
            src={finalMeme}
            alt="Meme"
          />
        </div>
      </div>
    </main>
  );
}
