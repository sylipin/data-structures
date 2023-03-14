/**
 * @description 判断s是否为t的子序列
 * @param s {string}
 * @param t {string}
 */


let isSubsequence = function (s, t) {
    let sLength = s.length, tLength = t.length, i = 0, j = 0
    while (i < sLength && j < tLength && sLength <= tLength) {
        if (s.charAt(i) === t.charAt(j)) {
            i++
        }
        j++
    }
    return i === sLength
}
console.log(isSubsequence("ABC", "AaBbC"))
