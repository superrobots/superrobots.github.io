(() => {
  // Keep the recipient out of page markup and construct the draft when requested.
  const encodedRecipient = 'emh1dG91bGFsYUBnbWFpbC5jb20=';
  const orderSubject = 'Classroom Robotics Lab order request';
  const orderBody = [
    'School or organization:',
    'Contact name:',
    'Number of classroom sets:',
    'Shipping city, postal code, and country:',
    'School purchasing requirements (optional):',
    ''
  ].join('\r\n');

  for (const button of document.querySelectorAll('button[data-contact-email]')) {
    button.addEventListener('click', () => {
      const recipient = atob(encodedRecipient);
      const draft = button.dataset.contactEmail === 'lab-order'
        ? `?subject=${encodeURIComponent(orderSubject)}&body=${encodeURIComponent(orderBody)}`
        : '';
      window.location.href = `mailto:${recipient}${draft}`;
    });
    button.hidden = false;
  }
})();
