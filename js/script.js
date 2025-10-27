function aplicarMascara(input, funcaoMascara) {
  input.addEventListener("input", (e) => {
    e.target.value = funcaoMascara(e.target.value);
  });
}

function mascaraCPF(valor) {
  return valor
    .replace(/\D/g, "") // Remove tudo que não é número
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function mascaraTelefone(valor) {
  return valor
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})$/, "$1-$2");
}

function mascaraCEP(valor) {
  return valor
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .substring(0, 9);
}

function validarFormulario(event) {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  if (nome.value.trim().length < 3) {
    alert("Por favor, insira um nome válido.");
    event.preventDefault();
    return false;
  }

  if (!email.value.includes("@")) {
    alert("Insira um e-mail válido.");
    event.preventDefault();
    return false;
  }

  if (telefone.value.replace(/\D/g, "").length < 11) {
    alert("Telefone incompleto.");
    event.preventDefault();
    return false;
  }

  if (cep.value.replace(/\D/g, "").length !== 8) {
    alert("CEP inválido.");
    event.preventDefault();
    return false;
  }

  alert("Formulário enviado com sucesso!");
}

document.addEventListener("DOMContentLoaded", () => {
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  if (cpf) aplicarMascara(cpf, mascaraCPF);
  if (telefone) aplicarMascara(telefone, mascaraTelefone);
  if (cep) aplicarMascara(cep, mascaraCEP);

  const form = document.getElementById("form-cadastro");
  if (form) form.addEventListener("submit", validarFormulario);
});
