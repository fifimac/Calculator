$(document).ready(function() {
    $("#equals").click(function() {
        var input1 = $("#num1").val();
        var input2 = $("#num2").val();
        // error logic
        if ((input1.length == 0) || (input2.length == 0) )
        {
            alert("You can't leave either input blank")
        }

        // calculator logic

        // if (input1.length != 0) {
        //     $("#num2").val(Calculator.convertFromPoundsToKIlo(input1));
        // }
        // else if (input2.length != 0) {
        //     $("#num1").val(Calculator.convertFromMetricToImperial(input2));
        // }
    });

    
    $("#clearbutton").click(function() {
        $("#num2").val('');
        $("#num1").val('');
    });

});