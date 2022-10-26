var price = 100;
var count = 0;
var sizeprice=0;
document.getElementById("money").innerHTML = price + "$";
function addmoney(a) {
        price=price+a;
        document.getElementById("money").innerHTML = price + sizeprice + "$";
    }
function remain (c)
{
        price=price-c;
        document.getElementById("money").innerHTML = price + sizeprice + "$";
}
var b2 = document.getElementById("mid");
var b1 = document.getElementById("small");
var b3 = document.getElementById("big"); 


b1.addEventListener('click',function sizmon ()
{
    if (b1.checked==true)
    {
       sizeprice=0;
        document.getElementById("money").innerHTML = price + sizeprice + "$";
    } 
} ) ;
b2.addEventListener('click',function sizmon2()
{
    if (b2.checked==true)
    {
        sizeprice=6;
        document.getElementById("money").innerHTML = price + sizeprice + "$";
    }
});
b3.addEventListener('click',function sizmon3()
{
    var b3 = document.getElementById("big"); 
    if (b3.checked==true)
    {
        sizeprice=10;
        document.getElementById("money").innerHTML = price + sizeprice + "$";
    }
});
