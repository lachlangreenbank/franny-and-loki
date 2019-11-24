const express = require('express')
const app = express()
const port = 3000

// path.join(__dirname, 'public')

app.get('/', (req, res) =>
	res.sendFile('franny.html', {root: __dirname })
)

app.get('/img', (req, res) =>
	res.sendFile('public/images/franny-n-loki.jpg', {root: __dirname })
)

app.listen(port, () => console.log(`Franny app listening on port ${port}!`))