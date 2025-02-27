// 用户管理
function adminUser() {
    try {
        appBridge.adminUser(); // 调用用户管理功能
    } catch (error) {
        console.error('Failed to execute adminUser:', error);
    }
}

// 报修管理
function adminRepair() {
    try {
        appBridge.adminRepair(); // 调用报修管理功能
    } catch (error) {
        console.error('Failed to execute adminRepair:', error);
    }
}

// 账单管理
function adminBilling() {
    try {
        appBridge.adminBilling(); // 调用账单管理功能
    } catch (error) {
        console.error('Failed to execute adminBilling:', error);
    }
}

// 公告和留言管理
function adminAnno() {
    try {
        appBridge.adminAnno(); // 调用公告和留言管理功能
    } catch (error) {
        console.error('Failed to execute adminAnno:', error);
    }
}

// 缴费管理
function adminPayment() {
    try {
        appBridge.adminPayment(); // 调用缴费管理功能
    } catch (error) {
        console.error('Failed to execute adminPayment:', error);
    }
}