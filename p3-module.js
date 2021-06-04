// 

let coins= [ 
    { 
        denom: 25,
        count: 5
    },
    {
        denom: 10,
        count: 3
    },
    {
        denom: 5,
        count: 4
    }
     ];

const values = [1, 5, 10, 25, 50, 100];
const validDenomination = (coin) => values.indexOf(coin) !== -1;


//console.log(validDenomination(50))
//console.log(validDenomination(76))

function valueFromCoinObject(obj) {
    const { denom = 0, count = 0 } = obj;
    return denom * count;
};

// console.log(valueFromCoinObject({denom: 25, count: 3}))


function valueFromArray(arr) {
    const reducer =  (accumulator, total) => { return accumulator + valueFromCoinObject(total)};
    return arr.reduce(reducer, 0);
};


function coinCount(coinage){
    return valueFromArray([coinage]);
};

module.exports = { coinCount };

console.log("{}", coinCount({denom: 5, count: 3}));
//console.log("{}s", coinCount([{denom: 5, count: 3},{denom: 10, count: 2}]));
// const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
// console.log("...[{}]", coinCount(...coins)); 
