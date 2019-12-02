
Myapp.controller('PessoasCtrl', PessoasCtrl);

PessoasCtrl.$inject = [
					'$scope',
                    'PessoasService' 
				];

function PessoasCtrl($scope, PessoasService) 
{
    function lista()
    {
        PessoasService.get(function(response)
        {
            if(response == 0)
            {
                Swal.fire('Nenhuma pessoa cadastrada.', 'Clique em Nova Pessoa para cadastrar.', 'warning');
            }
            else
            {
                $scope.listaPessoas = {};
                $scope.listaPessoas = response;
            }
        },
        function(error)
        {
            console.log(error);
        })
    };

    $scope.salvar = function()
    {
        PessoasService.post($scope.pessoa, function(response)
        {
            if(response == 200)
            {
                swal.fire('Cadastrado com sucesso!', '', 'success');
                lista();
            }
            else
            {
                if(response == 500)
                {
                    swal.fire("Não foi possível salvar.", "Por favor, contate o suporte.", "error");
                }
                else
                {
                    swal.fire('E-mail já cadastrado em nosso banco.', 'Tente outro e-mail.', 'warning');
                }
            }
        },
        function(error)
        {
            swal.fire("Não foi possível salvar.", "Por favor, contate o suporte.", "error");
            console.log(error);
        })
    };

    $scope.editmodal = function(lista)
    {
        $scope.editid = ''
        $scope.editid = lista.id
        $scope.editpessoa =
        {
            id: $scope.editid,
            nome:lista.nome,
            cpf:lista.cpf,
            email:lista.email
        }
    };

    $scope.delete = function(id)
    {
        PessoasService.delete(id, function(response)
        {
            if(response == 1)
            {
                swal.fire("Deletado com sucesso!", '', 'success');
                lista();
            }
        },
        function(error)
        {
            swal.fire("Não foi possível deletar.", "Por favor, contate o suporte.", "error");
            console.log(error);
        })
    };

    $scope.editar = function(pessoas, id)
    {
        PessoasService.put(pessoas, id, function(response)
        {
            if(response == 1)
            {
                swal.fire("Atualizado com sucesso!", '', 'success');
                lista();
            }
            else
            {
                if(response == 3)
                {
                    swal.fire('E-mail já cadastrado em nosso banco.', 'Tente outro e-mail.', 'warning');
                }
                else
                {
                    swal.fire("Não foi possível atualizar.", "Por favor, contate o suporte.", "error");
                }
            }
        },
        function(error)
        {
            swal.fire("Não foi possível deletar.", "Por favor, contate o suporte.", "error");
            console.log(error);
        })
    };

    //carrega funções
    lista();
};
    
    