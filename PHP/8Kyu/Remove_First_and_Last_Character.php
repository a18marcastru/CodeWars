<?php
    function remove_char($s) {
        return substr($s,1,-1);
    }

    echo remove_char("Barcelona");