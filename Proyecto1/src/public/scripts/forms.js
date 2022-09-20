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
    const alert = document.getElementById("form-alert");
    // SOLVED TODO: Validation -> code && code.length === 4
    if (code.value.length === 4) {
        $.ajax({
            url: `api/users/${code.value}/exists`,
            success: (result) => {
                console.log(result);
                if ("_id" in result) {
                    // Shows form for Registration
                    formDiv.style.visibility = "visible";
                    alert.style.display = "none";
                } else {
                    // Redirects to Ticket
                    window.sessionStorage.setItem("ticket", String(result.ticket));
                    // TODO: Uncomment
                    window.location.href = "/machine";
                }
            }
        });
    } else {
        console.log("Not a number");
        alert.style.display = "flex";
    }
}