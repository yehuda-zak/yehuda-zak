{
function positive () {
    var pos=document.getElementById("ponev1").value;
    if ( pos<0) {
        document.getElementById("poan1").innerHTML="negative";
    } else{
        document.getElementById("poan1").innerHTML="positive";
    }
}
function even (){
    var ev=parseInt(document.getElementById("ponev1").value);
    if (ev%2==0){
        document.getElementById("poan1").innerHTML="even";
    } else {
        document.getElementById("poan1").innerHTML="Odd";

    }
}
function capit(){
    var cap=document.getElementById("capital").value;
    if (cap.length>1){ 
           document.getElementById("cap1").innerHTML="too much";
    } else{
        if (cap==cap.toUpperCase() ) {
            document.getElementById("cap1").innerHTML="capital";
        } else{
            document.getElementById("cap1").innerHTML="small letter";
        }
    }
}
function longer(){
    var longer1=document.getElementById("longer1").value;
    var longer2=document.getElementById("longer2").value;
 if (longer1.length>longer2.length){
    document.getElementById("ans1").innerHTML="I have the longest...";
    document.getElementById("ans2").innerHTML="";
 }
 else if(longer1.length<longer2.length){
    document.getElementById("ans2").innerHTML="I have the longest...";
    document.getElementById("ans1").innerHTML="";
 }else{
    document.getElementById("ans1").innerHTML="we have an equal...";
    document.getElementById("ans2").innerHTML="we have an equal...";

 }
}
function ddif(){
    var longer1=document.getElementById("longer1").value;
    var longer2=document.getElementById("longer2").value;
    var len1=longer1.length;
    var len2=longer2.length;
    var ddif=len1-len2;
    if (ddif<0){
       ddif=ddif*-1;
    }
    document.getElementById("ddif1").innerHTML=ddif;
}

function difCut(){
    var longer1=document.getElementById("longer1").value;
    var longer2=document.getElementById("longer2").value;
    var len1=longer1.length;
    var len2=longer2.length;
    var ddif=len1-len2;
    if (ddif<0){
        ddif=ddif*-1;
     }
    if (len1 >len2){
        longer1 = longer1.slice(len1-ddif,len1);
 
        document.getElementById("a1a1").innerHTML=longer1;
    }else if (len1 < len2){
        longer2 = longer2.slice(len2-ddif,len2);

        document.getElementById("a1a1").innerHTML=longer2;
    }
    
}

function pali111(){
    var pal1=document.getElementById("pal1").value;

    document.getElementById("posit").innerHTML=" NOT palindrome";

    if (pal1.charAt(0)==pal1.charAt(3)){
        if (pal1.charAt(1)==pal1.charAt(2)){
         document.getElementById("posit").innerHTML="palindrome";

        }
    }


}




}