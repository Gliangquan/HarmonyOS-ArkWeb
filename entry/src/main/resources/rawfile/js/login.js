function showTab(tabName) {
    document.querySelectorAll('.form').forEach(form => form.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab[onclick="showTab('${tabName}')"]`).classList.add('active');
}

// 处理登录
function handleLogin(event) {
    event.preventDefault();
    const userPhone = document.getElementById('userPhone').value;
    const userPassword = document.getElementById('userPassword').value;

    loginUserClass.onLogin(JSON.stringify({ userPhone, userPassword }));
}

// 处理注册
function handleRegister(event) {
    event.preventDefault();

    const userPhone = document.getElementById('registerPhone').value;
    const userPassword = document.getElementById('registerPassword').value;
    const checkPassword = document.getElementById('checkPassword').value;

    const buildingNumber = document.getElementById('buildingNumber').value;
    const unitNumber = document.getElementById('unitNumber').value;
    const floorNumber = document.getElementById('floorNumber').value;
    const roomNumber = document.getElementById('roomNumber').value;

    const userAccount = `${buildingNumber}-${unitNumber}-${floorNumber}-${roomNumber}`;

    const registerData = {
        userAccount,
        userPhone,
        userPassword,
        checkPassword,
    };

    loginUserClass.onRegister(JSON.stringify(registerData));
}