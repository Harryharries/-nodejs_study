// how to register a event

const EventEmitter = require('events');

const events = new EventEmitter();

events.on('click',function (data) {
    console.log(data);
});

events.on('remove',function(data){
    console.log('remove',data.userId);
});

events.emit('click','cliccccked');

events.emit('remove', {userId:'1234'});
