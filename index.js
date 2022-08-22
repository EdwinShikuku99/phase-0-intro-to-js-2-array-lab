const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const new_cats = [...cats];
    new_cats.push(name);
    return new_cats;
}
function prependCat(name){
    const new_cats = [...cats];
    new_cats.unshift(name);
    return new_cats;
}
function removeLastCat(){
    const new_cats = [...cats];
    new_cats.pop();
    return new_cats;
}
function removeFirstCat(){
    const new_cats = [...cats];
    new_cats.shift();
    return new_cats;
} 
