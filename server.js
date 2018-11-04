// JavaScript File

const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const{google} = require("googleapis");


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


//loading the login html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/static/LoginPage.html');
    
});

app.post('/login',function(req,res){
    //aici e nevoie de oauth2 pentru google, verificare auth -> rezultat final ->
    var myusername=req.body.username;
    var mypassword=req.body.password;
    console.log(myusername);
    console.log(mypassword);
    //serverul salveaza datele de login si deschide noua pagina
    console.log('Login success!');
    
    //autentificare cu oauth2 pentru youtube
    var OAuth2=google.auth.OAuth2;
    var oauth2Client=new OAuth2(
    myusername,
    mypassword);

    oauth2Client.setCredentials({
    access_token:"access_token",
    refresh_token:"refresh_token"
    });
    
    const youtube=google.youtube({
    version:'v3',
    "auth": oauth2Client
    });
    
    //autentificare cu oauth2 pentru youtube
    
    
    res.sendFile(__dirname+'/static/ManagerVideo.html');
});

app.post('/logout',function(req,res){
    console.log('Logout success!');
   res.sendFile(__dirname+'/static/LoginPage.html'); 
});

app.listen(8080);
