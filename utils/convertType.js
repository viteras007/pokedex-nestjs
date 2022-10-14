function convertType(type) {
    if(type === 'normal'){
      return 'Normal';
    }
    if(type === 'fighting'){
      return 'Lutador';
    }
    if(type === 'flying'){
      return 'Vôo';
    }
    if(type === 'poison'){
      return 'Tóxico';
    }
    if(type === 'ground'){
      return 'Terra';
    }
    if(type === 'rock'){
      return 'Pedra';
    }
    if(type === 'bug'){
      return 'Inseto';
    }
    if(type === 'ghost'){
      return 'Fantasma';
    }
    if(type === 'steel'){
      return 'Metal';
    }
    if(type === 'fire'){
      return 'Fogo';
    }
    if(type === 'water'){
      return 'Água';
    }
    if(type === 'grass'){
      return 'Planta';
    }
    if(type === 'electric'){
      return 'Elétrico';
    }
    if(type === 'psychic'){
      return 'Psíquico';
    }
    if(type === 'ice'){
      return 'Gelo';
    }
    if(type === 'dragon'){
      return 'Dragão';
    }
    if(type === 'dark'){
      return 'Sombra';
    }
    if(type === 'fairy'){
      return 'Fada';
    } else {
      return 'normal';
    }
}

export { convertType };