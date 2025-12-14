# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
```bash
cp .env.example .env
```

Edit `.env` and add your Firebase credentials and WhatsApp number.

### 3. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📱 Pages Available

### Public Pages
- **Home**: `/` - Landing page with featured sarees
- **Sarees**: `/sarees` - Browse all sarees with filters
- **Saree Detail**: `/sarees/1` - View individual saree details
- **About**: `/about` - About the boutique
- **Contact**: `/contact` - Contact information and map

### Admin Pages
- **Login**: `/admin/login` - Admin authentication
- **Dashboard**: `/admin/dashboard` - Admin overview
- **Manage Sarees**: `/admin/sarees` - CRUD operations

## 🎨 Customization

### Update Business Information
Edit these files:
- `components/footer.tsx` - Contact details
- `app/contact/page.tsx` - Location and hours
- `.env` - WhatsApp number

### Change Colors
Edit `app/globals.css` and components to update:
- Primary: `amber-700`, `amber-800`
- Use Find & Replace to change to your brand colors

### Add Real Images
1. Add saree images to `public/sarees/`
2. Update image paths in the mock data
3. Or set up Firebase Storage for dynamic images

## 🔥 Firebase Setup (Optional but Recommended)

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable these services:
   - **Authentication** → Email/Password
   - **Firestore Database** → Start in test mode
   - **Storage** → Start in test mode
4. Copy your config to `.env`

### Firestore Collections to Create
- `sarees` - Store saree products
- `admins` - Store admin users

### Security Rules (Basic)
```javascript
// Firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /sarees/{saree} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /admins/{admin} {
      allow read, write: if request.auth != null;
    }
  }
}

// Storage
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /sarees/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 📦 Build for Production
```bash
npm run build
npm run start
```

## 🚀 Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 💡 Tips

1. **Mobile First**: Always test on mobile - most users will be on mobile devices
2. **Real Images**: Use actual saree photos for better conversions
3. **WhatsApp**: Test WhatsApp links on mobile for best experience
4. **Performance**: Optimize images before uploading (use WebP format)
5. **SEO**: Update metadata in each page for better search visibility

## 🆘 Common Issues

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Firebase Connection Issues
- Check `.env` file exists and has correct values
- Verify Firebase project is active
- Check browser console for specific errors

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 🎯 Next Steps

1. ✅ Get the app running locally
2. ✅ Customize with your branding
3. ✅ Set up Firebase
4. ✅ Add real saree data
5. ✅ Test WhatsApp integration
6. ✅ Deploy to Vercel
7. ✅ Share with customers!

---

Need help? Check the main README.md for detailed information.
