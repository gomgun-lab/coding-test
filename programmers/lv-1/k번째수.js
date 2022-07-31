function solution(array, commands) {
  const result = commands.map((command) => {
    const [i, j, k] = command;

    const tempArr = array.slice(i - 1, j).sort((a, b) => a - b);

    return tempArr[k - 1];
  });

  return result;
}
