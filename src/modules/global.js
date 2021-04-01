
function createTypes(types, ul) {
  types.forEach(function (type) {
    let typeLi = document.createElement('li');
    typeLi.innerText = type['type']['name'];
    let typeValue = type['type']['name'];
    checkType(typeValue, typeLi);
    ul.append(typeLi);
  })
}

function checkType(type, li) {
  // console.log('type isssss', type);
  switch (type) {
    case 'fire':
      li.classList.add('fire', 'default-type');
      break;
    case 'flying':
      li.classList.add('flying', 'default-type');
      break;
    case 'bug':
      li.classList.add('bug', 'default-type');

      break;
    case 'dark':
      li.classList.add('dark', 'default-type');

      break;
    case 'dragon':
      li.classList.add('dragon', 'default-type');

      break;
    case 'electric':
      li.classList.add('electric', 'default-type');

      break;
    case 'fairy':
      li.classList.add('fairy', 'default-type');

      break;
    case 'fighting':
      li.classList.add('fighting', 'default-type');

      break;
    case 'ghost':
      li.classList.add('ghost', 'default-type');

      break;
    case 'grass':
      li.classList.add('grass', 'default-type');

      break;
    case 'ground':
      li.classList.add('ground', 'default-type');

      break;
    case 'ice':
      li.classList.add('ice', 'default-type');

      break;
    case 'normal':
      li.classList.add('normal', 'default-type');

      break;
    case 'poison':
      li.classList.add('poison', 'default-type');

      break;
    case 'psychic':
      li.classList.add('psychic', 'default-type');

      break;
    case 'rock':
      li.classList.add('rock', 'default-type');

      break;
    case 'steel':
      li.classList.add('steel', 'default-type');

      break;
    case 'water':
      li.classList.add('water', 'default-type');

      break;
    default:
      break;
  }
}

export { createTypes, checkType };

