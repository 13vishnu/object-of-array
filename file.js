let objArr={
    ar1:["javascript","python","Ruby","Go","languages","ischallenging","isRewarding","difficulty","isfun"],
    ar2:["Javascript","python","Ruby","Go"],
    ar3:[true,true,7,true],
    show(){
        this.ar1.forEach(function(value){
            console.log(value)
        })
        console.log(this.ar2)
        this.ar3.forEach(function(value){
            console.log(value)
        })
    }
}
objArr.show()