// //graph
// addVertex(vertex): 그래프에 버텍스를 추가해야 합니다.
// contains(vertex): 그래프에 해당 버텍스가 존재하는지 여부를 Boolean으로 반환해야 합니다.
// addEdge(fromVertex, toVertex): fromVertex와 toVertex 사이의 간선을 추가합니다.
// hasEdge(fromvertex, toVertex): fromVertex와 toVertex 사이의 간선이 존재하는지 여부를 Boolean으로 반환해야 합니다,
// removeEdge(fromVertex, toVertex): fromVertex와 toVertex 사이의 간선을 삭제해야 합니다.
// removeVertex(vertex): 그래프에서 버텍스를 삭제합니다.
// 인접 리스트 방식으로 구현해야 합니다.
// 구현해야 하는 그래프는 무방향 그래프입니다.
// undirected graph (무향 그래프)
// adjacency list (인접 리스트)
class GraphWithAdjacencyList {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        // 이미 존재하는 정점이라면 덮어씌워지지 않게 방지합니다.
        this.vertices[vertex] = this.vertices[vertex] || [];
    }

    contains(vertex) {
        // 인자로 넘겨받은 정점의 존재여부를 반환합니다.
        return !!this.vertices[vertex];
    }

    addEdge(fromVertex, toVertex) {
        // 넘겨받은 두 정점중 하나라도 존재하지 않는다면
        if (!this.contains(fromVertex) || !this.contains(toVertex)) {
            // 아무것도 하지않고 종료합니다
            return;
        }

        // 두 정점이 모두 존재한다면
        // 첫번째 정점의 인접 리스트에 두번째 정점을 추가하고 (간선이 존재하지 않을 경우)
        if (!this.hasEdge(fromVertex, toVertex)) {
            this.vertices[fromVertex].push(toVertex);
        }
        // 두번째 정점의 인접 리스트에 첫번째 정점을 추가합니다 (간선이 존재하지 않을 경우)
        if (!this.hasEdge(toVertex, fromVertex)) {
            this.vertices[toVertex].push(fromVertex);
        }
    }

    hasEdge(fromVertex, toVertex) {
        // 만약 정점(fromVertex)이 존재하지 않는다면
        if (!this.contains(fromVertex)) {
            // false를 반환합니다
            return false;
        }
        // 존재한다면 해당 정점의 리스트에 toVertex가 포함되어있는지 반환합니다
        return !!this.vertices[fromVertex].includes(toVertex);
    }

    removeEdge(fromVertex, toVertex) {
        // 넘겨받은 두 정점중 하나라도 존재하지 않는다면
        if (!this.contains(fromVertex) || !this.contains(toVertex)) {
            // 아무것도 하지않고 종료합니다
            return;
        }

        // 두 정점이 모두 존재한다면
        // 첫번째 정점의 인접 리스트에 두번째 정점이 있을 경우
        if (this.hasEdge(fromVertex, toVertex)) {
            // 두번째 정점의 인덱스를 찾은 뒤 삭제합니다
            const toVertexIndex = this.vertices[fromVertex].indexOf(toVertex);
            this.vertices[fromVertex].splice(toVertexIndex, 1);
        }
        // 두번째 정점의 인접 리스트에 첫번째 정점이 있을 경우
        if (this.hasEdge(toVertex, fromVertex)) {
            // 첫번째 정점의 인덱스를 찾은 뒤 삭제합니다
            const fromVertexIndex = this.vertices[toVertex].indexOf(fromVertex);
            this.vertices[toVertex].splice(fromVertexIndex, 1);
        }
    }

    removeVertex(vertex) {
        // 만약 인자로 넘겨받은 정점이 존재한다면
        if (this.contains(vertex)) {
            // 해당 정점과 연결된 간선을 지우고
            while (this.vertices[vertex].length > 0) {
                this.removeEdge(this.vertices[vertex][0], vertex);
            }
            // 최종적으로 해당 정점을 삭제합니다
            delete this.vertices[vertex];
        }
    }
}