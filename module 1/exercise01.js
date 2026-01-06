// A. console log the content of the list items in seperate lines       

let listElements = document.querySelectorAll('li');
for (let item of listElements) {
    console.log(item.innerText);
};

// B. console log the first word of the second paragraph

let paragraphs = document.querySelectorAll('p');
let secondParagraph = paragraphs[1];
let secondParagraphText = secondParagraph.innerText;
let firstWordOfSecondParagraphText = secondParagraphText.split(' ')[0];
console.log(firstWordOfSecondParagraphText);

// C. console log the number of paragraphs in the document

console.log(paragraphs.length);