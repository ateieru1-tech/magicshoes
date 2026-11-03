(() => {
  const whatsapp = 'https://wa.me/40774694428';
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    const service = link.dataset.service;
    const message = service
      ? `Bună, Magicshoes! Aș dori detalii despre ${service}. Vă pot trimite câteva fotografii?`
      : 'Bună, Magicshoes! Aș vrea să ofer un refresh perechii mele. Vă pot trimite câteva fotografii pentru o evaluare?';
    link.href = `${whatsapp}?text=${encodeURIComponent(message)}`;
  });
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Deschide meniul'); navigation.classList.remove('open'); };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Închide meniul' : 'Deschide meniul');
    navigation.classList.toggle('open', open);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  const range = document.querySelector('#comparison-range');
  range.addEventListener('input', () => {
    range.closest('.comparison').style.setProperty('--split', `${range.value}%`);
    range.setAttribute('aria-valuetext', `${range.value}% înainte, ${100 - Number(range.value)}% după`);
  });
  document.querySelectorAll('[data-gallery]').forEach(card => {
    card.querySelectorAll('[data-stage]').forEach(button => button.addEventListener('click', () => {
      const stage = button.dataset.stage;
      const image = card.querySelector('img');
      image.src = `assets/${card.dataset.gallery}-${stage}.webp`;
      image.alt = `${card.dataset.name} ${stage === 'before' ? 'înainte de' : 'după'} ${card.dataset.treatment} în atelierul Magicshoes${stage === 'after' ? ', fotografie ajustată' : ''}`;
      card.querySelector('.result-state').textContent = `${stage === 'before' ? 'ÎNAINTE DE' : 'DUPĂ'} ${card.dataset.treatment.toLocaleUpperCase('ro-RO')}`;
      card.querySelectorAll('[data-stage]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
    }));
  });
  const privacy = document.querySelector('#privacy-dialog');
  document.querySelector('#privacy-open').addEventListener('click', () => privacy.showModal());
  privacy.querySelector('.dialog-close').addEventListener('click', () => privacy.close());
  privacy.addEventListener('click', event => { if (event.target === privacy) { const box = privacy.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) privacy.close(); } });
  document.querySelector('#year').textContent = String(new Date().getFullYear());
})();
