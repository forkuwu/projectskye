const appsData = [
  {
    name: "Papa's Burgeria",
    link: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/papasburgeria.swf',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/images/Papas_Burgeria.png',
    text: null,
    proxy: true,
      window: false,
  },
  {
    name: "Papa's Bakeria",
    link: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/papasbakeria.swf',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/images/Papas_Bakeria.JPG',
    text: null,
    proxy: true,
      window: false,
  },
    {
    name: "Papa's Pizzeria",
    link: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/papaspizzeria_v2.swf',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/377fd7d97c2b2f4fe25618ccffcc601b.jfif',
    text: null,
    proxy: true,
      window: false,
  },
    {
    name: "Papa's Hot Doggeria",
    link: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/papashotdoggeria.swf',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/papas-hot-doggeria.jpg',
    text: null,
    proxy: true,
      window: false,
  },
  {
    name: "Papa's Cheeseria",
    link: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/papascheeseria_102.swf',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/images/Cheeseria.jpeg',
    text: null,
    proxy: true,
      window: false,
  },
  {
    name: "Papa's Cluckeria To Go!",
    link: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/cluckeria.swf',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/images/Papas_Cluckeria_To_Go!_icon.png',
    text: null,
    proxy: true,
      window: false,
  },   
  {
    name: "Papa's Cupcakeria To Go!",
    link: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/papascupcakeria.swf',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/papasseries/images/Cupcakeria.jpg',
    text: null,
    proxy: true,
      window: false,
  },
];

// Function to dynamically generate buttons
function generateButtons() {
  const buttonGrid = document.getElementById('button-grid');

  appsData.forEach(app => {
    const button = document.createElement('button');
    button.className = 'button';
    
    // Check if the 'window' property is true
    if (app.window) {
      button.onclick = () => (window.location.href = app.link);
    } else {
      button.onclick = () => showIframe(app.proxy ? `/links/ruffle.html?swf=${app.link}` : app.link);
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
