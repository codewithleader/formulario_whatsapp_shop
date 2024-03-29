document.querySelector('#submit').addEventListener('click', e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = '573197660129';

  const talla = document.querySelector('#talla').value;
  const correo = document.querySelector('#email').value;
  const codigo = document.querySelector('#codigo').value;
  const ciudad = document.querySelector('#ciudad').value;
  const nombre = document.querySelector('#cliente').value;
  const color = document.querySelector('#color').value;
  const celular = document.querySelector('#celular').value;
  const direccion = document.querySelector('#direccion').value;
  const municipio = document.querySelector('#municipio').value;
  const observaciones = document.querySelector('#observaciones').value;
  const departamento = document.querySelector('#departamento').value;

  const resp = document.querySelector("#respuesta");

  resp.classList.remove('fail');
  resp.classList.remove('send');

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_NIKHARshopformulario_*%0A
          *nombre*%0A
          ${nombre}%0A
          *celular*%0A
          ${celular}%0A
          *correo*%0A
          ${departamento}%0A
          *ciudad*%0A
          ${ciudad}%0A
          *municipio*%0A
          ${municipio}%0A
          *direccion*%0A
          ${direccion}%0A
          *codigo*%0A
          ${codigo}%0A
          *talla*%0A
          ${talla}%0A
          *color*%0A
          ${color}%0A
          *observaciones*%0A
          ${observaciones}`;

  if (nombre === '' || celular === '' || correo === '') {
    resp.classList.add('fail');
    resp.innerHTML = `Faltan algunos datos, ${nombre}`;
    return false;
  }
  resp.classList.remove('fail');
  resp.classList.add('send');
  resp.innerHTML = `Se ha enviado tu reserva, ${nombre}`;

  window.open(url);
});
