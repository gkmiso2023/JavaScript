//문자열과 문자를 입력받아 문자열에서 문자(letter)가 등장하는 횟수를 리턴
//string 타입의 문자열
//letter.length는 1
//number 타입을 리턴
//for문 사용
//빈 문자열을 입력받은 경우, 0을 리턴
function countCharacter(str, letter) {
    let Count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            Count = Count + 1;
        }
    }
    return Count;
}