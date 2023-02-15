//러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴
//matryoshka.matryoshka는 null 또는 matryoshka 객체
//matryoshka.size는 중첩될수록 작아집니다.
//함수 findMatryoshka는 재귀함수의 형태로 작성
//반복문(for, while) 사용은 금지
//입력받은 객체는 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability)
//빈 객체를 입력받은 경우, false를 리턴
function findMatryoshka(matryoshka, size) {
    // base case -> 내가 찾는 사이즈의 마트료시카가 있을때 true 리턴
    if (matryoshka.size === size) return true;
    // recursive case -> 마트료시카 안에 마트료시카가 또 있을 때 마트료시카를 열어보는 것
    if (matryoshka.matryoshka) {
        return findMatryoshka(matryoshka.matryoshka, size);
    }
    // base case -> 내가 찾는 사이즈의 마트료시카가 없을때 false 리턴
    return false;
}