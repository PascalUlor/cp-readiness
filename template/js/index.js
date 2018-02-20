const pass = () => {
    let input = document.querySelector('#search-box').value;
    if(input.trim() ==='') {
        alert('Enter a search in the field');
    }
    alert(input);
}

