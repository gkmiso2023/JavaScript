//문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴
//단어는 공백 한 칸으로 구분
//연속된 공백은 없다고 가정
//빈 문자열을 입력받은 경우, 빈 문자열을 리턴
function firstCharacter(str) {
    if (str === '') {
        return '';
    }

    let words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i += 1) {
        result = result + words[i][0];
    }
    return result;
}