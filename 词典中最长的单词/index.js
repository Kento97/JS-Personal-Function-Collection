/**
 * LeetCode NO.720. 词典中最长的单词
 */
function longestWord(words){
    // 将字符排序，排序规则如下:
    // 1. 长度大的放前面
    // 2. 长度相等，编码小的字符放前面
    words.sort((a, b) => {
        if(a.length > b.length) return -1;
        else if(a.length < b.length) return 1;
        else return a > b ? 1 : -1;
    })
    // 从最长的字符串入手，最先满足条件的字符串即为所求值
    for(let i = 0; i < words.length; i++){
        // 保存前缀
        let str = '';
        for(let j = 0; j < words[i].length; j++){
            str += words[i][j];
            if(j === words[i].length - 1) return str;
            if(words.indexOf(str) === -1){
                break;
            }
        }
    }
    return '';
};

