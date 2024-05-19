document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var description = document.getElementById("description").value;
    var petType = document.getElementById("pet-type").value;
    var image = document.getElementById("image").files[0];
    var terms = document.getElementById("terms").checked;

    if (
      !name ||
      !email ||
      !phone ||
      !description ||
      !petType ||
      !image ||
      !terms
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    alert("Formulario enviado correctamente.");
  });
