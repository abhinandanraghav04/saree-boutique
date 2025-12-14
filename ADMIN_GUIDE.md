# Admin Panel Guide

Complete guide to using the Saree Boutique Admin Panel.

## 🔐 Admin Access

### Login
- URL: `/admin/login`
- Credentials: Set up through Firebase Authentication
- After login, you'll be redirected to the dashboard

### First-Time Setup
1. Create Firebase project
2. Enable Email/Password authentication
3. Create admin user in Firebase Console
4. Add admin user to Firestore `admins` collection with role "admin"

---

## 📊 Dashboard (`/admin/dashboard`)

The dashboard provides an overview of your boutique:

### Key Metrics
- **Total Sarees**: Complete inventory count
- **Active Sarees**: Available for purchase
- **Out of Stock**: Items needing restocking
- **Monthly Inquiries**: WhatsApp click tracking

### Quick Actions
- **Manage Sarees**: View and edit inventory
- **Add New Saree**: Upload new products
- **Customer Messages**: Check WhatsApp inquiries

---

## 🛍️ Managing Sarees (`/admin/sarees`)

### View All Sarees
- See complete list with images
- Search by name or fabric
- View SKU, price, fabric, and stock status
- Edit or delete any saree

### Saree Information Displayed
- Product image
- Name and SKU
- Price
- Fabric and occasion
- Stock status
- Featured badge (if applicable)
- Color, length, blouse piece info

### Actions Available
- ✏️ **Edit**: Modify saree details
- 🗑️ **Delete**: Remove from inventory (with confirmation)
- ➕ **Add New**: Create new product listing

---

## ➕ Adding New Saree (`/admin/sarees/new`)

### Step 1: Basic Information
**Required Fields:**
- **Saree Name**: Descriptive title (e.g., "Royal Red Banarasi Silk Saree")
- **Price**: Amount in Indian Rupees (₹)
- **Color**: Primary color (e.g., Red, Blue, Green)

**Dropdown Selections:**
- **Fabric**: Silk, Cotton, Georgette, Banarasi, Chiffon, Kanjivaram, Chanderi, Other
- **Occasion**: Wedding, Party, Daily, Festive, Casual, Formal

**Optional:**
- **Length**: Default is "5.5 meters" (customizable)

### Step 2: Upload Images
- Maximum 5 images per saree
- Supported formats: PNG, JPG, WEBP
- Drag and drop or click to upload
- Preview images before saving
- Remove unwanted images with X button

**Image Tips:**
- Use high-quality, well-lit photos
- Show saree from multiple angles
- Capture embroidery/pattern details
- Include draping style if possible
- First image becomes the main display image

### Step 3: Additional Details

**Description:**
- Write compelling product description
- Highlight unique features
- Mention craftsmanship details
- Keep it customer-focused

**Care Instructions:**
- Default: "Dry clean only"
- Customize based on fabric
- Add storage tips if needed

**Checkboxes:**
- ☑️ **Includes Blouse Piece**: Check if unstitched blouse included
- ☑️ **Featured Saree**: Display on homepage
- ☑️ **Available for Sale**: Stock status

### Step 4: Save
- Review all information
- Click "Add Saree" button
- Images upload to Firebase Storage
- Saree data saved to Firestore
- Redirects to saree management page

---

## ✏️ Editing Saree (`/admin/sarees/edit/[id]`)

### Accessing Edit Mode
1. Go to Manage Sarees page
2. Click Edit button (✏️ icon) on any saree
3. Edit form loads with existing data

### What You Can Edit

**All Fields Are Editable:**
- Name, price, color
- Fabric, occasion, length
- Description and care instructions
- Checkboxes (blouse piece, featured, available)

**Image Management:**
- View current images
- Remove existing images (click X button)
- Add new images (max 5 total)
- Reorder not yet supported (first image is primary)

### Saving Changes
1. Make desired changes
2. Click "Update Saree" button
3. New images upload if added
4. Database updates with new information
5. Redirects to saree management page

---

## 🗑️ Deleting Saree

### How to Delete
1. Go to Manage Sarees page
2. Find saree to delete
3. Click Delete button (🗑️ icon)
4. Confirm deletion in popup
5. Saree removed from database

**⚠️ Warning:**
- Deletion is permanent
- Images remain in storage (manual cleanup needed)
- Consider marking as "unavailable" instead of deleting
- No undo function

---

## 📝 Best Practices

### Product Listing
1. **Use descriptive names**: Include fabric, color, and style
2. **Accurate pricing**: Update prices regularly
3. **High-quality images**: Professional-looking photos sell better
4. **Detailed descriptions**: Help customers make informed decisions
5. **Proper categorization**: Correct fabric and occasion selections

### Inventory Management
1. **Update stock status**: Mark as unavailable when sold
2. **Feature bestsellers**: Use featured flag for popular items
3. **Seasonal updates**: Add new seasonal collections
4. **Regular cleanup**: Archive old/unsold items
5. **Price consistency**: Keep prices competitive

### Image Guidelines
1. **Consistent style**: Similar lighting and background
2. **Multiple angles**: Show full saree, border, pallu
3. **Detail shots**: Capture intricate work
4. **File size**: Compress before upload (under 2MB)
5. **File naming**: Use descriptive names

### Customer Experience
1. **Complete info**: Fill all fields thoroughly
2. **Accurate descriptions**: No exaggeration
3. **Quick updates**: Change stock status immediately
4. **Respond promptly**: Check WhatsApp messages regularly
5. **Seasonal content**: Update featured items seasonally

---

## 🔧 Technical Details

### Data Structure
Each saree has:
```typescript
{
  id: string;
  name: string;
  price: number;
  fabric: string;
  color: string;
  occasion: string;
  images: string[];      // Firebase Storage URLs
  featured: boolean;
  available: boolean;
  blousePiece: boolean;
  length: string;
  careInstructions: string;
  description: string;
  createdAt: Date;
}
```

### Image Storage
- Stored in Firebase Storage
- Path: `sarees/{sareeId}_{index}_{timestamp}.{ext}`
- Automatic URL generation
- Accessible via public URLs

### Database
- Firestore collection: `sarees`
- Real-time sync
- Automatic indexing
- Query support for filters

---

## 🚨 Troubleshooting

### Images Not Uploading
- Check file size (max 10MB)
- Verify internet connection
- Check Firebase Storage rules
- Try different browser
- Clear browser cache

### Can't Login
- Verify credentials
- Check Firebase Auth enabled
- Ensure admin role in Firestore
- Try password reset
- Check browser console for errors

### Changes Not Saving
- Check Firebase connection
- Verify write permissions
- Check required fields filled
- Look for console errors
- Try refreshing page

### Sarees Not Displaying
- Check Firebase rules
- Verify data in Firestore
- Check image URLs valid
- Clear browser cache
- Test in incognito mode

---

## 📱 Mobile Admin Access

The admin panel is fully responsive:
- Access from mobile browser
- Same functionality as desktop
- Touch-friendly interface
- Mobile image upload supported
- Optimized forms for small screens

**Recommended:**
- Use tablet or larger screen for image management
- Desktop for bulk operations
- Mobile for quick price/stock updates

---

## 🔒 Security Tips

1. **Strong Password**: Use complex, unique password
2. **Don't Share**: Keep admin credentials private
3. **Secure Network**: Use trusted WiFi networks
4. **Regular Logout**: Log out after use
5. **Monitor Activity**: Check for unauthorized changes
6. **Backup Data**: Export data periodically
7. **Firebase Rules**: Keep security rules strict
8. **HTTPS Only**: Always use secure connection

---

## 📞 Support

Need help?
- Check README.md for setup instructions
- Review Firebase documentation
- Check browser console for errors
- Contact developer for custom features
- Join community forums for tips

---

## 🎯 Future Features (Planned)

- [ ] Bulk product upload (CSV)
- [ ] Image reordering drag-and-drop
- [ ] Advanced analytics dashboard
- [ ] Inventory alerts (low stock)
- [ ] Order management system
- [ ] Customer database
- [ ] Email notifications
- [ ] Discount/coupon management
- [ ] Multi-admin support
- [ ] Activity logs

---

Built for ease of use and efficiency 💼
