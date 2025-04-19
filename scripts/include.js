
// --- Keep your working includeHTML function ---
function includeHTML(attributeName) {
    let elements, i, element, file, xhttp;
    elements = document.querySelectorAll(`[${attributeName}]`);
    for (i = 0; i < elements.length; i++) {
        element = elements[i];
        file = element.getAttribute(attributeName);
        if (file) {
            // --- Use a closure to capture the correct 'element' for each request ---
            (function(currentElement) {
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            currentElement.innerHTML = this.responseText;
                        }
                        if (this.status == 404) {
                            currentElement.innerHTML = "Page not found.";
                        }
                        currentElement.removeAttribute(attributeName);
                        // Recursive call removed - generally better to call once after initial load
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
            })(element); // Pass the current element into the closure
        }
    }
    // return; // Not needed at the end of the function
}


// --- CORRECTED showmenu function ---
function showmenu(menuId) { // Changed parameter name for clarity (optional)
    // Use the 'menuId' argument passed to the function
    var x = document.getElementById(menuId);

    // Check if the element was actually found
    if (!x) {
        console.error("Element with ID '" + menuId + "' not found for showmenu.");
        return; // Stop if the element doesn't exist
    }

    // Toggle the w3-show class
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show"; // Add the class
    } else {
        // Remove the class carefully
        x.className = x.className.replace(" w3-show", ""); // Handle space before
        x.className = x.className.replace("w3-show", "");  // Handle no space before
    }
}
