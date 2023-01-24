class Fan
{
    constructor(name,wings)
    {
    this.name = name
    this.wings = wings
    }


rotate()
{
    console.log("Fan is rotating")
}

}
var f1= new Fan("Bajaj",3)
console.log(f1)
console.log(typeof(f1))
console.log(f1.name+" "+f1.wings)
f1.rotate()
