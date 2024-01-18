function receivesAFunction (callback) {
    callback();
}
function returnsANamedFunction () {
    function myFunction () {
}
    return myFunction;
}
function returnsAnAnonymousFunction () {
    return function () {
        
    }
}
