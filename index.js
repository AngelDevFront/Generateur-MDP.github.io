const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase(); // tout en majuscule
const dataNumbers = "0123456789";
const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = []; // cree un tableau
  let password = "";
  // data.push(... un element)serre toujours a ajouter un element d'un tableau a un autre les ... peuvent aussi etre utiliser avec d'autre objet les ... s'appelle un operateur de propagation
  if (lowercase.checked) data.push(...dataLowercase); //va permettre d'ajouter dans le tableau les minuscule si la case minuscule est cochée
  if (uppercase.checked) data.push(...dataUppercase); //va permettre d'ajouter dans le tableau les majuscule si la case majuscule est cochée
  if (numbers.checked) data.push(...dataNumbers); //va permettre d'ajouter dans le tableau des nombres si la case nombre est cochée
  if (symbols.checked) data.push(...dataSymbols); //va permettre d'ajouter dans le tableau des symboles si la case symboles est cochée

  // creer un message d'alert pour l'utilisatur si le resultat est 0 il va dire que l'utilisateur doit séléction des critères
  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    //va genere des caractere jusque le nombre demander par rangeValue.value
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;
  passwordOutput.select();

  //permet de copier le mot de passe généré dans le presse papier afin de la mettre autre part
  navigator.clipboard.writeText(passwordOutput.value);

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword); //genere un password au click
