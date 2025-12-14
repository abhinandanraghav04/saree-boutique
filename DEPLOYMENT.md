# Deployment Guide

Complete guide to deploy your Saree Boutique application to production.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest and fastest way to deploy Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables**
   Add these in Vercel dashboard:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

2. **Deploy**
   - Connect repository
   - Add environment variables
   - Deploy

### Option 3: Self-Hosted (VPS/Cloud)

#### Requirements:
- Ubuntu 22.04 or similar
- Node.js 18+
- PM2 for process management
- Nginx for reverse proxy

#### Steps:

1. **Install Dependencies**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   
   # Install Nginx
   sudo apt install nginx
   ```

2. **Clone and Build**
   ```bash
   git clone <your-repo>
   cd saree-boutique
   npm install
   
   # Create .env file
   nano .env
   # Add all environment variables
   
   # Build
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "saree-boutique" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/saree-boutique
   ```
   
   Add:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
   
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   
   Enable:
   ```bash
   sudo ln -s /etc/nginx/sites-available/saree-boutique /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. **SSL Certificate (Let's Encrypt)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## 🔥 Firebase Configuration

### Production Setup

1. **Authentication**
   - Enable Email/Password provider
   - Add authorized domains (your production URL)

2. **Firestore Database**
   ```javascript
   // Production rules
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /sarees/{saree} {
         allow read: if true;
         allow write: if request.auth != null && 
                         get(/databases/$(database)/documents/admins/$(request.auth.uid)).data.role == 'admin';
       }
       match /admins/{admin} {
         allow read: if request.auth != null && request.auth.uid == admin;
         allow write: if request.auth != null && 
                        get(/databases/$(database)/documents/admins/$(request.auth.uid)).data.role == 'admin';
       }
     }
   }
   ```

3. **Storage**
   ```javascript
   // Production rules
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /sarees/{fileName} {
         allow read: if true;
         allow write: if request.auth != null &&
                        firestore.get(/databases/(default)/documents/admins/$(request.auth.uid)).data.role == 'admin';
       }
     }
   }
   ```

4. **Create Admin User**
   ```javascript
   // Run this in Firebase Console
   // Firestore → admins collection → Add document
   {
     uid: "firebase-auth-uid",
     email: "admin@example.com",
     role: "admin"
   }
   ```

## 📊 Performance Optimization

### Image Optimization

1. **Use Next.js Image Component**
   - Already implemented in the codebase
   - Automatic optimization

2. **Compress Images Before Upload**
   - Use tools like TinyPNG, ImageOptim
   - Target: Under 200KB per image
   - Format: WebP preferred

3. **Firebase Storage**
   - Enable CDN caching
   - Set appropriate cache headers

### Code Optimization

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

## 🔒 Security Checklist

- [ ] Environment variables set correctly
- [ ] Firebase security rules configured
- [ ] Admin routes protected
- [ ] HTTPS enabled (SSL certificate)
- [ ] CORS configured properly
- [ ] Rate limiting enabled (if applicable)
- [ ] Regular backups configured
- [ ] Error logging set up (Sentry, LogRocket)

## 📈 Post-Deployment

### 1. Test Everything
- [ ] Home page loads
- [ ] Saree listing works
- [ ] Individual saree pages load
- [ ] WhatsApp links work on mobile
- [ ] Admin login works
- [ ] Admin dashboard accessible
- [ ] Image uploads work (admin)

### 2. Set Up Monitoring
- Use Vercel Analytics (free)
- Google Analytics
- Firebase Analytics

### 3. SEO Setup
- Submit sitemap to Google Search Console
- Add robots.txt
- Set up Google My Business
- Add structured data

### 4. Create Admin Account
```bash
# In Firebase Console
# Authentication → Add user
# Then add to Firestore admins collection
```

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Ensure they start with `NEXT_PUBLIC_` for client-side
- Restart dev server after changes
- Check Vercel dashboard for typos

### Images Not Loading
- Check Firebase Storage rules
- Verify image URLs
- Check CORS configuration

### Admin Can't Login
- Verify Firebase Auth is enabled
- Check admin exists in Firestore
- Verify email/password is correct

## 📱 Mobile App Considerations

If you plan to create a mobile app later:
- Keep API structure consistent
- Document all endpoints
- Consider Firebase Cloud Functions
- Plan for push notifications

## 🔄 Updates and Maintenance

### Update Code
```bash
git pull origin main
npm install
npm run build
pm2 restart saree-boutique
```

### Database Backups
- Enable automatic Firestore backups
- Export data regularly
- Test restore procedures

### Monitor Performance
- Check Vercel/hosting analytics
- Monitor Firebase usage
- Review error logs weekly

---

## 🎉 You're Live!

Your saree boutique is now online and ready to receive orders!

Next steps:
1. Share URL with customers
2. Post on social media
3. Add WhatsApp status
4. Start taking orders! 🛍️
