declare var env_api: any;
declare var env_socket: any;
declare var serialNumber: any;
declare var require: any;
export const environment = {
  production: false,
  developerMode : false,
  //api: "http://194.233.77.27/cso/api/",
  api: "http://localhost:7344/app/cso1-api/",  
  apiBCA: "http://localhost:9400/",  
 
  device : false,
  socket_url: 'http://localhost:3000',
  base_url: "#/",
  version : require('../../package.json').version+"-Dev",
  token: 'DEV-WEBBASE-15fc3cec', 
};
