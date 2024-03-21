document.getElementById('id_texto_alterado').style.display = "none";

function alternarOcultarMostrar() { 
  let btn = document.getElementById('copiar');
  if (btn.style.display === "none") {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  } 
}

alternarOcultarMostrar();

const pattern = new RegExp("^[ a-z\b]+$");
function letrasSemAcento(e) {
  if (!pattern.test(e.key)) {
    return false;
  }
}

const matriz_code = [
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufat'],
];

function criptografar() {
  let stringCriptografada = document.getElementById("id_texto_orginal").value;
  for (let i = 0; i < matriz_code.length; i++) {
    if (stringCriptografada.includes(matriz_code[i][0])) {
      stringCriptografada = stringCriptografada.replaceAll(
        matriz_code[i][0],
        matriz_code[i][1]
      );
    }
  }
  document.getElementById('id_texto_alterado').value = stringCriptografada;
  document.getElementById("id_texto_orginal").value = '';
  // document.getElementById('informacao_1').innerHTML = '';
  // document.getElementById('informacao_2').innerHTML = '';
  alternarOcultarMostrar();
  document.getElementById('imagem_sem_mensagem').style.display = "none";
  document.getElementById('id_texto_alterado').style.display = "block";
}

function descriptografar() {
  let stringDescriptografada = document.getElementById('id_texto_orginal').value;
  for (let i = 0; i < matriz_code.length; i++) {
    if (stringDescriptografada.includes(matriz_code[i][1])) {
      stringDescriptografada = stringDescriptografada.replaceAll(
        matriz_code[i][1],
        matriz_code[i][0]
        );
      }
    }
    document.getElementById("id_texto_alterado").value = stringDescriptografada;
    document.getElementById('id_texto_orginal').value = '';
    alternarOcultarMostrar();
    document.getElementById('imagem_sem_mensagem').style.display = "none";
    document.getElementById('id_texto_alterado').style.display = "block";
  }
  
  async function copiar() {
    let mensagemCriptografada = document.getElementById("id_texto_alterado").value;
    await navigator.clipboard.writeText(mensagemCriptografada);
    document.getElementById('id_texto_alterado').value = '';
    alternarOcultarMostrar();
    document.getElementById('imagem_sem_mensagem').style.display = "block";
    document.getElementById('id_texto_alterado').style.display = "none";
}