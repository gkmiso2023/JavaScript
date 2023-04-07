//주어진 인접행렬에서 한 정점으로부터 다른 정점으로 이어지는 길이 존재하는지 반환
function getDirections(matrix, from, to) {

    // queue를 간단하게 생성하고, 첫 시작점으로 from을 할당합니다.
    const queue = [from];
    const enqueue = (n) => queue.push(n);
    const dequeue = (n) => queue.shift();

    // 방문했다는 것을 표시하기 위해 1차원 행렬을 생성합니다.
    const isVisited = new Array(matrix.length).fill(false);

    // 첫 정점 방문 여부를 표시합니다.
    isVisited[from] = true

    // queue(방문할 곳)의 사이즈가 0이 될 때까지 반복합니다.
    while (queue.length > 0) {

        // queue에서 정점을 하나 빼서 now에 할당합니다.
        const now = dequeue();

        // 목적지인지 검사하고, 목적지라면 true를 반환합니다.
        if (now === to) return true;

        // 해당 정점의 간선들을 확인합니다.
        for (let next = 0; next < matrix[now].length; next++) {
            // 만약, 간선이 있고 방문하지 않았다면
            if (matrix[now][next] && !isVisited[next]) {
                // queue에 next를 넣습니다. (다음 정점으로 가기 위해)
                enqueue(next);
                // 해당 정점을 방문했다는 것을 표시합니다.
                isVisited[next] = true
            }
        }

    }

    // 길이 없다면 false를 반환합니다.
    return false;
}