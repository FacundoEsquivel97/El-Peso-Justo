document.addEventListener( "DOMContentLoaded",()=>{
  const pokeName = document.querySelector('.pokeName');
  const pokeImg = document.querySelector('.pokeImg');
  const pokeType = document.querySelector('.pokeType');
  const pokeHeight = document.querySelector('.pokeHeight strong');
  const textBox = document.querySelector('.textBox');
  const inputWeight = document.querySelector('.inputWeight');
  const inputSubmit = document.querySelector('.inputSubmit');
  const hp = document.querySelector('.hp');
  const buttonNext = document.querySelector('.buttonNext');

  let count = 100;
  let aciertos  = 0;
  let vistos = 0
  
  const redondearDecimales = (numero, decimales) => {
    numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');   // Expresion regular para numeros con un cierto numero de decimales o mas
    if (numeroRegexp.test(numero)) {         // Ya que el numero tiene el numero de decimales requeridos o mas, se realiza el redondeo
        return Number(numero.toFixed(decimales));
    } else {
        return Number(numero.toFixed(decimales)) === 0 ? 0 : numero;  // En valores muy bajos, se comprueba si el numero es 0 (con el redondeo deseado), si no lo es se devuelve el numero otra vez.
    }
  }
  const mostrarAlerta = (mensaje) => {
    textBox.textContent = mensaje
  }

  const renderPokemon = () => {
    vistos ++;
  let num = Math.floor(Math.random() * (151 - 1)) + 1;
  fetch('https://pokeapi.co/api/v2/pokemon/'+ num)
  .then (response => response.json())
  .then (pokemon => {
    console.log(pokemon)
    console.log(pokemon.name);
    const peso = pokemon.weight/10
    console.log(peso)
    pokeType.innerHTML = '';
    pokemon.types.forEach((type)=>{
     let typeBox = document.createElement('div')
     typeBox.textContent = type.type.name
     typeBox.className = 'typeBox'
     pokeType.appendChild(typeBox)
    })
    pokeName.textContent = pokemon.name;
    pokeHeight.textContent = pokemon.height*10;
    
    pokeImg.setAttribute('src',pokemon.sprites.other.home.front_default);
    
    inputSubmit.classList.remove('hide')
    inputWeight.value = 0;
    mostrarAlerta('Ingresa el peso del pokemon!')
  
    inputSubmit.addEventListener('click',(e)=>{
      e.preventDefault()
      let result = Math.abs(redondearDecimales(inputWeight.value - peso,2)) ;
      inputSubmit.classList.add('hide')
      if (result == 0) {
        mostrarAlerta('Haz acertado! El peso de este pokemon es ' + peso + 'kg.')
        aciertos ++
      } else {
        mostrarAlerta('Haz fallado por ' + result + 'kg. El peso de este pokemon es ' + peso + 'kg.')
        count = redondearDecimales(count-result,2);
        count < 0 ? hp.textContent = 0 : hp.textContent = count;
      }
      buttonNext.classList.remove('hide')
    })
  })
  .catch (error => console.log(error))
  }
  
  buttonNext.addEventListener('click',()=>{
    count < 0 ? mostrarAlerta('Te has quedado sin créditos! Recarga la página para volver a empezar. Haz visto '+ vistos + ' Pokemon. Y haz acertado '+ aciertos + ' Pokemon!') : renderPokemon();
    buttonNext.classList.add('hide')
  })

  hp.textContent = `${count}/100` 
  renderPokemon()
})