# JS Showcase

A single page application that can be a one place store to search for all JS libs used in your organization.

SPA build with:
* Express server
* ReactJs as view library
* Webpack as module bundler

###Setting up the project

* Setting up config file
```
cp config/config.js.sample config/config.js
```

* Install nvm
 ```
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
 ```

* Install required node version
  ```
    nvm install 4.4.0
  ```

* Install the `webpack` command for the terminal.
  ```
    npm install -g webpack
  ```

* Install all the node packages
  ```
    npm install
  ```

* Install pm2
  ```
    npm install pm2 -g
  ```

###Deploying

* For devs

  First Time
  ```
    npm run build && pm2 start dist/main.js
  ```

  Next times -  It will automatically start a local server and open the localhost.
  ```
    npm run serve
  ```

* For production
  ```
    npm run serve-prod
  ```

### Nginix config

```server {
  set $server_uri 127.0.0.1:8142;
  server_name todo.local;
  listen 80;

  access_log /var/log/nginx/app.access.log;
  error_log  /var/log/nginx/app.error.log;
  location = /robots.txt {
    echo "User-agent: *\nDisallow: /\n";
  }
  location / {
    proxy_pass http://$server_uri;
    include proxy_params;
  }
}```
