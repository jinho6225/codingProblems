function sumUpNumbers(inputString) {
    let regex = /[0-9]+/g
    let purchaseItemsArr = inputString.match(regex)
    if (!purchaseItemsArr) return 0
    return purchaseItemsArr.reduce((prev, cur) => prev + Number(cur), 0)
}
