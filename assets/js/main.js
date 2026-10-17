// PortfolioHUB — interações
(function () {
  const root = document.documentElement;

  // Tema claro/escuro (lembra a escolha do visitante)
  try {
    const salvo = localStorage.getItem('tema');
    if (salvo) root.dataset.theme = salvo;
  } catch (e) { /* armazenamento indisponível */ }

  document.getElementById('tema')?.addEventListener('click', () => {
    const escuroAtual = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = escuroAtual ? 'light' : 'dark';
    try { localStorage.setItem('tema', root.dataset.theme); } catch (e) {}
  });

  // Menu mobile
  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');
  btn?.addEventListener('click', () => {
    const aberto = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', aberto);
  });
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));

  // Filtro de projetos
  document.querySelectorAll('.filter').forEach(f => f.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
    f.classList.add('active');
    document.querySelectorAll('.card').forEach(card => {
      card.classList.toggle('hide', f.dataset.f !== 'todos' && card.dataset.cat !== f.dataset.f);
    });
  }));

  // Incorpora o vídeo do YouTube quando o ID estiver configurado
  const video = document.getElementById('video');
  const id = video?.dataset.youtube;
  if (id && !id.startsWith('ID-')) {
    video.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}" title="Apresentação do PortfolioHUB" allowfullscreen loading="lazy"></iframe>`;
  }

  document.getElementById('ano').textContent = new Date().getFullYear();
})();
