const repeatString = function(text,number) {
    let answer='';
    if (number < 0) {
        return "ERROR";
    } else {
        for (i=1;i<=number;i++) {
            answer += text;
        }
        return answer;
    }
}

module.exports = repeatString
