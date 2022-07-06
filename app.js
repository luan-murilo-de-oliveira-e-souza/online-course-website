var Img_Courses, quantity_Cart, name_Courses, price_Courses, items_Cart, description_Courses, sumTotal_Courses;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


Img_Courses = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjggYDQ6RktH1Xf7P4VIiee4delu3s2rNQPg&usqp=CAU', 'https://www.filepicker.io/api/file/KJ1pPwQ2yAFPiEa37OcQ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOpLh_r7KoY9QuUptkYVLDJJgXwjOQeZDMw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1hYCsuweAYzEw2vs_lMBrZm_n7rl7HtmEQ&usqp=CAU'];
name_Courses = ['Microsoft Excel - Excel from Beginner to Advanced', 'Microsoft Word - Beginner to Advanced', 'HTML for beginners', 'Javascript - from beginner to advanced'];
price_Courses = [15, 10, 35, 55];
description_Courses = ['Complete excel course with more than 200 lessons. You will reach an advanced level.', 'You will learn how to format documents.', 'Course with real projects. More than 50 lessons.', 'Course with real projects.'];
quantity_Cart = 0;
items_Cart = [];
sumTotal_Courses = [];


document.getElementById('previousProduct').addEventListener('click', (event) => {
  let element_comments = document.getElementById('comments');
  element_comments.replaceChildren();
  let element_imgCourse = document.getElementById('imgCourse');
  element_imgCourse.replaceChildren();
  Img_Courses.unshift(Img_Courses.pop());
  element_imgCourse.setAttribute("src", Img_Courses[0]);
  let element_nameCourse = document.getElementById('nameCourse');
  element_nameCourse.replaceChildren();
  name_Courses.unshift(name_Courses.pop());
  element_nameCourse.innerText = name_Courses[0];
  let element_priceCourse = document.getElementById('priceCourse');
  element_priceCourse.replaceChildren();
  price_Courses.unshift(price_Courses.pop());
  element_priceCourse.innerText = price_Courses[0];
  let element_descriptionCourse = document.getElementById('descriptionCourse');
  element_descriptionCourse.replaceChildren();
  description_Courses.unshift(description_Courses.pop());
  element_descriptionCourse.innerText = description_Courses[0];

});

document.getElementById('nextProduct').addEventListener('click', (event) => {
  let element_comments2 = document.getElementById('comments');
  element_comments2.replaceChildren();
  let element_imgCourse2 = document.getElementById('imgCourse');
  element_imgCourse2.replaceChildren();
  Img_Courses.push(Img_Courses.shift());
  element_imgCourse2.setAttribute("src", Img_Courses[0]);
  let element_nameCourse2 = document.getElementById('nameCourse');
  element_nameCourse2.replaceChildren();
  name_Courses.push(name_Courses.shift());
  element_nameCourse2.innerText = name_Courses[0];
  let element_priceCourse2 = document.getElementById('priceCourse');
  element_priceCourse2.replaceChildren();
  price_Courses.push(price_Courses.shift());
  element_priceCourse2.innerText = price_Courses[0];
  let element_descriptionCourse2 = document.getElementById('descriptionCourse');
  element_descriptionCourse2.replaceChildren();
  description_Courses.push(description_Courses.shift());
  element_descriptionCourse2.innerText = description_Courses[0];

});

document.getElementById('buyProduct').addEventListener('click', (event) => {
  quantity_Cart = (typeof quantity_Cart === 'number' ? quantity_Cart : 0) + 1;
  items_Cart.push(name_Courses[0]);
  sumTotal_Courses.push(price_Courses[0]);
  let element_numberCart = document.getElementById('numberCart');
  element_numberCart.innerText = quantity_Cart;

});

document.getElementById('img Cart').addEventListener('click', (event) => {
  let element_comments3 = document.getElementById('comments');
  element_comments3.replaceChildren();
  let element_products = document.getElementById('products');
  element_products.replaceChildren();
  let new_div = document.createElement('div');
  new_div.innerText = 'Courses you have selected to buy:';
  while (!!items_Cart.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    let new_li = document.createElement('li');
    new_li.innerText = items_Cart.shift();

    new_div.appendChild(new_li);
  }
  let new_div2 = document.createElement('div');
  new_div2.innerText = 'You need to pay: £';
  let new_span = document.createElement('span');
  new_span.innerText = sumTotal_Courses.reduce((a,b) => a+b, 0);

  new_div2.appendChild(new_span);

  new_div.appendChild(new_div2);

  element_products.appendChild(new_div);

});

document.getElementById('submitComment').addEventListener('click', (event) => {
  let element_comments4 = document.getElementById('comments');
  let new_div3 = document.createElement('div');
  new_div3.innerText = 'Name:';
  let new_span2 = document.createElement('span');
  new_span2.innerText = getNumberOrString(document.getElementById('nameCommentsCourse').value);

  new_div3.appendChild(new_span2);

  element_comments4.appendChild(new_div3);
  let new_div4 = document.createElement('div');
  let new_span3 = document.createElement('span');
  new_span3.innerText = getNumberOrString(document.getElementById('commentsCourse').value);

  new_div4.appendChild(new_span3);

  element_comments4.appendChild(new_div4);
  let new_div5 = document.createElement('div');
  let new_span4 = document.createElement('span');
  new_span4.innerText = '..............................';

  new_div5.appendChild(new_span4);

  element_comments4.appendChild(new_div5);

});