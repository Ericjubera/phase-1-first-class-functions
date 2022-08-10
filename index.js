function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
return function uska(){
    console.log("function");
}
};
function returnsAnAnonymousFunction(){
 return()=>confirm.log("this is an anoymous function")   

}