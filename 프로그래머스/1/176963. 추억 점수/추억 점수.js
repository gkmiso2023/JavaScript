function solution(name, yearning, photo) {
  const nameAndYearning ={};
  const result=[]  
  for(i=0; i<name.length; i++){
      nameAndYearning[name[i]] = yearning[i]
  }  
  for(i=0; i<photo.length; i++){
      let point = 0;
      for(j=0; j<photo[i].length; j++){
           point += nameAndYearning[photo[i][j]] || 0
      } result.push(point);
  } return result 
}