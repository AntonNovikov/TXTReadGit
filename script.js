document.querySelector("#input").addEventListener("change", openFile);
function openFile(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function () {
    var text = reader.result;
    document.querySelector("#output").textContent = text;
    console.log(text);
  };
  reader.readAsText(input.files[0]);
}
