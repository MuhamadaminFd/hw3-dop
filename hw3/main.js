document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let nameInput = document.getElementById('name');
    let passwordInput = document.getElementById('password');
    

    if (nameInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Пожалуйста, заполните все поля корректно.');
        return;
    }
    
    let formData = new FormData(this);
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Успешно отправлено:', data);

    })
    .catch(error => {
        console.error('Ошибка:', error);

    });
});
