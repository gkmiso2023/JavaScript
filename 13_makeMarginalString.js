//문자열을 입력받아 해당 문자열을 처음부터 한 글자(letter)씩 다시 작성
//한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴
//이중 반복문(double for loop)을 사용
//str.slice, str.substr, str.substring 사용은 금지
//빈 문자열을 입력받은 경우에는 빈 문자열을 리턴
function makeMarginalString(str) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j <= i; j += 1) {
        result = result + str[j];
      }
    }
  
    return result;
  }