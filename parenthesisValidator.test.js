const isValid = require("./parenthesisValidator");

test('validates {[()]}', ()=>{
    expect(isValid("{[()]}")).toBe(true);
})

test('validating characters inside parenthesis', ()=>{
    expect(isValid("{[(()]}")).toBeFalsy();
})