declare var env_api : any; 
declare var env_socket : any; 

export const environment = {
  production: true,
  api: env_api, 
  device : false,
  base_url: "#/",
  version : "1.1",
  token: 'DEV-WEBBASE-15fc3cec',
  socket_url : env_socket,

};
