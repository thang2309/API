import { createTypes } from './modules/global.js';
import './scss/main.scss';
import './img/poke.png';


let effectAbility = document.getElementsByClassName('detail__info-text')[0];

// localstorage
//get
const url = localStorage.getItem('url');
const offset = localStorage.getItem('offsetRequest');
const height = localStorage.getItem('height');
//set
console.log('offsetRequest', offset);
let link = document.getElementsByClassName('detail__link')[0];
link.addEventListener('click', function (e) {
  localStorage.setItem('offsetRespon', offset);
  localStorage.setItem('heightRespon', height);
})
let lv1 = document.getElementsByClassName('evolutions__content')[0];
let lv2 = document.getElementsByClassName('evolutions__content')[1];
let lv3 = document.getElementsByClassName('evolutions__content')[2];
let parrentImgLv1 = document.getElementsByClassName('evolutions__img')[0];
let parrentImgLv2 = document.getElementsByClassName('evolutions__img')[1];
let parrentImgLv3 = document.getElementsByClassName('evolutions__img')[2];
let gender = document.getElementsByClassName('gender__icon')[0];
let ulAbi = document.createElement('ul');
let ulType = document.createElement('ul');
let ulStat = document.createElement('ul');
let detailAbility = document.getElementsByClassName('detail__ability')[0];
let detailType = document.getElementsByClassName('detail__type')[0];
let detailName = document.getElementsByClassName('detail__name')[0];
let detailHeight = document.getElementsByClassName('detail__height')[0];
let detailWeight = document.getElementsByClassName('detail__weight')[0];
let detailInfo = document.getElementsByClassName('detail__ability__info')[0];
let detailCloseInfo = document.getElementsByClassName('detail__info-close')[0];
let detailStatsLeft = document.getElementsByClassName('stats__left')[0];
//svg
let triangle = document.getElementById("triangle");
let svg = document.getElementById('mySVG');
let length = triangle.getTotalLength();
triangle.style.strokeDasharray = length;
triangle.style.strokeDashoffset = length;
window.addEventListener("scroll", drawPoke);

function drawPoke() {
  let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  let draw = length * scrollpercent - 1000;
  // Reverse the drawing (when scrolling upwards)

  if (document.documentElement.scrollTop > 600) {
    svg.style.background = "linear-gradient(180deg, rgba(246,0,45,1) 40%,rgba(254,254,254,1)  60%)";
  }

  triangle.style.strokeDashoffset = length - draw;
}

let Detail = function () {

};

Detail.prototype = {
  load() {
    url && fetch(url)
      .then((resp) => resp.json())
      .then((result) => {
        const idPoke = localStorage.getItem('id');

        this.checkLv(idPoke, result);
        this.fetchGender1(result.name);
        this.render(result);
      });
  },
  checkLv(idPoke, pokemon) {
    // parseInt(idPoke);
    switch (idPoke % 3) {
      case 0:
        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke) - parseInt(2)}/`)
          .then(res => res.json())
          .then(result => {

            this.renderEvolutions(idPoke, result, 1);
          })
        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke) - parseInt(1)}/`)
          .then(res => res.json())
          .then(result => {
            this.renderEvolutions(idPoke, result, 2);

          })

        this.renderEvolutions(idPoke, pokemon, 3);

        break;
      case 1:

        this.renderEvolutions(idPoke, pokemon, 1);

        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke) + parseInt(1)}/`)
          .then(res => res.json())
          .then(result => {
            this.renderEvolutions(idPoke, result, 2);

          })
        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke) + parseInt(2)}/`)
          .then(res => res.json())
          .then(result => {
            this.renderEvolutions(idPoke, result, 3);
          })
        break;
      case 2:
        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke) - parseInt(1)}/`)
          .then(res => res.json())
          .then(result => {
            this.renderEvolutions(idPoke, result, 1);

          })

        this.renderEvolutions(idPoke, pokemon, 2);

        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(idPoke) + parseInt(1)}/`)
          .then(res => res.json())
          .then(result => {
            this.renderEvolutions(idPoke, result, 3);

          })
        break;

      default:
        break;
    }
  },
  fetchGender1(namePoke) {

    fetch(`https://pokeapi.co/api/v2/gender/1/`)
      .then(res => res.json())
      .then(result => {
        // createGender(result.name , result.pokemon_species_details , namePoke);
        let pokeSpecies = result.pokemon_species_details;
        for (let x in pokeSpecies) {
          let name = pokeSpecies[x].pokemon_species.name;
          if (name === namePoke) {
            this.createGender(1);
          }
        }
      })

    fetch(`https://pokeapi.co/api/v2/gender/2/`)
      .then(res => res.json())
      .then(result => {
        // createGender(result.name , result.pokemon_species_details , namePoke);
        let pokeSpecies = result.pokemon_species_details;
        for (let x in pokeSpecies) {
          let name = pokeSpecies[x].pokemon_species.name;
          if (name === namePoke) {
            this.createGender(2);
          }
        }
      })

    fetch(`https://pokeapi.co/api/v2/gender/3/`)
      .then(res => res.json())
      .then(result => {
        let pokeSpecies = result.pokemon_species_details;
        for (let x in pokeSpecies) {
          let name = pokeSpecies[x].pokemon_species.name;
          if (name === namePoke) {
            this.createGender(3);
          }
        }
      })
  },
  renderEvolutions(id, pokemon, lv) {
    let tagImg = document.createElement('a');
    let imgPoke = document.createElement('img');
    imgPoke.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`);

    tagImg.append(imgPoke);
    tagImg.setAttribute('href', '#aloha');
    let namePoke = document.createElement('p');
    namePoke.classList.add('evolution__name');
    namePoke.append(pokemon.name);

    let ulEvo = document.createElement('ul');
    createTypes(pokemon.types, ulEvo);
    switch (lv) {
      case 1:
        parrentImgLv1.append(tagImg);
        lv1.append(parrentImgLv1, namePoke, ulEvo);
        break;
      case 2:
        parrentImgLv2.append(tagImg);
        lv2.append(parrentImgLv2, namePoke, ulEvo);
        break;
      case 3:
        parrentImgLv3.append(tagImg);
        lv3.append(parrentImgLv3, namePoke, ulEvo);
        break;
      default:
        break;
    }
    imgPoke.addEventListener('click', (e) => {
      let target = e.target;
      this.rerender(pokemon.id, pokemon);
    })
  },
  rerender(id, pokemon) {
    gender.innerHTML = "";
    ulAbi.innerHTML = "";
    ulType.innerHTML = "";
    ulStat.innerHTML = "";
    detailName.innerHTML = "";
    detailHeight.innerHTML = "";
    detailWeight.innerHTML = "";
    detailInfo.innerHTML = "";
    detailCloseInfo.innerHTML = "";
    // detailStatsLeft.innerHTML = "";
    this.render(pokemon);
    this.fetchGender1(pokemon.name);
    // if(window.scrollY!=0) {
    //   setTimeout(function() {
    //     window.scrollTo(0,window.scrollY == 0);
    //   }, 5);
    // }
  },
  createGender(id) {
    let male = '<svg class="icon"><use xlink:href="#male" /></svg>'
    let female = '<svg class="icon"><use xlink:href="#female" /></svg>'
    let genderless = '<p>Unknown</p>';
    switch (id) {
      case 1:
        gender.innerHTML += male;
        break;
      case 2:
        gender.innerHTML += female;
        break;
      case 3:
        gender.innerHTML += genderless;
        break;
      default:
        break;
    }
  },
  createAbilities(ability, ul) {
    ability.forEach(element => {
      let abilityLi = document.createElement('li');
      abilityLi.innerText = element['ability']['name'];
      ul.append(abilityLi);
    });
    this.fetchAbilityEffect(ability[0].ability.url);
  },
  fetchAbilityEffect(url) {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        let effect = result.effect_entries[1]?.short_effect;
        this.createAbilityEffect(effect);
      })
  },
  createAbilityEffect(effect) {
    let pEffect = document.createElement('p');
    pEffect.innerHTML = effect;
    effectAbility.append(pEffect);
  },
  createStats(stat, ul) {
    let value = 15;
    stat.forEach(element => {
      let attribute = document.createElement('li');
      let ulBox = document.createElement('ul')
      let liBox = document.createElement('li');
      attribute.innerHTML = element['stat']['name'];
      // + " : " + element['base_stat']
      attribute.classList.add('stats__name');
      liBox.append(ulBox);
      for (let i = 1; i < value; i++) {
        let liNormal = document.createElement('li');

        ulBox.append(liNormal);
      }
      let liFirst = ulBox.firstChild;
      liFirst.setAttribute('data-value', Math.ceil(element['base_stat'] / 15));
      let dataValue = liFirst.getAttribute('data-value');
      ulBox.setAttribute('title', element['base_stat']);

      let valueTop = (100 / 15) * (15 - dataValue) + '%';
      liFirst.style.top = valueTop;
      // liFirst.setAttribute('style' , 'top' );
      liFirst.classList.add('first');

      liBox.append(attribute);

      ul.append(liBox);
      ul.classList.add('stats__parrent');
    })
  },
  render(pokemon) {

    let img = document.getElementsByClassName('detail-img__poke')[0];

    detailCloseInfo.addEventListener('click', function (e) {
      effectAbility.style.visibility = 'hidden';
    })
    detailInfo.addEventListener('click', function (e) {
      effectAbility.style.visibility = 'visible';
    })
    img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`);

    createTypes(pokemon.types, ulType);
    this.createAbilities(pokemon.abilities, ulAbi);
    this.createStats(pokemon.stats, ulStat);

    detailName.append(pokemon.name);
    detailAbility.append(ulAbi);
    detailType.append(ulType);
    detailHeight.append(pokemon.height);
    detailWeight.append(pokemon.weight);
    detailStatsLeft.append(ulStat);
  }
};


const poke = new Detail();
poke.load();














