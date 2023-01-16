//문자열을 입력받아 해당 문자열에 중복된 문자(letter)가 존재하는지 여부를 리턴
//boolean 타입을 리턴
//이중 반복문(double for loop)을 사용
//빈 문자열을 입력받은 경우에는 false을 리턴
function hasRepeatedCharacter(str) {
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return true;
        }
      }
    }
    return false;
  }