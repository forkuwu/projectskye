const appsData = [
  {
    name: "Pokemon Red Version",
    link: "https://file.garden/ZSdA-IaLWgVEMH-0/roms/red-star-2020-08-18.gb",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/roms/71aow5iRsfL.jpg",
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
      button.onclick = () => showIframe(app.proxy ? `/links/emulator.html?type=gb&game=${app.link}` : app.link);
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

