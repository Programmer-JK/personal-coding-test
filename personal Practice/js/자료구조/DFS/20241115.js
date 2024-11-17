const DFS = (graph, startNode) => {
  const visited = [];
  const needVisited = [];
  needVisited.push(startNode);
  while (needVisited.length !== 0) {
    const node = needVisited.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisited = [...graph[node], ...visited];
    }
  }
  return visited;
};

const BFS = (graph, startNode) => {
  let visited = [];
  let needVisited = [];
  needVisited.push(startNode);
  while (needVisited.length !== 0) {
    const node = needVisited.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisited = [...visited, ...graph[node]];
    }
  }
  return visited;
};

const DFS = (graph, startNode) => {
  let visited = [];
  let needVisited = [];
  needVisited.push(startNode);
  while (needVisited.length !== 0) {
    const node = needVisited.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisited = [...graph[node], ...visited];
    }
  }
  return visited;
};

const BFS = (graph, startNode) => {
  let visited = [];
  let needVisited = [];
  needVisited.push(startNode);
  while (needVisited.length !== 0) {
    const node = needVisited.shift();
    if (visited.includes(node)) {
      visited.push(node);
      needVisited = [...visited, ...graph[node]];
    }
  }
  return visited;
};

const DFS = (graph, startNode) => {
  let needVisited = [];
  let visited = [];
  while (needVisited.length > 0) {
    const node = needVisited.shift();
    if (visited.includes(node)) {
      visited.push(node);
      needVisited = [...graph[node], ...needVisit];
    }
  }
};

const BFS = (graph, startNode) => {
  let needVisit = [];
  let visited = [];
  visited.push(startNode);
  while (needVisit.length > 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
};

const DFS = (graph, startNode) => {
  let needVisit = [];
  let visited = [];
  visited.push(startNode);
  while (needVisit.length > 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }
};
