import axios from '@ohos/axios';
import { promptAction } from '@kit.ArkUI'

function showTab(tabId) {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => form.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[tabId === 'login' ? 0 : 1].classList.add('active');
}

// 处理登录
function handleLogin(event) {
    event.preventDefault();
    const userAccount = document.getElementById('userAccount').value;
    const userPassword = document.getElementById('userPassword').value;

    // 调用 api.ts 中的 userLogin 函数
    userLogin({ userAccount, userPassword })
        .then(response => {
            if (response.success) {
                window.location.href = '/dashboard'; // 登录成功后跳转
            } else {
                alert(response.message || '登录失败，请重试');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('登录失败，请重试');
        });

    // fetch('/api/user/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         userAccount,
    //         userPassword
    //     })
    // })
    //     .then(response => response.json())
    //     .then(result => {
    //         if (result.success) {
    //             window.location.href = '/dashboard'; // 登录成功后跳转
    //         } else {
    //             alert(result.message || '登录失败，请重试');
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //         alert('登录失败，请重试');
    //     });
}

// 处理注册
function handleRegister(event) {
    event.preventDefault();
    const registerAccount = document.getElementById('registerAccount').value;
    const registerPassword = document.getElementById('registerPassword').value;
    const checkPassword = document.getElementById('checkPassword').value;

    if (registerPassword !== checkPassword) {
        alert('两次输入的密码不一致，请重新输入');
        return;
    }

    fetch('/api/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userAccount: registerAccount,
            userPassword: registerPassword,
            checkPassword: checkPassword
        })
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert('注册成功，请登录');
                showTab('login'); // 注册成功后切换到登录页面
            } else {
                alert(result.message || '注册失败，请重试');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('注册失败，请重试');
        });
}