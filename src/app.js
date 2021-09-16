const path = require('path');
const express = require('express');

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => { // index in public path
//     res.send('<h1>Weather</h1>')
// })

app.get('/help', (req, res) => {
    res.send([{
        name: 'Mo',
        age: 19
    },
    {
        name: 'Li',
        age: 36
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'weather forecast',
        location: 'location'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})
