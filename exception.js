// //Example-No exception
// var fun=function()
// {
//     try
//     {
//         var a=10
//         var b=0
//         console.log(a/b)
//     }
//     catch(e)
//     {
//         console.log("Exception Handled")
//     }
// }
// fun()

//Note:In javascript if any number is divided by zero then,
//it will result infinity

//Example-2
var fun=function()
{
    var name="SANJAY"
    try
    {
        var str=name.toLowCase()
        alert(str)
    }
    catch(e)
    {
        alert("Inside catch block")
    }
    finally
    {
         alert("Inside finally block")
    }
}
fun()