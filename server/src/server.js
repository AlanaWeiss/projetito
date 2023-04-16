// import { openDb } from './configDB.js'
import { createTable,  } from './Controler/Usuario.js'
import { createDatabase } from './configDB.js'

import express from 'express'

const app = express()
app.use(express.json())

createDatabase()
createTable()

app.get('/api', (req, res) => {
    res.json({ 'users': ['u1', 'u2', 'u3'] })
})

app.post('/usuario', (req, res) => {
    console.log(req.body)
    res.json({
        'statusCode': 200
    })
})


app.listen(5000, () => console.log('Server running in port 5000'))