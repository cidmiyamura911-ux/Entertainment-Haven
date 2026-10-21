// Simpler, easier-to-read version of the page logic.

const MOODS = {
  comfort: { label: 'Comfort', color: '#c9a227' },
  chaos: { label: 'Chaos', color: '#ff6b5b' },
  heartbreak: { label: 'Heartbreak', color: '#9a8cff' },
  wonder: { label: 'Wonder', color: '#5bc9a6' },
  mystery: { label: 'Mystery', color: '#63bde8' },
  intense: { label: 'Intense', color: '#ff3d6e' }
};

const TITLES = [
  { t: 'Julie & Julia', mood: 'comfort', desc: 'Two women in different eras find purpose and connection through cooking.', len: '2h 03m', image: 'Julie & Julia.jpg' },
  { t: 'Ratatouille', mood: 'comfort', desc: 'A rat with a remarkable sense of taste pursues his dream of becoming a chef in Paris.', len: '1h 51m', image: 'Ratatouille.jpg' },
  { t: 'The Intern', mood: 'comfort', desc: 'A retired widower becomes a senior intern at a fast-growing fashion company.', len: '2h 01m', image: 'The Intern.jpg' },
  { t: 'Little Miss Sunshine', mood: 'comfort', desc: 'A spirited family takes a cross-country road trip to support a young beauty-pageant contestant.', len: '1h 42m', image: 'Little Miss Sunshine.jpg' },
  { t: 'Crazy Rich Asians', mood: 'comfort', desc: 'A New Yorker travels to Singapore and discovers her boyfriend comes from an extraordinarily wealthy family.', len: '2h 01m' },
  { t: 'Paddington 2', mood: 'comfort', desc: 'Paddington takes on a series of odd jobs to buy a special gift for his aunt.', len: '1h 43m' },
  { t: 'Mad Max: Fury Road', mood: 'chaos', desc: 'A group of fugitives races across a harsh wasteland while pursued by a tyrant.', len: '2h 00m' },
  { t: 'Baby Driver', mood: 'chaos', desc: 'A talented getaway driver tries to leave his criminal life behind.', len: '1h 53m' },
  { t: 'Ocean\'s Eleven', mood: 'chaos', desc: 'A skilled crew plans an elaborate simultaneous heist of three Las Vegas casinos.', len: '1h 56m' },
  { t: 'John Wick', mood: 'chaos', desc: 'A retired hitman returns to the underworld and sets off a relentless pursuit.', len: '1h 41m' },
  { t: 'Game Night', mood: 'chaos', desc: 'A group of friends find their game night becoming a real-life mystery.', len: '1h 40m' },
  { t: 'Guardians of the Galaxy', mood: 'chaos', desc: 'A band of unlikely outlaws joins forces to protect the galaxy.', len: '2h 01m' },
  { t: 'The Notebook', mood: 'heartbreak', desc: 'A long love story unfolds through memories of a couple from different backgrounds.', len: '2h 03m' },
  { t: 'La La Land', mood: 'heartbreak', desc: 'An aspiring actress and a jazz musician pursue their ambitions in Los Angeles.', len: '2h 09m' },
  { t: 'Titanic', mood: 'heartbreak', desc: 'Two passengers from different worlds fall in love aboard the ill-fated ocean liner.', len: '3h 15m' },
  { t: 'Eternal Sunshine of the Spotless Mind', mood: 'heartbreak', desc: 'A former couple undergoes a procedure to erase memories of their relationship.', len: '1h 48m' },
  { t: 'Call Me by Your Name', mood: 'heartbreak', desc: 'A teenager in northern Italy experiences a formative summer romance.', len: '2h 12m' },
  { t: 'A Walk to Remember', mood: 'heartbreak', desc: 'A rebellious teenager forms an unexpected bond with a kind-hearted classmate.', len: '1h 41m' },
  { t: 'Spirited Away', mood: 'wonder', desc: 'A girl enters a world of spirits and works to free her transformed parents.', len: '2h 05m' },
  { t: 'Harry Potter and the Sorcerer\'s Stone', mood: 'wonder', desc: 'A boy discovers he is a wizard and begins his education at Hogwarts.', len: '2h 32m' },
  { t: 'Interstellar', mood: 'wonder', desc: 'Explorers travel beyond Earth in search of a future for humanity.', len: '2h 49m' },
  { t: 'Coco', mood: 'wonder', desc: 'A young musician journeys to the Land of the Dead to learn about his family.', len: '1h 45m', trailerSrc: 'https://www.youtube.com/watch?v=Rvr68u6k5sI' },
  { t: 'Pan\'s Labyrinth', mood: 'wonder', desc: 'A girl discovers a mysterious labyrinth and faces a series of fantastical tasks.', len: '1h 58m' },
  { t: 'Life of Pi', mood: 'wonder', desc: 'A young man survives a shipwreck and an extraordinary journey across the ocean.', len: '2h 07m' },
  { t: 'Knives Out', mood: 'mystery', desc: 'A detective investigates the death of a celebrated mystery novelist.', len: '2h 10m' },
  { t: 'Shutter Island', mood: 'mystery', desc: 'A U.S. Marshal investigates the disappearance of a patient from a remote hospital.', len: '2h 18m' },
  { t: 'Gone Girl', mood: 'mystery', desc: 'A husband becomes the focus of an investigation when his wife disappears.', len: '2h 29m' },
  { t: 'Chinatown', mood: 'mystery', desc: 'A private investigator uncovers a tangled conspiracy while working in Los Angeles.', len: '2h 10m' },
  { t: 'Se7en', mood: 'mystery', desc: 'Two detectives hunt a serial killer whose crimes follow a disturbing pattern.', len: '2h 07m' },
  { t: 'The Prestige', mood: 'mystery', desc: 'Two rival magicians become consumed by competition and the secrets behind their illusions.', len: '2h 10m' },
  { t: 'The Conjuring', mood: 'intense', desc: 'Paranormal investigators help a family troubled by a presence in their farmhouse.', len: '1h 52m' },
  { t: 'Insidious', mood: 'intense', desc: 'A family tries to protect their son after he falls into a mysterious coma and dark forces begin haunting their home.', len: '1h 43m' },
  { t: 'Hereditary', mood: 'intense', desc: 'A family confronts unsettling secrets and increasingly frightening events after a loss.', len: '2h 07m' },
  { t: 'A Quiet Place', mood: 'intense', desc: 'A family struggles to survive in a world where sound draws deadly creatures.', len: '1h 30m' },
  { t: 'It', mood: 'intense', desc: 'A group of friends confronts a shape-shifting evil haunting their town.', len: '2h 15m' },
  { t: 'Train to Busan', mood: 'intense', desc: 'Passengers fight to survive a fast-spreading outbreak aboard a train.', len: '1h 58m' },
  { t: 'Get Out', mood: 'intense', desc: 'A weekend visit to meet a girlfriend\'s family turns into a chilling discovery.', len: '1h 44m' }
];

const TRAILER_URLS = {
  'Julie & Julia': 'https://www.youtube.com/embed/ozRK7VXQl-k',
  'Ratatouille': 'https://www.youtube.com/watch?v=PeFGdSrFTUw',
  'The Intern': 'https://www.youtube.com/watch?v=ZU3Xban0Y6A',
  'Little Miss Sunshine': 'https://www.youtube.com/watch?v=wvwVkllXT80',
  'Crazy Rich Asians': 'https://www.youtube.com/watch?v=14ZHRBfpeNg',
  'Paddington 2': 'https://www.youtube.com/watch?v=52x5HJ9H8DM',
  'Mad Max: Fury Road': 'https://www.youtube.com/watch?v=hEJnMQG9ev8',
  'Baby Driver': 'https://www.youtube.com/watch?v=zTvJJnoWIPk',
  'Ocean\'s Eleven': 'https://www.youtube.com/watch?v=imm6OR605UI',
  'John Wick': 'https://www.youtube.com/watch?v=C0BMx-qxsP4',
  'Game Night': 'https://www.youtube.com/watch?v=qmxMAdV6s4U',
  'Guardians of the Galaxy': 'https://www.youtube.com/watch?v=HuTtWqD8Ovs',
  'The Notebook': 'https://www.youtube.com/watch?v=BjJcYdEOI0k',
  'La La Land': 'https://www.youtube.com/watch?v=0pdqf4P9MB8',
  Titanic: 'https://www.youtube.com/watch?v=I7c1etV7D7g',
  'Eternal Sunshine of the Spotless Mind': 'https://www.youtube.com/watch?v=07-QBnEkgXU',
  'Call Me by Your Name': 'https://www.youtube.com/watch?v=Z9AYPxH5NTM',
  'A Walk to Remember': 'https://www.youtube.com/watch?v=RdjtBpZzHWU',
  'Spirited Away': 'https://www.youtube.com/watch?v=ByXuk9QqQkk',
  'Harry Potter and the Sorcerer\'s Stone': 'https://www.youtube.com/watch?v=SJVmeJaS44s',
  Interstellar: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
  Coco: 'https://www.youtube.com/watch?v=xlnPHQ3TLX8',
  'Pan\'s Labyrinth': 'https://www.youtube.com/watch?v=jVZRnnVSQ8k',
  'Life of Pi': 'https://www.youtube.com/watch?v=3mMN693-F3U',
  'Knives Out': 'https://www.youtube.com/watch?v=qGqiHJTsRkQ',
  'Shutter Island': 'https://www.youtube.com/watch?v=v8yrZSkKxTA',
  'Gone Girl': 'https://www.youtube.com/watch?v=2-_-1nJf8Vg',
  Chinatown: 'https://www.youtube.com/watch?v=T37QkBc4IGY',
  Se7en: 'https://www.youtube.com/watch?v=KPOuJGkpblk',
  'The Prestige': 'https://www.youtube.com/watch?v=RLtaA9fFNXU',
  'The Conjuring': 'https://www.youtube.com/watch?v=k10ETZ41q5o',
  Hereditary: 'https://www.youtube.com/watch?v=V6wWKNij_1M',
  'A Quiet Place': 'https://www.youtube.com/watch?v=WR7cc5t7tv8',
  It: 'https://www.youtube.com/watch?v=xKJmEC5ieOk',
  'Train to Busan': 'https://www.youtube.com/watch?v=1ovgxN2VWNc',
  'Get Out': 'https://www.youtube.com/watch?v=DzfpyUB60YY',
  Insidious: 'https://www.youtube.com/watch?v=M-irQA7NIrk'
};

const POSTER_IMAGES = {
  'Crazy Rich Asians': 'Crazy Rich Asians.jpg',
  'Paddington 2': 'Paddington 2.jpg',
  'Mad Max: Fury Road': 'Mad Max Fury Road.jpg',
  'Baby Driver': 'Baby Driver.jpg',
  'Ocean\'s Eleven': 'Ocean\'s Eleven.jpg',
  'John Wick': 'John Wick.jpg',
  'Game Night': 'Game Night.jpg',
  'Guardians of the Galaxy': 'Guardians of the Galaxy.jpg',
  'The Notebook': 'The Notebook.jpg',
  'The Prestige': 'The Prestige.jpg',
  'La La Land': 'La La Land.jpg',
  Titanic: 'Titanic.jpg',
  'Eternal Sunshine of the Spotless Mind': 'Eternal Sunshine of the Spotless Mind.jpg',
  'Call Me by Your Name': 'Call Me by Your Name.jpg',
  'A Walk to Remember': 'A Walk to Remember.jpg',
  'Spirited Away': 'Spirited Away.jpg',
  'Harry Potter and the Sorcerer\'s Stone': 'Harry Potter and the Sorcerer\'s Stone.jpg',
  Interstellar: 'Interstellar.jpg',
  Coco: 'Coco.jpg',
  'Pan\'s Labyrinth': 'Pan\'s Labyrinth.jpg',
  'Life of Pi': 'Life of Pi.jpg',
  'Knives Out': 'Knives Out.jpg',
  'Shutter Island': 'Shutter Island.jpg',
  'Gone Girl': 'Gone Girl.jpg',
  Chinatown: 'Chinatown.jpg',
  Se7en: 'Se7en.jpg',
  'The Conjuring': 'The Conjuring.jpg',
  Insidious: 'insidious.jpg',
  Hereditary: 'Hereditary.jpg',
  'A Quiet Place': 'A Quiet Place.jpg',
  It: 'It.jpg',
  'Train to Busan': 'Train to Busan.jpg',
  'Get Out': 'Get Out.jpg'
};

// Add youtubeSrc: 'https://youtu.be/VIDEO_ID' or audioSrc to enable playback for a track.
const TRACKS = [
  { n: 'Better Together', a: 'Jack Johnson', mood: 'comfort', time: '3:27', youtubeSrc: 'https://www.youtube.com/embed/seZMOTGCDag' },
  { n: 'Banana Pancakes', a: 'Jack Johnson', mood: 'comfort', time: '3:11', youtubeSrc: 'https://www.youtube.com/embed/KUyw5PekGYo' },
  { n: 'Sunday Morning', a: 'Maroon 5', mood: 'comfort', time: '4:04', youtubeSrc: 'https://www.youtube.com/embed/S2Cti12ILTQ' },
  { n: 'The Girl from Ipanema', a: 'Stan Getz & João Gilberto', mood: 'comfort', time: '5:24', youtubeSrc: 'https://www.youtube.com/embed/UJkxFhj6R2o' },
  { n: 'Put Your Records On', a: 'Corinne Bailey Rae', mood: 'comfort', time: '3:34', youtubeSrc: 'https://www.youtube.com/embed/w7b4x6tM3E0' },
  { n: 'Island in the Sun', a: 'Weezer', mood: 'comfort', time: '3:20', youtubeSrc: 'https://www.youtube.com/embed/erG5rgNYSdk' },
  { n: 'Seven Nation Army', a: 'The White Stripes', mood: 'chaos', time: '3:52', youtubeSrc: 'https://www.youtube.com/embed/0J2QdDbmezY' },
  { n: 'Till I Collapse', a: 'Eminem', mood: 'chaos', time: '4:58', youtubeSrc: 'https://www.youtube.com/embed/tYsh4L3bh-8' },
  { n: 'Blitzkrieg Bop', a: 'Ramones', mood: 'chaos', time: '2:12', youtubeSrc: 'https://www.youtube.com/embed/ZduwI8S0mLE' },
  { n: 'Titanium', a: 'David Guetta ft. Sia', mood: 'chaos', time: '4:05', youtubeSrc: 'https://www.youtube.com/embed/JRfuAukYTKg' },
  { n: 'Sing, Sing, Sing', a: 'Benny Goodman', mood: 'chaos', time: '7:25', youtubeSrc: 'https://www.youtube.com/embed/rjbS3LbWwHY' },
  { n: 'Can\'t Hold Us', a: 'Macklemore & Ryan Lewis', mood: 'chaos', time: '4:18', youtubeSrc: 'https://www.youtube.com/embed/2zNSgSzhBfM' },
  { n: 'Someone Like You', a: 'Adele', mood: 'heartbreak', time: '4:45', youtubeSrc: 'https://www.youtube.com/embed/hLQl3WQQoQ0' },
  { n: 'Back to December', a: 'Taylor Swift', mood: 'heartbreak', time: '4:53', youtubeSrc: 'https://www.youtube.com/embed/QUwxKwt6m7Y' },
  { n: 'Skinny Love', a: 'Bon Iver', mood: 'heartbreak', time: '3:58', youtubeSrc: 'https://www.youtube.com/embed/ssdgFOnH3b0' },
  { n: 'All I Want', a: 'Kodaline', mood: 'heartbreak', time: '5:05', youtubeSrc: 'https://www.youtube.com/embed/MtF1Tn8S0L8' },
  { n: 'Fix You', a: 'Coldplay', mood: 'heartbreak', time: '4:55', youtubeSrc: 'https://www.youtube.com/embed/k4V3Mo61fJM' },
  { n: 'Je te laisserai des mots', a: 'Patrick Watson', mood: 'heartbreak', time: '2:38', youtubeSrc: 'https://www.youtube.com/embed/k2qgadSvNyU' },
  { n: 'Cornfield Chase (Interstellar)', a: 'Hans Zimmer', mood: 'wonder', time: '2:06', youtubeSrc: 'https://www.youtube.com/embed/2sQOq0S5plU' },
  { n: 'Clair de Lune', a: 'Claude Debussy', mood: 'wonder', time: '~5:00', youtubeSrc: 'https://www.youtube.com/embed/CvFH_6DNRCY' },
  { n: 'Weightless', a: 'Marconi Union', mood: 'wonder', time: '8:00', youtubeSrc: 'https://www.youtube.com/embed/UfcAVejslrU' },
  { n: 'Dreams', a: 'Beach House', mood: 'wonder', time: '4:34', youtubeSrc: 'https://www.youtube.com/embed/EErZLed1eKc' },
  { n: 'Nightcall', a: 'Kavinsky', mood: 'wonder', time: '4:19', youtubeSrc: 'https://www.youtube.com/embed/MV_3Dpw-BRY' },
  { n: 'Hedwig\'s Theme', a: 'John Williams', mood: 'wonder', time: '5:10', youtubeSrc: 'https://www.youtube.com/embed/APWCt9NMDgs' },
  { n: 'Remember Me (Dúo) (From Coco)', a: 'Miguel & Natalia Lafourcade', mood: 'wonder', time: '2:50', youtubeSrc: 'https://www.youtube.com/watch?v=E7VPdpEV1m0' },
  { n: 'Glory Box', a: 'Portishead', mood: 'mystery', time: '5:08', youtubeSrc: 'https://www.youtube.com/embed/yF-G-RyhhDM' },
  { n: 'Teardrop', a: 'Massive Attack', mood: 'mystery', time: '5:31', youtubeSrc: 'https://www.youtube.com/embed/u7K72X4eo_s' },
  { n: 'Gymnopédie No. 1', a: 'Erik Satie', mood: 'mystery', time: '~3:00', youtubeSrc: 'https://www.youtube.com/embed/S-Xm7s9eGxU' },
  { n: 'Oblivion', a: 'Grimes', mood: 'mystery', time: '4:12', youtubeSrc: 'https://www.youtube.com/embed/JtHkP0nnCZs' },
  { n: 'Angel', a: 'Massive Attack', mood: 'mystery', time: '6:18', youtubeSrc: 'https://www.youtube.com/embed/S6WOwU2vD_M' },
  { n: 'Harlem Nocturne', a: 'Earle Hagen', mood: 'mystery', time: '~2:45', youtubeSrc: 'https://www.youtube.com/embed/8mGBaHpl9xo' },
  { n: 'Tubular Bells (The Exorcist Theme)', a: 'Mike Oldfield', mood: 'intense', time: '26:03', youtubeSrc: 'https://www.youtube.com/embed/AbdevEBt4jY' },
  { n: 'Tiptoe Through the Tulips', a: 'Tiny Tim', mood: 'intense', time: '2:37' },
  { n: 'Halloween Theme', a: 'John Carpenter', mood: 'intense', time: '2:56', youtubeSrc: 'https://www.youtube.com/embed/iP-jYiuAC9c' },
  { n: 'Psycho: Prelude', a: 'Bernard Herrmann', mood: 'intense', time: '2:19', youtubeSrc: 'https://www.youtube.com/embed/8VP5jEAPeKs' },
  { n: 'Threnody for the Victims of Hiroshima', a: 'Krzysztof Penderecki', mood: 'intense', time: '9:35', youtubeSrc: 'https://www.youtube.com/embed/zYtMDpxSSYs' },
  { n: 'Dies Irae (Requiem)', a: 'Giuseppe Verdi', mood: 'intense', time: '~2:15', youtubeSrc: 'https://www.youtube.com/embed/pW1uVUoIjlo' },
  { n: 'The Haunting of Hill House Theme', a: 'The Newton Brothers', mood: 'intense', time: '2:18', youtubeSrc: 'https://www.youtube.com/embed/9bZkp7q19f0' }
];

const q = (id) => document.getElementById(id);

function getMood(mood) {
  return MOODS[mood] || MOODS.comfort;
}

function moodChip(mood) {
  const { label, color } = getMood(mood);
  return `<span class="t-tag" style="color:${color}">${label}</span>`;
}

function hashSeed(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (Math.imul(31, hash) + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pick(seed, salt, max) {
  return hashSeed(`${seed}::${salt}`) % max;
}

function coverArt(mood, seed) {
  const { color } = getMood(mood);
  const dark = '#1d1828';
  let shapes = '';

  if (mood === 'wonder') {
    for (let i = 0; i < 6; i += 1) {
      const cx = 20 + pick(seed, `cx${i}`, 260);
      const cy = 15 + pick(seed, `cy${i}`, 170);
      const r = 6 + pick(seed, `r${i}`, 22);
      const opacity = (25 + pick(seed, `o${i}`, 45)) / 100;
      shapes += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="${opacity.toFixed(2)}" />`;
    }
  } else if (mood === 'chaos') {
    for (let i = 0; i < 7; i += 1) {
      const x1 = pick(seed, `x1${i}`, 300);
      const y1 = pick(seed, `y1${i}`, 200);
      const x2 = x1 + pick(seed, `x2${i}`, 80) - 40;
      const y2 = y1 + pick(seed, `y2${i}`, 80) - 40;
      shapes += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2.5" opacity="0.55" />`;
    }
    const points = [1, 2, 3].map((i) => `${pick(seed, `p${i}x`, 300)},${pick(seed, `p${i}y`, 200)}`).join(' ');
    shapes += `<polygon points="${points}" fill="${color}" opacity="0.22" />`;
  } else if (mood === 'heartbreak') {
    const mx = 120 + pick(seed, 'm', 60);
    shapes += `<path d="M${mx},0 L${mx - 14 + pick(seed, 'c1', 28)},70 L${mx + 14 - pick(seed, 'c2', 28)},130 L${mx - 8 + pick(seed, 'c3', 16)},200" stroke="${color}" stroke-width="2" fill="none" opacity="0.6" />`;
    for (let i = 0; i < 3; i += 1) {
      const cx = 30 + pick(seed, `hx${i}`, 240);
      const cy = 30 + pick(seed, `hy${i}`, 140);
      const r = 8 + pick(seed, `hr${i}`, 12);
      shapes += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="0.18" />`;
    }
  } else if (mood === 'mystery') {
    const cx = 70 + pick(seed, 'mx', 160);
    const cy = 45 + pick(seed, 'my', 110);
    for (let i = 0; i < 4; i += 1) {
      const r = 18 + i * 24;
      shapes += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="1.5" opacity="${(0.5 - i * 0.08).toFixed(2)}" />`;
    }
    shapes += `<path d="M${pick(seed, 'sx', 300)},0 L${pick(seed, 'ex', 300)},200" stroke="${color}" stroke-width="1" opacity="0.35" />`;
  } else if (mood === 'intense') {
    for (let i = 0; i < 5; i += 1) {
      const x = pick(seed, `ix${i}`, 300);
      const y = pick(seed, `iy${i}`, 200);
      shapes += `<path d="M${x - 24},${y - 42} L${x + 4},${y - 6} L${x - 8},${y + 4} L${x + 24},${y + 42}" stroke="${color}" stroke-width="3" fill="none" opacity="0.55" />`;
    }
  } else {
    for (let i = 0; i < 5; i += 1) {
      const cx = 25 + pick(seed, `cfx${i}`, 250);
      const cy = 25 + pick(seed, `cfy${i}`, 150);
      const r = 16 + pick(seed, `cfr${i}`, 32);
      shapes += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="0.16" />`;
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="${dark}" />${shapes}</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function renderShelf() {
  const shelf = q('shelfRow');

  TITLES.forEach((item) => {
    const { label } = getMood(item.mood);
    const image = item.image || POSTER_IMAGES[item.t];
    const posterImage = image
      ? `images/${encodeURIComponent(image).replace(/'/g, '%27')}`
      : coverArt(item.mood, item.t);
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.setAttribute('aria-label', `View ${item.t}`);
    card.innerHTML = `
      <div class="poster" style="background-image:url('${posterImage}')">
        <span class="mood">${label}</span>
      </div>
      <div class="card-body">
        <h3>${item.t}</h3>
        <p>${item.desc}</p>
        <div class="runtime">${item.len}</div>
      </div>
    `;

    card.addEventListener('click', () => showMovie(item));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showMovie(item);
      }
    });

    shelf.appendChild(card);
  });
}

function renderTracks(highlightMood = '') {
  const list = q('trackList');
  list.innerHTML = '';

  TRACKS.forEach((track, index) => {
    const row = document.createElement('div');
    row.className = 'track-row';
    if (highlightMood) {
      row.style.opacity = track.mood === highlightMood ? '1' : '0.35';
    }

    row.innerHTML = `
      <div class="t-cover" style="background-image:url('${coverArt(track.mood, track.n)}')"></div>
      <span class="idx">${String(index + 1).padStart(2, '0')}</span>
      <div class="t-main"><strong>${track.n}</strong><span>${track.a}</span></div>
      ${moodChip(track.mood)}
      <span class="t-time">${track.time}</span>
    `;

    row.addEventListener('click', () => playTrack(track, row));
    list.appendChild(row);
  });
}

function renderSuggestions(container, items, type) {
  container.replaceChildren();

  items.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'suggestion-button';

    const title = document.createElement('strong');
    const detail = document.createElement('span');

    if (type === 'movie') {
      title.textContent = item.t;
      detail.textContent = `${getMood(item.mood).label} · ${item.len}`;
      button.addEventListener('click', () => showMovie(item));
    } else {
      title.textContent = item.n;
      detail.textContent = item.a;
      button.addEventListener('click', () => {
        const rows = q('trackList').querySelectorAll('.track-row');
        playTrack(item, rows[TRACKS.indexOf(item)]);
      });
    }

    button.append(title, detail);
    container.appendChild(button);
  });
}

let selectedMovie = null;

function youtubeEmbedUrl(source) {
  let url;
  try {
    url = new URL(source);
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase();
  const isYouTube = ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'music.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host);
  const isShortLink = host === 'youtu.be' || host === 'www.youtu.be';
  if (!isYouTube && !isShortLink) return null;

  const pathParts = url.pathname.split('/').filter(Boolean);
  const videoId = isShortLink
    ? pathParts[0]
    : url.pathname === '/watch'
      ? url.searchParams.get('v')
      : ['embed', 'shorts', 'live'].includes(pathParts[0])
        ? pathParts[1]
        : null;

  if (!videoId || !/^[\w-]{11}$/.test(videoId)) return null;

  const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
  for (const parameter of ['start', 'end', 'list', 'index', 'rel']) {
    const value = url.searchParams.get(parameter);
    if (value) embedUrl.searchParams.set(parameter, value);
  }
  return embedUrl.href;
}

function updateMovieMedia(mode) {
  const tabs = [...document.querySelectorAll('.movie-tab')];
  tabs.forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.mode === mode)));

  const video = q('movieVideo');
  const nativeVideo = q('movieNativeVideo');
  const source = mode === 'trailer'
    ? TRAILER_URLS[selectedMovie.t] || selectedMovie.trailerSrc
    : selectedMovie.movieSrc;
  const embedUrl = source ? youtubeEmbedUrl(source) : null;
  const isDirectVideo = typeof source === 'string' && /\.(mp4|webm|ogg)(?:$|[?#])/i.test(source);
  const label = mode === 'trailer' ? 'Trailer' : 'Movie';
  const empty = q('movieEmpty');
  const videoLink = q('movieVideoLink');
  const externalLink = q('movieExternalLink');
  const canEmbed = Boolean(embedUrl);

  video.src = 'about:blank';
  nativeVideo.pause();
  nativeVideo.removeAttribute('src');
  nativeVideo.load();
  videoLink.hidden = true;

  q('movieMedia').setAttribute('aria-labelledby', mode === 'trailer' ? 'trailerTab' : 'movieTab');
  video.title = `${selectedMovie.t} ${label}`;
  q('movieMediaTitle').textContent = canEmbed || isDirectVideo ? `${label} video` : `${label} unavailable`;
  q('movieMediaMessage').textContent = source && !embedUrl && !isDirectVideo
    ? 'Use a valid YouTube video link for this slot.'
    : canEmbed || isDirectVideo
      ? ''
      : `Add a YouTube ${label.toLowerCase()} link to this title to play it here.`;

  video.hidden = !canEmbed;
  nativeVideo.hidden = !isDirectVideo;
  empty.hidden = canEmbed || isDirectVideo;

  if (canEmbed) {
    video.src = embedUrl;
    if (externalLink) {
      externalLink.href = source;
      externalLink.style.display = 'inline-flex';
    }
  } else if (isDirectVideo) {
    nativeVideo.src = source;
    nativeVideo.load();
    if (externalLink) externalLink.style.display = 'none';
  } else {
    empty.style.backgroundImage = `url('${coverArt(selectedMovie.mood, selectedMovie.t)}')`;
    if (externalLink) externalLink.style.display = 'none';
  }
}

let backgroundWantsPlayback = false;
let movieMediaActive = false;
let queueWantsPlayback = false;

function resumeBackgroundAudio() {
  if (backgroundWantsPlayback && !movieMediaActive) {
    q('mainAudio').play().catch(() => {
      q('deckSub').textContent = '';
    });
  }
}

function setMovieMediaActive(active) {
  movieMediaActive = active;
  const audio = q('mainAudio');
  const queueAudio = q('queueAudio');
  if (!audio) return;

  if (active) {
    queueWantsPlayback = false;
    queueAudio.pause();
    audio.pause();
    q('musicVideo').src = 'about:blank';
    q('musicVideoLink').hidden = true;
    q('musicVideoPlayer').hidden = true;
  } else {
    resumeBackgroundAudio();
  }
}

function showMovie(item) {
  selectedMovie = item;
  setMovieMediaActive(true);
  q('movieTitle').textContent = item.t;
  q('movieMood').textContent = getMood(item.mood).label.toUpperCase();
  q('movieYear').textContent = item.len;
  q('movieDescription').textContent = item.desc;

  const sameMoodMovies = TITLES.filter((title) => title !== item && title.mood === item.mood).slice(0, 4);
  const sameMoodTracks = TRACKS.filter((track) => track.mood === item.mood).slice(0, 4);

  renderSuggestions(q('movieSuggestions'), sameMoodMovies, 'movie');
  renderSuggestions(q('musicSuggestions'), sameMoodTracks, 'music');
  updateMovieMedia('trailer');

  if (!q('movieDialog').open) {
    q('movieDialog').showModal();
  }
}

let currentIndex = -1;

function togglePlay() {
  const queueAudio = q('queueAudio');
  const audio = currentIndex >= 0 && TRACKS[currentIndex].audioSrc
    ? queueAudio
    : q('mainAudio');

  if (audio.paused) {
    if (audio === queueAudio) {
      backgroundWantsPlayback = true;
      queueWantsPlayback = true;
      q('mainAudio').pause();
    } else {
      backgroundWantsPlayback = true;
    }
    audio.play().catch(() => {
      q('deckSub').textContent = audio === queueAudio
        ? 'This track could not be played'
        : '';
      if (audio === queueAudio) {
        queueWantsPlayback = false;
        resumeBackgroundAudio();
      }
    });
    return;
  }

  if (audio === q('mainAudio')) {
    backgroundWantsPlayback = false;
  } else {
    queueWantsPlayback = false;
    resumeBackgroundAudio();
  }
  audio.pause();
}

function playTrack(track, rowEl, fromTitle = '') {
  currentIndex = TRACKS.indexOf(track);
  const rows = q('trackList').querySelectorAll('.track-row');

  rows.forEach((row) => row.style.opacity = '1');
  document.querySelectorAll('.track-row').forEach((row) => row.classList.remove('playing'));
  if (rowEl) rowEl.classList.add('playing');

  q('deckTitle').textContent = track.n;
  const queueAudio = q('queueAudio');
  const backgroundAudio = q('mainAudio');
  const musicVideo = q('musicVideo');
  const musicVideoPlayer = q('musicVideoPlayer');
  const musicVideoLink = q('musicVideoLink');
  const youtubeUrl = track.youtubeSrc ? youtubeEmbedUrl(track.youtubeSrc) : null;
  const hasYoutubeSource = typeof track.youtubeSrc === 'string' && track.youtubeSrc.length > 0;
  const hasAudio = typeof track.audioSrc === 'string' && track.audioSrc.length > 0;
  queueAudio.pause();

  if (!hasAudio && hasYoutubeSource) {
    backgroundWantsPlayback = false;
    queueWantsPlayback = false;
    backgroundAudio.pause();
  }

  if (movieMediaActive) {
    q('movieVideo').src = 'about:blank';
    q('movieDialog').close();
  }

  musicVideo.src = 'about:blank';
  musicVideo.hidden = false;
  musicVideoLink.hidden = true;
  musicVideoPlayer.hidden = true;
  q('playToggle').hidden = false;

  if (hasAudio) {
    backgroundWantsPlayback = true;
    queueWantsPlayback = true;
    backgroundAudio.pause();
    queueAudio.src = track.audioSrc;
    q('deckSub').textContent = fromTitle ? `${track.a} · cued from "${fromTitle}"` : track.a;
    if (!movieMediaActive) {
      queueAudio.play().catch(() => {
        queueWantsPlayback = false;
        q('deckSub').textContent = 'This track could not be played';
        resumeBackgroundAudio();
      });
    }
  } else if (youtubeUrl) {
    backgroundWantsPlayback = false;
    queueWantsPlayback = false;
    backgroundAudio.pause();
    queueAudio.pause();
    musicVideoPlayer.hidden = false;
    q('playToggle').hidden = true;
    musicVideo.title = `${track.n} by ${track.a}`;
    musicVideo.src = youtubeUrl;
    q('deckSub').textContent = fromTitle
      ? `${track.a} · cued from "${fromTitle}" · use YouTube controls`
      : `${track.a} · use YouTube controls`;
    musicVideoPlayer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    queueWantsPlayback = false;
    queueAudio.pause();
    q('deckSub').textContent = hasYoutubeSource
      ? 'Use a valid YouTube video link for this track'
      : 'Track audio not added yet';
    if (hasYoutubeSource) {
      backgroundWantsPlayback = false;
      backgroundAudio.pause();
    } else {
      backgroundWantsPlayback = true;
      resumeBackgroundAudio();
    }
  }

  const { color, label } = getMood(track.mood);
  q('deckThumb').style.backgroundImage = `url('${coverArt(track.mood, track.n)}')`;
  q('moodBadge').textContent = `MOOD: ${label.toUpperCase()}`;
  q('scrubFill').style.background = color;
}

function prevTrack() {
  if (!TRACKS.length) return;
  const index = currentIndex < 0 ? 0 : currentIndex;
  const nextIndex = (index - 1 + TRACKS.length) % TRACKS.length;
  const rows = q('trackList').querySelectorAll('.track-row');
  playTrack(TRACKS[nextIndex], rows[nextIndex]);
}

function nextTrack() {
  if (!TRACKS.length) return;
  const index = currentIndex < 0 ? -1 : currentIndex;
  const nextIndex = (index + 1) % TRACKS.length;
  const rows = q('trackList').querySelectorAll('.track-row');
  playTrack(TRACKS[nextIndex], rows[nextIndex]);
}

const FEEDBACK_KEY = 'entertainmentHavenFeedback';

function loadFeedback() {
  try {
    const stored = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '[]');
    if (!Array.isArray(stored)) return [];
    return stored.filter((entry) => entry && Number.isInteger(entry.rating) && entry.rating >= 1 && entry.rating <= 5 && typeof entry.comment === 'string' && typeof entry.date === 'string').slice(0, 50);
  } catch {
    return [];
  }
}

let feedbackEntries = loadFeedback();

function renderFeedback() {
  const count = feedbackEntries.length;
  const summary = q('ratingSummary');

  if (count) {
    const average = feedbackEntries.reduce((total, entry) => total + entry.rating, 0) / count;
    summary.textContent = `${average.toFixed(1)} / 5 · ${count} ${count === 1 ? 'rating' : 'ratings'}`;
  } else {
    summary.textContent = 'No ratings yet';
  }

  const list = q('feedbackList');
  list.replaceChildren();

  feedbackEntries.forEach((entry) => {
    const item = document.createElement('li');
    item.className = 'feedback-entry';

    const header = document.createElement('div');
    header.className = 'feedback-entry-head';

    const stars = document.createElement('span');
    stars.className = 'feedback-entry-stars';
    stars.setAttribute('aria-label', `${entry.rating} out of 5 stars`);
    stars.textContent = `${'★'.repeat(entry.rating)}${'☆'.repeat(5 - entry.rating)}`;

    const date = document.createElement('time');
    const parsedDate = new Date(entry.date);
    date.dateTime = entry.date;
    date.textContent = Number.isNaN(parsedDate.getTime()) ? '' : parsedDate.toLocaleDateString();

    header.append(stars, date);

    const comment = document.createElement('p');
    comment.textContent = entry.comment;

    item.append(header, comment);
    list.appendChild(item);
  });
}

function updateRatingStars() {
  const form = q('ratingForm');
  const selectedRating = Number(form.elements.rating.value || 0);
  [...document.querySelectorAll('.rating-choice')].forEach((choice, index) => {
    choice.classList.toggle('is-active', index < selectedRating);
  });
}

function init() {
  renderShelf();
  renderTracks();

  const teamGrid = document.querySelector('.team-grid');
  if (teamGrid && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const teamCards = [...teamGrid.querySelectorAll('.team-card')];
    teamGrid.classList.add('is-animated');
    const teamObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          teamObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    teamCards.forEach((card) => teamObserver.observe(card));
  }

  [...document.querySelectorAll('.movie-tab')].forEach((tab) => {
    tab.addEventListener('click', () => updateMovieMedia(tab.dataset.mode));
  });

  q('movieClose').addEventListener('click', () => q('movieDialog').close());
  q('movieDialog').addEventListener('close', () => {
    q('movieVideo').src = 'about:blank';
    const nativeVideo = q('movieNativeVideo');
    nativeVideo.pause();
    nativeVideo.removeAttribute('src');
    nativeVideo.load();
    if (movieMediaActive) setMovieMediaActive(false);
  });
  q('movieDialog').addEventListener('click', (event) => {
    if (event.target === q('movieDialog')) q('movieDialog').close();
  });

  const form = q('ratingForm');
  form.addEventListener('change', updateRatingStars);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const rating = Number(data.get('rating'));
    const comment = String(data.get('feedback') || '').trim();

    if (!rating || !comment) return;

    feedbackEntries.unshift({ rating, comment, date: new Date().toISOString() });
    feedbackEntries = feedbackEntries.slice(0, 50);

    try {
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbackEntries));
      q('ratingStatus').textContent = 'Thanks. Your feedback has been saved in this browser.';
    } catch {
      q('ratingStatus').textContent = 'Thanks. Your feedback is visible for this session, but could not be saved.';
    }

    form.reset();
    updateRatingStars();
    renderFeedback();
  });

  renderFeedback();

  const audio = q('mainAudio');
  if (audio) {
    let started = false;
    const button = q('playToggle');
    audio.addEventListener('play', () => {
      button.textContent = '❚❚';
      button.title = 'Pause background music';
      button.setAttribute('aria-label', 'Pause background music');
    });
    audio.addEventListener('pause', () => {
      button.textContent = '▶';
      button.title = 'Play background music';
      button.setAttribute('aria-label', 'Play background music');
    });
    audio.addEventListener('error', () => {
      q('deckSub').textContent = '';
    });

    const queueAudio = q('queueAudio');
    queueAudio.addEventListener('play', () => {
      button.textContent = '❚❚';
      button.title = 'Pause selected track';
      button.setAttribute('aria-label', 'Pause selected track');
    });
    queueAudio.addEventListener('pause', () => {
      button.textContent = '▶';
      button.title = 'Play selected track';
      button.setAttribute('aria-label', 'Play selected track');
    });
    queueAudio.addEventListener('ended', () => {
      queueWantsPlayback = false;
      button.textContent = '▶';
      button.title = 'Play selected track';
      button.setAttribute('aria-label', 'Play selected track');
      resumeBackgroundAudio();
    });
    queueAudio.addEventListener('error', () => {
      queueWantsPlayback = false;
      q('deckSub').textContent = 'This track could not be loaded';
      resumeBackgroundAudio();
    });

    const startAudio = () => {
      if (started) return;
      started = true;
      backgroundWantsPlayback = true;
      if (!movieMediaActive && !queueWantsPlayback) {
        audio.play().catch(() => {
          q('deckSub').textContent = '';
        });
      }
      document.removeEventListener('click', startAudio);
      document.removeEventListener('keydown', startAudio);
      document.removeEventListener('touchstart', startAudio);
    };

    document.addEventListener('click', startAudio);
    document.addEventListener('keydown', startAudio);
    document.addEventListener('touchstart', startAudio);
  }

}

document.addEventListener('DOMContentLoaded', init);
