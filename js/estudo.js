function switchBtt(){
    var txt = document.getElementById('js').value;

    if (txt = 'HTML') {
        document.getElementById('js').innerHTML = 'JS'
    }
    else {
        document.getElementById('js').innerHTML = 'HTML'
    }
}