/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let array = Array.from(String(x))
	array.reverse()
	while (array[0] === '0') {
		array.splice(array[0], 1)
	}
	let all = ''
	if (array[array.length - 1] === '-') {
		array.splice(array.length - 1, 1)
		for (let i = 0; i < array.length; i++) {
			all = all + array[i]
		}
		if (all < (-2) ** 31 || all > 2 ** 31 - 1 || all === 0) {
			return '0'
		} else {
			all = '-' + all
			return all
		}
	} else {
		for (let i = 0; i < array.length; i++) {
			all = all + array[i]
		}
		if (all < (-2) ** 31 || all > 2 ** 31 - 1 || all === 0) {
		  return '0'
		}else{
      return all
    }
	}
}
reverse(1534236469)
