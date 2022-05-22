const counter = function () {
  document.getElementById("counter").innerHTML = store.counter;
};

const events = function () {
  document.getElementById("plus").addEventListener("click", function () {
    plus();
    counter();
  });
  document.getElementById("minus").addEventListener("click", function () {
    minus();
    counter();
  });
};

const store = {
  counter: 0,
};

const plus = function () {
  store.counter++;
};

const minus = function () {
  store.counter--;
};

const init = function () {
  events();
  counter();
};

init();
