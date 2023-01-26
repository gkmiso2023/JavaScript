//객체, 키, 수를 입력받아 주어진 키에 해당하는 값이 배열인 경우, 수가 가리키는 인덱스에 해당하는 요소를 리턴
//배열의 요소를 리턴
//주어진 키에 해당하는 값이 배열이고, 주어진 수가 배열의 범위를 벗어나지 않는 경우에만 배열의 요소를 리턴
//그 외의 경우, undefined를 리턴
function getElementOfArrayProperty(obj, key, index) {
    let arrProperty = obj[key];
    if (Array.isArray(arrProperty) === true) {
        return arrProperty[index];
    }
    return undefined;
}