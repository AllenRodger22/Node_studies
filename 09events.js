const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Listener with callback function
myEmitter.on('newEvent',()=>{
    console.log('New Event Emitted!');
});

myEmitter.on('newSale',stock =>{
    console.log(`There are now ${stock} items left in stock.`);
});
 


// Triggering  events....
myEmitter.emit('newEvent');

myEmitter.emit('newSale',5);