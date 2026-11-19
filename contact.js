/* Local review only. No network submission or persistent storage.
   Connect verified delivery and complete privacy before public launch. */
(() => {
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#contact-status');
  const fields = [...form.querySelectorAll('input,select,textarea')];
  function validate(field) {
    let error = '';
    if (field.required && !field.value.trim()) error = field.name === 'topic' ? 'Choose an enquiry topic.' : `Enter your ${field.name}.`;
    else if (field.name === 'email' && !field.validity.valid) error = 'Enter a valid email address, such as name@example.com.';
    else if (field.name === 'link' && field.value.trim()) {
      try { if (!['http:', 'https:'].includes(new URL(field.value.trim()).protocol)) throw new Error(); }
      catch { error = 'Enter a complete website or music link starting with https:// or http://.'; }
    }
    const message = document.getElementById(field.id + '-error');
    message.textContent = error;
    message.hidden = !error;
    field.setAttribute('aria-invalid', String(!!error));
    return !error;
  }
  fields.forEach(field => field.addEventListener('input', () => {
    status.hidden = true;
    if (field.getAttribute('aria-invalid') === 'true') validate(field);
  }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const invalid = fields.filter(field => !validate(field));
    status.hidden = false;
    if (invalid.length) {
      status.textContent = 'Please correct the highlighted fields. Your message has been kept.';
      invalid[0].focus();
      return;
    }
    status.textContent = 'Your enquiry passes the form checks. This is a review preview: nothing has been sent. Your details remain here so you can continue editing.';
    status.focus();
  });
  function selectTopic() {
    const [page, topic] = location.hash.replace(/^#\//, '').split('/');
    const select = form.elements.topic;
    if (page === 'contact' && topic && [...select.options].some(option => option.value === topic)) {
      select.value = topic;
      validate(select);
      status.hidden = true;
    }
  }
  addEventListener('hashchange', selectTopic);
  selectTopic();
})();
