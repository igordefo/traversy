// Examine the document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.dir(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// Selectors
// Get element by ID
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// // log content if element display none
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px black'

// Get element by class name
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4'
// }

// // Get element gy tag name
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = 'red'
// }

// Query selector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelectorAll('input');
// input.value = 'Hello World';

// for(var i = 0; i < input.length; i++) {
//   input[i].value = 'Hello World';
//  }

//  var submit = document.querySelector('input[type="submit"]');
//  submit.value = 'send';

//  var item = document.querySelector('.list-group-item');
//  item.style.color = 'red';

//  var lastItem = document.querySelector('.list-group-item:last-child');
//  lastItem.style.color = 'blue';

 
//  var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//  secondItem.style.color = 'coral';

 // Query selector all
//  var titles = document.querySelectorAll('.title');
//  console.log(titles);

//  titles[0].textContent = 'Hello';

//  var odd = document.querySelectorAll('li:nth-child(odd)');
//  var even = document.querySelectorAll('li:nth-child(even)');

//  for(var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//  }


//  for(var i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = '#ccc';
//  }
