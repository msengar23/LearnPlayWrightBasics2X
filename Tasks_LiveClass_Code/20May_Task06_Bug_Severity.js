let impactScore = 9;

if(impactScore >= 9 && impactScore <=10)
{
    console.log("Severity: Critical Bug - Block Release");
}
else if(impactScore >=7 && impactScore <= 8)
{
    console.log("Severity: High - Fix before release");
}
else if(impactScore >= 4 && impactScore <= 6)
{
    console.log("Severity: Medium - fix in next release");
}
else if(impactScore >= 1 && impactScore <= 3)
{
    console.log("Severity: Low - fix in future release");
}
else
 {
console.log("Invalid impact score");
}