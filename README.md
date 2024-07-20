# kafka-producer
This will create messages to kafka topics

## Before Posting to topics
- Make sure kafka broker is running in local machine
- Start Kafka Zooker - `zookeeper-server-start.sh   ~/kafka_2.13-3.7.0/config/zookeeper.properties`
- Start Kafka Broker - `kafka-server-start.sh     ~/kafka_2.13-3.7.0/config/server.properties`
- Make sure topics are created - `Run kafka-topics repo`

## Run this project
- npm install
- npm start
- /post - to post a message to a topic

