//차례대로 문자열 3개를 입력받아, 가장 짧은 문자열을 리턴
//동일한 길이의 문자열 중에서는 처음 입력받은 문자열을 리턴
function findShortestOfThreeWords(word1, word2, word3) {
    let shortestWord = word1;
  
    // 첫 번 째 글자가 2번째 글자보다 길 때
    if (word1.length > word2.length) {
      shortestWord = word2;
      // word 2 랑 word 3을 비교
      if (word2.length > word3.length) {
        shortestWord = word3;
      }
    } else {
      // word1 과 word3 을 비교
      if (word1.length > word3.length) {
        shortestWord = word3;
      }
    }
    return shortestWord;
  }
  