function bdyload()
{
    // let elements = document.querySelectorAll('.b');
    // elements.forEach((item) => {
    //     item.addEventListener('click', clickEvent)
    // });
    // var comment = document.getElementsByTagName("button");
    // for (var i = 0 ; i < comment.length; i++) {
    //     comment[i].addEventListener('click' , showComment , false ) ; 
    //  }
    // document.getElementsByTagName("button").addEventListener("click", function() {
    //     alert("You clicked me");
    // });
}
// let clickEvent = (e) => {
   
// }
// function showComment()
// {

// }
function myBtnClick()
{
     var mynumber=parseInt(document.getElementById("idnrrbx").value);
    // document.querySelectorAll('button').forEach(occurence => {
    //     let id = occurence.getAttribute('id');
    //     occurence.addEventListener('click', function() {
    //       console.log('A button with ID ' + id + ' was clicked!') 
    //     } );
    //   });
    if(mynumber.length>0)
    {
        document.getElementById("idnrrbx").value=document.getElementById("idnrrbx").value+document.getElementsByTagName("button").value;

    }
    else
    {
        document.getElementById("idnrrbx").value=document.getElementById("btn1").value;
    }

}