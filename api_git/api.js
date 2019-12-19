//Ler a URL da API
const readline = require('readline');

//metodo fetch
const fetch = require('node-fetch'); 

//Readline para unput e output 
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

  rl.question('Digite um repositório:', (reposotorioGit) => {
    
const manipulcaoURl = reposotorioGit.substr(0,18)
        if(manipulcaoURl == 'https://github.com'){

        //https://github.com/microsoft/calculator

const URlgit = 'https://api.github.com/repos/' + reposotorioGit.substr(19,)+ '/issues?page=1&per_page=100'

        fetch(URlgit)
        .then(response => response.json()) // retorna uma promise
        .then(function(objetoJson){
            
         objetoJson.filter(function (parametroJson){ 

              var str1 = parametroJson.title; 
              var str2 = parametroJson.body;
              var str3 = parametroJson.state;
              var str4 = parametroJson.number;
              var str5 = parametroJson.assign;
              var str6 = parametroJson.label;
              var str7 = parametroJson.milistoneName; 
              var iteStr = `${str1}` + `${str2}` + `${str3}` + `${str4}` + `${str5}` + `${str6}` + `${str7}`;

              console.log(iteStr);
            })
            
        })
        .catch(err => { 
        
          // trata se alguma das promises falhar
        console.error('Falha ao recuperar informações', err); 
        })


  } else {
      
    console.log("repositório inválido")

}
    
        rl.close();
    });

    