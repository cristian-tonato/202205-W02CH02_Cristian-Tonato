export function arrayLenght(array){
    return array.lenght
};
export function arrayPush(array){
    array[array.lenght]= item;
    return array.lenght
}
export function pop(array) {
    let item = array[array.length - 1];
    array.length = array.length - 1;
    return item;
}
