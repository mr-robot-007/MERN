//pseudocode

// credits = some number
// if credits >=7500 
//      -->badge = tera leader
// else if credits >=6000  and credits <7500
//      -->badge = gega leader
// else if credits >=4500 and credits <6000
//      -->badge = mega leader
// else if credits <4500
//      -->badge = rising star




//program to input credits of a Code for CauseCampus leader and then output the badge of the lead on the basis ofthe following criteria:

let credits= 5000;
let badge;

if(credits>=7500)
{
    badge="Tera leader";
}
else if(credits>=6000 && credits<7500)
{
    badge="Gega leader";
}
else if(credits>=4500 && credits<6000)
{
    badge="Mega leader";
}
else if( credits<4500)
{
    badge = "Rising Star";
}
console.log("Badge : "+badge);
