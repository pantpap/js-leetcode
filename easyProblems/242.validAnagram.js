function isAnagram(s, t){
    if(s.length !== t.length) return false;

    const sCharactersLookup = {};

    for(let i = 0; i < s.length; i++){
        let sChar = s[i];
        sCharactersLookup[sChar] ? sCharactersLookup[sChar] += 1 : sCharactersLookup[sChar] = 1;
    }

    for(let i = 0; i < t.length; i++){
        let tChar = t[i]
        if(!sCharactersLookup[tChar]) {
            return false;
        } else {
            sCharactersLookup[tChar] --;
        }
    }
    return true;
}