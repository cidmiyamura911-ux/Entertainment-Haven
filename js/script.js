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
  { t: 'Julie & Julia', mood: 'comfort', desc: 'Two women in different eras find purpose and connection through cooking.', len: '2h 03m', img: 'images/Julie & Julia.jpg', trailerSrc: 'https://www.youtube.com/embed/ozRK7VXQl-k' },
  { t: 'Ratatouille', mood: 'comfort', desc: 'A rat with a remarkable sense of taste pursues his dream of becoming a chef in Paris.', len: '1h 51m', img: 'images/Ratatouille.jpg', trailerSrc: 'https://www.youtube.com/embed/PeFGdSrFTUw'},
  { t: 'The Intern', mood: 'comfort', desc: 'A retired widower becomes a senior intern at a fast-growing fashion company.', len: '2h 01m', img: 'images/The Intern.jpg',trailerSrc: 'https://www.youtube.com/embed/ZU3Xban0Y6A'},
  { t: 'Little Miss Sunshine', mood: 'comfort', desc: 'A spirited family takes a cross-country road trip to support a young beauty-pageant contestant.', len: '1h 42m', img: 'images/Little Miss Sunshine.jpg', trailerSrc: 'https://www.youtube.com/embed/wvwVkllXT80'},
  { t: 'Crazy Rich Asians', mood: 'comfort', desc: 'A New Yorker travels to Singapore and discovers her boyfriend comes from an extraordinarily wealthy family.', len: '2h 01m', img: 'images/Crazy Rich Asians.jpg', trailerSrc: 'https://www.youtube.com/embed/14ZHRBfpeNg'},
  { t: 'Paddington 2', mood: 'comfort', desc: 'Paddington takes on a series of odd jobs to buy a special gift for his aunt.', len: '1h 43m', img: 'images/Paddington 2.jpg', trailerSrc: 'https://www.youtube.com/embed/52x5HJ9H8DM'},
  { t: 'Mad Max: Fury Road', mood: 'chaos', desc: 'A group of fugitives races across a harsh wasteland while pursued by a tyrant.', len: '2h 00m', img: 'images/Mad Max Fury Road.jpg' },
  { t: 'Baby Driver', mood: 'chaos', desc: 'A talented getaway driver tries to leave his criminal life behind.', len: '1h 53m', img: 'images/Baby Driver.jpg' },
  { t: 'Ocean\'s Eleven', mood: 'chaos', desc: 'A skilled crew plans an elaborate simultaneous heist of three Las Vegas casinos.', len: '1h 56m', img: 'images/Ocean\'s Eleven.jpg' },
  { t: 'John Wick', mood: 'chaos', desc: 'A retired hitman returns to the underworld and sets off a relentless pursuit.', len: '1h 41m', img: 'images/John Wick.jpg' },
  { t: 'Game Night', mood: 'chaos', desc: 'A group of friends find their game night becoming a real-life mystery.', len: '1h 40m', img: 'images/Game Night.jpg' },
  { t: 'Guardians of the Galaxy', mood: 'chaos', desc: 'A band of unlikely outlaws joins forces to protect the galaxy.', len: '2h 01m', img: 'images/Guardians of the Galaxy.jpg' },
  { t: 'The Notebook', mood: 'heartbreak', desc: 'A long love story unfolds through memories of a couple from different backgrounds.', len: '2h 03m', img: 'images/The Notebook.jpg' },
  { t: 'La La Land', mood: 'heartbreak', desc: 'An aspiring actress and a jazz musician pursue their ambitions in Los Angeles.', len: '2h 09m', img: 'images/La La Land.jpg' },
  { t: 'Titanic', mood: 'heartbreak', desc: 'Two passengers from different worlds fall in love aboard the ill-fated ocean liner.', len: '3h 15m', img: 'images/Titanic.jpg' },
  { t: 'Eternal Sunshine of the Spotless Mind', mood: 'heartbreak', desc: 'A former couple undergoes a procedure to erase memories of their relationship.', len: '1h 48m', img: 'images/Eternal Sunshine of the Spotless Mind.jpg' },
  { t: 'Call Me by Your Name', mood: 'heartbreak', desc: 'A teenager in northern Italy experiences a formative summer romance.', len: '2h 12m', img: 'images/Call Me by Your Name.jpg' },
  { t: 'A Walk to Remember', mood: 'heartbreak', desc: 'A rebellious teenager forms an unexpected bond with a kind-hearted classmate.', len: '1h 41m', img: 'images/A Walk to Remember.jpg' },
  { t: 'Spirited Away', mood: 'wonder', desc: 'A girl enters a world of spirits and works to free her transformed parents.', len: '2h 05m', img: 'images/Spirited Away.jpg' },
  { t: 'Harry Potter and the Sorcerer\'s Stone', mood: 'wonder', desc: 'A boy discovers he is a wizard and begins his education at Hogwarts.', len: '2h 32m', img: 'images/Harry Potter and the Sorcerer\'s Stone.jpg' },
  { t: 'Interstellar', mood: 'wonder', desc: 'Explorers travel beyond Earth in search of a future for humanity.', len: '2h 49m', img: 'images/Interstellar.jpg' },
  { t: 'Coco', mood: 'wonder', desc: 'A young musician journeys to the Land of the Dead to learn about his family.', len: '1h 45m', img: 'images/Coco.jpg' },
  { t: 'Pan\'s Labyrinth', mood: 'wonder', desc: 'A girl discovers a mysterious labyrinth and faces a series of fantastical tasks.', len: '1h 58m', img: 'images/Pan\'s Labyrinth.jpg' },
  { t: 'Life of Pi', mood: 'wonder', desc: 'A young man survives a shipwreck and an extraordinary journey across the ocean.', len: '2h 07m', img: 'images/Life of Pi.jpg' },
  { t: 'Knives Out', mood: 'mystery', desc: 'A detective investigates the death of a celebrated mystery novelist.', len: '2h 10m', img: 'images/Knives Out.jpg' },
  { t: 'Shutter Island', mood: 'mystery', desc: 'A U.S. Marshal investigates the disappearance of a patient from a remote hospital.', len: '2h 18m', img: 'images/Shutter Island.jpg' },
  { t: 'Gone Girl', mood: 'mystery', desc: 'A husband becomes the focus of an investigation when his wife disappears.', len: '2h 29m', img: 'images/Gone Girl.jpg' },
  { t: 'Chinatown', mood: 'mystery', desc: 'A private investigator uncovers a tangled conspiracy while working in Los Angeles.', len: '2h 10m', img: 'images/Chinatown.jpg' },
  { t: 'Se7en', mood: 'mystery', desc: 'Two detectives hunt a serial killer whose crimes follow a disturbing pattern.', len: '2h 07m', img: 'images/Se7en.jpg' },
  { t: 'The Prestige', mood: 'mystery', desc: 'Two rival magicians become consumed by competition and the secrets behind their illusions.', len: '2h 10m', img: 'images/The Prestige.jpg' },
  { t: 'The Conjuring', mood: 'intense', desc: 'Paranormal investigators help a family troubled by a presence in their farmhouse.', len: '1h 52m', img: 'images/The Conjuring.jpg' },
  { t: 'Hereditary', mood: 'intense', desc: 'A family confronts unsettling secrets and increasingly frightening events after a loss.', len: '2h 07m', img: 'images/Hereditary.jpg' },
  { t: 'A Quiet Place', mood: 'intense', desc: 'A family struggles to survive in a world where sound draws deadly creatures.', len: '1h 30m', img: 'images/A Quiet Place.jpg' },
  { t: 'It', mood: 'intense', desc: 'A group of friends confronts a shape-shifting evil haunting their town.', len: '2h 15m', img: 'images/It.jpg' },
  { t: 'Train to Busan', mood: 'intense', desc: 'Passengers fight to survive a fast-spreading outbreak aboard a train.', len: '1h 58m', img: 'images/Train to Busan.jpg' },
  { t: 'Get Out', mood: 'intense', desc: 'A weekend visit to meet a girlfriend\'s family turns into a chilling discovery.', len: '1h 44m', img: 'images/Get Out.jpg' }
];

// Add youtubeSrc with a YouTube embed URL to make a queue track playable.
const TRACKS = [
  { n: 'Better Together', a: 'Jack Johnson', mood: 'comfort', time: '3:27', youtubeSrc: 'https://www.youtube.com/embed/seZMOTGCDag' },
  { n: 'Banana Pancakes', a: 'Jack Johnson', mood: 'comfort', time: '3:11', youtubeSrc: 'https://www.youtube.com/embed/OkyrIRyrRdY' },
  { n: 'Sunday Morning', a: 'Maroon 5', mood: 'comfort', time: '4:04', youtubeSrc: 'https://www.youtube.com/embed/S2Cti12XBw4' },
  { n: 'The Girl from Ipanema', a: 'Stan Getz & João Gilberto', mood: 'comfort', time: '5:24', youtubeSrc: 'https://www.youtube.com/embed/UJkxFhFRFDA' },
  { n: 'Put Your Records On', a: 'Corinne Bailey Rae', mood: 'comfort', time: '3:34', youtubeSrc: 'https://www.youtube.com/embed/rjOhZZyn30k' },
  { n: 'Island in the Sun', a: 'Weezer', mood: 'comfort', time: '3:20', youtubeSrc: 'https://www.youtube.com/embed/erG5rgNYSdk' },
  { n: 'Seven Nation Army', a: 'The White Stripes', mood: 'chaos', time: '3:52', youtubeSrc: 'https://www.youtube.com/embed/0J2QdDbelmY' },
  { n: 'Till I Collapse', a: 'Eminem', mood: 'chaos', time: '4:58', youtubeSrc: 'https://www.youtube.com/embed/ytQ5CYE1VZw' },
  { n: 'Blitzkrieg Bop', a: 'Ramones', mood: 'chaos', time: '2:12', youtubeSrc: 'https://www.youtube.com/embed/skdE0KAFCEA' },
  { n: 'Titanium', a: 'David Guetta ft. Sia', mood: 'chaos', time: '4:05', youtubeSrc: 'https://www.youtube.com/embed/JRfuAukYTKg' },
  { n: 'Sing, Sing, Sing', a: 'Benny Goodman', mood: 'chaos', time: '7:25', youtubeSrc: 'https://www.youtube.com/embed/r2S1I_ien6A' },
  { n: 'Can\'t Hold Us', a: 'Macklemore & Ryan Lewis', mood: 'chaos', time: '4:18', youtubeSrc: 'https://www.youtube.com/embed/2zNSgSzhBfM' },
  { n: 'Someone Like You', a: 'Adele', mood: 'heartbreak', time: '4:45', youtubeSrc: 'https://www.youtube.com/embed/hLQl3WQQoQ0' },
  { n: 'Back to December', a: 'Taylor Swift', mood: 'heartbreak', time: '4:53', youtubeSrc: 'https://www.youtube.com/embed/QUwxKWT6m7U' },
  { n: 'Skinny Love', a: 'Bon Iver', mood: 'heartbreak', time: '3:58', youtubeSrc: 'https://www.youtube.com/embed/ssdgFoHLwnk' },
  { n: 'All I Want', a: 'Kodaline', mood: 'heartbreak', time: '5:05', youtubeSrc: 'https://www.youtube.com/embed/mtf7hC17IBM' },
  { n: 'Fix You', a: 'Coldplay', mood: 'heartbreak', time: '4:55', youtubeSrc: 'https://www.youtube.com/embed/k4V3Mo61fJM' },
  { n: 'Je te laisserai des mots', a: 'Patrick Watson', mood: 'heartbreak', time: '2:38', youtubeSrc: 'https://www.youtube.com/embed/XEzGJijVx9o' },
  { n: 'Cornfield Chase (Interstellar)', a: 'Hans Zimmer', mood: 'wonder', time: '2:06', youtubeSrc: 'https://www.youtube.com/embed/7GlsxNI4LVI' },
  { n: 'Clair de Lune', a: 'Claude Debussy', mood: 'wonder', time: '~5:00', youtubeSrc: 'https://www.youtube.com/embed/CvFH_6DNRCY' },
  { n: 'Weightless', a: 'Marconi Union', mood: 'wonder', time: '8:00', youtubeSrc: 'https://www.youtube.com/embed/UfcAVejslrU' },
  { n: 'Dreams', a: 'Beach House', mood: 'wonder', time: '4:34', youtubeSrc: 'https://www.youtube.com/embed/OS6duOoxctw' },
  { n: 'Nightcall', a: 'Kavinsky', mood: 'wonder', time: '4:19', youtubeSrc: 'https://www.youtube.com/embed/MV_3Dpw-BRY' },
  { n: 'Hedwig\'s Theme', a: 'John Williams', mood: 'wonder', time: '5:10', youtubeSrc: 'https://www.youtube.com/embed/wtHra9tFISY' },
  { n: 'Glory Box', a: 'Portishead', mood: 'mystery', time: '5:08', youtubeSrc: 'https://www.youtube.com/embed/4qQyUi4zfDs' },
  { n: 'Teardrop', a: 'Massive Attack', mood: 'mystery', time: '5:31', youtubeSrc: 'https://www.youtube.com/embed/u7K72X4eo_s' },
  { n: 'Gymnopédie No. 1', a: 'Erik Satie', mood: 'mystery', time: '~3:00', youtubeSrc: 'https://www.youtube.com/embed/S-Xm7s9eGxU' },
  { n: 'Oblivion', a: 'Grimes', mood: 'mystery', time: '4:12', youtubeSrc: 'https://www.youtube.com/embed/JtH68PJIQLE' },
  { n: 'Angel', a: 'Massive Attack', mood: 'mystery', time: '6:18', youtubeSrc: 'https://www.youtube.com/embed/hbe3CQamF8k' },
  { n: 'Harlem Nocturne', a: 'Earle Hagen', mood: 'mystery', time: '~2:45', youtubeSrc: 'https://www.youtube.com/embed/N0gXlSBfnqo' },
  { n: 'Tubular Bells (The Exorcist Theme)', a: 'Mike Oldfield', mood: 'intense', time: '26:03', youtubeSrc: 'https://www.youtube.com/embed/bv_4sZCLlr0' },
  { n: 'Halloween Theme', a: 'John Carpenter', mood: 'intense', time: '2:56', youtubeSrc: 'https://www.youtube.com/embed/MriORvrRBc4' },
  { n: 'Psycho: Prelude', a: 'Bernard Herrmann', mood: 'intense', time: '2:19', youtubeSrc: 'https://www.youtube.com/embed/Me-VhC9ieh0' },
  { n: 'Threnody for the Victims of Hiroshima', a: 'Krzysztof Penderecki', mood: 'intense', time: '9:35', youtubeSrc: 'https://www.youtube.com/embed/Dp3BlFZWJNA' },
  { n: 'Dies Irae (Requiem)', a: 'Giuseppe Verdi', mood: 'intense', time: '~2:15', youtubeSrc: 'https://www.youtube.com/embed/cHw4GER-MiE' },
  { n: 'The Haunting of Hill House Theme', a: 'The Newton Brothers', mood: 'intense', time: '2:18', youtubeSrc: 'https://www.youtube.com/embed/kGS2g8BVOPM' }
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

function getPosterUrl(item) {
  if (item && item.img) {
    return encodeURI(item.img).replace(/'/g, '%27');
  }
  const cleanTitle = (item && item.t ? item.t : '').replace(/:/g, '');
  if (cleanTitle) {
    return encodeURI(`images/${cleanTitle}.jpg`).replace(/'/g, '%27');
  }
  return coverArt(item.mood, item.t);
}

function renderShelf() {
  const shelf = q('shelfRow');

  TITLES.forEach((item) => {
    const { label } = getMood(item.mood);
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.setAttribute('aria-label', `View ${item.t}`);
    card.innerHTML = `
      <div class="poster" style="background-image:url('${getPosterUrl(item)}')">
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
  if (typeof source !== 'string') return null;
  const match = source.match(/src=["']([^"']+)["']/i);
  const cleanSource = match ? match[1] : source.trim();
  let url;
  try {
    url = new URL(cleanSource);
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase();
  const isYouTube = ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host);
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

  const embedUrl = new URL(`https://www.youtube-nocookie.com/embed/${videoId}`);
  embedUrl.searchParams.set('rel', '0');
  embedUrl.searchParams.set('enablejsapi', '1');
  if (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin !== 'null' && !window.location.origin.startsWith('file')) {
    embedUrl.searchParams.set('origin', window.location.origin);
  }
  for (const parameter of ['start', 'end', 'list', 'index']) {
    const value = url.searchParams.get(parameter);
    if (value) embedUrl.searchParams.set(parameter, value);
  }
  return { url: embedUrl.href, id: videoId };
}

function updateMovieMedia(mode) {
  const tabs = [...document.querySelectorAll('.movie-tab')];
  tabs.forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.mode === mode)));

  const iframe = q('movieVideo');
  const nativeVideo = q('movieNativeVideo');
  const source = selectedMovie[mode === 'trailer' ? 'trailerSrc' : 'movieSrc'];
  const embedData = source ? youtubeEmbedUrl(source) : null;
  const isDirectVideo = source && (/\.(mp4|webm|ogg)($|\?)/i.test(source) || (!embedData && typeof source === 'string' && source.length > 0 && !source.includes('youtube') && !source.includes('youtu.be')));
  const hasPlayable = Boolean(embedData || isDirectVideo);
  const label = mode === 'trailer' ? 'Trailer' : 'Movie';
  const empty = q('movieEmpty');
  const externalLink = q('movieExternalLink');

  iframe.src = 'about:blank';
  if (nativeVideo) {
    nativeVideo.pause();
    nativeVideo.removeAttribute('src');
    nativeVideo.load();
  }

  q('movieMedia').setAttribute('aria-labelledby', mode === 'trailer' ? 'trailerTab' : 'movieTab');
  iframe.title = `${selectedMovie.t} ${label}`;
  q('movieMediaTitle').textContent = hasPlayable ? `${label} video` : `${label} unavailable`;
  q('movieMediaMessage').textContent = hasPlayable
    ? ''
    : `Add a trailer or movie video to this title to play it here.`;

  if (embedData) {
    iframe.hidden = false;
    iframe.style.display = 'block';
    if (nativeVideo) {
      nativeVideo.hidden = true;
      nativeVideo.style.display = 'none';
    }
    empty.hidden = true;
    empty.style.display = 'none';
    iframe.src = embedData.url;
  } else if (isDirectVideo) {
    iframe.hidden = true;
    iframe.style.display = 'none';
    if (nativeVideo) {
      nativeVideo.hidden = false;
      nativeVideo.style.display = 'block';
      nativeVideo.src = source;
      nativeVideo.load();
    }
    empty.hidden = true;
    empty.style.display = 'none';
  } else {
    iframe.hidden = true;
    iframe.style.display = 'none';
    if (nativeVideo) {
      nativeVideo.hidden = true;
      nativeVideo.style.display = 'none';
    }
    empty.hidden = false;
    empty.style.display = 'grid';
    empty.style.backgroundImage = `url('${getPosterUrl(selectedMovie)}')`;
  }

  if (externalLink) {
    if (embedData && embedData.id) {
      externalLink.href = `https://www.youtube.com/watch?v=${embedData.id}`;
      externalLink.style.display = 'inline-flex';
    } else {
      externalLink.style.display = 'none';
    }
  }
}

let backgroundWantsPlayback = false;
let movieMediaActive = false;
let queueWantsPlayback = false;
let queueYoutubePlayer = null;
let queueYoutubePlayerReady = false;
let pendingQueueVideoId = null;

function loadQueueYouTubeTrack(videoId) {
  pendingQueueVideoId = videoId;
  if (!queueYoutubePlayerReady) return;

  pendingQueueVideoId = null;
  queueYoutubePlayer.loadVideoById(videoId);
}

function initializeQueueYouTubePlayer() {
  if (queueYoutubePlayer || !window.YT || !window.YT.Player) return;

  const playerVars = {
    controls: 1,
    enablejsapi: 1,
    playsinline: 1,
    rel: 0
  };
  if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
    playerVars.origin = window.location.origin;
  }

  queueYoutubePlayer = new window.YT.Player('queueYoutube', {
    width: '356',
    height: '200',
    playerVars,
    events: {
      onReady(event) {
        queueYoutubePlayerReady = true;
        event.target.getIframe().title = 'Selected queue track YouTube player';
        if (pendingQueueVideoId) {
          const videoId = pendingQueueVideoId;
          pendingQueueVideoId = null;
          if (queueWantsPlayback) {
            queueYoutubePlayer.loadVideoById(videoId);
          } else {
            queueYoutubePlayer.cueVideoById(videoId);
          }
        }
      },
      onStateChange(event) {
        if (event.data === window.YT.PlayerState.PLAYING) {
          queueWantsPlayback = true;
          updateQueuePlayButton(true);
        } else if (event.data === window.YT.PlayerState.PAUSED) {
          queueWantsPlayback = false;
          updateQueuePlayButton(false);
          resumeBackgroundAudio();
        } else if (event.data === window.YT.PlayerState.ENDED) {
          queueWantsPlayback = false;
          updateQueuePlayButton(false);
          resumeBackgroundAudio();
        }
      },
      onError(event) {
        queueWantsPlayback = false;
        q('queuePlayerStatus').textContent = `YouTube could not load this track (error ${event.data})`;
        q('deckSub').textContent = 'This YouTube track could not be loaded';
        updateQueuePlayButton(false);
        resumeBackgroundAudio();
      }
    }
  });
}

function loadQueueYouTubeAPI() {
  window.onYouTubeIframeAPIReady = initializeQueueYouTubePlayer;
  if (window.YT && window.YT.Player) {
    initializeQueueYouTubePlayer();
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://www.youtube.com/iframe_api';
  script.async = true;
  script.addEventListener('error', () => {
    q('queuePlayerStatus').textContent = 'The YouTube player could not be loaded';
    queueWantsPlayback = false;
    updateQueuePlayButton(false);
    resumeBackgroundAudio();
  });
  document.head.appendChild(script);
}

function updateQueuePlayButton(playing) {
  const button = q('playToggle');
  button.textContent = playing ? '❚❚' : '▶';
  button.title = playing ? 'Pause selected track' : 'Play selected track';
  button.setAttribute('aria-label', button.title);
}

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
    if (queueYoutubePlayerReady) queueYoutubePlayer.pauseVideo();
    audio.pause();
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
  const selectedTrack = currentIndex >= 0 ? TRACKS[currentIndex] : null;
  if (selectedTrack && selectedTrack.youtubeSrc) {
    if (queueWantsPlayback) {
      queueWantsPlayback = false;
      if (queueYoutubePlayerReady) queueYoutubePlayer.pauseVideo();
      resumeBackgroundAudio();
    } else {
      backgroundWantsPlayback = true;
      queueWantsPlayback = true;
      q('mainAudio').pause();
      if (queueYoutubePlayerReady) queueYoutubePlayer.playVideo();
    }
    return;
  }

  const audio = selectedTrack && selectedTrack.audioSrc
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
  const { color, label } = getMood(track.mood);
  q('deckThumb').style.backgroundImage = `url('${coverArt(track.mood, track.n)}')`;
  q('moodBadge').textContent = `MOOD: ${label.toUpperCase()}`;
  q('scrubFill').style.background = color;

  const queueAudio = q('queueAudio');
  const backgroundAudio = q('mainAudio');
  queueAudio.pause();

  const youtubeTrack = track.youtubeSrc ? youtubeEmbedUrl(track.youtubeSrc) : null;
  if (youtubeTrack) {
    if (movieMediaActive) {
      q('movieVideo').src = 'about:blank';
      q('movieDialog').close();
      setMovieMediaActive(false);
    }

    backgroundWantsPlayback = true;
    queueWantsPlayback = true;
    backgroundAudio.pause();
    queueAudio.removeAttribute('src');
    if (queueYoutubePlayerReady) queueYoutubePlayer.stopVideo();
    q('queuePlayerStatus').textContent = `Playing ${track.n}`;
    q('deckSub').textContent = fromTitle ? `${track.a} · cued from "${fromTitle}"` : track.a;
    loadQueueYouTubeTrack(youtubeTrack.id);
  } else {
    pendingQueueVideoId = null;
    if (queueYoutubePlayerReady) queueYoutubePlayer.stopVideo();
    q('queuePlayerStatus').textContent = track.youtubeSrc
      ? 'The YouTube link for this track is invalid'
      : 'Choose a track with a YouTube link to play it here.';
  }

  const hasAudio = typeof track.audioSrc === 'string' && track.audioSrc.length > 0;
  if (youtubeTrack) {
    return;
  } else if (hasAudio) {
    if (movieMediaActive) {
      q('movieVideo').src = 'about:blank';
      q('movieDialog').close();
      setMovieMediaActive(false);
    }

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
  } else {
    queueWantsPlayback = false;
    queueAudio.pause();
    q('deckSub').textContent = 'YouTube link not added for this track yet';
    resumeBackgroundAudio();
  }

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
    if (nativeVideo) {
      nativeVideo.pause();
      nativeVideo.removeAttribute('src');
      nativeVideo.load();
    }
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
    loadQueueYouTubeAPI();

  }

}

document.addEventListener('DOMContentLoaded', init);
