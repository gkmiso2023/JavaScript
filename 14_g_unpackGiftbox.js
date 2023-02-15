//선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴
//함수 unpackGiftbox는 재귀함수의 형태로 작성
//입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability)
//빈 배열 또는 빈 문자열을 입력받은 경우, false를 리턴
function unpackGiftbox(giftBox, wish) {
    // recursive case
    for (let i = 0; i < giftBox.length; i++) {
        if (giftBox[i] === wish) {
            return true;
        } else if (Array.isArray(giftBox[i])) {
            const result = unpackGiftbox(giftBox[i], wish);
            if (result === true) {
                return true;
            }
        }
    }

    // base case
    return false;
}