const assert = require('assert')
const Paint = require('../paint')

describe('Paint', function(){

let paint;

this.beforeEach(function(){
    paint = new Paint(50)
})

it('Should have a number of litres of paint', function(){
    const actual = paint.litres
    assert.strictEqual(actual, 50)
})

it('Should be able to check if it is empty', function(){
    const actual = paint.volume
    assert.strictEqual(actual, false)
})

it('Should be able to empty itself of paint', function(){
    paint.emptyPaint()
    const actual = paint.volume
    assert.strictEqual(actual, true)
})

})