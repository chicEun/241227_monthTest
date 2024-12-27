const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

app.get('/list', (req, res) => {

})
app.get('/write',(req,res) => {
    res
})


const boardList = [
    {
      id: 1,
      user_id: 'dmsdbwjd7797',
      writer: '은유정',
      title: '241230 월별평가',
      content: '빨리 끝내야 게따!!',
      hit: 0,
    },
  ];


  app.listen(3000, (req,res) =>{
    console.log("서버 실행");
    
  })