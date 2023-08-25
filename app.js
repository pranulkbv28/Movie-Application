let api = "https://www.omdbapi.com/?&apikey=b938e68c&t=avengers";

fetch(api).then((data)=>{
    // console.log(data);
    return data.json()
}).then((data)=>{
    console.log(data);
})