/* Shared catalogue record: homepage, artist profile and Releases index.
   Source: Osman website src/data/demo/content.ts, rel-dance-with-this-mess.
   Keep collaborators distinct from the label roster when adding future records. */
(() => {
  const releases = [{
    slug: 'dance-with-this-mess',
    title: 'Dance With This Mess',
    artist: 'Osman Meyredi',
    artistRoute: '#/artists/osman-meyredi',
    format: 'Single',
    date: '2026-10-11',
    artwork: './assets/dance-with-this-mess.jpg',
    label: 'Meyredi Records',
    catalogueNumber: 'MEY001D',
    // Label launch sentence from Jolene's revised biography, page-copy.ts.
    story: 'In October 2026 he co-launched his own label, Meyredi Records, starting with a reworked version of his single “Dance with this Mess”, a song that turns the chaos of life into a rhythm you can move to.',
    credits: [
      { name: 'Osman Meyredi', roles: ['main artist', 'lyricist', 'composer', 'bass guitar (electric)', 'guitar (electric)', 'keyboard', 'drums', 'vocal', 'background vocals', 'synthesiser'] },
      { name: 'Meyredi Records', roles: ['pre-production', 'studio producer'] },
      { name: 'hartmanmastering', roles: ['mastering engineer'] }
    ],
    platforms: [
      ['Spotify', 'https://open.spotify.com/track/2ZblIBbe38czfqQA94pxaT'],
      ['Apple Music', 'https://music.apple.com/nl/album/dance-with-this-mess/6821879627?i=6821879628&l=en-GB']
    ]
  }];
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const arrow = '<span aria-hidden="true">↗</span>';
  const dateLabel = release => new Intl.DateTimeFormat('en-GB', {day:'numeric', month:'long', year:'numeric', timeZone:'UTC'}).format(new Date(release.date));
  const route = release => '#/releases/' + release.slug;
  const artwork = release => `<img src="${escape(release.artwork)}" alt="${escape(release.title)} single artwork" width="1000" height="1000" loading="lazy">`;
  const listening = release => `<div class="platforms"><p>Listen on</p>${release.platforms.map(([name, url]) => `<a class="text-link" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(name)} ${arrow}<span class="sr-only"> (opens in a new tab)</span></a>`).join('')}</div>`;
  const artist = release => `<a class="release-artist-link" href="${escape(release.artistRoute)}">${escape(release.artist)}</a>`;
  const date = release => `<time datetime="${release.date}">${dateLabel(release)}</time>`;
  const featured = releases[0];
  document.querySelector('.release-detail-page').innerHTML = `
    <div class="release-detail-top"><p class="section-eyebrow">${escape(featured.label)} / ${escape(featured.catalogueNumber)}</p><a class="text-link" href="#/releases">Back to releases ${arrow}</a></div>
    <div class="release-detail-opening">
      <figure class="release-detail-sleeve">${artwork(featured)}<figcaption>℗ ${featured.date.slice(0,4)} ${escape(featured.label)} · ${escape(featured.catalogueNumber)}</figcaption></figure>
      <div class="release-detail-intro"><p class="section-eyebrow">${featured.format} / ${date(featured)}</p><h1 id="release-detail-title">${escape(featured.title)}</h1><p class="release-detail-artist">${artist(featured)}</p>${listening(featured)}</div>
    </div>
    <div class="release-detail-notes"><section class="release-story" aria-labelledby="release-story-title"><p class="section-eyebrow">The recording</p><h2 id="release-story-title">Osman Meyredi</h2><p>${escape(featured.story)}</p><a class="text-link" href="${featured.artistRoute}">Meet Osman Meyredi ${arrow}</a></section>
    <section class="release-credits" aria-labelledby="release-credits-title"><h2 id="release-credits-title">Credits</h2><dl>${featured.credits.map(credit => `<div class="release-credit"><dt>${escape(credit.name)}</dt><dd>${credit.roles.map(escape).join(' · ')}</dd></div>`).join('')}</dl></section></div>`;
  document.querySelector('.release-feature').innerHTML = `
    <a class="release-artwork" href="${route(featured)}" aria-label="View ${escape(featured.title)}">${artwork(featured)}</a>
    <div class="release-copy"><p class="section-eyebrow">Featured release / ${featured.format}</p><h2 id="release-heading">${escape(featured.title)}</h2><p class="release-artist">${artist(featured)}</p><p class="release-date">${date(featured)}</p>${listening(featured)}<a class="text-link release-details" href="${route(featured)}">View release ${arrow}</a></div>`;
  document.querySelector('.profile-record').innerHTML = `
    <a href="${route(featured)}" aria-label="View ${escape(featured.title)}">${artwork(featured)}</a>
    <div><p class="section-eyebrow">${featured.format} / ${date(featured)}</p><h3>${escape(featured.title)}</h3><p>${artist(featured)}</p>${listening(featured)}</div>`;
  document.querySelector('.release-catalogue').innerHTML = [...releases].sort((a,b) => b.date.localeCompare(a.date)).map(release => `
    <article class="catalogue-record" aria-labelledby="catalogue-${release.slug}">
      <a class="catalogue-artwork" href="${route(release)}" aria-label="View ${escape(release.title)}">${artwork(release)}</a>
      <div class="catalogue-copy"><p class="section-eyebrow">${release.format} / ${date(release)}</p><h2 id="catalogue-${release.slug}"><a href="${route(release)}">${escape(release.title)}</a></h2><p class="catalogue-artist">${artist(release)}</p><a class="text-link catalogue-details" href="${route(release)}">Explore release ${arrow}</a>${listening(release)}</div>
    </article>`).join('');
})();
