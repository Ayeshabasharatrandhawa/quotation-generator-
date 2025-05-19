const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

async function fetchQuote() {
  try {
    quoteElement.textContent = "Loading quote...";
    authorElement.textContent = "";

    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) throw new Error('Failed to fetch quote');

    const data = await response.json();

    quoteElement.textContent = `"${data.content}"`;
    authorElement.textContent = `- ${data.author}`;
  } catch (error) {
    quoteElement.textContent = "Oops, something went wrong!";
    authorElement.textContent = "";
    console.error(error);
  }
}

// Load initial quote
fetchQuote();

// Fetch new quote on button click
newQuoteBtn.addEventListener('click', fetchQuote);
