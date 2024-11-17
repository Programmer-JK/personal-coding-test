const DFS = (graph, startNode) => {
    const visited = [];
    const needVisit = [];
    needVisit.push(startNode);
    while(needVisit.length !==0 ){
        const node = needVisit.shift();
        if(!visited.includes(node)) {
            visited.push(node);
            needVisit = [...graph[node], ...needVisit];
        }
    }
    return visited
}

const BFS = (graph, startNode) => {
    let visited = [];
    let needVisited = [];
    needVisited.push(startNode);
    while(needVisited.length !== 0) {
        const node= needVisited.shift();
        if(!visited.includes(node)) {
            visited.push(node);
            needVisited = [...needVisited, ...graph[node]];
        }
    }
    return visited;
}


const BFS = (graph, startNode) => {
    let visited = [];
    let needVisited = [];
    needVisited.push(startNode);
    while(needVisited.length > 0) {
        const node = needVisited.shift();
        if(!visited.includes(node)){
            visited.push(node);
            needVisited = [...needVisited, ...graph[node]];
        }
    }
    return visited;
}

const DFS = (graph, sNode) => {
    let visited = [];
    let needVisited = [];
    needVisited.push(sNode);
    while(needVisited.length > 0) {
        const node = needVisited.shift();
        if(!visited.includes(node)){
            visited.push(node);
            needVisited = [...needVisited, ...graph[node]];
        }
    }
    return visited;
}

const DFS = (graph, sNode) => {
    let visited = [];
    let needVisited = [];
    needVisited.push(sNode);
    while(needVisited.length > 0) {
        const node = needVisited.shift();
        if(!visited.includes(node)){
            visited.push(node);
            needVisited = [...needVisited, ...graph[node]];
        }
    }
    return visited;
}

const DFS = (graph, sNode) => {
    let visited = [];
    let needVisited = [];
    needVisited.push(sNode);
    while(needVisited.length > 0) {
        const node = needVisited.shift();
        if(!visited.includes(node)) {
            visited.push(node);
            needVisited = [...needVisited, ...graph[node]];
        }
    }
}