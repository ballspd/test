const line = require('@line/bot-sdk');
const express = require('express');

const app = express();

const lineConfig = {
  channelAccessToken: 'zomlTV5jEQd43gOhvYERNt6RgZ6qO+AWmxwtFcbqjvxIGZFgo2z783WncEdcxLmF3U83Jnm+rNhk7LEcufRN0cHgmFQ9Pq6MntimQoFHw5M4ENf11IgzyjHDnPZpCGzbYmsFveKmvq74yxPS9lyIAAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '65191d6b90b1ec98806a66fab1c71274'
}

const client = new line.Client(lineConfig)

app.post('/webhook', line.middleware(lineConfig), async (req, res) => {
  try{
    const events = req.body.events
    console.log('event = >>>',events)
    return events.length > 0 ? await events.map(item => handleEvent(item)) : res.status(200).send("OK")
  } catch (error){
    res.status(500).end()
  }
})

const handleEvent = async (event) => {
  return client.replyMessage(event.replyToken,{type:'text',text:'Testttt'})
}

module.exports = app;