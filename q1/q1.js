let terms = Array(10).fill(0);
let allowedDigits = [0,1,2,3,4,5,6,7,8,9];

function popAt(array, index) {
    /*
    if (index < 0 || index >= array.length) {
        console.log(index, array.length)
        throw new Error("Failed");
    } */
    if (array.splice(index, 1)[0] === undefined) {
        //console.log(array[index], index, array.length);
    }
    return array.splice(index, 1);
}

function insertAt(array, index, item) {
    if (index < 0 || index > array.length) {
        if (index == array.length || index < array.length) {
            array.splice(index, 0, item);
            //console.log(array, index, array.length);
        }
    }
    console.log(index, array.length);
    array.splice(index, 0, item);
}

function checkFirstTerms() {
    let num1 = (terms[0] * 10) + terms[1];
    let num2 = (terms[2] * 10) + terms[3];
    let num3 = (terms[4] * 10) + terms[5];
    let num4 = (terms[6] * 10) + terms[7];
    let num5 = (terms[8] * 10) + terms[9];
    //console.log(terms);
    if (num2 - num1 === num3 - num2 && num3 - num2 === num4 - num3 && num4 - num3 === num5 - num4) {
        if (num2 - num1 > 0) {
            return true;
        }
    } else {
        if (num2 - num1 === num3 - num2) {
            if (num3 - num2 === num4 - num3) {
                if (num4 - num3 === num5 - num4) {
                    console.log('passed3');
                } else {
                    console.log('passed2');
                }
            } else {
                console.log('passed1');
            }
            return true;
        }
    } 
}

function findPossibilities() {
    /*
    console.log(allowedDigits);
    */
    console.log(terms); 
}

function iterateAttempts() {
    for (let a = 0; a < 10; a++ ) {
        terms[9] = popAt(allowedDigits, 9 - a);
        for (let b = 0; b < 9; b++ ) {
            terms[8] = popAt(allowedDigits, 8 - b);
            for (let c = 0; c < 8; c++ ) {
                terms[7] = popAt(allowedDigits, 7 - c);
                for (let d = 0; d < 7; d++ ) {
                    terms[6] = popAt(allowedDigits, 6 - d);
                    for (let e = 0; e < 6; e++ ) {
                        terms[5] = popAt(allowedDigits, 5 - e);
                        for (let f = 0; f < 5; f++ ) {
                            terms[4] = popAt(allowedDigits, 4 - f);
                            for (let g = 0; g < 4; g++ ) {
                                terms[3] = popAt(allowedDigits, 3 - g);
                                for (let h = 0; h < 3; h++ ) {
                                    terms[2] = popAt(allowedDigits, 2 - h);
                                    for (let i = 0; i < 2; i++ ) {
                                        terms[1] = popAt(allowedDigits, 1 - i);
                                        terms[0] = popAt(allowedDigits, i);
                                        let status = checkFirstTerms();
                                        if (status === true) {
                                            findPossibilities();
                                        }
                                        //console.log(terms[1], terms[0])
                                        insertAt(allowedDigits, 0, terms[0]);
                                        insertAt(allowedDigits, 1-i, terms[1]);
                                    }
                                    insertAt(allowedDigits, 2-h, terms[2]);
                                }
                                insertAt(allowedDigits, 3-g, terms[3]);
                            }
                            insertAt(allowedDigits, 4-f, terms[4]);
                        }
                        insertAt(allowedDigits, 5-e, terms[5]);
                    }
                    insertAt(allowedDigits, 6-d, terms[6]);
                }
                insertAt(allowedDigits, 7-c, terms[7]);
            }
            insertAt(allowedDigits, 8-b, terms[8]);
        }
        insertAt(allowedDigits, 9-a, terms[9]);
    }
}

iterateAttempts();