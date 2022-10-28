declare var env_api : any; 
declare var env_socket : any; 

export const environment = {
  production: false,
  api: "http://localhost/application/cso/api/", 
  base_url: "#/",
  version : "1.1b",
  token : 'DEV-WEBBASE-15fc3cec-5b65-4fb9-95af-r53bef239228',
  socket_url : 'http://localhost:3000',
  // api: env_api, 
  // base_url: "#/",
  // version : "1.1",
  // token : 'DEV-WEBBASE-15fc3cec-5b65-4fb9-95af-r53bef239228',
  // socket_url : env_socket,
};
 