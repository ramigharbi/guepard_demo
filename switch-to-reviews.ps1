# Switch to schema with reviews
Write-Host "🔄 Switching to extended schema (with Reviews)..." -ForegroundColor Cyan
Copy-Item -Path "prisma\schema-with-reviews.prisma" -Destination "prisma\schema.prisma" -Force
Write-Host "✅ Schema switched to version with Reviews" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Run: npx prisma generate" -ForegroundColor White
Write-Host "2. Run: npm run db:push" -ForegroundColor White
Write-Host "3. Run: npm run seed:reviews" -ForegroundColor White
Write-Host "4. Run: npm run dev" -ForegroundColor White
