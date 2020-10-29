// ## Question 3:
// Create a function, called injectBooksToDOM, that:
//       - Takes 1 argument: an array of objects
//       - Loops over the array
//       - Display the content of each book along with the book image
//       - Returns true if it works, false if it doesn't

//       Target the '#root' element in 'index.html'.
//       Use the following object:
'use strict';
const books = [
  {
    bookName: 'The Nature of Software Development',
    author: 'Ron Jeffries',
    coverURL:
      'https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png',
  },
  {
    bookName: 'Clean Code',
    author: 'Robert Cecil Martin',
    coverURL: '',
  },
];

function injectBooksToDOM(arr) {
  const ulElement = document.createElement('ul');
  const looping = arr.forEach((book) => {
    const liElemnt = document.createElement('li');
    ulElement.appendChild(liElemnt);
    const pElement = document.createElement('p');
    pElement.innerText = `${book.bookName} \n by ${book.author}`;
    liElemnt.appendChild(pElement);
    const imgElement = document.createElement('img');
    imgElement.src = book.coverURL;
    liElemnt.appendChild(imgElement);

    if (book.coverURL == '') {
      return false;
    }
  });
  return ulElement;
}
let root = injectBooksToDOM(books);
document.querySelector('#root').appendChild(root);
