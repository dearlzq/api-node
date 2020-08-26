const express = require('express')
const app = express()
require('dotenv').config()    //试用.env
const port = 3000



app.get('/', (req, res) => {
		  res.send('Hello World!')
})
app.get('/test',function (req,res){
	console.log(req.headers)
	console.log(req.query)
	res.send('<!DOCTYPE html>' +
		'<html lang="en">' +
		'<head>' +
		'    <meta charset="UTF-8">' +
		'    <title>Title</title>' +
		'</head>' +
		'<body>' +
		'<h1>Express</h1>' +
		'</body>' +
		'</html>')

})


app.listen(port, () => {
		  console.log(`Example app listening at http://localhost:${port}`)
})
