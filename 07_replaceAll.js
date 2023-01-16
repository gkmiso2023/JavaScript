//문자열과 두 개의 문자(from, to)를 입력받아, 문자열에 등장하는 특정 문자(from)가 다른 문자(to)로 바뀐 문자열을 리턴
//from.length는 1
function replaceAll(str, from, to) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if(str[i] === from) {
            result = result + to;
        }
        else {
            result = result + str[i];
        }
    }
    return result;
}