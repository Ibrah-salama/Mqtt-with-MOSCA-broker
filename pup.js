const mqtt = require('mqtt')

const client = mqtt.connect('mqtt://localhost:1883')

const topic = 'humidity'

var message = 'Hello world!'

client.on('connect',()=>{
    setInterval(()=>{
        client.publish(topic , message)
        console.log('Message sent.');
    },
    1000)
})