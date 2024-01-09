function solution(s, skip, index) {
    let answer = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arr = [...alphabet];
    
    s = s.split('');
    skip = skip.split('');
    
    for(let i = 0; i < skip.length; i++) {
        arr = arr.filter(e => e !== skip[i]);
    }
    
    for(let i = 0; i < s.length; i++) {
        let idx = 0;
        idx = arr.indexOf(s[i]);
        idx += index;
        
        if(idx > arr.length - 1) {
            idx = idx % arr.length
        }
        
        answer += arr[idx];
    }
    
    return answer;
}