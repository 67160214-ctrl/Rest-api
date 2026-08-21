const express = require('express');
const app = express();

app.use(express.json());

// Import Routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

// Mount Routes
app.use('/', authRoutes);        // Route Auth ทั้งหมด เช่น /login, /register
app.use('/users', userRoutes);   // Route User ทั้งหมด เช่น /users, /users/:id

// รวมการดึง /me ไว้กับ /users
// หมายเหตุ: /me จะถูกมองเป็น /users/me หรือถ้านำไปต่อ root จะเป็น /me
app.use('/', userRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});