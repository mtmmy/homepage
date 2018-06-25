const context = require.context('./', true, /.txt$/);
const parse = require('date-fns/parse');

const obj = [];

context.keys().forEach((key) => {    
  const sourceCode = key.split('./').pop() // remove the first 2 characters
    .substring(0, key.length - 6); // remove the file extension
  // obj[sourceCode] = context(key);
  // obj.push(context(key));
  
  let articleContent = context(key).split("//======\n");
  let art = {
    code: articleContent[0],
    title: articleContent[2],
    description: articleContent[3],
    explaination: articleContent[4],
    tags: articleContent[5].trim().split(', '),
    date: parse(articleContent[6].trim(), 'MM/DD/YYYY'),
    category: articleContent[7].trim()
  }
  obj.push(art);
});

obj.sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

export default obj;