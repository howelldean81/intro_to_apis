console.log("Hello World!");
let url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

fetch(url)  // The fetch is a method available to us in the browser
            // and we supply at leasta url and it will kick off a request
            // a "GET" request to that url
    .then(res => res.json()) // .then() can be chained on a fetch to allow us
                             // to take the response and do something with it
    .then(json => { // In this case I have used the json data to display in the console
        console.log(json)
        console.log(json.title) // These logs are unique to the json that we got back
        console.log(json.locations) // and only work on this object structure
        getLocations(json.locations)
        console.log(json.director)
    })

/* 
BASIC fetch usage

fetch(<url>)
    .then(<cb to process the data>)
    .then(<cb to use the data>)    
*/

// We will come back to this
// let getLocations = async (locUrl) => {
//     fetch(locUrl)
//         .then(res => res.json())
//         .then(json => {
//             console.log(json[0]);
//         })
// }

const baseURL = "https://ghibliapi.herokuapp.com"

fetch(baseURL + "/films")
    .then(res => res.json())
    .then(json => {
        console.log(json);
        let myArr = []
        json.map.(film => {
            console.log(film.title);
            console.log(film.rt_score);
            return {
                title: film.title,
                rt_score: film.rt_score
            }
        }) 
    })



// We will come back to this
/*
let getLocations = (locUrl) => {
    fetch(locUrl)
        .then(res => res.json())
        .then(json => {
            console.log(json[0])
        })
}
*/
        

    // Try to use the json [] to create a new array of "film" obj that only have
        // a title and the rt_rating
        /* 
        [
            {title: "Something", rt_score: 83},
            {title: "Something", rt_score: 83},
            {title: "Something", rt_score: 83},
            {title: "Something", rt_score: 83},

        ] 
        */
        // console.log(myArr)
