<?php

$url = "https://sistema.hml.ecoubatuba.com.br/api/tarifacao/atual";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
   "Accept: application/json",
   "Authorization: dG90ZW0xOmE2NGQxODQ4NzdmMTNmMzRkMzY3MDMzYjQ1MTFmNTg0NmEzZGVmMWM=",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
$jsonResult = json_decode($resp,true);
//var_dump($jsonResult);
//echo $jsonResult['descricao'];
$jsonFinal = [];
foreach($jsonResult['itens'] as $json){
	//echo  . "<br>";
	$jsonFinal['descricaoClassificacao'][] = $json['descricaoSite'];
   $jsonFinal['preco'][] = $json['valor'];

}
echo (json_encode($jsonFinal));

//echo json_encode($jsonFinal);
?>