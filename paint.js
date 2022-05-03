const Paint = function(litres){
    this.litres = litres
    this.volume = false
}

Paint.prototype.emptyPaint = function(){
    this.volume = true
}

module.exports = Paint;