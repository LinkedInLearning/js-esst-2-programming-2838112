<?php
   if (isset($_GET['id'])){
    if ($_GET['id']=='1'){
        sleep(3);
        echo "a";    
    }
    if ($_GET['id']=='2'){
        sleep(1);
        echo "b";    
    } 
    if ($_GET['id']=='3'){
        sleep(2);
        echo "c";    
    } 

   }
 
?>