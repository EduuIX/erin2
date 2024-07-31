# Passo 1: Criar o diretório do projeto


1.   Dentro de `/var/www/html/` crie o diretório `erin`
```bash
cd /var/www/html/
sudo mkdir erin
```

# Passo 2: Copiar o diretório `dist` para `/var/www/html/erin/`
```bash
sudo cp -r dist/* /var/www/html/erin/
```



# Passo 3: Configurar o Apache para servir a aplicação


1.   Editar o arquivo de configuração do Apache:


*   Abra o arquivo de configuração do Apache. Isso pode ser feito com um editor de texto, como `nano` ou `vim`. O arquivo geralmente está localizado em `/etc/apache2/sites-available/000-default.conf`.

2. Configurar o `DocumentRoot` e as diretivas `Directory`:


*   Modifique o arquivo `000-default.conf` para apontar para o diretório onde os arquivos estão localizados:
```
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/erin/dist

    <Directory /var/www/html/erin/dist>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

# Passo 4: Habilitar o módulo de reescrita do Apache:


1.   Certifique-se de que o módulo de reescrita do Apache está habilitado. Você pode habilitar o módulo usando o seguinte comando:
```bash
sudo a2enmod rewrite
```
2.   Após fazer essas alterações, reinicie o servidor Apache para aplicar as novas configurações:
```bash
sudo systemctl restart apache
```

# Passo 5: Acessar a Aplicação
1.    Usar o IP do Servidor:
*   Acesse sua aplicação no navegador usando o endereço IP do seu servidor. Por exemplo, se o IP do seu servidor for 192.168.1.100, você deve acessar:
```bash
http://192.168.1.100
```
2.    Usar um Nome de Domínio:


*   Se você tem um nome de domínio apontado para o IP do seu servidor, você pode usar o domínio. Por exemplo:
```bash
http://seu_dominio.com
```

