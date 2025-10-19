# Switch to base schema (no reviews)
Write-Host "🔄 Switching to base schema (without Reviews)..." -ForegroundColor Cyan
Copy-Item -Path "prisma\schema-base.prisma" -Destination "prisma\schema.prisma" -Force
Write-Host "✅ Schema switched to base version" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Run: npx prisma generate" -ForegroundColor White
Write-Host "2. Run: npm run db:push" -ForegroundColor White
Write-Host "3. Run: npm run dev" -ForegroundColor White
