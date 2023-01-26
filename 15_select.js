//배열과 객체를 입력받아 배열의 각 요소들을 객체의 키로 했을 때 그 값을 추출하여 만든 새로운 객체를 리턴
function select(arr, obj) {
    let newObj = {};
    for (let prop in obj) {
      for (let i = 0; i < arr.length; i++) {
        if (prop === arr[i]) {
          newObj[prop] = obj[prop];
        }
      }
    }
    return newObj;
}