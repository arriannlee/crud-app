console.log('May Node be with you')

const express = require('express')
const app = express()

app.listen(3000, function (){
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req,res)=> {
  console.log('hellooooooooooooooooooooooooooooooooooooooooooooooooo')
})
