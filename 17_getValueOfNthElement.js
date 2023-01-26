//배열과 수를 입력받아 수가 가리키는 인덱스에 해당하는 객체의 'name' 속성값을 리턴
//해당되는 객체의 'name' 속성값을 리턴
//빈 배열을 입력받은 경우, 'no name'을 리턴
//배열의 범위를 벗어나는 인덱스를 입력받은 경우, 마지막 객체의 'name' 속성값을 리턴
function getValueOfNthElement(arr, num) {
    if (!arr.length) {
      return 'no name';
    } else if (num > arr.length - 1) {
      return arr[arr.length - 1]['name'];
    } else {
      return arr[num]['name'];
    }
}