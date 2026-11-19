/* Proposed Meyredi scroll colour treatment, not a verified Gondwana replica.
   Progress follows each section boundary from 85% to 35% of the viewport.
   All content shares one canvas, so colours blend without a hard seam. */
(() => {
  const home = document.querySelector('.home-sections');
  const release = document.querySelector('.release-section');
  const artist = document.querySelector('.artist-section');
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const paper = [233, 235, 230];
  const stone = [203, 197, 185];
  let frame = 0;
  let previous = '';
  const clamp = value => Math.max(0, Math.min(1, value));
  const progress = section => clamp((innerHeight * .85 - section.getBoundingClientRect().top) / (innerHeight * .5));
  const blend = (start, end, amount) => start.map((channel, i) => channel + (end[i] - channel) * amount);
  function paint() {
    frame = 0;
    const enabled = !reduced.matches && !home.hidden;
    root.classList.toggle('scroll-colors', enabled);
    if (!enabled) {
      root.style.removeProperty('--scroll-surface');
      previous = '';
      return;
    }
    const intoRelease = blend(paper, stone, progress(release));
    const color = blend(intoRelease, paper, progress(artist));
    const value = `rgb(${color.map(channel => channel.toFixed(2)).join(', ')})`;
    if (value !== previous) root.style.setProperty('--scroll-surface', value);
    previous = value;
  }
  function schedule() {
    if (!frame) frame = requestAnimationFrame(paint);
  }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  addEventListener('hashchange', schedule);
  addEventListener('pageshow', schedule);
  reduced.addEventListener('change', schedule);
  // Re-evaluate after fonts, images or responsive content alter section positions.
  new ResizeObserver(schedule).observe(document.querySelector('main'));
  paint();
})();
