# Credex - Credit Card & Coupon Marketplace

Credex is a comprehensive platform that bridges the gap between credit card holders and non-card users while also serving as a marketplace for unused coupons and offers. Our platform enables financial collaboration, resource optimization, and community-building through a secure and user-friendly interface.

## 🌟 Key Features

### Credit Card Offer Sharing
- **P2P Credit Card Transactions**: Card holders pay for non-card users and earn passive income
- **Profit Sharing**: Flexible arrangements between card holders and users
- **Card Offer Discovery**: Browse exclusive credit card offers you couldn't access otherwise

### Coupon Marketplace
- **Unused Coupon Exchange**: Share and discover coupons before they expire
- **Category Filtering**: Find coupons by store, category, or expiration date
- **Instant Notifications**: Get alerts for coupons matching your interests

### Community & Communication
- **Real-time Chat System**: Negotiate terms directly with potential partners
- **In-app Messaging**: Discuss deals and arrangements securely
- **Chat History**: Keep track of all your conversations in one place

### Trust & Safety
- **Comprehensive Rating System**: Rate users after completed transactions
- **Verified User Badges**: Identify trusted community members
- **Complaint Resolution**: Report issues and receive support for disputes
- **Transaction Protection**: Secure payment holding system

### User Experience
- **Personalized Dashboard**: Track your offers, earnings, and saved coupons
- **Activity Feed**: See the latest offers and most active users
- **Mobile Responsiveness**: Access all features seamlessly on any device

## 🛠️ Tech Stack

### Frontend
- **React.js**: Component-based UI development with hooks
- **Redux & Redux Toolkit**: Centralized state management
- **Socket.io Client**: Real-time bidirectional event-based communication
- **Styled Components**: Component-level styling with IBM Plex Mono typography
- **React Router**: Navigation and routing
- **Formik & Yup**: Form handling and validation
- **Chart.js**: Data visualization for transaction analytics

### Backend
- **Node.js**: JavaScript runtime for server-side logic
- **Express**: Web application framework
- **MongoDB**: NoSQL database for flexible data storage
- **Mongoose**: MongoDB object modeling
- **Socket.io**: Real-time communication server
- **JWT**: Stateless authentication
- **Bcrypt**: Secure password hashing
- **Express Rate Limit**: API rate limiting for security
- **Multer**: File uploading for coupon images and verification documents

### Real-time Features
- **Socket.io**: Powers real-time chat, notifications, and live updates
- **Redis**: Message queuing and caching for improved performance
- **Notification Service**: Push and in-app notifications

### DevOps & Deployment
- **Docker & Docker Compose**: Application containerization
- **GitHub Actions**: CI/CD pipeline automation
- **AWS**: Cloud hosting infrastructure
  - EC2 for application hosting
  - S3 for static assets and backups
  - CloudFront for content delivery
  - RDS as database backup option
- **MongoDB Atlas**: Managed MongoDB service
- **Nginx**: Reverse proxy and load balancing
- **PM2**: Process management for Node.js

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16+)
- MongoDB (v5.0+)
- npm or yarn
- Redis (v6+) for caching

### Clone the repository
```bash
git clone https://github.com/your-username/credex.git
cd credex
```

### Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Configure your environment variables
# - MongoDB connection string
# - JWT secret keys
# - Redis connection details
# - Socket.io configuration
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
cp .env.example .env
# Configure your environment variables
# - API endpoints
# - Socket connection
# - Feature flags
npm start
```



## 🧪 Testing

```bash
# Run all tests
npm test

# Run backend unit tests
npm run test:backend

# Run frontend unit tests
npm run test:frontend

# Run integration tests
npm run test:integration

# Run end-to-end tests with Cypress
npm run test:e2e
```


## 📈 Future Roadmap

- [ ] Mobile Applications (iOS & Android)
- [ ] AI-powered offer matching system
- [ ] Advanced fraud detection algorithms
- [ ] Blockchain integration for transaction verification
- [ ] Expanded payment methods and currencies
- [ ] Merchant partnerships and exclusive offers
- [ ] Loyalty program with reward tiers
- [ ] Group deals for collective purchasing power
- [ ] Enhanced analytics for users and admins
- [ ] Public API for third-party integrations

## 👥 Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to your branch: `git push origin feature/amazing-feature`
5. Open a pull request with detailed description

See our [Contributing Guidelines](CONTRIBUTING.md) for more details.

