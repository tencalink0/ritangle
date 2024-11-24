let terms = Array(10).fill(0);
let allowedDigits = [0,1,2,3,4,5,6,7,8,9];
let commonDiff = 0;

function popAt(array, index) {
    if (index < 0 || index >= array.length + 1) {
        throw new Error("Failed");
    }
    return array.splice(index, 1)[0];
}

function insertAt(array, index, item) {
    if (index < 0 || index > array.length) {
        throw new Error("Index out of bounds");
    }
    array.splice(index, 0, item);
}

function checkFirstTerms() {
    let num1 = (terms[0] * 10) + terms[1];
    let num2 = (terms[2] * 10) + terms[3];
    let num3 = (terms[4] * 10) + terms[5];
    if (num2 - num1 === num3 - num2) {
        if (num2 - num1 > 0) {
            commonDiff = num2 - num1;
            return true;
        }
    }
}

function findPossibilities() {
    let cleanedArray = allowedDigits.filter(item => item !== undefined);

    let num1 = (terms[0] * 10) + terms[1];
    let num2 = (terms[2] * 10) + terms[3];
    let num3 = (terms[4] * 10) + terms[5];
    let num4 = num3 + commonDiff;
    let num5 = num4 + commonDiff;
    
    let n4D = [...String(num4)].map(Number);
    let n5D = [...String(num5)].map(Number);
    let digits = n4D.concat(n5D);
    let hasNoDuplicates = new Set(digits).size === digits.length;

    /*
    console.log(cleanedArray);
    console.log(digits);
    console.log(terms);
    */
    if (hasNoDuplicates) {
        let success = true
        //console.log('yes');
        for (let i = 0; i < digits.length; i++) {
            if(!cleanedArray.includes(digits[i])) {
                success = false;
            };
        }
        if (success) {
            console.log('@@@@@@@@@@', num1+num2+num3+num4+num5);
        }
    }
    //console.log('-----------------')
}

function iterateAttempts() {
    for (let a = 0; a < 10; a++ ) {
        terms[5] = popAt(allowedDigits, 9 - a);
        for (let b = 0; b < 9; b++ ) {
            terms[4] = popAt(allowedDigits, 8 - b);
            for (let c = 0; c < 8; c++ ) {
                terms[3] = popAt(allowedDigits, 7 - c);
                for (let d = 0; d < 7; d++ ) {
                    terms[2] = popAt(allowedDigits, 6 - d);
                    for (let e = 0; e < 6; e++ ) {
                        terms[1] = popAt(allowedDigits, 5 - e);
                        for (let f = 0; f < 5; f++ ) {
                            terms[0] = popAt(allowedDigits, 4 - f);
                            let status = checkFirstTerms();
                            if (status === true) {
                                findPossibilities();
                            }
                            insertAt(allowedDigits, 4-f, terms[0]);
                        }
                        insertAt(allowedDigits, 5-e, terms[1]);
                    }
                    insertAt(allowedDigits, 6-d, terms[2]);
                }
                insertAt(allowedDigits, 7-c, terms[3]);
            }
            insertAt(allowedDigits, 8-b, terms[4]);
        }
        insertAt(allowedDigits, 9-a, terms[5]);
    }
}

iterateAttempts();