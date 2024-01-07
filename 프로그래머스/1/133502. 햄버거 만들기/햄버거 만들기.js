function solution(ingredient) {

    const stack = [];
    let answer = 0;
    
    for(let i = 0; i < ingredient.length; i++) {
        stack.push(String(ingredient[i]));
        
        if(stack.length >= 4) {
            if(stack.at(-4) + stack.at(-3) + stack.at(-2) + stack.at(-1) === '1231') {
                stack.length = stack.length - 4;
                answer++;
            }
        }
    }
    return answer;
}