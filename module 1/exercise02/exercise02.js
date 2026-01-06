// comsole log the second and the fourth list item in the second section

// A. youre allowed to use the class .js-second-section

const selectedListItems = 
    document.querySelectorAll('.js-second-section > .js-item-list > li:nth-child(2n)');
for (let item of selectedListItems) {
    console.log(item.innerText);
}


// B. youre not allowed to use the class .js-second-section, but can use the class .js-second-section-title

const selectedListItemsB = 
    document.querySelectorAll('.js-second-section-title + .js-item-list > li:nth-child(2n)');  
for (let item of selectedListItemsB) {
    console.log(item.innerText);
}   
