module.exports = function check(str, bracketsConfig) {
  // templatesDeleteString =['()', '[]', '{}', '||'];
  const templatesDeleteString = bracketsConfig.map((el,i) => el.join(''))
    let newString =str;
    for(i=0;i<100;i++){
            for(j=0;j<templatesDeleteString.length;j++){
                newString = newString.toString().replace(templatesDeleteString[j],'')
            }
    }
    if (newString) return false
    if (!newString)return true
}
