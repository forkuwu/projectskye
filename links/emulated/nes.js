const appsData = [
{
    name: "Super Mario Bros",
    link: "https://archive.org/download/the-game-collection-nes/S/Super%20Mario%20Bros.%20%28World%29.zip/Super%20Mario%20Bros.%20%28World%29.nes",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/jhj/550px-Super_Mario_Bros._box.png",
    text: null,
    proxy: true,
    window: false,
  },
  {
    name: "Super Mario Bros 2",
    link: "https://archive.org/download/the-game-collection-nes/S/Super%20Mario%20Bros.%202%20(USA)%20(Rev%20A).zip/Super%20Mario%20Bros.%202%20(USA)%20(Rev%20A).nes",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/roms/Super%20Mario%20Bros.%202.gif",
    text: null,
    proxy: true,
    window: false,
  },
    {
    name: "Super Mario Bros 3",
    link: "https://archive.org/download/the-game-collection-nes/S/Super%20Mario%20Bros.%203%20(USA)%20(Rev%20A).zip/Super%20Mario%20Bros.%203%20(USA)%20(Rev%20A).nes",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/roms/Super%20Mario%20Bros.%203.gif",
    text: null,
    proxy: true,
    window: false,
  },

];

function generateButtons() {
  const buttonGrid = document.getElementById('button-grid');

  // Sort the appsData array alphabetically by name
  appsData.sort((a, b) => a.name.localeCompare(b.name));

  appsData.forEach(app => {
    const button = document.createElement('button');
    button.className = 'button';

    // Check if the 'window' property is true
    if (app.window) {
      button.onclick = () => (window.location.href = app.link);
    } else {
      button.onclick = () => showIframe(app.proxy ? `/links/emulator.html?type=nes&game=${app.link}` : app.link);
    }

    const img = document.createElement('img');
    img.src = app.image;
    img.alt = app.name;

    const buttonText = document.createElement('div');
    buttonText.className = 'button-text';

    const h2 = document.createElement('h2');
    h2.innerText = app.name;

    const p = document.createElement('p');
    p.innerText = app.text || '';

    // Appending elements to button
    buttonText.appendChild(h2);
    buttonText.appendChild(p);
    button.appendChild(img);
    button.appendChild(buttonText);

    buttonGrid.appendChild(button);
  });
}

// Call the function to generate buttons
generateButtons();


