/*
Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]
*/
function spiralNumbers(n) {
    let answer = []
    for (let i = 0; i < n; i++) {
        answer.push([])
    }
    let xl=0,xr=n,yb=0,yt=n,count=1
    let i=0,j=1
    while(true) {
        while (i < xr) {
            answer[yb][i] = count
            count++
            i++
        }
        if (count > n*n) break;
        i--
        yb++
        while (j < yt) {
            answer[j][xr-1] = count
            count++
            j++
        }
        if (count > n*n) break;
        j--
        xr--
        while (i > xl) {
            i--
            answer[yt-1][i] = count
            count++
        }
        if (count > n*n) break;
        i++
        yt--
        while (j > yb) {
            j--
            answer[j][xl] = count
            count++
        }
        if (count > n*n) break;
        xl++
        j++
    }
    return answer
}