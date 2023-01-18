//두 단어를 입력받아 두 단어의 평균 길이를 내림하여 리턴
//평균 길이를 내림하여 리턴
function computeAverageLengthOfWords2(word1, word2) {
    let average = (word1.length + word2.length) / 2;
    return Math.floor(average);
  }