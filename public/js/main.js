$(document).ready(function() {
    $("#equals").click(function() {
        var input1 = $("#num1").val();
        var input2 = $("#num2").val();
        var operator = $("#operator").val();

        // error logic
        if ((input1.length == 0) || (input2.length == 0) )
        {
            alert("You can't leave either input blank")
        }

        // calculator logic
        if (input1.length != 0) {
            $("#answer").val(Calculator.calculate(input1,input2,operator));
        }   
    });


    $("#clearbutton").click(function() {
        $("#num2").val('');
        $("#num1").val('');
        $("#answer").val('');
    });

});