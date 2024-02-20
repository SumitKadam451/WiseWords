document.addEventListener("DOMContentLoaded", function() {
  const apiKey = 'U4e/SVXVgiVfWIBmfFJHSg==cIwyUTZSOpU8SZvj'; 
  const category = 'life'; 
  const adviceContainer = document.getElementById('advice');
  
  function fetchQuote() {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      displayQuote(data[0]); // Display the first quote from the response
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }
  
  function displayQuote(quote) {
    adviceContainer.innerHTML = `<p>"${quote.quote}"</p><p>- ${quote.author}</p>`;
  }
  
  document.getElementById('closeBtn').addEventListener('click', () => {
    window.close();
  });
  
  document.getElementById('nextBtn').addEventListener('click', fetchQuote);
  
  // Initial fetch and display of quote
  fetchQuote();
});
