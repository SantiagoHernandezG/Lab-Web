function checkTicket() {
    var formDiv = document.getElementById("data-form");
    var code = document.getElementById("codigo");
    $.ajax({
        dataType: "json", url: `api/users/${code.value}/exists`,
        success: function(result){
            console.log(result);
            //return result.text() === "true";
        }
    })
    //Check in the API controller if the data from this ticket is empty
}