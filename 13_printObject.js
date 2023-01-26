//객체를 입력받아 키, 값 쌍을 표현하는 문자열을 리턴
//각 문자열은 한 줄에 키: 값 형태로 구성되며, 각 문자열 끝에는 줄바꿈 문자가 포함
//콜론 다음에 공백을 포함
//각 문자열 끝에 줄바꿈 문자를 포함
//줄바꿈 문자는 \n로 표현
function printObject(obj) {
    let result = '';
    for (let key in obj) {
      result = result + key + ': ' + obj[key] + '\n';
    }
    return result;
}