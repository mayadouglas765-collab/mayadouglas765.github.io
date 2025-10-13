
function toggleMenu(){
  const nav = document.getElementById('site-nav');
  nav.classList.toggle('open');
}

function handleContactSubmit(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');
  const subject = encodeURIComponent('Website contact from ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>');
  window.location.href = `mailto:maya@example.com?subject=${subject}&body=${body}`;
  alert('Thanks! Your email app should open. If not, email me at maya@example.com.');
  return false;
}
