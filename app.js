const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()

app.use(fileUpload())

app.post('/upload',(req,res) => {
    let EDFile = req.files.file

    EDFile.mv(`./files/${EDFile.name}`,err => {
        if(err) return res.status(500).send({ message : err })
        return res.status(200).send({ message : 'File upload' })

    })

})

app.listen(3000,() => console.log('Corriendo'))