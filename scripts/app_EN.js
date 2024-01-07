const btn = document.querySelector(".btn");

document
  .querySelector(".formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_owoiijg";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send";
        Swal.fire({
          title: "Submitted form!",
          icon: "success",
        });
      },
      (err) => {
        btn.value = "Send";
        alert(JSON.stringify(err));
      }
    );

    document.querySelector(".formulario").reset();
  });
