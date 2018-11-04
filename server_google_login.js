
const express=require("express");
const app=express();


//loading the login html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/static/LoginPage.html');
    
});


const{google} = require("googleapis");
var OAuth2=google.auth.OAuth2;
var oauth2Client=new OAuth2(
    '334339710527-gumvf2ombjsnrf57lne803dckn6of4el.apps.googleusercontent.com',
    'bJr2usnEBMIfpTjCPE8gtYPm');

oauth2Client.setCredentials({
    access_token:"access_token",
    refresh_token:"refresh_token"
});

oauth2Client.refreshAccessToken((err,tokens)=>{
});

const youtube=google.youtube({
    version:'v3',
    "auth": oauth2Client
});










app.listen(8080);
