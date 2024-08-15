---

# CyberPass-A Notion Clone 🚀

This project is a full-featured Notion clone that offers real-time collaboration and a rich user experience. Built with the latest technologies, this application provides an intuitive platform for note-taking, task management, and project collaboration.

## Features

### ✨ Core Features

- **🤯 Real-time Cursors**: See where your collaborators are working in real-time.
- **📝 Real-time Text Selection**: Watch as others highlight text, all in real-time.
- **⏱️ Real-time Database and Collaboration**: Keep your data in sync with real-time updates.
- **🟢 Real-time Presence**: Know who's online and active in your workspace.
- **🗑️ Move to Trash Functionality**: Soft-delete items with an easy move-to-trash option.
- **😜 Custom Emoji Picker**: Express yourself with a custom emoji picker.
- **🌙 Light Mode/Dark Mode**: Switch between light and dark themes for a comfortable viewing experience.
- **🚨 Next.js 13 App Router**: Utilizing Next.js 13 for optimized routing and performance.

### 🛠️ Advanced Features

- **🗺️ Creating Free Plan Restrictions**: Implement restrictions for users on a free plan.
- **💰 Monthly Payments**: Set up recurring monthly payments for premium features.
- **📧 Custom Email 2FA Invitation**: Enhance security with two-factor authentication via email.
- **⚡️ Supabase Row Level Policy**: Secure your data with row-level policies using Supabase.
- **👨‍👨‍👧‍👦 Real-time Collaboration**: Work together with others simultaneously in real-time.
- **👾 Deployment**: Deploy the application to production with ease.
- **🤑 Custom Rich Text Editor**: A powerful, customizable rich text editor for advanced formatting.
- **📚 Update Profile Settings**: Users can manage and update their profile settings.
- **📍 Manage Payments in a Portal**: Handle payments and subscriptions through a user-friendly portal.
- **🔐 Custom Authentication**: Secure login with a custom authentication system.
- **✳️ Websockets**: Enable real-time communication using Websockets.
- **📣 Optimistic UI**: Smooth, instant feedback for actions, even before they're completed on the server.
- **📱 Responsive Design**: Fully responsive design for seamless use across devices.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account
- Stripe account (for handling payments)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/notion-clone.git
   cd notion-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory and add your environment variables:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
     DATABASE_URL=your-database-url
     STRIPE_SECRET_KEY=your-stripe-secret-key
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### Deployment

To deploy the application, you can use platforms like Vercel, Netlify, or your preferred hosting service. Ensure that you set the appropriate environment variables in your hosting environment.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to [Supabase](https://supabase.com/) for their awesome backend services.
- Big shoutout to [Next.js](https://nextjs.org/) for making full-stack development easier.
- Special thanks to the open-source community for their contributions and support.

---

