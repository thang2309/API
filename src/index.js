import { createTypes, checkType } from './modules/global.js';
// import './js/detail';
import './scss/main.scss';
import "./img/pokemon-go.png";

let show = document.getElementById('show-poke');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let sort = document.getElementById('sort');
let containerPoke = document.getElementById('container-poke');
let urlNext;
let global;
let _offsetRespon = localStorage.getItem('offsetRespon') != null ? localStorage.getItem('offsetRespon') : 0;
let arr;
let card = 'filter-value';
let input = document.getElementById("search");
// let _offset = 0;
// if (_offsetRespon != 0) {
//   offset = _offsetRespon;
// }  
// else {
//   offset = 0;
// }
$(function () {
  $('#aloha').load('./svg/sprite.svg');
})
const Main = function () {
  this.data = null;
  this.offset = 0;
  this.global = null;
  this.offsetRespon = _offsetRespon;
  // this._offsetRespon != 0 ? offset = this._offsetRespon : offset = 0;
  if (this.offsetRespon != 0) {
    this.offset = this.offsetRespon;
  }
  else {
    this.offset = 0;
  }
  this.id = 0;
  this.newOffset = parseInt(this.offset);
};


Main.prototype = {
  // ...Main.prototype,
  async load() {
    $('.container').css('min-height', '1000px');
    global = await this.fetchPokemon();
    arr = await this.getAllName();
    this.sortPoke(arr);
    this.prevPage();
    this.nextPage();
    this.redirect();
    this.searchPoke();
    
    setTimeout(() => {
      $('.paging__button').css('display', 'flex');
      show.style.visibility = 'hidden';
    }, 500);
  },
  fetchPokemon() {
    return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=20`)
      .then(response => response.json())
      .then(allpokemon => {
        urlNext = allpokemon.next;
        allpokemon.results.forEach(pokemon => {
          this.fetchPokemonData(pokemon);
        })
        return allpokemon.count;
      })
  },
  fetchPokemonData(pokemon, enter, all, searchValue) {
    let url = pokemon.url;
    fetch(url)
      .then(response => {
        if (response.status == 404) {
          console.log('404');
        }
        return response.json()
      })
      .then(allpokemon => {
        this.renderPokemon(allpokemon, enter, all, searchValue);
      })
      .catch((error) => {
        console.log('error', error);
      })
  },
  prevPage() {
    prev.addEventListener("click", () => {
      if (this.newOffset === undefined) {
        this.newOffset = 0;
      }
      this.newOffset >= 20 ? this.newOffset -= 20 : this.newOffset = global - 20;
      const containerPoke = document.getElementById('container-poke');
      containerPoke.innerHTML = "";
      this.fetchNextPokemon(this.newOffset);
    })
  },
  nextPage() {
    next.addEventListener('click', (e) => {
      if (this.newOffset === undefined) {
        this.newOffset = 0;
      }
      this.newOffset + 20 >= global ? this.newOffset = 0 : this.newOffset += 20;
      const containerPoke = document.getElementById('container-poke');
      containerPoke.innerHTML = "";
      this.fetchNextPokemon(this.newOffset);
    });
  },
  rerenderPoke(namePoke) {
    containerPoke.innerHTML = "";
    namePoke.forEach(element => {
      let card = document.createElement('div');
      let name = document.createElement('p');
      card.classList.add('card', 'col-md-3');
      name.append(element);
      card.append(name);
      containerPoke.append(card);
    })
  },
  sortPoke(allPoke) {
    let valuePoke = allPoke.results;
    let namePoke = valuePoke.map(function (item) {
      return item['name'];
    });
    let urlPoke = valuePoke.map(function (item) {
      return item['url'];
    });
    sort.addEventListener('change', function () {
      let value = this.value;
      switch (value) {
        case '1':
          break;
        case '2':
          break;
        case '3':
          namePoke.sort();
          // this.rerenderPoke(namePoke);
          Main.prototype.rerenderPoke(namePoke);
          break;
        case '4':
          namePoke.sort();
          namePoke.reverse();
          Main.prototype.rerenderPoke(namePoke);
          // this.rerenderPoke(namePoke);
          break;
        default:
          break;
      }
    })
  },
  getAllName() {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=1118&offset=0')
      .then(res => res.json())
      .then(results => results)
  },
  fetchNextPokemon(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
      .then(response => response.json())
      .then(allpokemon => {
        global = allpokemon.count;
        allpokemon.results.forEach(pokemon => {
          this.fetchPokemonData(pokemon);
        })
      })
  },
  renderPokemon(pokemonData, enter, all, searchValue) {
    if (enter === 13 && searchValue.length != "") {
      let require = pokemonData.name.toLowerCase().indexOf(searchValue) > -1;
      if (require === true) {
        // create card
        let card = document.createElement('div');
        card.classList.add('card', 'col-md-3');
        card.setAttribute('filter-value', `${pokemonData.name}`)
        // img
        let pokeImageContainer = document.createElement('div');
        let pokeImage = document.createElement('img');
        pokeImage.classList.add('img', 'card-img-top');
        pokeImage?.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png`);
        pokeImage.setAttribute('loading', 'lazy');
        pokeImageContainer?.appendChild(pokeImage);

        // name , numberId
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let linkName = document.createElement('a');
        linkName.setAttribute('href', './detail.html');
        linkName.setAttribute('id', pokemonData.id);
        linkName.classList.add('card__name');
        linkName.append(pokemonData.name);

        let number = document.createElement('p');
        number.innerHTML = `#${pokemonData.id}`;

        cardBody.append(linkName, number);

        // type
        let pokeBox = document.createElement('div');
        pokeBox.classList.add('poke-box');
        let pokeTypes = document.createElement('ul');
        let type = document.createElement('h6');
        type.innerHTML = 'Type';

        pokeTypes.append(type);
        createTypes(pokemonData.types, pokeTypes);
        pokeBox.append(pokeTypes);
        // result render
        card.append(pokeImageContainer, cardBody, pokeBox);
        containerPoke.append(card);
      }
    }
    else {
      // create card
      let card = document.createElement('div');
      card.classList.add('card', 'col-md-3');
      card.setAttribute('filter-value', `${pokemonData.name}`);
      // img
      let pokeImageContainer = document.createElement('div');
      let pokeImage = document.createElement('img');
      pokeImage.classList.add('img', 'card-img-top');
      pokeImage?.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png`);
      pokeImage.setAttribute('loading', 'lazy');
      pokeImageContainer?.appendChild(pokeImage);

      // name , numberId
      let cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      let linkName = document.createElement('a');
      linkName.setAttribute('href', './detail.html');
      linkName.setAttribute('id', pokemonData.id);
      linkName.classList.add('card__name');
      linkName.append(pokemonData.name);

      let number = document.createElement('p');
      number.innerHTML = `#${pokemonData.id}`;

      cardBody.append(linkName, number);

      // type
      let pokeBox = document.createElement('div');
      pokeBox.classList.add('poke-box');
      let pokeTypes = document.createElement('ul');
      let type = document.createElement('h6');
      type.innerHTML = 'Type';

      pokeTypes.append(type);
      createTypes(pokemonData.types, pokeTypes);
      pokeBox.append(pokeTypes);
      // result render
      card.append(pokeImageContainer, cardBody, pokeBox);
      containerPoke.appendChild(card);
    }
  },
  redirect() {
    const cardItem = $('#container-poke');
    cardItem.on('click', '.card__name', ({ target }) => {
      let id = target?.getAttribute('id');
      localStorage.setItem('url', `https://pokeapi.co/api/v2/pokemon/${id}/`);
      localStorage.setItem('offsetRequest', this.newOffset);
      localStorage.setItem('id', id);
    });
  },
  searchPoke() {
    input.addEventListener('keyup',  (e) => {
      // Main.prototype.searchPoke(e, this.value);
      if (e.keyCode === 13) {
        let containerPoke = document.getElementById('container-poke');
        let paging = document.getElementsByClassName('paging__button')[0];
        paging.style.display = 'none';
        containerPoke.innerHTML = "";
        let searchValue = e.target.value.toLowerCase();
        if (searchValue.length != "") {
          fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118')
            .then(res => res.json())
            .then(allpokemon => {
              allpokemon.results.forEach(pokemon => {
                this.fetchPokemonData(pokemon, 13, allpokemon, searchValue);
              })
            })
        }
        else {
          $('.paging__button').css('display', 'flex');
          fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
            .then(res => res.json())
            .then(allpokemon => {
              allpokemon.results.forEach(pokemon => {
                this.fetchPokemonData(pokemon, 13, allpokemon, searchValue);
              })
            })
        }
      }
    });

  },
};


// rederect value to detail page
let btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});


// Search live

// document.getElementById('search').onkeyup = function(){
//   let searchValue = this.value.toLowerCase();
//   $('#container-poke .card').filter(function(){
//     $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1);
//   })
// };


let poke = new Main();
poke.load({
  data: fetch('https://pokeapi.co/api/v2/pokemon/?limit=0&offset=0')
    .then(res => res.json())
    .then(results => results)
});