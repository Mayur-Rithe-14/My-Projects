# Fun Generator App

A simple and interactive web app that generates fun content like **cat facts, dog images, jokes, and advice** using public APIs.

---

## Features

- Get random **cat facts**
- Fetch random **dog images**
- Generate **jokes**
- Get useful **advice**
- Fast and responsive UI
- Dynamic content using **Axios API calls**

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Axios (for API requests)**

---

## Project Structure

```
Fun-Generator-App/
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## Preview

- Click buttons to generate different types of content
- Output text appears below
- Dog images are displayed dynamically

---

## APIs Used

- Cat Facts API → https://catfact.ninja/fact
- Dog Images API → https://dog.ceo/api/breeds/image/random
- Joke API → https://official-joke-api.appspot.com/random_joke
- Advice API → https://api.adviceslip.com/advice

---

## How It Works

- Each button triggers an **async function**
- Axios fetches data from APIs
- UI updates dynamically using DOM manipulation
- `resetUI()` clears previous data before loading new content

---

## Error Handling

- Displays user-friendly error messages if API fails
- Uses `try...catch` for safe API calls

---

## Author

**Mayur Rithe**

---

## Support

If you like this project, give it a ⭐ on GitHub!

---
