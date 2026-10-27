const btnTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', () => {
  btnTopo.classList.toggle('hidden', window.scrollY <= 300);
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.\n\nE-mail: ${email}\nMensagem: ${mensagem}`);
  this.reset();
});
