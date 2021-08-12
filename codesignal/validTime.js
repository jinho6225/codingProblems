function validTime(time) {
    let timeArr = time.split(':')
    const hr = Number(timeArr[0])
    const min = Number(timeArr[1])
    return hr < 24 && hr >= 0 && min >= 0 && min < 60
}
