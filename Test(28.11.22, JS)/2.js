function sort(str) {
    return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
}

function findAnagram(word1, word2) {
    return word1.trim() === word2.trim() ? false : sort(word1) === sort(word2);
}
