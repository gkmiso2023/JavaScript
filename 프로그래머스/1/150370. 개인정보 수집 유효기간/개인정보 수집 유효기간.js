function solution(today, terms, privacies) {
  const answer = [];
  const expire = new Date(today);

  const termType = {};
  terms.forEach((item) => {
    const [type, term] = item.split(" ");
    termType[type] = Number(term);
  });

  privacies.forEach((item, idx) => {
    const [date, type] = item.split(" ");
    const changeDate = new Date(date);
    changeDate.setMonth(changeDate.getMonth() + termType[type]);
    if (changeDate <= expire) answer.push(idx + 1);
  });

  return answer;
}