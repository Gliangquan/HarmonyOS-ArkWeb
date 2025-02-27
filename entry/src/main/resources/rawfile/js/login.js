function showTab(tabName) {
    document.querySelectorAll('.form').forEach(form => form.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab[onclick="showTab('${tabName}')"]`).classList.add('active');
}

// 处理登录
function handleLogin(event) {
    event.preventDefault();
    const userAccount = document.getElementById('userAccount').value;
    const userPassword = document.getElementById('userPassword').value;

    loginUserClass.onLogin(JSON.stringify({ userAccount, userPassword }));
}

// 处理注册
function handleRegister(handleRegister) {
    event.preventDefault();
    const userAccount = document.getElementById('registerAccount').value;
    const userPassword = document.getElementById('registerPassword').value;
    const checkPassword = document.getElementById('checkPassword').value;

    loginUserClass.onRegister(JSON.stringify({ userAccount, userPassword,checkPassword }));

}