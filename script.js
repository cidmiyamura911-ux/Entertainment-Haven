/* ============================================
   Entertainment Haven — script.js
   ============================================ */

const MOODS = {
  comfort:  {label:'Comfort',   color:'#c9a227'},
  chaos:    {label:'Chaos',     color:'#ff6b5b'},
  heartbreak:{label:'Heartbreak', color:'#9a8cff'},
  wonder:   {label:'Wonder',    color:'#5bc9a6'}
};

const TITLES = [
  {t:"Low Tide Diner", y:"2021", mood:"comfort", desc:"A night-shift cook and a stranded traveler talk until sunrise.", len:"1h 42m"},
  {t:"Static & Sons", y:"2019", mood:"chaos", desc:"Three brothers inherit a failing radio station and a lot of debt.", len:"1h 58m"},
  {t:"Paper Weather", y:"2023", mood:"heartbreak", desc:"A letter arrives eleven years late; a marriage reconsiders itself.", len:"2h 05m"},
  {t:"The Long Aquarium", y:"2020", mood:"wonder", desc:"A marine biologist finds something in the deep tank that shouldn't move.", len:"1h 36m"},
  {t:"Catch Me If You Can", y:"2002", mood:"chaos", desc:"A teenage con artist stays one step ahead of the agent chasing him.", len:"2h 21m"},
  {t:"The Fall", y:"2006", mood:"wonder", desc:"An injured stuntman spins a hospitalized girl an epic, hand-built fantasy.", len:"1h 57m"},
  {t:"Chef", y:"2014", mood:"comfort", desc:"A chef rebuilds his confidence and his family from a battered food truck.", len:"1h 55m"},
  {t:"Rooftop Static", y:"2022", mood:"comfort", desc:"A building super and a locked-out tenant wait out a blackout together.", len:"1h 29m"},
  {t:"Uncut Gems", y:"2019", mood:"chaos", desc:"A jeweler's one good bet spirals into a citywide chase for payback.", len:"2h 15m"},
  {t:"Wire & Static", y:"2018", mood:"chaos", desc:"A pirate radio crew stays a broadcast ahead of the signal trucks hunting them.", len:"1h 47m"},
  {t:"Eternal Sunshine of the Spotless Mind", y:"2004", mood:"heartbreak", desc:"A couple erases each other from memory, and slowly wants it back.", len:"1h 48m"},
  {t:"Harbor Letters", y:"2017", mood:"heartbreak", desc:"A lighthouse keeper answers mail addressed to a woman who left years ago.", len:"1h 39m"},
  {t:"Spirited Away", y:"2001", mood:"wonder", desc:"A girl works in a bathhouse for spirits to free her transformed parents.", len:"2h 05m"},
  {t:"The Glass Orchard", y:"2023", mood:"wonder", desc:"A gardener discovers her orchard's fruit holds other people's memories.", len:"1h 51m"}
];

const TRACKS = [
  {n:"Slow Burner Diner", a:"Marigold Static", mood:"comfort", time:"3:41"},
  {n:"Nightlight Economy", a:"Feld & Rowe", mood:"comfort", time:"4:02"},
  {n:"Broken Antenna", a:"Static & Sons OST", mood:"chaos", time:"2:58"},
  {n:"Wrong Frequency", a:"Delia Vox", mood:"chaos", time:"3:15"},
  {n:"Eleven Years Late", a:"Corner Room", mood:"heartbreak", time:"4:20"},
  {n:"Return to Sender", a:"June Alder", mood:"heartbreak", time:"3:33"},
  {n:"Something in the Tank", a:"Marigold Static", mood:"wonder", time:"5:01"},
  {n:"Deep End, Slowly", a:"Halden Bay", mood:"wonder", time:"4:47"},
  {n:"Come Fly With Me", a:"Frank Sinatra", mood:"chaos", time:"3:21"},
  {n:"Told As a Fable", a:"Halden Bay", mood:"wonder", time:"4:36"},
  {n:"Sunday Kitchen", a:"Feld & Rowe", mood:"comfort", time:"3:10"},
  {n:"Warm Static", a:"Marigold Static", mood:"comfort", time:"3:50"},
  {n:"Loose Wire", a:"Delia Vox", mood:"chaos", time:"3:05"},
  {n:"Sabotage", a:"Beastie Boys", mood:"chaos", time:"3:15"},
  {n:"The Scientist", a:"Coldplay", mood:"heartbreak", time:"4:09"},
  {n:"Corner Room Reprise", a:"Corner Room", mood:"heartbreak", time:"3:40"},
  {n:"Clair de Lune", a:"Claude Debussy", mood:"wonder", time:"4:30"},
  {n:"Glasshouse Bloom", a:"Halden Bay", mood:"wonder", time:"4:20"}
];

function moodChip(mood){
  const m = MOODS[mood];
  return `<span class="t-tag" style="color:${m.color}">${m.label}</span>`;
}

function hashStr(s){
  let h = 0;
  for(let i=0;i<s.length;i++){ h = (Math.imul(31,h) + s.charCodeAt(i)) | 0; }
  return Math.abs(h);
}
function pick(seed, salt, mod){ return hashStr(seed+'::'+salt) % mod; }

function coverArt(mood, seed){
  const m = MOODS[mood];
  const c = m.color;
  const dark = '#1d1828';
  let inner = '';
  if(mood === 'wonder'){
    for(let i=0;i<6;i++){
      const cx = 20+pick(seed,'cx'+i,260), cy = 15+pick(seed,'cy'+i,170);
      const r = 6+pick(seed,'r'+i,22);
      const op = (25+pick(seed,'o'+i,45))/100;
      inner += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" opacity="${op.toFixed(2)}"/>`;
    }
  } else if(mood === 'chaos'){
    for(let i=0;i<7;i++){
      const x1 = pick(seed,'x1'+i,300), y1 = pick(seed,'y1'+i,200);
      const x2 = x1 + pick(seed,'x2'+i,80) - 40, y2 = y1 + pick(seed,'y2'+i,80) - 40;
      inner += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="2.5" opacity="0.55"/>`;
    }
    const px = [1,2,3].map(i=>`${pick(seed,'p'+i+'x',300)},${pick(seed,'p'+i+'y',200)}`).join(' ');
    inner += `<polygon points="${px}" fill="${c}" opacity="0.22"/>`;
  } else if(mood === 'heartbreak'){
    const mx = 120+pick(seed,'m',60);
    inner += `<path d="M${mx},0 L${mx-14+pick(seed,'c1',28)},70 L${mx+14-pick(seed,'c2',28)},130 L${mx-8+pick(seed,'c3',16)},200" stroke="${c}" stroke-width="2" fill="none" opacity="0.6"/>`;
    for(let i=0;i<3;i++){
      const cx = 30+pick(seed,'hx'+i,240), cy = 30+pick(seed,'hy'+i,140);
      inner += `<circle cx="${cx}" cy="${cy}" r="${8+pick(seed,'hr'+i,12)}" fill="${c}" opacity="0.18"/>`;
    }
  } else {
    for(let i=0;i<5;i++){
      const cx = 25+pick(seed,'cfx'+i,250), cy = 25+pick(seed,'cfy'+i,150);
      const r = 16+pick(seed,'cfr'+i,32);
      inner += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" opacity="0.16"/>`;
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="${dark}"/>${inner}</svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

/* ---------- SHELF ---------- */
const shelfRow = document.getElementById('shelfRow');
TITLES.forEach(item=>{
  const m = MOODS[item.mood];
  const el = document.createElement('article');
  el.className='card';
  el.setAttribute('role', 'button');
  el.tabIndex = 0;
  el.setAttribute('aria-label', `View ${item.t} (${item.y})`);
  el.innerHTML = `
    <div class="poster" style="background-image:url('${coverArt(item.mood, item.t)}')">
      <span class="mood">${m.label} · ${item.y}</span>
    </div>
    <div class="card-body">
      <h3>${item.t}</h3>
      <p>${item.desc}</p>
      <div class="runtime">${item.len}</div>
    </div>`;
  el.addEventListener('click', ()=> showMovie(item));
  el.addEventListener('keydown', event => {
    if(event.key === 'Enter' || event.key === ' '){
      event.preventDefault();
      showMovie(item);
    }
  });
  shelfRow.appendChild(el);
});

/* ---------- TRACK LIST ---------- */
const trackList = document.getElementById('trackList');
function renderTracks(highlightMood){
  trackList.innerHTML = '';
  TRACKS.forEach((tr, i)=>{
    const row = document.createElement('div');
    row.className = 'track-row';
    if(highlightMood) row.style.opacity = tr.mood===highlightMood ? '1' : '0.35';
    row.innerHTML = `
      <div class="t-cover" style="background-image:url('${coverArt(tr.mood, tr.n)}')"></div>
      <span class="idx">${String(i+1).padStart(2,'0')}</span>
      <div class="t-main"><strong>${tr.n}</strong><span>${tr.a}</span></div>
      ${moodChip(tr.mood)}
      <span class="t-time">${tr.time}</span>`;
    row.addEventListener('click', ()=> playTrack(tr, row));
    trackList.appendChild(row);
  });
}
renderTracks();

/* ---------- MOVIE VIEWER ---------- */
const movieDialog = document.getElementById('movieDialog');
const movieVideo = document.getElementById('movieVideo');
const movieEmpty = document.getElementById('movieEmpty');
const movieTabs = [...document.querySelectorAll('.movie-tab')];
let selectedMovie = null;

function renderSuggestions(container, items, type){
  container.replaceChildren();
  items.forEach(item => {
    const button = document.createElement('button');
    button.className = 'suggestion-button';
    button.type = 'button';
    const title = document.createElement('strong');
    const detail = document.createElement('span');
    if(type === 'movie'){
      title.textContent = item.t;
      detail.textContent = `${item.y} · ${MOODS[item.mood].label}`;
      button.addEventListener('click', () => showMovie(item));
    }else{
      title.textContent = item.n;
      detail.textContent = item.a;
      button.addEventListener('click', () => {
        const index = TRACKS.indexOf(item);
        playTrack(item, trackList.querySelectorAll('.track-row')[index]);
      });
    }
    button.append(title, detail);
    container.append(button);
  });
}

function renderMovieSuggestions(item){
  const sameMoodMovies = TITLES.filter(title => title !== item && title.mood === item.mood);
  const sameMoodTracks = TRACKS.filter(track => track.mood === item.mood).slice(0, 4);
  renderSuggestions(document.getElementById('movieSuggestions'), sameMoodMovies.slice(0, 4), 'movie');
  renderSuggestions(document.getElementById('musicSuggestions'), sameMoodTracks, 'music');
}

function updateMovieMedia(mode){
  movieTabs.forEach(tab => tab.setAttribute('aria-selected', String(tab.dataset.mode === mode)));
  movieVideo.pause();
  movieVideo.removeAttribute('src');
  movieVideo.load();

  const source = selectedMovie[mode === 'trailer' ? 'trailerSrc' : 'movieSrc'];
  const title = mode === 'trailer' ? 'Trailer' : 'Movie';
  document.getElementById('movieMedia').setAttribute('aria-labelledby', mode === 'trailer' ? 'trailerTab' : 'movieTab');
  document.getElementById('movieMediaTitle').textContent = source ? `${title} video` : `${title} unavailable`;
  document.getElementById('movieMediaMessage').textContent = source ? '' : `Add a ${title.toLowerCase()} video to the site to play it here.`;
  movieVideo.hidden = !source;
  movieEmpty.hidden = Boolean(source);
  if(source){
    movieVideo.src = source;
    movieVideo.load();
  }else{
    movieEmpty.style.backgroundImage = `url('${coverArt(selectedMovie.mood, selectedMovie.t)}')`;
  }
}

function showMovie(item){
  selectedMovie = item;
  document.getElementById('movieTitle').textContent = item.t;
  document.getElementById('movieMood').textContent = MOODS[item.mood].label.toUpperCase();
  document.getElementById('movieYear').textContent = `${item.y} · ${item.len}`;
  document.getElementById('movieDescription').textContent = item.desc;
  renderMovieSuggestions(item);
  updateMovieMedia('trailer');
  if(!movieDialog.open) movieDialog.showModal();
}

movieTabs.forEach(tab => tab.addEventListener('click', () => updateMovieMedia(tab.dataset.mode)));
document.getElementById('movieClose').addEventListener('click', () => movieDialog.close());
movieDialog.addEventListener('click', event => {
  if(event.target === movieDialog) movieDialog.close();
});

/* ---------- PLAYBACK CONTROLS ---------- */
let playing = false;
let currentIndex = -1;
function togglePlay(){
  playing = !playing;
  document.getElementById('playToggle').textContent = playing ? '❚❚' : '▶';
}
function playTrack(tr, rowEl, fromTitle){
  currentIndex = TRACKS.indexOf(tr);
  if(!fromTitle){
    trackList.querySelectorAll('.track-row').forEach(r=>r.style.opacity='1');
  }
  document.querySelectorAll('.track-row').forEach(r=>r.classList.remove('playing'));
  if(rowEl) rowEl.classList.add('playing');
  document.getElementById('deckTitle').textContent = tr.n;
  document.getElementById('deckSub').textContent = fromTitle ? `${tr.a} · cued from "${fromTitle}"` : tr.a;
  const m = MOODS[tr.mood];
  document.getElementById('deckThumb').style.backgroundImage = `url('${coverArt(tr.mood, tr.n)}')`;
  document.getElementById('moodBadge').textContent = 'MOOD: ' + m.label.toUpperCase();
  document.getElementById('scrubFill').style.background = m.color;
  playing = true;
  document.getElementById('playToggle').textContent = '❚❚';
}
function prevTrack(){
  if(!TRACKS.length) return;
  const base = currentIndex < 0 ? 0 : currentIndex;
  const idx = (base-1+TRACKS.length) % TRACKS.length;
  const rows = trackList.querySelectorAll('.track-row');
  playTrack(TRACKS[idx], rows[idx]);
}
function nextTrack(){
  if(!TRACKS.length) return;
  const base = currentIndex < 0 ? -1 : currentIndex;
  const idx = (base+1) % TRACKS.length;
  const rows = trackList.querySelectorAll('.track-row');
  playTrack(TRACKS[idx], rows[idx]);
}

/* ---------- RATINGS & FEEDBACK ---------- */
const FEEDBACK_KEY = 'entertainmentHavenFeedback';
const ratingForm = document.getElementById('ratingForm');
const ratingSummary = document.getElementById('ratingSummary');
const feedbackList = document.getElementById('feedbackList');
const ratingStatus = document.getElementById('ratingStatus');
const ratingChoices = [...document.querySelectorAll('.rating-choice')];

function loadFeedback(){
  try{
    const stored = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '[]');
    if(!Array.isArray(stored)) return [];
    return stored.filter(entry => entry && Number.isInteger(entry.rating) && entry.rating >= 1 && entry.rating <= 5 && typeof entry.comment === 'string' && typeof entry.date === 'string').slice(0, 50);
  }catch{
    return [];
  }
}

let feedbackEntries = loadFeedback();

function renderFeedback(){
  const count = feedbackEntries.length;
  if(count){
    const average = feedbackEntries.reduce((total, entry) => total + entry.rating, 0) / count;
    ratingSummary.textContent = `${average.toFixed(1)} / 5 · ${count} ${count === 1 ? 'rating' : 'ratings'}`;
  }else{
    ratingSummary.textContent = 'No ratings yet';
  }

  feedbackList.replaceChildren();
  feedbackEntries.forEach(entry => {
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
    feedbackList.append(item);
  });
}

function updateRatingStars(){
  const selectedRating = Number(ratingForm.elements.rating.value || 0);
  ratingChoices.forEach((choice, index) => choice.classList.toggle('is-active', index < selectedRating));
}

ratingForm.addEventListener('change', updateRatingStars);
ratingForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(ratingForm);
  const rating = Number(formData.get('rating'));
  const comment = String(formData.get('feedback') || '').trim();
  if(!rating || !comment) return;

  feedbackEntries.unshift({rating, comment, date:new Date().toISOString()});
  feedbackEntries = feedbackEntries.slice(0, 50);
  try{
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbackEntries));
    ratingStatus.textContent = 'Thanks. Your feedback has been saved in this browser.';
  }catch{
    ratingStatus.textContent = 'Thanks. Your feedback is visible for this session, but could not be saved.';
  }
  ratingForm.reset();
  updateRatingStars();
  renderFeedback();
});

renderFeedback();

/* ---------- BACKGROUND MUSIC (Hidden, Auto-loop) ---------- */
(function(){
  const audio = document.getElementById('mainAudio');
  if(!audio) return;

  /* Auto-start on first user interaction (browser autoplay policy) */
  let started = false;
  function tryAutoStart(){
    if(started) return;
    started = true;
    audio.play().catch(()=>{});
    document.removeEventListener('click', tryAutoStart);
    document.removeEventListener('keydown', tryAutoStart);
    document.removeEventListener('touchstart', tryAutoStart);
  }
  document.addEventListener('click', tryAutoStart);
  document.addEventListener('keydown', tryAutoStart);
  document.addEventListener('touchstart', tryAutoStart);
})();

