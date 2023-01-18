//시간, 분, 초를 입력받아 현재 시각을 나타내는 메세지를 리턴
//플러스 연산자(+) 사용 금지 ('현재 시각은 ' + hour + '시 ' + min + '분 ' + sec + '초 입니다.')
//표현식(expression)을 포함해 문자열을 표현하는 방식(js template string 또는 js template literal)
function showTime(hour, min, sec) {
    return `현재 시각은 ${hour}시 ${min}분 ${sec}초 입니다.`;
  }