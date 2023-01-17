//점수를 입력받아 점수에 해당하는 등급을 리턴
//만약 주어진 점수가 100을 초과하거나 0 미만이라면 문자열 INVALID SCORE를 리턴해야 합니다.
/*
자바스크립트(를 포함한 거의 대부분의 프로그래밍 언어)의 비교 연산자는 이항 연산자(binary operator)입니다.
이항 연산자는 2개의 대상에 대해서만 연산을 수행합니다.
70 < score < 80 와 같은 표현은 보이는 대로 작동하지 않습니다.
연산자 우선 순위를 검색해 봅니다. (js operator precedence 또는 자바스크립트 연산자 우선순위)
연산자 우선 순위를 암기해서 쓰기보다는 괄호를 적절하게 사용하는 것이 더 중요합니다.
*/
function convertScoreToGrade(score) {
    let grade;
    if (score > 100 || score < 0) {
      return 'INVALID SCORE';
    }
    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80) {
      grade = 'B';
    } else if (score >= 70) {
      grade = 'C';
    } else if (score >= 60) {
      grade = 'D';
    } else if (score >= 0) {
      grade = 'F';
    }
  
    return grade;
  }
  