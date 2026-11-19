const navigation = [
  { slug: 'artists', label: 'Artists', description: 'The artists behind the music. Their stories and releases.' },
  { slug: 'releases', label: 'Releases', description: 'Independent music. Discover our releases and find your way to listen.' },
  { slug: 'work-with-us', label: 'Work with us', description: 'Your music. Its next chapter.', services: [
    { slug: 'label', label: 'Label/demo submissions' },
    { slug: 'production', label: 'Music Production' },
    { slug: 'management', label: 'Artist management' },
  ] },
  { slug: 'events', label: 'Events', description: 'Out of the studio. Our music, brought to the stage.' },
  { slug: 'about', label: 'About', description: 'Osman Meyredi and Jolene Prins. Music and entrepreneurship, together.' },
  { slug: 'contact', label: 'Contact', description: 'Start a conversation with Meyredi Records.' },
];

function descriptionContent(item) {
  const description = document.createElement('p');
  description.textContent = item.description;
  const fragment = document.createDocumentFragment();
  fragment.append(description);
  if (item.services) {
    const links = document.createElement('div');
    links.className = 'service-links';
    item.services.forEach(service => {
      const link = document.createElement('a');
      link.href = '#/' + item.slug + '/' + service.slug;
      link.textContent = service.label;
      links.append(link);
    });
    fragment.append(links);
  }
  return fragment;
}

function renderNavigation(container, mobile) {
  navigation.forEach(item => {
    const row = document.createElement('li');
    row.className = 'nav-item';
    const link = document.createElement('a');
    link.className = 'nav-link';
    link.href = '#/' + item.slug;
    link.dataset.slug = item.slug;
    const label = document.createElement('span');
    label.textContent = item.label;
    link.append(label);
    row.append(link);
    const description = document.createElement('div');
    description.className = mobile ? 'mobile-description' : 'nav-description';
    description.id = (mobile ? 'mobile-' : 'desktop-') + item.slug + '-description';
    description.append(descriptionContent(item));
    if (mobile) {
      const toggle = document.createElement('button');
      toggle.className = 'description-toggle';
      toggle.textContent = '+';
      toggle.setAttribute('aria-label', 'About ' + item.label);
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', description.id);
      toggle.addEventListener('click', () => {
        const expanded = row.classList.toggle('is-expanded');
        toggle.setAttribute('aria-expanded', String(expanded));
        toggle.textContent = expanded ? '−' : '+';
      });
      row.append(toggle);
    } else {
      link.setAttribute('aria-describedby', description.id);
      row.addEventListener('pointerenter', () => row.classList.remove('is-dismissed'));
      row.addEventListener('focusin', () => row.classList.remove('is-dismissed'));
    }
    row.append(description);
    container.append(row);
  });
}

renderNavigation(document.querySelector('#desktop-links'), false);
renderNavigation(document.querySelector('#mobile-links'), true);

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');
const main = document.querySelector('main');
const brand = document.querySelector('.brand');

function setMenu(open, restoreFocus = true) {
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
  menu.inert = !open;
  menu.setAttribute('aria-hidden', String(!open));
  main.inert = open;
  document.querySelector('.site-footer').inert = open;
  brand.inert = open;
  if (open) menu.querySelector('a').focus({ preventScroll: true });
  else if (restoreFocus) menuButton.focus({ preventScroll: true });
}

menuButton.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (document.body.classList.contains('menu-open')) setMenu(false);
  });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.desktop-links .nav-item').forEach(row => row.classList.add('is-dismissed'));
    if (document.body.classList.contains('menu-open')) setMenu(false);
  }
  if (event.key !== 'Tab' || !document.body.classList.contains('menu-open')) return;
  const focusable = [menuButton, ...menu.querySelectorAll('a,button')].filter(el => el.getClientRects().length);
  const index = focusable.indexOf(document.activeElement);
  event.preventDefault();
  focusable[(index + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length].focus();
});

function updateReviewRoute() {
  const [slug, serviceSlug] = location.hash.replace(/^#\//, '').split('/');
  const item = navigation.find(entry => entry.slug === slug) || (slug === 'privacy' ? {label:'Privacy Policy', description:'Client privacy policy draft for review.'} : null);
  const service = item?.services?.find(entry => entry.slug === serviceSlug);
  const isPrivacyPage = slug === 'privacy' && !serviceSlug;
  const isContactPage = slug === 'contact';
  const isAboutPage = slug === 'about' && !serviceSlug;
  const isEventDetail = slug === 'events' && serviceSlug === 'junes-night';
  const isEventsIndex = slug === 'events' && !serviceSlug;
  const isWorkPage = slug === 'work-with-us' && (!serviceSlug || !!service);
  const contactTopic = slug === 'contact' ? navigation.find(entry => entry.slug === 'work-with-us').services.find(entry => entry.slug === serviceSlug) : null;
  const isArtistProfile = slug === 'artists' && serviceSlug === 'osman-meyredi';
  const isReleaseDetail = slug === 'releases' && serviceSlug === 'dance-with-this-mess';
  const isReleasesIndex = slug === 'releases' && !serviceSlug;
  const isArtistsIndex = slug === 'artists' && !serviceSlug;
  if (document.body.classList.contains('menu-open')) setMenu(false, false);
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.slug === slug) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.querySelector('.home-opening').hidden = !!item;
  document.querySelector('.home-sections').hidden = !!item;
  document.querySelector('.artists-page').hidden = !isArtistsIndex;
  document.querySelector('.artist-profile-page').hidden = !isArtistProfile;
  document.querySelector('.releases-page').hidden = !isReleasesIndex;
  document.querySelector('.release-detail-page').hidden = !isReleaseDetail;
  document.querySelector('.work-page').hidden = !isWorkPage;
  document.querySelector('.events-page').hidden = !isEventsIndex;
  document.querySelector('.event-detail-page').hidden = !isEventDetail;
  document.querySelector('.about-page').hidden = !isAboutPage;
  document.querySelector('.privacy-page').hidden = !isPrivacyPage;
  document.querySelector('.contact-page').hidden = !isContactPage;
  document.querySelector('.review-content').hidden = !item || isArtistsIndex || isArtistProfile || isReleasesIndex || isReleaseDetail || isWorkPage || isEventsIndex || isEventDetail || isAboutPage || isContactPage || isPrivacyPage;
  document.querySelector('#review-step').textContent = item ? 'Destination preview' : '01 — Header & navigation';
  const title = document.querySelector('#review-title');
  if (item) title.textContent = service?.label || (slug === 'artists' && serviceSlug === 'osman-meyredi' ? 'Osman Meyredi' : slug === 'releases' && serviceSlug === 'dance-with-this-mess' ? 'Dance With This Mess' : slug === 'events' && serviceSlug === 'junes-night' ? 'June’s Night' : item.label);
  else title.innerHTML = 'A place for<br><em>what’s next.</em>';
  document.querySelector('#review-description').textContent = item ? item.description : 'Explore the menu above. Each destination reveals a little more.';
  document.querySelector('#review-note').textContent = item ? 'This destination will be designed in its scheduled phase. This review includes the homepage, Artists index, Osman Meyredi profile, Releases index, release detail, Work with us, Events index, June’s Night detail, About and Contact preview.' : 'Navigation review · Page designs follow in the next stages.';
  if (contactTopic && !isContactPage) {
    title.textContent = contactTopic.label + ' enquiry';
    document.querySelector('#review-description').textContent = 'Selected topic: ' + contactTopic.label + '. The Contact form will be built in Stage 16. Nothing has been submitted.';
  }
  const backLink = document.querySelector('.back-link');
  backLink.hidden = !item;
  backLink.href = slug === 'artists' && serviceSlug ? '#/artists' : slug === 'releases' && serviceSlug ? '#/releases' : '#/';
  backLink.textContent = slug === 'artists' && serviceSlug ? 'Back to artists' : slug === 'releases' && serviceSlug ? 'Back to releases' : 'Back to home';
  if (slug === 'events' && serviceSlug) { backLink.href = '#/events'; backLink.textContent = 'Back to events'; }
  if (slug === 'privacy') { backLink.href = '#/contact'; backLink.textContent = 'Back to contact'; }
  if (contactTopic) { backLink.href = '#/work-with-us/' + contactTopic.slug; backLink.textContent = 'Back to ' + contactTopic.label; }
  document.title = item ? item.label + ' — Meyredi Records navigation review' : 'Meyredi Records — homepage review';
  if (isPrivacyPage) document.title = 'Privacy Policy · Meyredi Records';
  if (isContactPage) document.title = 'Contact · Meyredi Records';
  if (isAboutPage) document.title = 'Our Story · Meyredi Records';
  if (isEventDetail) document.title = 'June’s Night · Meyredi Records';
  if (isEventsIndex) document.title = 'Events · Meyredi Records';
  if (isWorkPage) document.title = 'Work with us · Meyredi Records';
  if (contactTopic && !isContactPage) document.title = contactTopic.label + ' enquiry · Meyredi Records';
  if (isReleaseDetail) document.title = 'Dance With This Mess · Meyredi Records';
  if (isReleasesIndex) document.title = 'Releases · Meyredi Records';
  if (isArtistProfile) document.title = 'Osman Meyredi · Meyredi Records';
  if (isArtistsIndex) document.title = 'Artists · Meyredi Records';
  if (location.hash.startsWith('#/')) {
    main.focus({ preventScroll: true });
    window.scrollTo(0, 0);
    if (isWorkPage && service) {
      const section = document.getElementById('work-' + service.slug);
      section.focus({ preventScroll: true });
      section.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }
}
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#/work-with-us"]');
  if (link && link.hash === location.hash && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
    event.preventDefault();
    updateReviewRoute();
  }
});
window.addEventListener('hashchange', updateReviewRoute);
window.matchMedia('(min-width: 851px)').addEventListener('change', event => {
  if (event.matches && document.body.classList.contains('menu-open')) setMenu(false, false);
});
updateReviewRoute();

// Match the hero to the viewport space below the actual responsive header.
const header = document.querySelector('.site-header');
function updateHeaderHeight() {
  document.documentElement.style.setProperty('--header-height', header.getBoundingClientRect().height + 'px');
}
updateHeaderHeight();
new ResizeObserver(updateHeaderHeight).observe(header);
