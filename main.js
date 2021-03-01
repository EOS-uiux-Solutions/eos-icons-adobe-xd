const fs = require("uxp").storage.localFileSystem;
const clipboard = require("clipboard");
let file = ``;
function init() {
    let UI = document.createElement('dialog');
    UI.id = "dialog";
    UI.innerHTML = `
        <style>
            #dialog form {
                width: 360px;
            }
            .h1 {
                align-items: center;
                justify-content: space-between;
                display: flex;
                flex-direction: row;
            }
            .label {display: flex}
        </style>
        <form id="iconDialog" method="dialog">
            <h1 class="h1">
                <span>EOS</span>
            </h1>
            <hr />
            <p>Search for icons from the EOS collection.</p>
            <label>
                <div class="label">
                    <span>Search icons</span>
                </div>
                <input type="text" id="searchInput" placeholder="Search..."/>
            </label>
            <footer>
                <button id="search">Search</button>
                <button id="cancelBtn">Cancel</button>
                <button id="okBtn" type="submit">Copy to Clipboard</button>
            </footer>
        </form>
    `
    document.appendChild(UI)
}


function clearForm() {
    // Clear form
    document.getElementById('searchInput').value = "";
}

async function handleSearch() {
    const request = new XMLHttpRequest();
    const url =
      "https://cdn.jsdelivr.net/npm/eos-icons@latest/svg/" +
      document.getElementById('searchInput').value +
      ".svg";
    request.open("GET", url);
    request.onload = () => {
      console.log(request.response);
      file = request.response;
    };
    request.send();
}

async function handler() {
    let UI = document.getElementById('dialog');
    clearForm();

    document.getElementById('search').addEventListener('click', handleSearch);
    document.getElementById('cancelBtn').addEventListener('click', () => {
        UI.close('reasonCanceled')
    });

    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        UI.close("ok");
    });

    document.getElementById("okBtn").addEventListener("click", e => {
        e.preventDefault();
        UI.close("ok");
    });

    let response = await UI.showModal();
    if(response === 'ok') {
        clipboard.copyText(file);
    }
}

init()

module.exports = {
    commands: {
        chooseIcon: handler
    }
}