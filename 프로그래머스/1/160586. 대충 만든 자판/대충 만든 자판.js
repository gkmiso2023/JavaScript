const solution = (keymap, targets) => {
    let answer = [];
    let obj = {};
    const targetSet = [...new Set(targets.join(''))];

    targetSet.map((v) => {
      keymap.map((value) => {
        if (!value.includes(v)) return;
        const index = value.indexOf(v);
        if (!obj.hasOwnProperty(v)) return (obj[v] = index);
        if (obj.hasOwnProperty(v))
          return (obj[v] = obj[v] > index ? index : obj[v]);
      });
    });
    targets.map((v, i) => {
      for (let a = 0; a < v.length; a++) {
        if (!obj.hasOwnProperty(v[a])) return (answer[i] = -1);
        if (obj.hasOwnProperty(v[a]) && !answer[i]) answer[i] = 0;
        answer[i] += obj[v[a]] + 1;
      }
    });
    return answer;
  };