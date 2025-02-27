// 页面加载时获取并显示用户信息
let userInfo = updateUserInfoClass.getUserInfo();
if (userInfo) {
    document.getElementById('userName').value = userInfo.userVO.userName || '';
    document.getElementById('userPhone').value = userInfo.userVO.userPhone || '';
    document.getElementById('userProfile').value = userInfo.userVO.userProfile || '';
}else {
    console.error('User info not available');
}

// 表单提交事件
document.getElementById('updateProfileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    // 获取表单数据
    const updatedInfo = {
        // userAccount: document.getElementById('userAccount').value,
        userName: document.getElementById('userName').value,
        userPhone: document.getElementById('userPhone').value,
        userProfile: document.getElementById('userProfile').value,
    };
    updateUserInfoClass.onSaveButtonClick(updatedInfo);
});