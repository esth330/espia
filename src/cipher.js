const cipher = {
  encode(offset, text) {
    let result = '';
    offset = Number(offset);
    for (let char of text) {
      let code = char.charCodeAt(0);
      result += String.fromCharCode(code + offset);
    }
    return result;
  },

  decode(offset, text) {
    let result = '';
    offset = Number(offset);
    for (let char of text) {
      let code = char.charCodeAt(0);
      result += String.fromCharCode(code - offset);
    }
    return result;
  }
};

window.cipher = cipher;
