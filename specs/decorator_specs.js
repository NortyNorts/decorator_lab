const assert = require('assert')
const Decorator = require('../decorator')
const Room = require('../room')


describe('Decorator', function() {

    let decorator;
    let room;

    this.beforeEach(function(){
        decorator = new Decorator(0,0)
        room = new Room()
    })

    it('Should start with empty stock', function(){
        const actual = decorator.stock
        assert.strictEqual(actual, 0)
    })

    it('Should be able to add a can of paint to stock', function(){
        decorator.addCanOfPaint()
        const actual = decorator.stock
        assert.strictEqual(actual,1)
    })

    it('Should be able to calculate total litres of paint', function(){
        decorator.addCanOfPaint()
        decorator.checkTotalPaint()
        const actual = decorator.total_paint
        assert.strictEqual(actual,50)
    })

    it('Should be able to calculate if there is enough paint to paint a room', function(){
        decorator.addCanOfPaint()
        const actual = decorator.stock
        assert.strictEqual(actual,1)
    })

    it('Should be able to paint room if there is enough paint in stock', function(){
        decorator.addCanOfPaint()
        decorator.canPaintRoom(room)
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })
})