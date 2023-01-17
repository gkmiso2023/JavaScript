//점수를 입력받아 점수에 해당하는 등급을 리턴
//만약 주어진 점수가 100을 초과하거나 0 미만인 경우, 문자열 'INVALID SCORE'를 리턴
function convertScoreToGradeWithPlusAndMinus(score) {
    if (score > 100 || score < 0){ //점수가 100을 초과하거나 0 미만인 경우
      return 'INVALID SCORE'} //문자열 'INVALID SCORE'를 리턴
    if (score === 100) {
      return 'A+'
    } else if (score >= 98 && score < 100){ //각 등급의 최저 점수보다 8점 이상인 경우, 등급과 함께 '+'를 리턴
      return 'A+'
    } else if (score >= 94 && score < 98) { //단, 93점의 경우에는 A를 리턴
      return 'A'
    } else if (score >= 90 && score < 94) { //각 등급의 최고 점수보다 7점 이하인 경우(93점 이하), 등급과 함께 '-'를 리턴
      return 'A-'
    }  else if (score >= 88 && score < 90) {
      return 'B+'
    }  else if (score >= 84 && score < 88) {
      return 'B'
    }  else if (score >= 80 && score < 84) {
      return 'B-'
    }  else if (score >= 78 && score < 80) {
      return 'C+'
    }  else if (score >= 74 && score < 78) {
      return 'C'
    }  else if (score >= 70 && score < 74) {
      return 'C-'
    }  else if (score >= 68 && score < 70) {
      return 'D+'
    }  else if (score >= 64 && score < 68) {
      return 'D'
    }  else if (score >= 60 && score < 64) {
      return 'D-'
    }  else {
      return 'F' //F+ 와 F- 는 존재하지 않습니다.
    }
  }