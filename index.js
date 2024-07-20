const express = require("express")
const app = express()
const { Kafka } = require('kafkajs')

app.use(express.json())

const kafka = new Kafka({
    clientId: 'my-kafka-app-producer',
    brokers: ['localhost:9092', 'localhost:9092']
})

const producer = kafka.producer()


app.get("/", (req,res) => {
    console.log("Kafka-producer HIT");
    res.json("Kafka server is up and running")
})


app.post("/message/post", async(req,res) => {
    console.log("Post to topic");
    let topicName = req.body.topicName
    let message = req.body.message
    await producer.send({
        topic: topicName,
        messages: [
            message
        ],
    })
    res.json({
        message: "Message sent !"
    })
})

app.listen(3001, async () => {
    await producer.connect()
    console.log("Server started at 3001");
})



