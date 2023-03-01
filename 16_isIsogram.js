//문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.
//빈 문자열을 입력받은 경우, true를 리턴
//대소문자는 구별하지 않습니다.
function isIsogram(str) {
    if (str.length === 0) {
        return true;
    }

    let cache = {};
    let strLowered = str.toLowerCase();

    for (let i = 0; i < strLowered.length; i++) {
        if (cache[strLowered[i]]) {
            return false;
        }
        cache[strLowered[i]] = true;
    }

    return true;
}