let services = [
    {name:'a', activated:false},
    {name:'b', activated:false},
    {name:'c', activated:false},
    {name:'d', activated:true},
]

let activated = services.find(service => service.activated);

console.log(activated);