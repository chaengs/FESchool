function comma(text){
    text += ''
    if(text.length<=1) {
        return text
    }
    return text.slice(0,3)
}