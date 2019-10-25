import data from './assets/data/coffees.json';
import './style.css';


const init = () => {
  generateCoffees(data);
  getOrders(orders);
  // generateOrders(orders);
};

const generateCoffees = data => {
  console.log(data);
  const $coffees = document.querySelector(`.prices__list`);
  data.coffees.forEach(coffee => {
    const $coffee = generateCoffee(coffee);
    $coffees.appendChild($coffee);
  });
};



// const generateOrders = orders => {
//   const $orders = document.querySelector(`orders`);
//   const $order = generateOrder(order);
//   $orders.appendChild($order);

// };

// const generateOrder = order => {

// };

const generateCoffee = coffee => {
  //li maken

  const $li = document.createElement(`li`);
  $li.classList.add(`price`);

  //a maken
  const $a = document.createElement(`a`);
  $a.classList.add(`price__button`);
  $li.appendChild($a);

  //span maken
  const $wrapper = document.createElement(`span`);
  $wrapper.classList.add(`price__button__wrapper`);
  $a.appendChild($wrapper);

  //spans erin maken
  const $span1 = document.createElement(`span`);
  $span1.classList.add(`price__button__name`);
  $wrapper.appendChild($span1);
  $span1.textContent = coffee.name;
  $span1.dataset.id = coffee.id;

  const $span2 = document.createElement(`span`);
  $span2.classList.add(`price__button__amount`);
  $wrapper.appendChild($span2);
  $span2.textContent = coffee.prices.medium;

  //price span
  const $span3 = document.createElement(`span`);
  $span3.classList.add(`price__button__plus`);
  $a.appendChild($span3);
  $span3.textContent = '+';

  if (coffee.plantbased === false) {
    $li.style.display = 'none';
  }

  return $li;

};

const getOrders = orders => {
  const plus = document.querySelector(`price__button__plus`);
  if

};

init();


