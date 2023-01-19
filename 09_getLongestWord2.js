//문자열을 입력받아 문자열에서 가장 긴 단어를 리턴
//단어는 공백 한 칸으로 구분
//가장 긴 단어가 2개 이상이면 첫번째로 등장하는 단어를 리턴
function getLongestWord(str) {
    let arr = str.split(' '); // arr = str.split(' '); split함수 문자열을 일정한 구분자로 잘라서 배열로 저장
    let max = arr[0]; // let max = arr[0];
    for(let i = 0; i < arr.length; i++) { // for(let i of arr){
      if(arr[i].length > max.length) { // if( max.length < i.length){
        max = arr[i]; // max = i;
      }
    }
    return max;
  }