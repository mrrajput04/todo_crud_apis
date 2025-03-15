# 📌 Todo API

A simple and robust **Todo API** built with **Node.js** and **Express**, providing full CRUD operations for managing tasks, along with user authentication, including **sign-up, login, and password reset functionality via email**.

## 🚀 Features

- 📝 **CRUD operations** for managing todos (Create, Read, Update, Delete)
- 🔐 **User Authentication** (Register, Login, Logout)
- ✉️ **Password Reset** via email
- 🛡️ Secure API using **JWT Authentication**
- 🏷 **Tag Management** for todos
- 📄 API Documentation with Swagger (if implemented)

---

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mrrajput04/todo_api.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-repo-name
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

---

## 🔧 Configuration

1. Create a `.env` file in the project root and configure the necessary environment variables:
   ```env
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/todo-db
   JWT_SECRET=your_jwt_secret
   MAIL_HOST=smtp.example.com
   MAIL_USER=your_email@example.com
   MAIL_PASSWORD=your_email_password
   ```

2. Start the server:
   ```sh
   npm start
   ```

The API will be available at `http://localhost:3000`.

---

## 🔍 API Endpoints

### **Auth Routes**
| Method | Endpoint                 | Description                         |
|--------|---------------------------|-------------------------------------|
| GET    | `/`                        | API Status Check                   |
| POST   | `/register`                | Register a new user                |
| POST   | `/login`                   | Authenticate user                  |
| POST   | `/forgot-password`         | Request password reset             |
| POST   | `/otp-verification`        | Verify OTP for password reset      |
| PUT    | `/verify-reset-password`   | Reset password (requires token)    |
| POST   | `/access-token-generate`   | Generate new access token          |
| GET    | `/verify:email`            | Verify user email                  |

### **Todo Routes**
| Method | Endpoint         | Description               |
|--------|-----------------|---------------------------|
| POST   | `/addTodo`      | Create a new todo        |
| POST   | `/completeTodo` | Mark a todo as complete  |
| GET    | `/showTodo`     | Get specific user todos  |
| GET    | `/all-todo`     | Get all todos            |
| PUT    | `/updateTodo`   | Update an existing todo  |
| DELETE | `/deleteTodo`   | Delete a todo            |

### **Tags Routes**
| Method | Endpoint       | Description              |
|--------|---------------|--------------------------|
| POST   | `/addTags`    | Create new tags          |
| GET    | `/allTags`    | Retrieve all tags        |
| GET    | `/showTag`    | Get specific tag details |
| PUT    | `/updateTag`  | Update an existing tag   |
| DELETE | `/deleteTag`  | Delete a tag             |

---

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB / PostgreSQL** - Database
- **JWT (JSON Web Token)** - Authentication
- **Nodemailer** - Email handling for password reset

---

## 🛡 Security Considerations
- Passwords are securely hashed using **bcrypt**.
- Authentication is handled using **JWT tokens**.
- Protected routes require authentication.

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to your branch: `git push origin feature-branch`
5. Open a Pull Request.

---

## 📞 Contact
For any inquiries, reach out to **rajpootdivesh5@example.com** or open an issue in the repository.

Happy coding! 🚀