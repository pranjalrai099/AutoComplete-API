# AutoComplete
This is a React.js-based Autocomplete Search Application that allows users to search for suggestions from three different API versions (v1, v2, v3). The home page provides links to all three API versions, and each version has a search bar where users can enter queries to fetch suggestions.

Features

1. Autocomplete Search with live suggestions

2. Three API versions: /api/v1/autocomplete, /api/v2/autocomplete, /api/v3/autocomplete

3. Debounced API calls to optimize performance by npm lodash 

4. Search count & result count tracking

5. Responsive UI with a modern design
   
7. Rate limit of 1000ms

Search Page (For all versions)

1.Type a query in the search bar.

2.The app makes an API request to /api/{version}/autocomplete?query={input}.

3.Displays live suggestions in a dropdown list.

4.Tracks the number of searches and results found.

Dependencies

1.React.js – Frontend framework

2.Lodash – For debounce functionality

3.Tailwind CSS – For styling

4.Fetch API – For making API requests

Structure
root/

│── src/

│   │── components/

│   │   │── Autocomplete1.jsx  # Uses API v1

│   │   │── Autocomplete2.jsx  # Uses API v2

│   │   │── Autocomplete3.jsx  # Uses API v3

│   │── App.jsx  # Main application file with routing to each component

│── public/

│── package.json

│── README.md

"Clone this repository into your VS Code. Navigate to the client folder, then run the following commands:

npm install 

npm run dev. 

The application should work fine."
