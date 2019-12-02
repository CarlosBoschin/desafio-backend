Myapp.service('PessoasService', function(API_URL, $http)
{
    this.get = function(success, error)
    {
		$http({
			method:'GET',
            url: API_URL + 'Pessoas',
		})
        .then(function(response)
        {
            success(response.data);
        }, 
        function(err)
        {
            error(err);
        })
    };
    
    this.post = function(pessoas, success, error)
    {
		$http({
			method:'POST',
            url: API_URL + 'Pessoas',
            data: pessoas
		})
        .then(function(response)
        {
            success(response.data);
        }, 
        function(err)
        {
            error(err);
        })
    };

    this.put = function(pessoas, id, success, error)
    {
		$http({
			method:'PUT',
            url: API_URL + 'Pessoas/' + id,
            data: pessoas
		})
        .then(function(response)
        {
            success(response.data);
        }, 
        function(err)
        {
            error(err);
        })
    };
    
    this.delete = function(id, success, error)
    {
		$http({
			method:'DELETE',
            url: API_URL + 'Pessoas/' + id,
		})
        .then(function(response)
        {
            success(response.data);
        }, 
        function(err)
        {
            error(err);
        })
    };
});