document.addEventListener( "DOMContentLoaded",()=>{
  const pokeName = document.querySelector('.pokeName');
  const pokeImg = document.querySelector('.pokeImg');
  const inputHeight = document.querySelector('.inputHeight');
  const inputWeight = document.querySelector('.inputWeight');
  const inputSubmit = document.querySelector('.inputSubmit');
    
  const renderPokemon = () => {
  let num = Math.floor(Math.random() * (151 - 1)) + 1;
  fetch('https://pokeapi.co/api/v2/pokemon/'+ num)
  .then (response => response.json())
  .then (pokemon => {
    console.log(pokemon.name);
    console.log(pokemon.height/10)
    pokeName.textContent = pokemon.name;
    pokeImg.setAttribute('src',pokemon.sprites.other.home.front_default);
    
    inputSubmit.addEventListener('click',(e)=>{
      e.preventDefault()
      let result = inputHeight.value - (pokemon.height/10);
      if (result == 0) {alert('you win')} else {
        alert(result)
      }
    })
  })
  .catch (error => console.log(error))
  }
  
  renderPokemon()
})