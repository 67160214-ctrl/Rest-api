// POST /register - สมัครสมาชิก
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // TODO: Hash password ด้วย bcrypt & เซฟข้อมูลลง Database
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// POST /login - เข้าสู่ระบบ
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // TODO: ตรวจสอบ username, password และสร้าง accessToken / refreshToken
    return res.status(200).json({
      accessToken: 'MOCK_ACCESS_TOKEN',
      refreshToken: 'MOCK_REFRESH_TOKEN'
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// POST /logout - ออกจากระบบ
exports.logout = async (req, res) => {
  try {
    // TODO: ลบ Refresh Token ออกจาก Database หรือใส่ Token ไว้ใน Blacklist
    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// POST /change-password - เปลี่ยนรหัสผ่าน
exports.changePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { oldPassword, newPassword } = req.body;
    // TODO: ตรวจสอบ oldPassword และอัปเดตเป็น newPassword
    return res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// POST /refresh-token - ต่ออายุ Access Token
exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    // TODO: ตรวจสอบ Refresh Token และออก Access Token ใบใหม่
    return res.status(200).json({ accessToken: 'NEW_MOCK_ACCESS_TOKEN' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// POST /forgot-password - ขอลิงก์/OTP สำหรับรีเซ็ตรหัสผ่าน
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    // TODO: สร้าง Reset Token แล้วส่งผ่าน Email
    return res.status(200).json({ message: 'Reset password link sent to email' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// POST /reset-password - ยืนยันตั้งรหัสผ่านใหม่
exports.resetPassword = async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body;
    // TODO: ตรวจสอบ resetToken และอัปเดต password ใหม่
    return res.status(200).json({ message: 'Password has been reset' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// POST /verify-email - ยืนยันอีเมลหลังสมัคร
exports.verifyEmail = async (req, res) => {
  try {
    const { verificationCode } = req.body;
    // TODO: ตรวจสอบโค้ดแล้วอัปเดตสถานะ isVerified เป็น true
    return res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};