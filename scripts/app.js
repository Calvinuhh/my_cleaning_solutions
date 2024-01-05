const btn = document.querySelector(".btn");

document
  .querySelector(".formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_owoiijg";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Enviar";
        alert("Mensaje enviado!");
      },
      (err) => {
        btn.value = "Enviar";
        alert(JSON.stringify(err));
      }
    );

    document.querySelector(".formulario").reset();
  });
