const appsData = [
  {
    name: 'AI',
    link: 'https://file.garden/ZSdA-IaLWgVEMH-0/jhj/chat.html',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/Chat-GPT.png',
    text: null,
    proxy: true,
      window: false,
  },
  {
    name: 'Google',
    link: 'https://google.com',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/Google.png',
    text: null,
    proxy: true,
      window: false,
  },
     {
    name: 'Instagram',
    link: '/igg',
    image: '/iggl',
    text: "USES NOW.GG",
    proxy: false,
      window: false,
  },
    {
    name: 'Snapchat',
    link: '/snap',
    image: '/snapl',
    text: "USES NOW.GG",
    proxy: false,
      window: false,
  },
     {
    name: 'Telegram',
    link: '/tel',
    image: '/tell',
    text: "USES NOW.GG",
    proxy: false,
      window: false,
  },
    {
    name: 'Discord',
    link: '/links/di.html',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/disc0rd.png',
    text: "PC & Ipad",
    proxy: false,
      window: false,
  },
  {
    name: 'Live-Tv',
    link: 'https://file.garden/ZSdA-IaLWgVEMH-0/jhj/tv.html',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/Live-Tv.png',
    text: null,
    proxy: false,
      window: false,
  },
  {
    name: 'Manga',
    link: 'https://ww6.mangakakalot.tv',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/Manga.svg',
    text: null,
    proxy: true,
      window: false,
  },
  {
    name: 'Mathway',
    link: 'https://mathway.com',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/Mathway.png',
    text: null,
    proxy: true,
      window: false,
  },
  {
    name: 'Movies-web',
    link: 'https://movies.jdx3.org',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/movies.png',
    text: 'NOTE: Doesnt Work All The Time\nIf it constantly refreshes, there\'s nothing I can do about it.',
    proxy: true,
      window: false,
  },
  {
    name: 'Watch So Much.TV',
    link: 'https://watchsomuch.tv/',
    image: 'https://watchsomuch.tv/Images/WatchSoMuch.tv.png',
    text: 'NOTE: The videos might be low quality unless you have a premium account.',
    proxy: true,
      window: false,
  },
  {
    name: 'Music-Downloader',
    link: 'https://new.myfreemp3juices.cc/',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/Music-Downloader.png',
    text: null,
    proxy: false,
      window: false,
  },
  /*   {
    name: "Alex's Drive",
    link: 'https://worker-holy-star-fec9.alappan077.workers.dev/',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/jhj/640px-Google_Drive_logo.png',
    text: "its just alexs drive",
    proxy: true,
      window: false,
  }, */
  {
    name: 'Soundcloud',
    link: 'https://soundcloud.com',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/Soundcloud.svg',
    text: null,
    proxy: true,
      window: false,
  },

     {
    name: 'Test Area',
    link: '/links/Test Area',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/Test.png',
    text: null,
    proxy: false,
    window: false,
  },
  {
    name: 'TikTok',
    link: 'https://file.garden/ZSdA-IaLWgVEMH-0/jhj/tik.html',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/Tik-Tok.svg',
    text: null,
    proxy: true,
      window: false,
  },
  {
    name: 'Unreleased Music',
    link: 'https://repedia.xyz/gridthing/',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/trackerhub.png',
    text: null,
    proxy: true,
    window: false,
  },
  {
    name: 'Wattpad',
    link: 'https://wattpad.com',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/Wattpad.png',
    text: null,
    proxy: true,
    window: false,
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/Youtube.svg',
    text: null,
    proxy: true,
      window: false,
  },
  {
    name: 'Youtube Music',
    link: 'https://music.youtube.com/',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/jhj/512px-Youtube_Music_icon.svg.png',
    text: null,
    proxy: true,
      window: false,
  },
  {
    name: 'Ytmp3',
    link: 'https://ytmp3.nu',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/images/Ytmp3.png',
    text: null,
    proxy: false,
      window: false,
  },
  {
    name: 'Watch Cartoons Online',
    link: 'https://fabulous-pithivier-70f700.netlify.app/uvlink.html?url=https://www.wcofun.tv/',
    image: 'https://file.garden/ZSdA-IaLWgVEMH-0/logo.gif',
    text: "kinda slow, but gets the job done",
    proxy: false,
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
      button.onclick = () => showIframe(app.proxy ? `/uvlink.html?url=${app.link}` : app.link);
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

