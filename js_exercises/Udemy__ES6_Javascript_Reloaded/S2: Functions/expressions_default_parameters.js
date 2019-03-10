function getDefaultHeight (height){
    return height*10;
}

function foo(height = getDefaultHeight(2),color = 'red', link = 'google.com'){
    console.log('height:', height, 'color :', color, 'link:', link);
}

foo();