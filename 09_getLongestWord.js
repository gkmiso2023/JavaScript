//문자열을 입력받아 문자열에서 가장 긴 단어를 리턴
//단어는 공백 한 칸으로 구분
//가장 긴 단어가 2개 이상이면 첫번째로 등장하는 단어를 리턴
function getLongestWord(str) {
    let words = str.split(' ');
  
    let max = words[0];
    for (let word of words) {
      if (word.length > max.length) {
        max = word;
      }
    }
  
    return max;
  }