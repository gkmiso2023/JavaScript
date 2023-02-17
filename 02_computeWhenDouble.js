//연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴
function computeWhenDouble(interestRate) {
    let rate = 1 + interestRate / 100;
    let principal = 1;
    let year = 0;
    while (principal < 2) {
        principal = principal * rate;
        year++;
    }
    return year;
}