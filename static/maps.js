// Welcome to the source code! :)
// This JavaScript has comments to help you understand how it works.
// For further explanation, try the links at the bottom of the page!

var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var fonts = [120432, 120380, 120328, 120276, 120224, 120172, 120016, 119912, 119808];

function copy(target) {
    // Create a "hidden" input
    var aux = document.createElement("input");
    // Assign it the value of the specified element
    aux.setAttribute("value", target);
    // Append it to the body
    document.body.appendChild(aux);
    // Highlight its content
    aux.select();
    // Copy the highlighted text
    document.execCommand("copy");
    // Remove it from the body
    document.body.removeChild(aux);
}

function convert(font, string) {
    let converted = [];
    // Break string into substrings
    let arr = string.split('');
    // Search alpha for indexes
    arr.forEach(element => {
        let i = alpha.indexOf(element);
        if (i == -1) {
            // Return as is
            converted.push(element);
        } else {
            // Get relevant character from unicode var + index
            let unicode = font + i;
            // Return as HTML code
            converted.push('&#' + unicode + ';');
        }

    });
    display(converted);
}

function display(converted) {
    // Join string of new unicode characters
    newString = converted.join('');
    const grid = document.querySelector('.grid');
    // Add new characters to the grid
    grid.innerHTML += '<div class="item" id="result">' + newString + '</div>';
}

function clearGrid() {
    // Empty the grid when the page loads
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';
}

document.addEventListener( 'DOMContentLoaded', function () {

    document.querySelector('.grid').onclick = function (event) {
        var target = event.target.innerHTML;
        copy(target);
        event.target.innerHTML = '<span class="alert">Copied!</span>';
        setTimeout(() => {
            event.target.innerHTML = target;
        }, 600);
    };

    document.getElementById('string').oninput = function (event) {
        clearGrid();
        let string = document.querySelector('#string').value
        fonts.forEach(startingIndex => {
            convert(startingIndex, string)
        });
    };

}, false );