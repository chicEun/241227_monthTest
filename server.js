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
      content: '으아아아아',
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

app.get('/view/:id',(req, res) => {
    const { id } = parseInt(req.params.id);
    const board = boardList.find((value) => value.id === parseInt(id));
    res.render(path +'/view.html', {
        board
    });
})

app.get('/modify/:id', (req,res) => {
    const id =  parseInt(req.params.id);
    const board = boardList.find((value) => value.id === id);
    res.render(path +'/modify.html',{
        board
    })
} )

app.post('/modify/:id', (req,res)=> {
    const id = parseInt(req.params.id);
    console.log(id);
    
    const { writer, title, content } = req.body;
    const board = boardList.findIndex((value) => value.id === parseInt(id))

    if(board === -1) {
        res.status(404).send("아이디 못찾..");
    }
    boardList[board].writer = writer;
    boardList[board].title =title;
    boardList[board].content = content;
    res.redirect(`/view?id=${id}`)
})

app.post('/delete/:id', (req,res)=> {
    const id = parseInt(req.params.id);
    const boardDelete = boardList.findIndex((value) => value.id === id)

    if(boardDelete === -1) {
        res.status(404).send("아이디 못찾..");
    }
    boardList.splice(boardDelete, 1);
    res.redirect('/list')
})

  app.listen(3000, (req,res) =>{
    console.log("서버 실행");
    
  })