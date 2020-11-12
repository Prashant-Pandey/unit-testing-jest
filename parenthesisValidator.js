/**
 * @param {string} s
 * @return {boolean}
 */

 // program which validates parenthesises
var isValid = function(s) {
    let map =  {'(':')', '{':'}', '[':']'}, backtrack = [];
    for (let i = 0; i < s.length; i++) {
        if(map[backtrack[backtrack.length-1]]===s[i]){
            backtrack.pop();
        }else{
            backtrack.push(s[i]);
        }
    }
    return backtrack.length==0;
};

module.exports = isValid;