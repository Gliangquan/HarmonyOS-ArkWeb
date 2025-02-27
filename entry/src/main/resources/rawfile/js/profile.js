window.onload = function() {
    let userInfo = appBridge.getUserInfo();
    if (userInfo) {
        document.getElementById('userAccount').innerText = userInfo.userAccount || 'N/A';
        document.getElementById('userName').innerText = userInfo.userName || 'N/A';
    } else {
        console.error('User info not available');
    }
};

// 修改个人信息
function updateProfile() {
    try {
        appBridge.updateProfile(); // 调用应用侧注册的函数
    } catch (error) {
        console.error('Failed to update profile:', error);
    }
}

// 退出登录
function logout() {
    try {
        appBridge.logout(); // 调用应用侧注册的函数
    } catch (error) {
        console.error('Failed to logout:', error);
    }
}