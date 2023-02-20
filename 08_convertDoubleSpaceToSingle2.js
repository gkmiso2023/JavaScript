//문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴
//두 칸을 초과하는 공백은 존재하지 않는다고 가정
function convertDoubleSpaceToSingle(str) {
    return str.split('  ').join(' ');
}