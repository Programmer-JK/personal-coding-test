// BFS
function solution(begin, target, words) {
  let answer = 0;
  if (!words.includes(target)) return 0;
  let temp = [];
  const visited = new Set();
  const queue = [];

  queue.push(begin);

  while (queue.length) {
    const word = queue.shift();
    visited.add(word);

    if (word === target) {
      return answer;
    }

    for (let i = 0; i < word.length; i++) {
      const letter = sliceWord(word, i);
      const matched = words.filter(
        (v) => !visited.has(v) && sliceWord(v, i) === letter
      );
      temp.push(...matched);
    }
    if (queue.length < 1) {
      answer++;
      queue.push(...temp);
      temp = [];
    }
  }
  return answer;
}

function sliceWord(word, i) {
  const wordArr = word.split("");
  wordArr.splice(i, 1);
  return wordArr.join("");
}

//DFS
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let answer = [];
  const DFS = (word, index, level, visit) => {
    if (index >= words.length) return;
    for (let i = 0; i < word.length; i++) {
      const letter = sliceWord(word, i);
      const matched = words.filter(
        (v) => !visit.has(v) && sliceWord(v, i) === letter
      );
      if (matched.includes(target)) {
        answer.push(level + 1);
        return;
      }
      matched.forEach((v, j) => {
        const visited = new Set([...visit]);
        visited.add(v);
        DFS(v, j, level + 1, visited);
      });
    }
  };

  const sliceWord = (word, i) => {
    const wordArr = word.split("");
    wordArr.splice(i, 1);
    return wordArr.join("");
  };

  DFS(begin, 0, 0, new Set());

  return answer.length < 1 ? 0 : Math.min(answer);
}
