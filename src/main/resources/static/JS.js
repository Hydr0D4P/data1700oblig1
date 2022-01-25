// Empty array outside the functions to prevent overwrites
let billetter = [];

function bestillBillett(){

    // defines all the variables from the input fields
    const antall = document.getElementById("nbrBillet").value;
    const film = document.getElementById("film").value;
    const fnavn = document.getElementById("fnavn").value;
    const enavn = document.getElementById("enavn").value;
    const tlf = document.getElementById("tlf").value;
    const epost = document.getElementById("epost").value;

    // making sure all the error messages are hidden incase they were fixed
    document.getElementById("filmerror").style.display = "none";
    document.getElementById("antallerror").style.display = "none";
    document.getElementById("fnavnerror").style.display = "none";
    document.getElementById("enavnerror").style.display = "none";
    document.getElementById("tlferror").style.display = "none";
    document.getElementById("eposterror").style.display = "none";


    //Checks every box to make sure they have content. Could use else here but simply having a return instead prevents issues, and makes it look cleaner
    let isfieldinvalid = 0;
    if (film == null || film == "Velg film her") {
        document.getElementById("filmerror").style.display = "block";
        isfieldinvalid = 1;
    }
    if (antall == null || antall == "" || antall <= 0) {
        document.getElementById("antallerror").style.display = "block";
        isfieldinvalid = 1;
    }
    if (fnavn == null || fnavn == "") {
        document.getElementById("fnavnerror").style.display = "block";
        isfieldinvalid = 1;
    }
    if (enavn == null || enavn == "") {
        document.getElementById("enavnerror").style.display = "block";
        isfieldinvalid = 1;
    }
    if (tlf == null || tlf == "") {
        document.getElementById("tlferror").style.display = "block";
        isfieldinvalid = 1;
    }
    if (epost == null || epost == "") {
        document.getElementById("eposterror").style.display = "block";
        isfieldinvalid = 1;
    }
    if (Boolean(isfieldinvalid)){
        return;
    }

    // Creating a billett object to push into the array
    const billett = {film:film, antall:antall, fnavn:fnavn, enavn:enavn, tlf:tlf, epost:epost}
    billetter.push(billett)

    // We will then empty the array "Billetter" of all its objects "Billett" properties onto a string called "billetteroutput". eg. object.property. Could use stringify here but I dont remember if we went through it.
    let billetteroutput = "";
    for (i = 0; i < billetter.length;){
        billetteroutput += billetter[i].film + " " + billetter[i].antall + " " + billetter[i].fnavn + " " + billetter[i].enavn + " " + billetter[i].tlf + " " + billetter[i].epost + "<br>";
        i++;
    }
    //Changes our html element to our string
    document.getElementById("output").innerHTML = billetteroutput;

    //Clears our inputs
    document.getElementById("nbrBillet").value = "";
    document.getElementById("film").value = "Velg film her";
    document.getElementById("fnavn").value = "";
    document.getElementById("enavn").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("epost").value = "";

}

// clears the array and the HTML output element.
function resetBillett(){
    billetter = [];
    document.getElementById("output").innerHTML = "";
}