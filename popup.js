document.addEventListener("DOMContentLoaded", function () {
    const quoteElement = document.getElementById("quote");
    const refreshButton = document.getElementById("refresh");
  
    const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "It does not matter how slowly you go as long as you do not stop. - Confucius",
      "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
      "The harder you work for something, the greater you'll feel when you achieve it. - Unknown"
    ];
  
    // Display a random quote
    function displayRandomQuote() {
      if (quoteElement) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteElement.textContent = randomQuote;
      }
    }
  
    // Refresh button click event
    if (refreshButton) {
      refreshButton.addEventListener("click", displayRandomQuote);
    }
  
    // Display initial random quote
    displayRandomQuote();
  });
  