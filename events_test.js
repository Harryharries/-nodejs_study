// how to register a event

const EventEmitter = require('events');

const events = new EventEmitter();

// inherit the event------
class MyObject extends EventEmitter{

}

const myObj = new MyObject();

myObj.on('aaaa',function (data) {
    console.log('mmmmmmmm',data)
});

myObj.emit('aaaa','hello');
// ----------

// binding events-------
events.on('click',function (data) {
    console.log(data);
});

// events.on('remove',function(data){
//     console.log('remove',data.userId);
// });

function removeHandler(data){
    console.log('remove',data.userId);
}
events.on('remove',removeHandler);
//--------

events.emit('click','cliccccked');

events.emit('remove', {userId:'1234'});


// off will cancel the binding event
events.off('remove',removeHandler)

events.emit('remove', {userId:'7777'});
