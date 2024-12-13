document.getElementById('show-search-button').addEventListener('click', function () {
    document.getElementById('search-container').style.display = 'flex';
});

document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-input').value;
    alert('Ваш поисковый запрос: ' + query);
    document.getElementById('search-container').style.display = 'none'; 
});

document.getElementById('scrollButton').addEventListener('click', function () { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); });


document.getElementById('send').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Email ${email} has been submitted!`);
    } else {
        alert('Please enter a valid email address.');
    }
});
