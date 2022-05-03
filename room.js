const Room = function(){
    this.area = 50
    this.painted = false
}

Room.prototype.paintRoom = function(){
    this.painted = true
}

module.exports = Room;