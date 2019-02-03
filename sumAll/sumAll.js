const sumAll = function(num1,num2) {
    let answer=0;
    let start, finish;
    if (num1 < 0 || num2 < 0 || !(typeof num1 === 'number') || !(typeof num2 === 'number')) {
        answer='ERROR'
    } else {
        if (num1 < num2) {
            start=num1;
            finish=num2;
        } else {
            start=num2;
            finish=num1;
        }

        for (i=start; i <= finish; i++) {
            answer += i;
        }
    }
    return answer;
}

module.exports = sumAll
