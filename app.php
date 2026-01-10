<?php

//Função para validação de campos
function validaCampos($dados, $regras) {
    $erros = [];
    foreach ($regras as $campo => $regra) {
        if ($regra['required'] && empty($dados[$campo])) {
            $erros[] = "O campo {$campo} é obrigatório.";
        }
        if (isset($regra['max']) && strlen($dados[$campo]) > $regra['max']) {
            $erros[] = "O campo {$campo} excede o tamanho máximo ({$regra['max']} caracteres).";
        }
    }
    return $erros;
}

$regras = [
    'nome' => ['required' => true, 'max' => 100],
    'sexo' => ['required' => true],
    'datanascimento' => ['required' => true],
    'naturalidade' => ['required' => true],
    'rg' => ['required' => true, 'max' => 12],
    'cpf' => ['required' => true, 'max' => 14],
    'estadocivil' => ['required' => true],
    'escolaridade' => ['required' => true],
    'profissao' => ['required' => true, 'max' => 50],
    'batizado' => ['required' => true],
    'profissaofe' => ['required' => true],
    'logradouro' => ['required' => true, 'max' => 50],
    'numero' => ['required' => true],
    'bairro' => ['required' => true, 'max' => 30],
    'cep' => ['required' => true, 'max' => 9],
    'cidade' => ['required' => true],
    'estado' => ['required' => true, 'max' => 2],
];

//Recebe os dados do formulário.
$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);
$erros = validaCampos($dados, $regras);

if ($erros) {
   echo json_encode(['status' => false, 'msg' => implode('<br>', $erros)]);
   exit;
}

$retorna = ['status' => true, 'msg' => "Dados enviados com sucesso."];
echo json_encode($retorna);
