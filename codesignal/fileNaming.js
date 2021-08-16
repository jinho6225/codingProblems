function fileNaming(names) {
    for(let i = 0; i < names.length - 1; i++) {
        let copiedArr = names.slice(i+1)
        let copiedArr2 = names.slice(0, i)
        let count = 1
        while (copiedArr.includes(names[i])) {
            if (copiedArr2.includes(`${names[i]}(${count})`)) {
              count++
              continue;
            }
            let idx = copiedArr.indexOf(names[i])
            let copiedArr3 = copiedArr.slice(0, idx)
            if (copiedArr3.includes(`${names[i]}(${count})`)) {
              count++
              continue;
            }
            copiedArr[idx] = `${names[i]}(${count})`
            names[idx+i+1] = `${names[i]}(${count})`
            count++
        }
    }
    return names
}
