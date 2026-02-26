# 🌱 FoodWaste Manager

A modern web application designed to help individuals and businesses track, manage, and reduce food waste. FoodWaste Manager provides users with tools to monitor their food waste patterns, receive personalized recommendations, and make a positive environmental impact.

## 🎯 Project Overview

FoodWaste Manager is a full-featured food waste management platform built with Next.js and React. The application helps users:

- **Track Food Waste**: Monitor daily food waste with detailed reports
- **Identify Patterns**: Understand your waste habits and their causes
- **Get Smart Tips**: Receive AI-powered recommendations to reduce waste
- **Measure Impact**: See your environmental and financial benefits
- **Join a Community**: Connect with thousands of users making a difference

## ✨ Key Features

### 1. **User Authentication**
   - Secure signup and login system
   - Email-based authentication
   - Password validation and security

### 2. **Dashboard**
   - Real-time food waste tracking
   - Visual analytics and charts
   - Daily/weekly/monthly reports

### 3. **Smart Recommendations**
   - Personalized tips based on waste patterns
   - Evidence-based strategies to reduce waste
   - Seasonal recommendations

### 4. **Impact Tracking**
   - Environmental impact statistics
   - Money saved calculations
   - CO2 emissions prevented
   - Community leaderboard

### 5. **User Profile**
   - Personal settings and preferences
   - Household information
   - Waste reduction goals

## 🛠 Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) 16.1.6
- **UI Library**: [React](https://react.dev/) 19.2.3
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5
- **Build Tool**: Next.js built-in
- **Package Manager**: npm

## 📦 Project Structure

```
foodwastemanagement/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx          # Login page
│   │   └── signup/
│   │       └── page.tsx          # Signup page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── LoginForm.tsx             # Login form component
│   ├── SignupForm.tsx            # Signup form component
│   └── Navbar.tsx                # Navigation bar
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.ts                # Next.js config
├── tailwind.config.ts            # Tailwind config
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd foodwastemanagement
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application

### Build for Production

```bash
npm run build
npm start
```

## 📖 Usage Guide

### Home Page
- Browse the main landing page with features and statistics
- Click "Get Started Free" to create an account
- Click "Login" if you already have an account

### Signup
- Navigate to `/auth/signup`
- Enter your full name, email, and password
- Password must be at least 6 characters
- Confirm your password and click "Create Account"

### Login
- Navigate to `/auth/login`
- Enter your email and password
- Click "Login" to access your account
- (Demo mode: Use any email/password combination)

### Navigation
- Use the top navbar to access Login/Signup
- Click the FoodWaste Manager logo to return to home

## 🎨 Pages

### 1. **Home Page** (`/`)
   - Landing page with value proposition
   - Feature highlights
   - Impact statistics
   - Call-to-action buttons

### 2. **Login Page** (`/auth/login`)
   - User login form
   - Email and password inputs
   - Link to signup page
   - Demo mode support

### 3. **Signup Page** (`/auth/signup`)
   - User registration form
   - Full name, email, and password fields
   - Password confirmation
   - Terms acceptance
   - Link to login page

## 🎨 Design Features

- **Responsive Design**: Mobile-friendly, works on all devices
- **Modern UI**: Clean and intuitive user interface
- **Accessibility**: Semantic HTML and WCAG compliance
- **Green Theme**: Earthy green color scheme reflecting environmental focus
- **Tailwind CSS**: Utility-first CSS for rapid development

## 🔒 Security Features (Demo)

- Client-side form validation
- Password strength requirements
- Email format validation
- Secure input handling

*Note: This is a demo application. For production, integrate with a proper backend authentication system (e.g., NextAuth.js, Firebase, JWT tokens).*

## 🔄 Available Scripts

```bash
# Development
npm run dev              # Start development server

# Production
npm run build            # Build for production
npm start                # Start production server

# Linting
npm run lint             # Run ESLint
```

## 📱 Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Landing page with features and CTAs |
| Login | `/auth/login` | User authentication |
| Signup | `/auth/signup` | User registration |

## 🚧 Future Features

- [ ] Dashboard with waste analytics
- [ ] Food inventory management
- [ ] Recipe suggestions to use leftover food
- [ ] Community forum and tips sharing
- [ ] Mobile app (React Native)
- [ ] Integration with local composting services
- [ ] Carbon footprint calculator
- [ ] Donation tracking to food banks
- [ ] Multi-language support
- [ ] Social sharing and achievements
- [ ] Email notifications and reminders
- [ ] Backend API with database integration

## 🔐 Authentication System (Next Steps)

To transition from demo mode to production:

1. **Backend Setup**
   - Create API routes in `/app/api`
   - Implement user registration endpoint
   - Implement login endpoint with JWT tokens

2. **Database**
   - Set up PostgreSQL or MongoDB
   - Create user schema
   - Implement user repository

3. **Authentication Middleware**
   - Create authentication middleware
   - Implement protected routes
   - Add session management

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **FoodWaste Manager Team**
- Created: February 2026

## 📞 Support

For support, email support@foodwastemanager.com or open an issue on GitHub.

## 🌍 Environmental Impact

Every small action counts. By using FoodWaste Manager, you're contributing to:
- Reducing methane emissions from landfills
- Conserving water and agricultural resources
- Supporting sustainable food systems
- Building a more conscious community

---

**Made with 💚 for a more sustainable future**
 
 