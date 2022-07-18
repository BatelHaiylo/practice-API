// const basicAPI = `https://emojihub.herokuapp.com/api/random`
// let apikey = `apikey=YOUR_API_KEY`

// async function getData(api){
//     try{
//         return await fetch(api)
//         .then(res => res.json())
//         .then(res => res)
//     }
//     catch(err){alert(err)}
//     finally{}
// }


// async function printData(){
//     const data = await getData(`${basicAPI}`)
//     console.log(data)
//     for(key in data){
//         if(typeof(key) == "array"){
//             key.forEach(item => {
//                 document.body.innerHTML +=
//         `<div>${key} : ${item}</div>`
//             });
//         }
//         else{
//             document.body.innerHTML +=
//         `<div>${key} : ${data[key]}</div>`
//         }
//     }
// }
// printData()

// const basicAPI = `http://alpha-meme-maker.herokuapp.com/:page/`

// async function getData(api){
//     try{
//         return await fetch(api)
//         .then(res => res.json())
//         .then(res => res)
//     }
//     catch(err){alert(err)}
//     finally{}
// }
// getData(basicAPI)


// fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', 
// {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
// 		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// 	}
// })
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

async function getHotels(){
    const webcamstravelAPI = 'https://webcamstravel.p.rapidapi.com/webcams/list/nearby=%7Blat%7D,%7Blng%7D,%7Bradius%7D?lang=en&show=webcams%3Aimage%2Clocation'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
            'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com'
        }
    };
    
    await fetch(webcamstravelAPI, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


// function printHotels(){
//     const hotelsArr = getHotels()
// }




