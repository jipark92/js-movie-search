const searchBox = document.querySelector('.search-box')
const searchBtn = document.querySelector('.search-btn')
const contentContainer = document.querySelector('.content-container')
const searchResult = document.querySelector('.result-container')

let movieArrays = []

const getData = (movie) => {
    fetchJsonp(`https://www.omdbapi.com/?s=${movie}&apikey=ba72029b`,{mode: 'cors'})
    .then(res=>res.json())
    .then(data=>{
        movieArrays = data.Search
        renderMovies()
    })
    .catch(()=>{
        alert('no movie found')
    })
}

const searchMovie = () => {
    searchBtn.addEventListener('click',()=>{
        if(searchBox.value === "" ){
            alert('type a movie name!')
            return
        }
        let movies = searchBox.value
        getData(movies)
    })
}
searchMovie()

const renderMovies = () =>{
    let render = movieArrays.map(movieArr=>{
        return (
            `
            <div class="movie-info-container">
                <img src=${movieArr.Poster}/>
                <h2>${movieArr.Title}<h2>
                <h3>${movieArr.Year}<h3>
            </div>
            `
        )
    }).join('')

    let resultText = `<h2>${movieArrays.length} results for "${searchBox.value}"</h2>`

    contentContainer.innerHTML = render
    searchResult.innerHTML = resultText

    searchBox.value = ""
}