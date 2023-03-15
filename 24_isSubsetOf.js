//두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴
//boolean 타입을 리턴
//base, sample 내에 중복되는 요소는 없다고 가정
const isSubsetOf = function (base, sample) {
    // naive solution: O(M * N)
    // return sample.every((item) => base.includes(item));

    // 각 배열을 정렬: O(N * logN), O(M * logM)
    // N >= M 이므로, O(N * logN)
    base.sort((a, b) => a - b);
    sample.sort((a, b) => a - b);

    const findItemInSortedArr = (item, arr, from) => {
        for (let i = from; i < arr.length; i++) {
            if (item === arr[i]) return i;
            else if (item < arr[i]) return -1;
        }
        return -1;
    };

    let baseIdx = 0;
    for (let i = 0; i < sample.length; i++) {
        baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
        if (baseIdx === -1) return false;
    }
    return true;
};