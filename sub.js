const mqtt = require('mqtt')

const client = mqtt.connect('mqtt://localhost:1883')

const topic = 'humidity'
var messagesCounter = 0 
client.on('connect',()=>{
    client.subscribe(topic)
})

client.on('message',(topic , message)=>{
    messagesCounter++
    message = message.toString()
    console.log(message);
    if(messagesCounter == 10 ){
        client.unsubscribe(topic)
        console.log('Message exceeds limit.');
    }
})


