const params = new URLSearchParams(window.location.search);
// thankName = params.get('name');
// thankEmail = params.get('email')

// document.getElementById('thankName').innerHTML = thankName;
// console.log(thankName)
// console.log(thankEmail)

params.forEach((value, key) => {
    
    if(key == 'name' ){
        document.getElementById('thankName').innerHTML = value;
    }
    else if(key == 'email'){
        document.getElementById('thankName').innerHTML = value.slice(0, value.indexOf('@'));
    }
    
    
    // text.append(document.createElement('br'))
})