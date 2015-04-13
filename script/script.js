function AddShip()
{
    $("#faggottext").val("In Your Mouth");
    $("#shiptable tr:last").after('<tr><td class="NumberClass">1</td><td class="TextColumn"><input type="text" onkeyup="SumTable();" /><img style="vertical-align:middle;" src="http://www.clipartbest.com/cliparts/LcK/rMA/LcKrMAkEi.jpeg" height="20" width="20" onClick="removebutton(this)" /></td></tr>');
    OrderTable();
}

function removebutton(element)
{
    $(element).closest('tr').fadeOut(300, function() { 
        $(element).closest('tr').remove();
        OrderTable();
    });
}

function OrderTable()
{
    $("#shiptable > tbody > tr").each(function(index){
        if(index > 0)
            $('td:eq(0)',this).html(index);
    });
    
    SumTable();
}

function SumTable()
{
    var thesum = 0;

    $("#shiptable > tbody > tr").each(function(index){
        if(index > 0)
        {
            var value = $('td:eq(1)',this).find('input').val();
            
            if(value != "" && $.isNumeric(value))
            {
                thesum += parseInt(value);
            }
            else
            {
                if(value != "")
                {
                    $('td:eq(1)',this).find('input').val(value.substring(0,value.length-1));

                    thesum += parseInt(value.substring(0,value.length-1));
                   
                }
            }
        }
    });
    
    $("#dps").text(thesum);
    Calc();
}

function Calc()
{
    var ehp = parseInt($("#ehpinput").val());
    var dps = parseInt($("#dps").text());
    
    var seconds = ehp/dps;

    if(seconds > 60)
    {
        var minutes = seconds / 60;
        $("#time").text(Math.floor(minutes));
        var mseconds = seconds % 60;
        $("#increment").text(" minute(s) " + Math.floor(mseconds) + " second(s)");
        
        if(minutes > 60)
        {
            var hours = minutes / 60;
            var hminutes = minutes % 60;
            $("#time").text(Math.floor(hours));
            $("#increment").text("hour(s), " + Math.floor(hminutes) + " minute(s), " + Math.floor(mseconds) + " second(s) ");
        }
    }
    else
    {
    	$("#time").text(Math.floor(seconds));
    	$("#increment").text(" second(s) ");
    }
    
    
    
    
}
