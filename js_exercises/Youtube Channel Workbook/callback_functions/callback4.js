let myarr = [
    {
        num: 5,
        str: 'apple'
    },
    {
        num: 7,
        str: 'cabbage'
    },
    {
        num: 1,
        str:'ban'
    }
];

myarr.sort(function(val1,val2){
    if(val1.str > val2.str){
        return -1;
    }else{
        return 1;
    }
});

console.log(myarr);