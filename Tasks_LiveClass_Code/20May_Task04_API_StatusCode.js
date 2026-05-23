 
 let statusCode = 400;

 if(statusCode >= 200 && statusCode <= 299)
 {
    console.log("The request was successfull:" + statusCode);
 }
 else if(statusCode >= 300 && statusCode <= 399)
 {
    console.log("The request has been redirected:" + statusCode);
}
else if(statusCode >= 400 && statusCode <= 499)
{
    console.log("The request has client error:" + statusCode);
 }
 else if(statusCode >= 500 && statusCode <= 599)
{
    console.log("The request has server error:" + statusCode);
}
else 
{
    console.log("It is not valid status code:" + statusCode);
}

