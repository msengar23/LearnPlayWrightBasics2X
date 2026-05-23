let build_Pass_Percentage = 100;

switch (true) 
{
    case build_Pass_Percentage === 100:
        console.log(" 🟢 Green Build - Ready to go live");
        break;
    case build_Pass_Percentage >= 90 && build_Pass_Percentage <= 99:
        console.log(" 🟡 Stable Build - Investigate failures");
        break;
    case build_Pass_Percentage >= 70 && build_Pass_Percentage <= 89:
        console.log("🟠 Unstable Build - Not ready for deployment");
        break;
    case build_Pass_Percentage >= 0 && build_Pass_Percentage <= 69:
        console.log("🔴 Broken Build - Block Deployment");
        break;
    default:
        console.log("Invalid Build Pass Percentage");
}   