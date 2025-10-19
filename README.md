# 🧪 The Apothecary

A medieval fantasy e-commerce demo showcasing **Guepard's database versioning** through four practical scenarios: branch testing, snapshot recovery, parallel testing, and schema migration.

**What it demonstrates:**
- Branch databases like Git (test promotions safely)
- Instant snapshot recovery (rollback pricing errors)
- Schema evolution (add Reviews feature in isolation)
- Parallel environment testing (compare discount strategies)

**Tech Stack:** Next.js 14, TypeScript, Prisma, PostgreSQL (Guepard), TailwindCSS, Zustand

---

## 🚀 Setup (5 minutes)

**Prerequisites:** Node.js 18+, Guepard CLI, Guepard account

**Installation:**

```bash
npm install
```

**Setup via Dashboard:**
1. Login to [Guepard Dashboard](https://app.guepard.io)
2. Create a new deployment (PostgreSQL)
3. Copy connection string to `.env` as `DATABASE_URL`
4. Run setup:
```bash
npx prisma generate
npm run db:push
npm run db:seed
npm run dev  # Visit http://localhost:3000
```

---

## 🔮 Guepard Scenarios

### 1. Branch Testing - Safe Promotion Testing

Test a "Lunar Blessing" promotion (15% off ingredients) without affecting production.

**Via Dashboard:**
1. Go to your deployment → Click "Create Branch"
2. Name it `lunar-blessing-test` → Create
3. Click the branch → checkout
4. Run promotion seed:
```bash
npm run seed:lunar-blessing
npm run dev  # See 15% discount badges
```
5. Compare with main branch

### 2. Snapshot Recovery - Instant Rollback

Recover from a pricing error (10x price increase) in seconds.

**Via Dashboard:**
1. Go to your deployment → "branches" tab
2. Name: "before-price-update" → bookmark
3. Break the database:
```bash
npm run seed:cursed-batch  # All prices now 10x!
```
4. Dashboard → Find "before-price-update" commit → Click "Checkout"
5. Refresh app - prices instantly restored!

### 3. Multi-Strategy Testing - Parallel Environments

Compare discount strategies (20% potions + 10% tools).

**Via Dashboard:**
1. Create branch `solstice-20-percent`
3. Test strategy A:
```bash
npm run seed:solstice
npm run dev  # See 20% potion + 10% tool discounts
```
4. Create 2nd branch `solstice-25-percent`, edit `seed-solstice.ts` to 25%
5. Compare results, keep winner

### 4. Schema Migration - Safe Schema Evolution

Add customer reviews with new Review model (20 fantasy character reviews).

**Via Dashboard:**
1. Create branch `reviews-feature`
2. Add reviews feature:
```bash
.\switch-to-reviews.ps1  # Switch to extended schema
npx prisma generate
npm run db:push
npm run seed:reviews
npm run dev  # Visit product pages to see star ratings
```


## 📊 Database Schema

**Base:** Item, Promotion, Order (3 models)  
**Extended:** Adds Review model with star ratings (1-5)

**Switch schemas:**
```powershell
.\switch-to-base.ps1      # Base schema
.\switch-to-reviews.ps1   # With reviews
```

## 🧪 Commands

**Development:**
```bash
npm run dev                      # Start dev server
npm run build                    # Build production
```

**Database:**
```bash
npm run db:seed                  # Seed 18 items
npm run seed:lunar-blessing      # 15% ingredients
npm run seed:cursed-batch        # 10x pricing error
npm run seed:solstice            # Multi-promo
npm run seed:reviews             # 20 reviews
```

All Guepard operations (branches, commits, checkouts) are done via the [Guepard Dashboard](https://app.guepard.io).

## 🎯 Why Guepard?

**Traditional:** Risky production testing, manual SQL rollbacks, schema change downtime  
**Guepard:** Branch like Git, instant recovery, safe migrations, parallel testing, zero risk

## � Troubleshooting

**Prisma errors:**
```bash
npx prisma generate              # Regenerate client
npx prisma migrate reset         # Reset if needed
npm run db:seed
```

**Schema switching:**
```powershell
Get-Content prisma/schema.prisma | Select-String "model Review"  # Check schema
.\switch-to-base.ps1             # Switch if needed
npx prisma generate && npm run db:push
```

---

## � Project Structure

```
prisma/
  schema.prisma, schema-base.prisma, schema-with-reviews.prisma
  seed.ts, seed-lunar-blessing.ts, seed-cursed-batch.ts, seed-solstice.ts, seed-reviews.ts
src/
  app/ (pages: home, shop, cart, checkout, product/[id])
  components/ (Header, Footer, ProductCard, PromotionBanner, Reviews)
  lib/ (prisma, types, utils)
  store/ (cart)
switch-to-base.ps1, switch-to-reviews.ps1
```
link to demo video: https://youtu.be/WiIZls-ug-8?si=SfQ1AwcArWKK_H9a  
link to article: https://dev.to/rami_gharbi/building-the-apothecary-learning-database-versioning-through-medieval-fantasy-4d2l

---

**Built to showcase Guepard's database versioning capabilities** 🧪✨
