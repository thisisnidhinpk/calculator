$(document).ready(function(){
    $("#btn1").click(function(){
        $mynuber=(parseInt($("#idnrrbx").val()));
        if($mynuber>0)
        {
            
            $("#idnrrbx").val($("#idnrrbx").val()+$("#btn1").val());
        }
        else{
            $("#idnrrbx").val($("#btn1").val()) ;
        }
    });
    alert("hh");
});