// importing substract function to use
const substract = require("./substract");

// invoking test method
// 1st argument would describe the testing [it'd display in terminal]
// 2nd argument is a function which would be executed
test('properly substract two numbers', ()=>{
    // expect the call of substract function with argument 1,2
    // would result in -1
    expect(substract(1,2)).toBe(-1);
})