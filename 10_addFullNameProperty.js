//객체를 입력받아 'firstName', 'lastName' 속성값 사이에 띄어쓰기 하나를 둔 단일 문자열을 fullName 속성값으로 할당
function addFullNameProperty(obj) {
    obj.fullName = obj.firstName + ' ' + obj.lastName;
}