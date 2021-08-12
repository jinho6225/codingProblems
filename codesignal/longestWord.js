function longestWord(text) {

    return text.match(/[A-Za-z]+/g).sort((a,b)=>{return b.length > a.length})[0];


    // let filteredTextArr = []
    // let filteredWord = ''
    // for (let i = 0; i < text.length; i++) {
    //     console.log(filteredWord)
    //     if (text[i].charCodeAt() > 64 && text[i].charCodeAt() < 90 || text[i].charCodeAt() > 96 && text[i].charCodeAt() < 123) {
    //         filteredWord += text[i]
    //     } else if (text[i].charCodeAt() === 32) { 
    //         filteredTextArr.push(filteredWord)
    //         filteredWord = ''
    //     }   else {
    //         filteredTextArr.push(filteredWord)
    //         filteredWord = ''
    //     }
    // }
    // if (filteredWord !== '') filteredTextArr.push(filteredWord)
    // return filteredTextArr.sort((a,b) => b.length - a.length)[0]
}

//65 89
//97 122