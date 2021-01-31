/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
	let str = x + ''
	let flag = 0.5
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false
		} else {
			if (flag === str.length / 2||flag+0.5===str.length/2) {
				console.log(true)
        return true
			}
			flag++
		}
	}
}
isPalindrome(11)
