//graph
//버텍스와 간선을 담을 Array 타입의 matrix
//인접 행렬 방식으로 구현해야 합니다.
// 구현해야 하는 그래프는 방향 그래프입니다.
// 구현해야 하는 그래프는 비가중치 그래프입니다.
// 구현해야 하는 그래프는 이해를 돕기 위해 기존 배열의 인덱스를 정점으로 사용합니다. (0, 1, 2, ... --> 정점)
// 인접 행렬 그래프는 정점이 자주 삭제되는 경우에는 적합하지 않기 때문에 정점을 지우는 메소드는 생략합니다.
// directed graph (방향 그래프)
// unweighted (비가중치)
// adjacency matrix (인접 행렬)
// 이해를 돕기 위해 기존 배열의 인덱스를 정점으로 사용합니다 (0, 1, 2, ... --> 정점)
class GraphWithAdjacencyMatrix {
    //graph의 constructor를 구현합니다.
    constructor() {
        this.matrix = [];
    }
    //vertex를 추가합니다.
    addVertex() {
        const currentLength = this.matrix.length;
        for (let i = 0; i < currentLength; i++) {
            this.matrix[i].push(0);
        }
        this.matrix.push(new Array(currentLength + 1).fill(0));
    }
    //vertex를 탐색합니다.
    //this.matrix에 vertex가 존재한다면 true를 리턴하고, 반대의 경우라면 false를 리턴합니다.
    contains(vertex) {
        return !!this.matrix[vertex];
    }
    //vertex와 vertex를 이어주는 edge를 추가합니다.
    addEdge(from, to) {
        const currentLength = this.matrix.length - 1;
        // 두 가지 인자 중, 어느 하나라도 undefined라면, 리턴합니다.
        if (from === undefined || to === undefined) {
            console.log("2개의 인자가 있어야 합니다.");
            return;
        }
        // from vertex와 to vertex가 전체 그래프의 범위를 벗어난다면, 리턴합니다.
        if (
            from > currentLength ||
            to > currentLength ||
            from < 0 ||
            to < 0
        ) {
            console.log("범위가 매트릭스 밖에 있습니다.");
            return;
        }
        // this.matrix[from][to]의 값을 1로 바꿔줘서 edge로 연결이 되어 있음을 표시합니다.
        this.matrix[from][to] = 1;
    }
    // from vertex와 to vertex 사이에 edge를 가지고 있는지 여부를 판단합니다.
    hasEdge(from, to) {
        return !!this.matrix[from][to];
    }
    // from vertex와 to vertex 사이에 관련이 없다면, edge를 제거 합니다.
    removeEdge(from, to) {
        const currentLength = this.matrix.length - 1;
        // 두 가지 인자 중, 어느 하나라도 undefined라면, 리턴합니다.
        if (from === undefined || to === undefined) {
            console.log("2개의 인자가 있어야 합니다.");
            return;
        }
        // from vertex와 to vertex가 전체 그래프의 범위를 벗어난다면, 리턴합니다.
        if (
            from > currentLength ||
            to > currentLength ||
            from < 0 ||
            to < 0
        ) {
            console.log("범위가 매트릭스 밖에 있습니다.");
            return;
        }
        // this.matrix[from][to]의 값을 0으로 바꿔줘서 관련이 없음을 표시합니다.
        this.matrix[from][to] = 0;
    }
}