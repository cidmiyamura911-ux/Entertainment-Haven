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
  { t: 'Low Tide Diner', y: '2021', mood: 'comfort', desc: 'A night-shift cook and a stranded traveler talk until sunrise.', len: '1h 42m', trailerSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0', movieSrc: '' },
  { t: 'Static & Sons', y: '2019', mood: 'chaos', desc: 'Three brothers inherit a failing radio station and a lot of debt.', len: '1h 58m' },
  { t: 'Paper Weather', y: '2023', mood: 'heartbreak', desc: 'A letter arrives eleven years late; a marriage reconsiders itself.', len: '2h 05m' },
  { t: 'The Long Aquarium', y: '2020', mood: 'wonder', desc: 'A marine biologist finds something in the deep tank that shouldn\'t move.', len: '1h 36m' },
  { t: 'Catch Me If You Can', y: '2002', mood: 'chaos', desc: 'A teenage con artist stays one step ahead of the agent chasing him.', len: '2h 21m' },
  { t: 'The Fall', y: '2006', mood: 'wonder', desc: 'An injured stuntman spins a hospitalized girl an epic, hand-built fantasy.', len: '1h 57m' },
  { t: 'Chef', y: '2014', mood: 'comfort', desc: 'A chef rebuilds his confidence and his family from a battered food truck.', len: '1h 55m' },
  { t: 'Rooftop Static', y: '2022', mood: 'comfort', desc: 'A building super and a locked-out tenant wait out a blackout together.', len: '1h 29m' },
  { t: 'Uncut Gems', y: '2019', mood: 'chaos', desc: 'A jeweler\'s one good bet spirals into a citywide chase for payback.', len: '2h 15m' },
  { t: 'Wire & Static', y: '2018', mood: 'chaos', desc: 'A pirate radio crew stays a broadcast ahead of the signal trucks hunting them.', len: '1h 47m' },
  { t: 'Eternal Sunshine of the Spotless Mind', y: '2004', mood: 'heartbreak', desc: 'A couple erases each other from memory, and slowly wants it back.', len: '1h 48m' },
  { t: 'Harbor Letters', y: '2017', mood: 'heartbreak', desc: 'A lighthouse keeper answers mail addressed to a woman who left years ago.', len: '1h 39m' },
  { t: 'Spirited Away', y: '2001', mood: 'wonder', desc: 'A girl works in a bathhouse for spirits to free her transformed parents.', len: '2h 05m' },
  { t: 'The Glass Orchard', y: '2023', mood: 'wonder', desc: 'A gardener discovers her orchard\'s fruit holds other people\'s memories.', len: '1h 51m' },
  { t: 'The Last Key', y: '2024', mood: 'mystery', desc: 'A night archivist finds a key that unlocks a room missing from the building plans.', len: '1h 46m' },
  { t: 'The Vanishing Signal', y: '2021', mood: 'mystery', desc: 'A radio host follows a coded transmission that appears only during the midnight hour.', len: '1h 39m' },
  { t: 'Redline', y: '2022', mood: 'intense', desc: 'A rescue driver races through a storm to reach a stranded mountain town.', len: '1h 54m' },
  { t: 'Final Ascent', y: '2020', mood: 'intense', desc: 'A climber and her guide push through a whiteout with daylight and supplies running out.', len: '1h 48m' }
];

const TRACKS = [
  { n: 'Slow Burner Diner', a: 'Marigold Static', mood: 'comfort', time: '3:41' },
  { n: 'Nightlight Economy', a: 'Feld & Rowe', mood: 'comfort', time: '4:02' },
  { n: 'Broken Antenna', a: 'Static & Sons OST', mood: 'chaos', time: '2:58' },
  { n: 'Wrong Frequency', a: 'Delia Vox', mood: 'chaos', time: '3:15' },
  { n: 'Eleven Years Late', a: 'Corner Room', mood: 'heartbreak', time: '4:20' },
  { n: 'Return to Sender', a: 'June Alder', mood: 'heartbreak', time: '3:33' },
  { n: 'Something in the Tank', a: 'Marigold Static', mood: 'wonder', time: '5:01' },
  { n: 'Deep End, Slowly', a: 'Halden Bay', mood: 'wonder', time: '4:47' },
  { n: 'Come Fly With Me', a: 'Frank Sinatra', mood: 'chaos', time: '3:21' },
  { n: 'Told As a Fable', a: 'Halden Bay', mood: 'wonder', time: '4:36' },
  { n: 'Sunday Kitchen', a: 'Feld & Rowe', mood: 'comfort', time: '3:10' },
  { n: 'Warm Static', a: 'Marigold Static', mood: 'comfort', time: '3:50' },
  { n: 'Loose Wire', a: 'Delia Vox', mood: 'chaos', time: '3:05' },
  { n: 'Sabotage', a: 'Beastie Boys', mood: 'chaos', time: '3:15' },
  { n: 'The Scientist', a: 'Coldplay', mood: 'heartbreak', time: '4:09' },
  { n: 'Corner Room Reprise', a: 'Corner Room', mood: 'heartbreak', time: '3:40' },
  { n: 'Clair de Lune', a: 'Claude Debussy', mood: 'wonder', time: '4:30' },
  { n: 'Glasshouse Bloom', a: 'Halden Bay', mood: 'wonder', time: '4:20' },
  { n: 'The Unmarked Door', a: 'June Alder', mood: 'mystery', time: '3:52' },
  { n: 'Archive at Midnight', a: 'Marigold Static', mood: 'mystery', time: '4:10' },
  { n: 'Full Throttle', a: 'Delia Vox', mood: 'intense', time: '3:24' },
  { n: 'After the Sirens', a: 'Feld & Rowe', mood: 'intense', time: '4:06' }
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
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.setAttribute('aria-label', `View ${item.t} (${item.y})`);
    card.innerHTML = `
      <div class="poster" style="background-image:url('${coverArt(item.mood, item.t)}')">
        <span class="mood">${label} · ${item.y}</span>
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
      detail.textContent = `${item.y} · ${getMood(item.mood).label}`;
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
  video.src = 'about:blank';

  const source = selectedMovie[mode === 'trailer' ? 'trailerSrc' : 'movieSrc'];
  const embedUrl = source ? youtubeEmbedUrl(source) : null;
  const label = mode === 'trailer' ? 'Trailer' : 'Movie';
  const empty = q('movieEmpty');

  q('movieMedia').setAttribute('aria-labelledby', mode === 'trailer' ? 'trailerTab' : 'movieTab');
  video.title = `${selectedMovie.t} ${label}`;
  q('movieMediaTitle').textContent = embedUrl ? `${label} video` : `${label} unavailable`;
  q('movieMediaMessage').textContent = source && !embedUrl
    ? 'Use a valid YouTube video link for this slot.'
    : embedUrl
      ? ''
      : `Add a YouTube ${label.toLowerCase()} link to this title to play it here.`;

  video.hidden = !embedUrl;
  empty.hidden = Boolean(embedUrl);

  if (embedUrl) {
    video.src = embedUrl;
  } else {
    empty.style.backgroundImage = `url('${coverArt(selectedMovie.mood, selectedMovie.t)}')`;
  }
}

function showMovie(item) {
  selectedMovie = item;
  q('movieTitle').textContent = item.t;
  q('movieMood').textContent = getMood(item.mood).label.toUpperCase();
  q('movieYear').textContent = `${item.y} · ${item.len}`;
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

let playing = false;
let currentIndex = -1;

function togglePlay() {
  playing = !playing;
  q('playToggle').textContent = playing ? '❚❚' : '▶';
}

function playTrack(track, rowEl, fromTitle = '') {
  currentIndex = TRACKS.indexOf(track);
  const rows = q('trackList').querySelectorAll('.track-row');

  rows.forEach((row) => row.style.opacity = '1');
  document.querySelectorAll('.track-row').forEach((row) => row.classList.remove('playing'));
  if (rowEl) rowEl.classList.add('playing');

  q('deckTitle').textContent = track.n;
  q('deckSub').textContent = fromTitle ? `${track.a} · cued from "${fromTitle}"` : track.a;

  const { color, label } = getMood(track.mood);
  q('deckThumb').style.backgroundImage = `url('${coverArt(track.mood, track.n)}')`;
  q('moodBadge').textContent = `MOOD: ${label.toUpperCase()}`;
  q('scrubFill').style.background = color;

  playing = true;
  q('playToggle').textContent = '❚❚';
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
    const startAudio = () => {
      if (started) return;
      started = true;
      audio.play().catch(() => {});
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
