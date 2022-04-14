const wordSearch = (letters, word) => {
    if (letters.length === 0) return false;
  
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    let verticalLetters = [];
    for (let i = 0; i < letters[0].length; i++) {
      verticalLetters.push([]);
    }
      
    for (let i = 0; i < letters[0].length; i++) {
      for (let j = 0; j < letters.length; j++) {
        verticalLetters[i].push(letters[j][i]);
      }
      let verticalJoin = verticalLetters[i].join('');
      if (verticalJoin.includes(word)) return true;
    }
    return false;
  };
  
  module.exports = wordSearch;