// importing sum function
const sum = require("./sum");

// testing the sum function
test('properly adds two numbers', ()=>{
    // expect the call of this function to be this result
    expect(sum(1,2)).toBe(3);
})