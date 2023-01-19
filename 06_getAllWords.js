//문자열을 입력받아 문자열을 구성하는 각 단어를 요소로 갖는 배열을 리턴
//배열을 리턴
//반복문(for, while) 사용은 금지
//단어는 공백 한 칸으로 구분
//연속된 공백은 없다고 가정
function getAllWords(str) {
    if (str === '') {
      return [];
    }
  
    return str.split(' ');
  }