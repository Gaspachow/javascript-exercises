const reverseString = function(s) {
let string = s.split('');
let answer = '';

for (i=s.length-1;i>=0;i--) {
    answer +=string[i]; 
}

return answer;

}

module.exports = reverseString
