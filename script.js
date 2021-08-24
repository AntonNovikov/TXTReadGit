document.querySelector('#inputfile').addEventListener('change',function(){
    let fr = new FileReader();
    fr.onload = function(){
        document.querySelector('#output').textContent = fr.result;
    }
    fr.readAsText(this.file[0]);
})