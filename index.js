const searchBox = document.querySelector('.search-box')
const searchBtn = document.querySelector('.search-btn')
const contentContainer = document.querySelector('.content-container')

let movieArrays = []

const getData = (movie) => {
    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=ba72029b`)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data.Search)
        movieArrays = data.Search
        // console.log(movieArrays)
    })
}

const searchMovie = () => {
    searchBtn.addEventListener('click',()=>{
        let movies = searchBox.value
        getData(movies)
        renderMovies()
    })
}
searchMovie()

const renderMovies = () =>{
    let render = movieArrays.map((movieArr,i)=>{
        console.log(movieArr)
        return (
            `<li>${movieArr.Title}</li>`
        )
    }).join('')
    contentContainer.innerHTML = render
}