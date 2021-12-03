import axios from 'axios';
 // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const Card = (article) => {
  const cardDiv = document.createElement('div');
  const headline = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const authorName = document.createElement('span');

  cardDiv.classList.add('card');
  headline.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainer.classList.add('img-container');
  
  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  cardDiv.appendChild(headline);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  authorDiv.appendChild(authorName);
  imgContainer.appendChild(authorPhoto);

  cardDiv.addEventListener('click', event => {
    console.log(`${article.headline}`)
  })
    
 return cardDiv;
}



  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //




const cardAppender = (selector) => {

  axios.get(`http://localhost:5000/api/articles`)
  .then(resp => {
    const articleCard = document.querySelector(selector);
    const articleList = resp.data.articles;
    const articleListArray = Object.keys(articleList);
    const articleListValues = Object.values(articleList);

    for (let i = 0; i < articleListValues.length; i++) {
      const innerArray = articleListValues[i].length;
      for (let j = 0; j < innerArray; j++) {
        articleCard.appendChild(Card(articleListValues[i][j]));
      }
    } 
  }).catch(error => {
    console.log(error)
  })
}

export { Card, cardAppender }

