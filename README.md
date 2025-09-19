# Task Management REST API

A simple Node.js REST API for managing tasks built with Express.js following MVC architecture pattern. The API provides full CRUD operations for task management with input validation and error handling.

## 🚀 Features

- ✅ **Complete CRUD Operations**: Create, Read, Update, Delete tasks
- ✅ **Input Validation**: Ensures required fields and data types
- ✅ **Error Handling**: Proper HTTP status codes and error messages
- ✅ **MVC Architecture**: Organized code structure with separation of concerns
- ✅ **In-Memory Storage**: Easy to replace with database later
- ✅ **Jest Testing**: Unit tests for API endpoints
- ✅ **Auto-generated IDs**: UUID-based unique identifiers

## 📁 Project Structure

```
reto-tecnico/
├── controllers/
│   └── taskController.js    # HTTP request handlers
├── models/
│   └── Task.js             # Task data model
├── routes/
│   └── taskRoutes.js       # API route definitions
├── services/
│   └── taskService.js      # Business logic layer
├── tests/
│   └── task.test.js        # Jest test suite
├── endpoind.http           # REST client examples
├── server.js               # Express server setup
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Jest** - Testing framework
- **Supertest** - HTTP endpoint testing
- **Body-parser** - JSON request parsing
- **Nodemon** - Development auto-restart

## 📦 Installation

1. **Clone or download the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🚀 Running the Application

### Development Mode (with auto-restart)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000`

## 🧪 Running Tests

Run the Jest test suite:
```bash
npm test
```

## 📚 API Endpoints

### Base URL
```
http://localhost:3000
```

### Create a Task
**POST** `/task`

Creates a new task with auto-generated ID.

**Request Body:**
```json
{
  "title": "Buy groceries"
}
```

**Success Response (201):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Buy groceries",
  "completed": false
}
```

**Error Response (400):**
```json
{
  "error": "Title is required and cannot be empty"
}
```

### Get All Tasks
**GET** `/task`

Retrieves all tasks.

**Success Response (200):**
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Buy groceries",
    "completed": false
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "title": "Clean the house",
    "completed": true
  }
]
```

### Get Task by ID
**GET** `/task/:id`

Retrieves a specific task by its ID.

**Success Response (200):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Buy groceries",
  "completed": false
}
```

**Error Response (404):**
```json
{
  "error": "Task not found"
}
```

### Update Task
**PUT** `/task/:id`

Updates task title and/or completed status.

**Request Body (at least one field required):**
```json
{
  "title": "Buy groceries and cook dinner",
  "completed": true
}
```

**Success Response (200):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Buy groceries and cook dinner",
  "completed": true
}
```

**Error Responses:**
- **400**: Invalid input or empty title
- **404**: Task not found

### Delete Task
**DELETE** `/task/:id`

Deletes a task by its ID.

**Success Response (200):**
```json
{
  "message": "Task deleted successfully",
  "task": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Buy groceries",
    "completed": false
  }
}
```

**Error Response (404):**
```json
{
  "error": "Task not found"
}
```

## 🧪 Testing Examples

### Using REST Client (VS Code Extension)
Use the provided `endpoind.http` file with VS Code's REST Client extension.

### Using curl

**Create Task:**
```bash
curl -X POST http://localhost:3000/task \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Node.js"}'
```

**Get All Tasks:**
```bash
curl http://localhost:3000/task
```

**Get Task by ID:**
```bash
curl http://localhost:3000/task/550e8400-e29b-41d4-a716-446655440000
```

**Update Task:**
```bash
curl -X PUT http://localhost:3000/task/550e8400-e29b-41d4-a716-446655440000 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

**Delete Task:**
```bash
curl -X DELETE http://localhost:3000/task/550e8400-e29b-41d4-a716-446655440000
```

## 🔧 Data Model

### Task Object
```javascript
{
  id: string,        // Auto-generated UUID
  title: string,     // Task description (required, non-empty)
  completed: boolean // Completion status (default: false)
}
```

## 🏗️ Architecture Overview

### MVC Pattern Implementation

1. **Model** (`models/Task.js`): Defines the data structure
2. **View**: JSON responses (handled by Express)
3. **Controller** (`controllers/taskController.js`): Handles HTTP requests/responses
4. **Service** (`services/taskService.js`): Contains business logic
5. **Routes** (`routes/taskRoutes.js`): Defines API endpoints

### Data Flow
```
Request → Routes → Controller → Service → Model → Response
```

## 🔮 Future Enhancements

- **Database Integration**: Replace in-memory array with MongoDB/PostgreSQL
- **Authentication**: Add JWT-based user authentication
- **Pagination**: Implement pagination for large task lists
- **Filtering**: Add query parameters for filtering tasks
- **Validation Middleware**: Enhance input validation with libraries like Joi
- **Logging**: Add request/response logging
- **Rate Limiting**: Implement API rate limiting
- **Documentation**: Add Swagger/OpenAPI documentation

## 📝 Development Notes

- **In-Memory Storage**: Current implementation uses an array for simplicity
- **UUID Generation**: Uses Node.js built-in `crypto.randomUUID()`
- **Error Handling**: Comprehensive error responses with appropriate HTTP codes
- **Testing**: Jest tests cover main functionality and edge cases

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the ISC License.