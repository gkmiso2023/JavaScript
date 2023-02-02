//객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 배열의 각 요소를 제곱한 새로운 배열을 리턴
//반복문(for, while) 사용은 금지
//주어진 키에 해당하는 값이 배열인 경우, 해당 배열은 number 타입의 정수만을 요소로 갖는다고 가정
//주어진 보조 함수(square)를 사용
function square(number) {
    return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
    let maybeArr = obj[property];

    if (Array.isArray(maybeArr) === false) {
        return [];
    }

    return maybeArr.map(square);
}