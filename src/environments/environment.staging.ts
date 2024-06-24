let server = '192.168.202.101';  
declare var require: any; 

export const environment = {
  production: true, 
  api: "http://"+server+"/cso1-api/", // CHANDRA WEBBASE
  apiBCA: "http://"+server+":9400/",  
 
  device : false,
  developerMode : true,
  base_url: "#/",
  version : require('../../package.json').version+"-S",
  token: 'DEV-WEBBASE-15fc3cec',
  socket_url : "http://"+server+":3000",   // CHANDRA WEBBASE
  };
  