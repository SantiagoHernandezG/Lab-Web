/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Controlador | `forms.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 18, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Main
function checkTicket() {
    const formDiv = document.getElementById("data-form");
    const code = document.getElementById("codigo");
    // TODO: Validation -> code && code.length === 4
    $.ajax({
        url: `api/users/${code.value}/exists`,
        success: (result) => {
            console.log(result);
            if ("_id" in result)
                // Shows form for Registration
                formDiv.style.visibility = "visible";
            else
                // Redirects to Ticket
                // TODO: Uncomment
                // window.location.href = "/machine";
                // TODO: Delete
                formDiv.style.visibility = "hidden";
        }
    });
}