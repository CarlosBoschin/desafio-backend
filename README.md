- Instruções para LINUX

.Instalação do LAMP;
 -sudo apt install -y apache2
 -sudo apt install -y php php-cli php-common php-gd php-mbstring php-intl php-xml php-zip php-pear libapache2-mod-php
 -sudo apt install -y mysql-server mysql-client php-mysql
 -sudo mysql
 -CREATE DATABASE seguralta
 -CREATE USER 'seu_usuario'@'localhost' IDENTIFIED WITH mysql_native_password 'sua_senha';
 -GRANT ALL PRIVILEGES ON *.* TO 'seu_usuario'@'localhost' WITH GRANT OPTION;
 -FLUSH PRIVILEGES;

.Instalação do Laravel;
 -composer global require “laravel/installer”
 -Dentro de /etc/apache2, criar diretorio /www/seu_projeto
 -Ir até /etc/apache2/www/seu_projeto
 -Ctrl C, Ctrl V no projeto enviado
 -Dentro da raiz, editar .env para a conexão com seu banco e usuário

.Instalação do AngularJS
 -Ir ate dentro de public/ 
 -npm install angular bootstrap jquery@1.9.1

.Executando a migration
 -No terminal, ir até a raiz do projeto (etc/apache2/www/seu_projeto)
 -php artisan migrate
 -Saida esperada: Created Migration

.Realizando consulta no DB;
 -sudo mysql
 -show databases
 -Verifique se o DB foi criado

.Executando servidor
 -No terminar, ir até a raiz do projeto
 -php artisan serve
 -Verificar possibilidade de algum erro

.Executando a aplicação
 -No navegador
 -http://localhost:8000

**OBS: Caso queira, pode difinir um VH em /etc/apache2/ 
 -sudo nano apache2.conf
 -<VirtualHost *:80>
    DocumentRoot "CAMINHO_PARA_PASTA_DA_API"
    ServerName laravel.exemplo
  </VirtualHost>

	
