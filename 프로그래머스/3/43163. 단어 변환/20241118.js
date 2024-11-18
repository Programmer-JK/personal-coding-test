function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let answers = [];

  const dfs = (word, index, level, visit) => {
    if (index >= words.length) return;
    for (let i = 0; i < word.length; i++) {
      const letter = sliceWord(word, i);
      const temp = words.filter(
        (v) => !visit.has(v) && sliceWord(v, i) === letter
      );
      if (temp.includes(target)) {
        answers.push(level + 1);
        return;
      }
      temp.forEach((v, i) => {
        const visited = new Set([...visit]);
        visited.add(v);
        dfs(v, j, level + 1, visited);
      });
    }
  };

  const sliceWord = (word, i) => {
    let wordArr = word.split("");
    wordArr.slice(i, 1);
    return wordArr.join("");
  };

  dfs(begin, 0, 0, new Set());

  return answers.length < 1 ? 0 : Math.min(answers);
}
