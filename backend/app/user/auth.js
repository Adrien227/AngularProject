var jwt = require('jsonwebtoken');
const db = require("../config/db.js");
	

exports.signin=function(req, res){
		let username=req.body.username;
		let password= req.body.password;
		let sql=`SELECT * FROM user WHERE username = "${username}" AND password = "${password}"`
		db.query(sql, function(err, results){       
			if(results != ""){ 
				var payload = 
				{
					subject: "Elies LAJNEF",
					iat: 3695968105
				};            
				
				jwt.sign(payload, "elies", { algorithm: 'HS256'}, function(err, token) 
				{                          
					if(err){
						throw error;
					} 
					else
					{
						if(token != false)
						{
							res.send({"Le token est le suivant": token,
							"Pour l'utilisateur suivant": results[0]});
							res.end();
						}
						else{
							res.json("La création du token n'a pas pu être réalisée.");
							res.end();
						}
						
					}
				});
			}
			else if(results == ""){
				res.send("Aucun utilisateur trouvé.");
				res.end();
			}
		});
	};