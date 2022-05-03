const Room = require('./room')
const Decorator = function(stock, total_paint){
    this.stock = stock
    this.total_paint = total_paint
}

Decorator.prototype.addCanOfPaint = function(){
    this.stock ++;
}

Decorator.prototype.checkTotalPaint = function(){
    this.total_paint = this.stock * 50;
}

Decorator.prototype.canPaintRoom = function(room){
    if (this.stock >= 1){
        room.paintRoom()
    }
}

module.exports = Decorator;