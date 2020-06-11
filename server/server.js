const express = require('express')
const app = express()
const port = 3000

app.get('/orders', (req, res) => {
  res.json([
    {id: 1, name:  'Mayank Chander' , info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 2, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 3, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 4, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 5, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 6, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 7, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 8, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 9, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 10, name:'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 11, name:'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 12, name:'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 13, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 14, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 15, name:'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 16, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 17, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 18, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 19, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
    {id: 20, name: 'Mayank Chander', info:{adress:{streetName:"21 Brooklyn Road", city:'Wellington',suburb:'Mount Cook', HouseNo:'N12 Central Park Apartments'}, otpNumber:((Math.random() *6000)+1000)} },
  ])
})

// app.post('/order', (req, res) => {
//   console.log("posting");
// })

app.get('/images/:image', (req, res) => {
  res.sendFile(__dirname + "/shapes/" + req.params.image)
})

app.post('/review', (req, res) => {
  setTimeout(() => {
    res.json({ success: "OK" })
  }, 2000)
})

app.listen(port, () => console.log(`Booking app listening on port ${port}!`))