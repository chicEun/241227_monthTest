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
    res.render(path + '/list.html', {
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
        id: 1,
        user_id: 'dmsdbwjd7797',
        writer: writer,
        title: title,
        content: content,
        hit: 0,
    })

    
})




  app.listen(3000, (req,res) =>{
    console.log("서버 실행");
    
  })