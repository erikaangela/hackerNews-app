# The Hacker News App

A mockup of [HackerNews.com](https://thehackernews.com/) using the [News API](https://newsapi.org/). Includes a main news feed featuring top headlines for "technology", a "Popular This Week" section, and a search functionality.

### Project Goals

Apply React and Redux. Making GET requests to the News API to display within app.

### How the app works

Upon the initial load, a main news feed and popular news sidebar is shown. Each article features the title, date, author, source, and description - all deriving from the API; clicking on any article always opens the original article in a new tab. 

Clicking the "Search" button will take you to another page that features an input with a default search term of "programming." Type in any term(s) and the feed will update to show the first 20 results using the News API's "everything" endpoint.

Navigate back to the main page by clicking the "Home" button or the Hacker News logo.

### Technologies Used

* JavaScript
* HTML/CSS
* React JS
* Redux
* APIs

### Remaining Backlog Items

* ~~Adjust for mobile responsiveness.~~
* Add pagination.

## Quick Start

* Clone the app onto your local machine and open it.
* ````npm install```` within the cloned app.
* ````npm start```` after previous command done. It will open in localhost:3000.
