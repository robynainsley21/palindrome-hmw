//Exercise 1
const isPalindrome = (str) => {
    const palindromeWord = str

    //getting the total length of the word
    const wordLength = palindromeWord.length

    /*
        using a loop for the string to divide its word length into 2
        if the first letter of the first half does not equal the last letter of the last half, 
            it is not a palindrome and will return false
    */
    for(let i = 0; i < wordLength / 2; i++){
        if(str[i] !== str[wordLength-1 -i]){
            alert(false)
            return
        }
    }
    alert(true)
}

isPalindrome(prompt('Type in a word'))

//Exercise 2
const recursive = (base, exponent) => {
    if(exponent === 0) return 1
    else {
        const result = base * recursive(base, exponent - 1)
        return result
    }
}

console.log(recursive(3, 5))

/*
- result meant to be base ** exponent
- do not make use of ** operator
*/