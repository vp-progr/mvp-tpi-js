const header = `<nav class="navbar navbar-expand-lg bg-secondary">
<div class="container-fluid">
  <a class="navbar-brand text-white" href="#">Conf Bs As</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">La conferencia</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Los oradores</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">El lugar y la fecha</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Conviértete en orador</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-green" href="#">Comprar tickets</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;


const footer = `<ul class="nav justify-content-center bg-custom">
<li class="nav-item">
  <a class="nav-link active text-white" aria-current="page" href="#">Preguntas frecuentes</a>
</li>
<li class="nav-item">
  <a class="nav-link text-white" href="#">Contáctanos</a>
</li>
<li class="nav-item">
  <a class="nav-link text-white" href="#">Prensa</a>
</li>
<li class="nav-item">
  <a class="nav-link text-white" href="#">Conferencias</a>
</li>
<li class="nav-item">
  <a class="nav-link text-white" href="#">Términos y condiciones</a>
</li>
<li class="nav-item">
  <a class="nav-link text-white" href="#">Privacidad</a>
</li>
<li class="nav-item">
  <a class="nav-link text-white" href="#">Estudiantes</a>
</li>
</ul>`


const headerTag = document.getElementsByTagName('header')[0]
const footerTag = document.getElementsByTagName('footer')[0]


headerTag.innerHTML = header
footerTag.innerHTML = footer