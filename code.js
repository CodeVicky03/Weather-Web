// var a = new Promise(function(resolve,reject){
//     var x = 10
//     if(x==10){
//         resolve("Done")
//     }
//     else{
//         reject("Not Done")
//     }
// })

// a.then(
//     function(res){console.log(res)},
//     function(rej){console.log(rej)}
// )

const a = fetch('https://jsonplaceholder.typicode.com/todos/1')

a.then(
    function(res){
        var b = res.json()
        
        b.then(function(data){
            console.log(data)
        })
    },
    function(rej){
        console.log("Error")
    }
)