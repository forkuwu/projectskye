const appsData = [

    {
    name: "Sonic Advance",
    link: "https://archive.org/download/the-game-collection-gba/S/Sonic%20Advance%20(USA)%20(En%2CJa).zip/Sonic%20Advance%20(USA)%20(En%2CJa).gba",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/images/sonic-advance.png",
    text: null,
    proxy: false,
    window: false,
  },
  {
    name: "Sonic Advance 2",
    link: "https://archive.org/download/the-game-collection-gba/S/Sonic%20Advance%202%20(USA)%20(En%2CJa%2CFr%2CDe%2CEs%2CIt).zip/Sonic%20Advance%202%20(USA)%20(En%2CJa%2CFr%2CDe%2CEs%2CIt).gba",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/images/sonic-advance-2.png",
    text: null,
    proxy: true,
    window: false,
  },
    {
    name: "Pokemon Radical Red",
    link: "https://file.garden/ZSdA-IaLWgVEMH-0/roms/1636%20-%20Pokemon%20Fire%20Red%20(U)(Squirrels)%20(patched).gba",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/roms/pokemon-radical-red.webp",
    text: null,
    proxy: true,
    window: false,
  },
 {
    name: "Pokemon Rowe",
    link: "https://file.garden/ZSdA-IaLWgVEMH-0/roms/Pokemon_ROWE%20(v1.9.0.1).gba",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/roms/pokemon-rowe-cover-gba-340x483.webp",
    text: null,
    proxy: true,
    window: false,
  },
  {
    name: "Pokemon Mystery Dungeon Red Rescue Team",
    link: "https://archive.org/download/the-game-collection-gba/P/Pokemon%20Mystery%20Dungeon%20-%20Red%20Rescue%20Team%20(USA%2C%20Australia).zip/Pokemon%20Mystery%20Dungeon%20-%20Red%20Rescue%20Team%20(USA%2C%20Australia).gba",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/images/pokemon-mystery-dungeon-redbluerescueteam-red---button-1558056364956.jpg",
    text: null,
    proxy: true,
    window: false,
  },
  {
    name: "Super  Mario Advance",
    link: "https://archive.org/download/the-game-collection-gba/S/Super%20Mario%20Advance%20(USA%2C%20Europe).zip/Super%20Mario%20Advance%20(USA%2C%20Europe).gba",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/images/800px-SMA.jpg",
    text: null,
    proxy: true,
    window: false,
  },
  {
    name: "Super  Mario Advance 2",
    link: "https://archive.org/download/the-game-collection-gba/S/Super%20Mario%20Advance%202%20-%20Super%20Mario%20World%20(USA%2C%20Australia).zip/Super%20Mario%20Advance%202%20-%20Super%20Mario%20World%20(USA%2C%20Australia).gba",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/images/800px-Box_Art_NA_-_Super_Mario_World_Super_Mario_Advance_2.jpg",
    text: null,
    proxy: true,
    window: false,
  },
    {
    name: "Super  Mario Advance 3",
    link: "https://archive.org/download/the-game-collection-gba/S/Super%20Mario%20Advance%203%20-%20Yoshi's%20Island%20(USA).zip/Super%20Mario%20Advance%203%20-%20Yoshi's%20Island%20(USA).gba",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/images/800px-Super_Mario_Advance_3_Box_Art.jpg",
    text: null,
    proxy: true,
    window: false,
  },
    {
    name: "Super  Mario Advance 4",
    link: "https://archive.org/download/the-game-collection-gba/S/Super%20Mario%20Advance%204%20-%20Super%20Mario%20Bros.%203%20(USA%2C%20Australia)%20(Rev%201).zip/Super%20Mario%20Advance%204%20-%20Super%20Mario%20Bros.%203%20(USA%2C%20Australia)%20(Rev%201).gba",
    image: "https://file.garden/ZSdA-IaLWgVEMH-0/images/800px-Super_Mario_Advance_4_Box.png",
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
      button.onclick = () => showIframe(app.proxy ? `/links/emulator.html?type=gba&game=${app.link}` : app.link);
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
