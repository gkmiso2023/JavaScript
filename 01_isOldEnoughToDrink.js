//나이를 입력받아 술을 마실 수 있는지(18세 이상) 여부를 리턴
//number 타입의 나이 (0 이상의 정수)
//boolean 타입을 리턴
function isOldEnoughToDrink(age) {
    if(age >= 18) {
        return true;
    }
    else {
        return false;
    }
}