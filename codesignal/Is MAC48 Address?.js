function isMAC48Address(inputString) {
    if(inputString.length !== 17) return false;
    let regex = /([A-F0-9])+/g
    const found = inputString.match(regex);    
    let arr = inputString.split('-')    
    if(arr.length !== 6) return false;    
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], found[i])
        if (arr[i].length == 0 || arr[i].length > 2) return false;        
        if (arr[i] !== found[i]) {
            return false
        }
    }
    return true
}

