let attempts = 3;

switch(true)
{
case attempts === 0:
console.log("✅ Login Successful - Welcome to your account");
break;

case attempts === 1:
console.log("⚠️ Warning: 2 attempt left - Please check your account details");
break;
case attempts === 2:
    console.log("⚠️ Warning: 1 attempt left - Please check your account details");
    break;
case attempts === 3:
    console.log("🔒 Account Locked - Cotact to support team");
    break;
default:
    console.log("Invalid number of Attempts");
}