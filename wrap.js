const wrap = (line, maxLen) => {
  let result = "";
  if(line.length < maxLen){
    result = line;
  } else {
    for(let i = 0; i < line.length; i++){
      if(i !== 0 && ((i+1) % maxLen === 0)){
        result += line[i];
        result += "\n";
      } else {
        result += line[i];
      }
    }
  }
  return result;
}


module.exports = wrap;
