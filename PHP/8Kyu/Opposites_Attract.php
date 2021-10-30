<?php
    //1. Primera manera:
    /*function lovefunc($flower1, $flower2) {
        if($flower1%2==0 && $flower2%2==0)return false;
        else if($flower1%2!=0 && $flower2%2!=0)return false;
        else return true;
    }

    $flo1 = rand(0,4);
    $flo2 = rand(0,4);

    echo lovefunc($flo1,$flo2);*/

    //2. Segunda manera:
    function lovefunc($flower1, $flower2) {
        if(($flower1%2==0 && $flower2%2==0)||($flower1%2!=0 && $flower2%2!=0))return false;
        else return true;
    }

    $flo1 = rand(0,4);
    $flo2 = rand(0,4);

    echo lovefunc($flo1,$flo2);
