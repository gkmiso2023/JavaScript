//객체의 'status' 속성값이 'fail'인 경우, 'Something went wrong!'을 리턴
//객체의 'status' 속성값이 'success'인 경우, 'data' 속성값에 입력받은 함수를 적용한 결과를 리턴
function callbackOnly(callback, response) {
    if (response.status === 'success') {
      return callback(response.data);
    } else {
      return 'Something went wrong!';
    }
}