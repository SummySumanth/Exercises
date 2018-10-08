let x = function(){
    console.log(v)
    if(true){
        var v = 2;
        let l = 1;
    }
    console.log(v);
    // console.log(l);
}

x();