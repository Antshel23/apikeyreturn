require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

async function getImage(query) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`)
    const data = await response.json()
    const gifUrl = data.data.length > 0 ? data.data[0].images.original.url : null
    console.log(gifUrl)
    return gifUrl
}
getImage('cat')