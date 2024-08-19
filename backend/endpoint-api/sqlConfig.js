var dbconfig = {
    web_labDB: {
        server: '10.21.38.65',
        database:'team9_web_labDB',
        user:'sa',
        password:'Noosi456',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.56.10'  // SQL Server instance name
        }
    },

};
module.exports = dbconfig;
