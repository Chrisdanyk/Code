<?php
//$st="allo bim bam boum";
//$stm=str_replace("im","p","bim bam boum");
//echo $stm;
//$word="abcdefghi";
//$stm=str_shuffle($word);
//echo $stm;
//$dt= date('YYYY-MM-dd');
//echo $dt;

function conevol($rayon,$hauteur)
{
    $vol=($rayon*$rayon)*(22/7)*($hauteur)*(1/3);
return $vol;
}

#echo conevol(3, 1);
$prenoms = array('François', 'Michel', 'Nicole', 'Véronique','Benoît');
/* for ($i=0; $i < sizeof($prenoms); $i++) { 
    # code...
    echo $prenoms[$i];
}
 */

 $coord = array('nom' =>"chris" , 'prenom' =>"dany", 'ville' =>"NY");
/* foreach ($coord as $key => $value) {
    # code...
    echo $value;
}
?> */
$co = array('$p' => array('nom' => "chris", 'prenom' => "dany", 'ville' => "NY"), '$py' => array('nom' => "pier", 'prenom' => "mukisa", 'ville' => "NYABUSHONGO"));


#print_r($co);
if (in_array("chris",$coord)) {
    echo "ca va ca va";

}

