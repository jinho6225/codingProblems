function solution(v) {
    var answer = [
    ];

    let hash = {}
    for (let i = 0; i < v.length; i++) {
        if (v[i][0] in hash) {
            hash[v[i][0]] +=1
        } else {
            hash[v[i][0]] = 1
        }
        if (v[i][1] in hash) {
            hash[v[i][1]] +=1
        } else {
            hash[v[i][1]] = 1
        }
    }
    for (let key in hash) {
        if (hash[key] % 2 === 1) {
            answer.push(Number(key))   
        }
    }
    
    let a = v.filter((val) => val.toString() === answer.toString())
    if (a.length > 0) {
       [answer[0], answer[1]] = [answer[1], answer[0]];    
    }
    return answer; 
}