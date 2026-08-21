const jwt = require('jsonwebtoken');

// ตรวจสอบ Login / Access Token
exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ message: 'Access Token Required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
    
    // ตรวจสอบว่าผู้ใช้ถูกระงับสิทธิ์หรือไม่
    if (decoded.status === 'INACTIVE' || decoded.status === 'BANNED') {
      return res.status(403).json({ message: 'Your account has been suspended' });
    }

    req.user = decoded; // เก็บข้อมูลผู้ใช้ไว้ใน req
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or Expired Token' });
  }
};

// ตรวจสอบว่าเป็น Admin หรือไม่
exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'ADMIN') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied: Admin role required' });
  }
};