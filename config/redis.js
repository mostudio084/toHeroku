'use strict'

const redis = require('redis')
const bluebird = require('bluebird')

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const client = redis.createClient(process.env.REDIS_URL)

client.on('error', err => {
  // prevent to crash
  console.log(err.stack)
})

module.exports = client
