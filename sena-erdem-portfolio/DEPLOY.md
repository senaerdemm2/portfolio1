# Vercel'e Deploy — Adım Adım (Türkçe)

## Yöntem A — Eski repoyu güncelle (ÖNERİLEN, domain otomatik kalır)
Eski siten (senaerdemm.vercel.app) GitHub'daki bir repoya bağlıysa:

1. Bu klasördeki dosyaları çıkar (zip'i aç).
2. Terminalde:
   ```
   git clone https://github.com/senaerdemm2/<eski-repo-adı>
   cd <eski-repo-adı>
   ```
3. Repodaki eski dosyaları sil (.git klasörü hariç), bu paketin içeriğini kopyala.
4. ```
   git add -A
   git commit -m "Portfolio redesign - 2026 CV update"
   git push
   ```
5. Vercel otomatik deploy eder, 1-2 dakikada senaerdemm.vercel.app güncellenir.

## Yöntem B — Yeni repo + domain taşıma
1. GitHub'da yeni repo aç, bu dosyaları push'la:
   ```
   git init
   git add -A
   git commit -m "Portfolio v2"
   git branch -M main
   git remote add origin https://github.com/senaerdemm2/<yeni-repo-adı>.git
   git push -u origin main
   ```
2. vercel.com → Add New... → Project → repoyu seç → Deploy
   (Framework: Next.js otomatik algılanır, ek ayar/env gerekmez)
3. ESKİ projede: Settings → Domains → senaerdemm.vercel.app → Remove
4. YENİ projede: Settings → Domains → Add → senaerdemm.vercel.app

## Yöntem C — Vercel CLI (Git istemiyorsan)
```
npm i -g vercel
vercel login
# bu klasörde:
vercel --prod
```
Ardından domain taşımak için Yöntem B'nin 3-4. adımları.

## Notlar
- Build komutu: `next build` — ekstra ortam değişkeni (env) GEREKMEZ.
- Node 20+ kullanılır, Vercel otomatik halleder.
- Deploy sonrası SEO'yu test et: sayfa kaynağında (Ctrl+U) JSON-LD ve
  meta etiketleri görünmeli; senaerdemm.vercel.app eskisi gibi çalışmalı.
