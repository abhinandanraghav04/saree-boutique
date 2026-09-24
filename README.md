# Saree Boutique

An online storefront and admin panel for a small home-based saree business. Customers browse the catalogue and order through WhatsApp with a pre-filled message, which is how the business already takes orders. The owner manages stock and photos from a private admin panel, without needing any technical knowledge.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Firebase (Auth, Firestore, Storage).

## Features

### User Side (Public Store)
- **Landing Page**: Beautiful hero section with featured sarees
- **Saree Catalogue**: Browse with advanced filtering (fabric, occasion, price, availability)
- **Product Details**: Detailed saree information with image gallery and WhatsApp ordering
- **WhatsApp Integration**: Direct ordering via WhatsApp with pre-filled messages
- **About & Contact Pages**: Business information and location map

### Admin Panel (Private)
- **Secure Login**: Email/password authentication
- **Dashboard**: Overview statistics (total sarees, stock status, inquiries)
- **Saree Management**: Full CRUD operations for saree inventory
- **Image Management**: Upload and manage product images

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (custom built)
- **Animations**: Framer Motion
- **Backend**: Firebase (Auth + Firestore + Storage)
- **Icons**: Lucide React

## Prerequisites

- Node.js 18+ and npm
- Firebase account (for backend services)
- Git

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd saree-boutique
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure Firebase:
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Enable Storage
   - Copy your Firebase config to `.env`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Database Schema

### Sarees Collection
```typescript
{
  id: string;
  name: string;
  price: number;
  fabric: string;
  color: string;
  occasion: string;
  images: string[];
  featured: boolean;
  available: boolean;
  blousePiece: boolean;
  length: string;
  careInstructions: string;
  description: string;
  createdAt: Date;
}
```

### Admin Collection
```typescript
{
  uid: string;
  email: string;
  role: "admin";
}
```

## Project Structure

```
├── app/
│   ├── (public routes)
│   │   ├── page.tsx              # Landing page
│   │   ├── sarees/
│   │   │   ├── page.tsx          # Saree listing
│   │   │   └── [id]/page.tsx    # Saree details
│   │   ├── about/page.tsx        # About page
│   │   └── contact/page.tsx      # Contact page
│   ├── admin/
│   │   ├── login/page.tsx        # Admin login
│   │   ├── dashboard/page.tsx    # Admin dashboard
│   │   └── sarees/page.tsx       # Saree management
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── navbar.tsx                # Navigation bar
│   ├── footer.tsx                # Footer
│   └── saree-card.tsx            # Saree card component
├── config/
│   └── firebase.ts               # Firebase configuration
├── lib/
│   ├── utils.ts                  # Utility functions
│   └── seed-data.ts              # Sample data
└── types/
    └── index.ts                  # TypeScript types
```

## Design System

### Colors
- Primary: Amber (700, 800)
- Neutral: Zinc (50-900)
- Success: Green (600, 700)
- Error: Red (500, 600)

### Fonts
- Serif (Headings): Playfair Display
- Sans (Body): Inter

## Security Notes

- Admin routes should be protected with authentication
- Firebase security rules should be configured
- Environment variables must be kept secure
- Never commit `.env` files to version control

## WhatsApp Integration

The app uses WhatsApp Business API links to enable direct ordering:
- Format: `https://wa.me/{phone}?text={message}`
- Pre-filled messages include product details
- Configurable via `NEXT_PUBLIC_WHATSAPP_NUMBER`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

```bash
npm run build
npm run start
```

## Future Enhancements

- [ ] Full checkout with payment integration
- [ ] Customer accounts and order history
- [ ] Email notifications
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Customer reviews and ratings
- [ ] Wishlist functionality
- [ ] Size and fit guide

## Contributing

This is a private project for a home-based boutique. Contact the owner for contribution guidelines.

## License

Private and Proprietary. All rights reserved.

## Support

For support or inquiries:
- Email: info@sareeboutique.com
- WhatsApp: +91 98765 43210

---

Built with for traditional Indian elegance
