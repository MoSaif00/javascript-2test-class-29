// ## Question 3:
// Create a function, called injectBooksToDOM, that:
//       - Takes 1 argument: an array of objects
//       - Loops over the array
//       - Display the content of each book along with the book image
//       - Returns true if it works, false if it doesn't
  
//       Target the '#root' element in 'index.html'.
//       Use the following object: 
 

const books = [
      {
            bookName: "The Nature of Software Development",
            author: "Ron Jeffries",
            coverURL:"https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
      },
      {
            bookName: "Clean Code",
            author: "Robert Cecil Martin",
            coverURL:''
      }
];
function injectBooksToDOM(arg){
      

      books.forEach((book) => {
            let bookInfo=  document.getElementById('root');

            let bookName= books.bookName;
            let bookAuthor = books.author;
            let bookCover = books.coverURL;
       
      }
      )
        
}
