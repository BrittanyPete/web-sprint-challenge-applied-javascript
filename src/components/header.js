
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


const Header = (title, date, temp) => {
  const headerDiv = document.createElement('div');
  const titleHeader = document.createElement('h1');
  const dateSpan = document.createElement('span');
  const tempSpan = document.createElement('span');

  headerDiv.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  titleHeader.textContent = title;
  dateSpan.textContent = date;
  tempSpan.textContent = temp;

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleHeader);
  headerDiv.appendChild(tempSpan);

  return headerDiv;  
}


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  
const headerAppender = (selector) => {
  const headContainer = document.querySelector(selector);
  headContainer.appendChild(Header('Lambda Times', 'December 3, 2021', '32 °'));
  
}

export { Header, headerAppender }
