<?php
    $id = "";
    $message = "Guess Not";

    if(isset($_GET['id']))
    {
        $id = $_GET['id'];
    }

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Ganking Calculator</title>
        
        <link href="style/style.css" rel="stylesheet" type="text/css" />
        
        
        
        <script type="text/javascript"/ src="script/jquery.js"></script>
        <script type="text/javascript"/ src="script/script.js"></script>
        
        
    </head>
    
    
    
    <div id="header">
        <h1>HandsomeLarry's Ganking Calculator</h1>
    </div>
    
    
  
    <body class="body">
        <div id="maindiv">
            Enter the target&#39s EHP <span id="ehp"></span>
            <table id="ehptable" align="center">
                <tr>
                    <td>
                        <input type="text" id="ehpinput"/>
                    </td>
                </tr>
            </table>    
            
            
            Your total dps is <span id="dps">0</span>
            <br /><br />
            It will take you <span id="time">0</span> <span id="increment">seconds</span> to kill your target
            
            
            <table id="shiptable">
                <tr>
                    <td>
                        Add Ships
                    </td>
                    <td>
                        <input type="button" value="Add ship" onclick="AddShip();" />
                    </td>
                </tr>
            </table>
           </div>
        
    <div id="footer">
        Copyright Â© HandsomeLarry
    </div>
        
    </body>

</html>
