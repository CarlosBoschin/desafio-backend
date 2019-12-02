<!DOCTYPE html>
<html ng-app="Myapp">
  <head>
    <title>Cadastro de Pessoas</title>
    <link rel="stylesheet" type="text/css" href="app/node_modules/bootstrap/dist/css/bootstrap.css">

  <script src="app/node_modules/jquery/jquery.js"></script>
    <script src="app/node_modules/bootstrap/dist/js/bootstrap.js"></script>
  
    <!-- Angular -->
    <script src="app/node_modules/angular/angular.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min.js"></script>

    <!-- APP -->
    <script src="app/app.js"></script>

    <!-- SERVICES -->
    <script src="app/services/PessoasService.js"></script>

    <!-- CONTROLLERS -->
    <script src="app/controllers/PessoasController.js"></script>

    <!-- SWEETALERT -->
    <script src="app/node_modules/sweetalert2/dist/sweetalert2.min.js" charset="utf-8"></script>
    <script src="app/node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
  </head> 

  <body>
    <div class="container">
        <div ng-view></div>
    </div>
  </body>
  
</html>