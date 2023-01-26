//문자열을 입력받아 문자열을 구성하는 각 문자(letter)를 키로 갖는 객체를 리턴
//각 키의 값은 해당 문자가 문자열에서 등장하는 횟수를 의미하는 number 타입의 값
//빈 문자열을 입력받은 경우, 빈 객체를 리턴
function countAllCharacters(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]] === undefined) {
        obj[str[i]] = 0;
      }
      obj[str[i]]++;
    }
    return obj;
}