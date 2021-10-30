<?php

    //1. Primera manera
    /*function repeatStr($n, $str){
        $str_n = "";
        for($i = 0;$i < $n;$i++){
            $str_n .= $str;
        }
        return $str_n;
    }

    echo repeatStr(3,'a');*/

    //2. Segunda manera
    function repeatStr($n, $str){
        return str_repeat($str,$n);
    }

    echo repeatStr(3,'b');