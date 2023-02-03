//개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 18세 이상인 사람의 이름을 요소로 갖는 배열을 리턴
//반복문(for, while) 사용은 금지
//빈 배열이 주어진 경우에는 빈 배열을 리턴
function getOnlyAllowedToDrink(arr) {
    const filteredList = arr.filter(function (person) {
        return person.age >= 18;
    });

    return filteredList.map(function (person) {
        return person.name;
    });
}