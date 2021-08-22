function solution(v) {
    var answer = [];

    let mapX = {}
    let mapY = {}
    for (let i = 0; i < v.length; i++) {
        if (v[i][0] in mapX) {
            mapX[v[i][0]] += 1
        } else {
            mapX[v[i][0]] = 1
        }
        if (v[i][1] in mapY) {
            mapY[v[i][1]] += 1
        } else {
            mapY[v[i][1]] = 1
        }
    }
    for (let key in mapX) {
        if (mapX[key] % 2 === 1) {
            answer.push(Number(key))
        }
    }
    for (let key in mapY) {
        if (mapY[key] % 2 === 1) {
            answer.push(Number(key))
        }
    }
    return answer;
}

// function solution(v) {
//     var answer = [
//     ];

//     let hash = {}
//     for (let i = 0; i < v.length; i++) {
//         if (v[i][0] in hash) {
//             hash[v[i][0]] +=1
//         } else {
//             hash[v[i][0]] = 1
//         }
//         if (v[i][1] in hash) {
//             hash[v[i][1]] +=1
//         } else {
//             hash[v[i][1]] = 1
//         }
//     }
//     for (let key in hash) {
//         if (hash[key] % 2 === 1) {
//             answer.push(Number(key))   
//         }
//     }
    
//     let a = v.filter((val) => val.toString() === answer.toString())
//     if (a.length > 0) {
//        [answer[0], answer[1]] = [answer[1], answer[0]];    
//     }
//     return answer; 
// }