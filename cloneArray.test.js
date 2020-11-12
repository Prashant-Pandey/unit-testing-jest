// importing clone function to use
const cloneArray = require("./cloneArray");

// testing value copy
test('properly clones array: matching values', ()=>{
    const arr = [1,2,3]
    expect(cloneArray(arr)).toEqual(arr);
})

// testing reference 
test('properly clones array: matching reference', ()=>{
    const arr = [1,2,3]
    expect(cloneArray(arr)).not.toBe(arr);
})