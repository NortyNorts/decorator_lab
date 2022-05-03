const assert = require('assert')
const Room = require('../room.js')

describe('Room', function(){

    let room;

    this.beforeEach(function(){
        room = new Room()
    })

    it('Should have an area', function(){
        const actual = room.area;
        assert.strictEqual(actual, 50)
    })


    it('Should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false)
    })


    it('Should beable to be painted', function(){
        room.paintRoom()
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })
})