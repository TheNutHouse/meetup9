var redis = require('redis');
var client = redis.createClient("6379", "127.0.0.1"); //creates a new client

client.on('connect', function () {
    console.log('connected');

    client.set('meetup9', 'hello redis', function (err, reply) {
        console.log(reply);
    });

    client.get('meetup9', function (err, reply) {
        console.log(reply);
    });

    client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');

    // client.hmset('frameworks', {
    //     'javascript': 'AngularJS',
    //     'css': 'Bootstrap',
    //     'node': 'Express'
    // });

    client.hgetall('frameworks', function (err, object) {
        console.log(object);
    });

    client.set('key1', 10, function () {
        client.incr('key1', function (err, reply) {
            console.log(reply); // 11
        });
    });

    client.sadd(['tags', 'angularjs', 'backbonejs', 'emberjs'], function (err, reply) {
        console.log(reply);
    });

    client.exists('meetup9', function (err, reply) {
        if (reply === 1) {
            console.log('exists');
        } else {
            console.log('doesn\'t exist');
        }
    });
});