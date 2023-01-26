//객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소를 리턴
//주어진 키에 해당하는 값이 배열이고, 빈 배열이 아닌 경우에만 배열의 요소를 리턴
//그 외의 경우, undefined를 리턴
function getLastElementOfProperty(obj, property) {
    let prop = obj[property];
    if (!Array.isArray(prop) || prop.length === 0) {
      return undefined;
    }  
    return prop[prop.length - 1];
}