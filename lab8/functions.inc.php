<?php

function outputOrderRow($file, $title, $quantity, $price)
{
    $imgsrc = 'images/books/tinysquare/' . $file;
    $realprice = "$" . number_format($quantity, 2, ".", "");
    $realamount = "$" . number_format($quantity * $price, 2, ".", "");
    echo "<tr>";
    //TODO

    echo "<td><img src=$imgsrc></td>";
    echo "<td>$title</td>";
    echo "<td>$quantity</td>";
    echo "<td>$realprice</td>";
    echo "<td>$realamount</td>";

    echo "</tr>";
}

?>