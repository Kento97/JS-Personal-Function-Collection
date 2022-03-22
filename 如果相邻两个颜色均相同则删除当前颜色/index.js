//2038. 如果相邻两个颜色均相同则删除当前颜色

/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
    let stepAlice = 0;
    let stepBob = 0;
    const len = colors.length - 1
    for (let i = 1; i < len; i++) {
        if (colors[i] === colors[i - 1] && colors[i] === colors[i + 1]) {
            if (colors[i] === 'A') stepAlice++;
            else stepBob++;
        }
    }
    return stepAlice > stepBob;
};
console.log(winnerOfGame("ABBBBBBBAAA"));
