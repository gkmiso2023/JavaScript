//두 개의 문자열을 입력받아 대소문자를 구분하지 않고(case insensitive) 서로 같은지 여부를 리턴
function compareOnlyAlphabet(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
  }