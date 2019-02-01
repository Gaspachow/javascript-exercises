const removeFromArray = function(array,toDelete1, toDelete2, toDelete3, toDelete4) {

    for (i=0;i<array.length;i++) {
        if (array[i] === toDelete1 || array[i] === toDelete2 || array[i] === toDelete3 || array[i] === toDelete4) {
            array.splice(i,1);
            i--;
        }
    }
    return array;
}

module.exports = removeFromArray
