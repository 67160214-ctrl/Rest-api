// GET /me - ดึงข้อมูลตัวเอง
exports.getMe = async (req, res) => {
  try {
    const userId = req.user.id;
    // TODO: ดึงข้อมูลผู้ใช้จาก ID
    return res.status(200).json({ id: userId, username: req.user.username });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// PUT /me - แก้ไขข้อมูลโปรไฟล์ตัวเอง
exports.updateMe = async (req, res) => {
  try {
    const userId = req.user.id;
    const updateData = req.body;
    // TODO: แก้ไขข้อมูลของตัวเอง
    return res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// POST /me/avatar - อัปโหลดรูปโปรไฟล์
exports.uploadAvatar = async (req, res) => {
  try {
    // TODO: รับไฟล์ผ่าน multer แล้วเซฟลง Cloud / Server
    return res.status(200).json({ avatarUrl: 'https://example.com/avatar.jpg' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// GET /check-username/:name - ตรวจสอบ username ว่างไหม
exports.checkUsername = async (req, res) => {
  try {
    const { name } = req.params;
    // TODO: ค้นหาใน DB ว่ามี name นี้หรือยัง
    const isAvailable = true; 
    return res.status(200).json({ username: name, isAvailable });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// GET /users - ดึงข้อมูล user ทั้งหมด (pagination)
exports.getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    // TODO: Query ดึงแบบ Pagination (LIMIT, OFFSET)
    return res.status(200).json({ page, limit, total: 100, data: [] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// GET /users/:id - ดึงข้อมูล user รายคน
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    // TODO: ดึงข้อมูล user ตาม id
    return res.status(200).json({ id, username: 'sample_user' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// PUT /users/:id - แก้ไขข้อมูล user (สำหรับ Admin)
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    // TODO: อัปเดตข้อมูล user โดย Admin
    return res.status(200).json({ message: `User ${id} updated` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// DELETE /users/:id - ลบ user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    // TODO: ลบข้อมูล user ออกจาก DB
    return res.status(200).json({ message: `User ${id} deleted` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// PATCH /users/:id/status - เปิด/ปิดการใช้งาน หรือ Ban ผู้ใช้ (สำหรับ Admin)
exports.updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // 'ACTIVE', 'INACTIVE', 'BANNED'
    // TODO: อัปเดตสถานะการใช้งาน
    return res.status(200).json({ message: `User status changed to ${status}` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// PATCH /users/:id/role - เปลี่ยนสิทธิ์ผู้ใช้งาน (สำหรับ Admin)
exports.updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body; // 'USER', 'ADMIN'
    // TODO: อัปเดต Role
    return res.status(200).json({ message: `User role changed to ${role}` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};