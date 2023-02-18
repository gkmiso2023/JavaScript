//문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴
//단어는 공백으로 구분
//연속된 공백이 존재할 수 있습니다.
//빈 문자열을 입력받은 경우, 빈 문자열을 리턴
function letterCapitalize(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
    }

    str = words.join(' ');
    return str;
}