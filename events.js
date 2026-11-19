/* Date: Osman project src/data/junes-night.ts. Copy: EVENTS/Events.pages.
   Each event owns its own cast, experience and announcements. */
(() => {
  const event = {
    slug: 'junes-night', title: 'June’s Night', date: '2028-06-02',
    timezone: 'Europe/Amsterdam', city: 'Amsterdam',
    tagline: 'A not so ordinary concert',
    tickets: 'VIP and regular tickets on sale in 2027',
    registrationUrl: 'https://www.osmanmeyredi.com/shows/junes-night',
    introduction: 'Meyredi Records steps out of the studio and takes its music onto the stage.',
    cast: 'Headlined by label co-founder Osman Meyredi and hosted by co-founder Jolene Prins, the night brings together a hand-picked line-up of artists who share the label’s foundation: groove first, feel first, and original music only.',
    experience: 'This isn’t a concert you watch from the back, on sore feet. Wear the shoes you’d usually leave at home for a concert: there’s a seat waiting for you. Take a VIP table or sit close to the stage, with good drinks and bites served through the night. Dress for it. The music takes care of the rest.',
    music: 'When Osman takes the stage, the night keeps climbing: from intimate piano through soul, funk, disco and rock, to a finale that sends the room home on a high.',
    venueAnnouncement: 'Location revealed by 2 April 2028.',
    lineupAnnouncement: 'Line-up announced soon.'
  };
  const arrow = '<span aria-hidden="true">↗</span>';
  const route = '#/events/' + event.slug;
  const date = new Date(event.date + 'T12:00:00Z');
  const format = options => new Intl.DateTimeFormat('en-GB', {...options, timeZone:event.timezone}).format(date);
  const day = format({day:'2-digit'});
  const monthYear = format({month:'long', year:'numeric'});
  const fullDate = format({day:'numeric', month:'long', year:'numeric'});
  document.querySelector('.event-feature').innerHTML = `
    <div class="event-date-block"><span class="event-kicker">Save the date</span><time datetime="${event.date}"><span class="event-day">${day}</span><span class="event-month">${monthYear}</span></time><span class="event-city">${event.city}</span></div>
    <div class="event-copy"><p class="section-eyebrow">Out of the studio.</p><h2 id="event-heading">${event.title}</h2><p class="event-intro">${event.introduction}</p><p class="event-announcement">${event.venueAnnouncement}<br>${event.lineupAnnouncement}</p><a class="text-link" href="${route}">View event ${arrow}</a></div>`;
  document.querySelector('.profile-closing>div:first-child').innerHTML = `<p class="section-eyebrow">Live in ${event.city} / ${fullDate}</p><h2>${event.title}</h2><a class="text-link" href="${route}">View event ${arrow}</a>`;
  document.querySelector('.events-programme').innerHTML = `
    <article class="programme-event" aria-labelledby="programme-event-title">
      <div class="programme-opening">
        <div class="programme-date"><p class="section-eyebrow">${event.city}</p><time datetime="${event.date}"><span class="programme-day">${day}</span><span class="programme-month">${monthYear}</span></time><p class="programme-weekday">${format({weekday:'long'})}</p></div>
        <div class="programme-copy"><p class="section-eyebrow">Save the date</p><h2 id="programme-event-title"><a href="${route}">${event.title}</a></h2><p class="programme-cast">${event.cast}</p><p class="programme-announcement">${event.venueAnnouncement}<br>${event.lineupAnnouncement}</p><a class="text-link programme-action" href="${route}">Explore event ${arrow}</a></div>
      </div>
      <div class="programme-experience"><div><h3>Dress for it.</h3><p>${event.experience}</p></div><div><h3>From piano to the finale.</h3><p>${event.music}</p></div></div>
    </article>`;
  document.querySelector('.events-introduction p').textContent = event.introduction;
  document.querySelector('.event-detail-page').innerHTML = `
    <div class="event-detail-top"><p class="section-eyebrow">Meyredi Records / Live</p><a class="text-link" href="#/events">All events ${arrow}</a></div>
    <div class="event-detail-hero"><div><p class="section-eyebrow">${event.tagline}</p><h1 id="event-detail-title">${event.title}</h1><p class="event-detail-introduction">${event.introduction}</p></div><div class="event-detail-date"><time datetime="${event.date}">${format({weekday:'long'})}<br><span>${fullDate}</span></time><p>${event.city}</p><p class="event-detail-venue">${event.venueAnnouncement}</p></div></div>
    <section class="event-access" aria-labelledby="event-access-title"><div><p class="section-eyebrow">Plan your evening</p><h2 id="event-access-title">Early bird access</h2><p>${event.tickets}</p></div><div class="event-access-action"><a class="text-link event-register" href="${event.registrationUrl}" target="_blank" rel="noopener noreferrer">Get early bird access ${arrow}<span class="sr-only"> (opens in a new tab)</span></a><p>Register on Osman Meyredi’s website.</p></div></section>
    <div class="event-detail-story"><figure><img src="./assets/osman-double-bass.jpg" alt="Osman Meyredi performing on double bass." width="1115" height="1600" loading="lazy"><figcaption>Osman Meyredi / Headlining June’s Night</figcaption></figure><div><section><p class="section-eyebrow">The people behind the night</p><h2>Groove first.<br><em>Feel first.</em></h2><p>${event.cast}</p><p class="event-lineup-note">${event.lineupAnnouncement}</p></section><section><h2>Dress for it.</h2><p>${event.experience}</p></section><section><h2>From piano to the finale.</h2><p>${event.music}</p></section><a class="text-link" href="#/artists/osman-meyredi">Meet Osman Meyredi ${arrow}</a></div></div>`;

})();
