declare var env_api: any;
declare var env_socket: any;

export const environment = {
  production: false,
  //api: "http://194.233.77.27/cso/api/",
  api: "http://localhost/application/cso/api/", 
  //  base_url: "#/",
  //  version : "1.1b",
  //   token: 'DEV-WEBBASE-15fc3cec',
  device : false,
  socket_url: 'http://localhost:3000',
  base_url: "#/",
  version: "1.1",
  token: 'DEV-WEBBASE-15fc3cec',
  //socket_url: env_socket,
};
