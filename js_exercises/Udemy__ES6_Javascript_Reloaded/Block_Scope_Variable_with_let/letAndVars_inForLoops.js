var VarFuncs = [];
var LetFuncs = [];

for(var i = 0; i<5; i++){
    VarFuncs.push(function(){console.log(i)});
}

VarFuncs[0]();
VarFuncs[1]();
VarFuncs[2]();
VarFuncs[3]();
VarFuncs[4]();

for(let j = 0; j<5; j++){
    LetFuncs.push(function(){console.log(j)});
}

LetFuncs[0]();
LetFuncs[1]();
LetFuncs[2]();
LetFuncs[3]();
LetFuncs[4]();

// on using vars in for loop, the i in closure to that function takes the value of last iteration
// where as on using let in for loop, the i in the closure to that function takes the value of the current interation