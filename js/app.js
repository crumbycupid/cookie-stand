'use strict';

//window into dom
let seattleList = document.getElementById('seattleList');

console.log(seattleList);

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m', '11 a.m', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  cookiesSoldEachHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
  },
  calcHourlySales: function () {

    for (let i = 0; i < hours.length; i++) {
      //generate a random number for each hour the store is open
      let randNum = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      //add that generated number into the cookiesSoldEachHourArray array
      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  renderList: function () {
    this.calcHourlySales();
    for (let i = 0; i < hours.length; i++) {
      let listItemSea = document.createElement('li');
      listItemSea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      seattleList.appendChild(listItemSea);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total ${this.dailyTotal}`;
    seattleList.appendChild(totalLi);
  }
};
seattle.renderList();
seattle.calcHourlySales();
console.log(seattle);
console.log(seattle.getRandomCustomers());

let tokyoList = document.getElementById('tokyoList');

console.log(tokyoList);

let tokyo = {
  name: 'tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0,
  cookiesSoldEachHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
  },
  calcHourlySales: function () {

    for (let i = 0; i < hours.length; i++) {
      //generate a random number for each hour the store is open
      let randNum = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      //add that generated number into the cookiesSoldEachHourArray array
      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  renderList: function () {
    this.calcHourlySales();
    for (let i = 0; i < hours.length; i++) {
      let listItemTokyo = document.createElement('li');
      listItemTokyo.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      tokyoList.appendChild(listItemTokyo);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total ${this.dailyTotal}`;
    tokyoList.appendChild(totalLi);
  }
};
tokyo.renderList();
tokyo.calcHourlySales();
console.log(tokyo);
console.log(tokyo.getRandomCustomers());

let dubaiList = document.getElementById('dubaiList');

console.log(dubaiList);

let dubai = {
  name: 'dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0,
  cookiesSoldEachHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
  },
  calcHourlySales: function () {

    for (let i = 0; i < hours.length; i++) {
      //generate a random number for each hour the store is open
      let randNum = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      //add that generated number into the cookiesSoldEachHourArray array
      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
      this.dailyTotal += cookiesSoldThisHour;
    }
  },

  renderList: function () {
    this.calcHourlySales();
    for (let i = 0; i < hours.length; i++) {
      let listItemDubai = document.createElement('li');
      listItemDubai.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      dubaiList.appendChild(listItemDubai);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total ${this.dailyTotal}`;
    dubaiList.appendChild(totalLi);
  }
};
dubai.renderList();
dubai.calcHourlySales();
console.log(dubai);
console.log(dubai.getRandomCustomers());

let limaList = document.getElementById('limaList');

console.log(limaList);

let lima = {
  name: 'lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  cookiesSoldEachHourArray: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
  },
  calcHourlySales: function () {

    for (let i = 0; i < hours.length; i++) {
      //generate a random number for each hour the store is open
      let randNum = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(this.avg * randNum);
      //add that generated number into the cookiesSoldEachHourArray array
      this.cookiesSoldEachHourArray.push(cookiesSoldThisHour);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  renderList: function () {
    this.calcHourlySales();
    for (let i = 0; i < hours.length; i++) {
      let listItemSea = document.createElement('li');
      listItemSea.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      seattleList.appendChild(listItemSea);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total ${this.dailyTotal}`;
    seattleList.appendChild(totalLi);
  }
};
lima.renderList();
lima.calcHourlySales();
console.log(dubai);
console.log(dubai.getRandomCustomers());
