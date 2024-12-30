const express = require('express');
const nunjucks = require('nunjucks');
const path = __dirname + '/views';
const app = express();

app.set('view enging', 'html')
nunjucks.configure('views', {
    express: app
})

app.use(express.urlencoded({extended: true}))

const boardList = [
    {
      id: 1,
      user_id: 'dmsdbwjd7797',
      writer: '은유정',
      title: '241230 월별평가',
      content: '빨리 끝내고 집가고 싶다!!',
      hit: 0,
    },
  ];


app.get('/list', (req, res) => {
    console.log("나는 나옴??");
    res.render('list.html', {
        boardList
    })
})

app.get('/write',(req,res) => {
    res.sendFile(path + '/write.html');
})

app.post('/write', (req, res) => {
    const { writer, title, content} = req.body;
    console.log(req.body);

    boardList.push({
        id: boardList.length ,
        user_id: 'dmsdbwjd7797',
        writer: writer,
        title: title,
        content: content,
        hit: 0,
    }) 
    // view가 아직 구현이 안돼서 리다이렉트를 안 적었음
    // 그래도 사용자 입장을 고려해서 list로 먼저 리다이렉트 시키는 행동이 있었으면 좋았을 것 같음
    res.redirect('/list');
})

app.get('/view',(req, res) => {

})



  app.listen(3000, (req,res) =>{
    console.log("서버 실행");
    
  })