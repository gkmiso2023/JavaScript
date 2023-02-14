//배열을 입력받아 그 길이를 리턴
//함수 arrLength는 재귀함수의 형태로 작성
//반복문(for, while) 사용은 금지
//입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability)
//arr.length 사용은 금지
//arr.isEmpty()를 통해 배열이 비어있는지 확인할 수 있습니다. 해당 메소드는 표준 자바스크립트 내장 메소드가 아니며, 문제를 위해 새롭게 정의된 커스텀 메소드입니다. 이 문제에서만 사용하시길 바랍니다.
//빈 배열의 길이는 0
function arrLength(arr) {
    if (arr.isEmpty()) {
        return 0;
    }

    // const [head, ...tail] = arr;
    const tail = arr.slice(1);
    return 1 + arrLength(tail);
}  