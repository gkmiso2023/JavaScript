//영화 정보가 담긴 객체를 요소로 갖는 배열과 연도를 입력받아 해당 연도 이전의 영화를 요소로 갖는 배열을 리턴
//반복문(for, while) 사용은 금지
//string 타입을 요소로 갖는 배열을 리턴
//각 요소는 영화 제목 by 영화 감독의 형태
function classicMovies(arr, year) {
    const beforeYear = arr.filter(function (movie) {
        return movie.year < year;
    });

    return beforeYear.map(function (movie) {
        return `${movie.title} by ${movie.director}`;
    });
}