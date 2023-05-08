import './styles.css';
import { saveAs } from 'file-saver';
import React, { useEffect, useState } from 'react';

// Whole Application
export default function MemeGenerator() {
  const [topText, setTopText] = useState(' ');
  const [bottomText, setBottomText] = useState(' ');
  const [options, setOptions] = useState([]);
  const [meme, setMeme] = useState('doge');
  const [finalMeme, setFinalMeme] = useState(
    `https://api.memegen.link/images/${meme}/${topText}/${bottomText}`,
  );

  // fetch all the meme templates
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.memegen.link/templates`)
        .then((response) => response.json())
        .then((data) => {
          setOptions(data);
        })
        // Nescessary Catch - like a break function
        .catch(console.error);
    };
    fetchData().catch(console.error);
  }, []); // empty array to prevent infinite loop

  // delete text if new Meme is selected
  function clearText(event) {
    event.preventDefault();
    setTopText('');
    setBottomText('');
  }

  // generate final meme
  function generateMeme(image = meme, top = topText, bottom = bottomText) {
    if (top === '' && bottom === '') {
      setFinalMeme(`https://api.memegen.link/images/${image}/ / `);
    } else if (top === '') {
      setFinalMeme(`https://api.memegen.link/images/${image}/ /${bottom}`);
    } else if (bottom === '') {
      setFinalMeme(`https://api.memegen.link/images/${image}/${top}/`);
    } else {
      setFinalMeme(`https://api.memegen.link/images/${image}/${top}/${bottom}`);
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
                  generateMeme(e.target.value, topText, bottomText);
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
          </div>
        </form>
        <section className="text input">
          <div className="text boxes">
            <form>
              <label>
                Top text:
                <input
                  value={topText}
                  onChange={(event) => {
                    setTopText(event.target.value);
                    generateMeme(meme, event.target.value, bottomText);
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
                    generateMeme(meme, topText, event.target.value);
                  }}
                />
              </label>
            </form>
          </div>
        </section>

        <section>
          <button
            type="button"
            data-test-id="generate-meme"
            onClick={(e) => {
              e.preventDefault();
              generateMeme(meme, topText, bottomText);
            }}
          >
            Generate
          </button>
          <button onClick={downloadMeme}>Download</button>
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
