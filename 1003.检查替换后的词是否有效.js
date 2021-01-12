/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	for (let i = 0; i < s.length; i++) {
    console.log(s);
    if (s[i]==='a'&&s[i+1]==='b'&&s[i+2]==='c') {
      s.split(s[i])
      s.split(s[i+1])
      s.split(s[i+2])
    }else{
      return false
    }
  }
}