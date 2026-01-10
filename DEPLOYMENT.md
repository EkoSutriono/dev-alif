# Deployment Guide - Cloudflare Pages

## Problem
Nuxt 4 dengan Tailwind CSS v4 menggunakan `oxc-parser` yang memiliki native bindings. npm memiliki bug dengan optional dependencies yang menyebabkan binding untuk Linux tidak ter-install di Cloudflare Pages.

Error yang muncul:
```
[error] Cannot find native binding. npm has a bug related to optional dependencies
Cannot find module '@oxc-parser/binding-linux-x64-gnu'
```

## Solution

### 1. Custom Build Script
Script `cf-build` di `package.json` yang:
- Skips postinstall hooks (`npm ci --ignore-scripts`)
- Directly runs `nuxt build` tanpa type generation

```json
"cf-build": "npm ci --ignore-scripts && nuxt build"
```

### 2. Graceful Postinstall untuk Development
Postinstall script dibuat fail gracefully untuk local development:
```json
"postinstall": "nuxt prepare || echo 'Warning: Type generation failed, continuing...'"
```

## Cloudflare Pages Configuration

**IMPORTANT**: Cloudflare Pages TIDAK mendukung `wrangler.toml` untuk build configuration. Anda HARUS setting via Dashboard.

### Steps:
1. Buka project Anda di **Cloudflare Pages Dashboard**
2. Navigasi ke **Settings** → **Builds & deployments**
3. Klik **Configure Production deployments** atau **Configure Preview deployments**
4. Set konfigurasi berikut:
   - **Framework preset**: `None` atau `Nuxt.js`
   - **Build command**: `npm run cf-build`
   - **Build output directory**: `.output/public`
5. Klik **Save**

### Screenshot Reference:
```
Build command:         npm run cf-build
Build output dir:      .output/public
Root directory:        / (default)
Environment variables: (none required)
```

## Testing Locally

Test build process yang sama seperti di Cloudflare:
```bash
npm run cf-build
```

Build seharusnya berhasil tanpa error type generation.

## Files Modified

- ✅ `package.json` - Added `cf-build` script
- ✅ `.npmrc` - Force optional dependencies
- ✅ `.node-version` - Pin Node.js version to 20
- ❌ `wrangler.toml` - REMOVED (not supported for Pages build config)

## Deployment

Setelah commit changes:
```bash
git add .
git commit -m "fix: cloudflare pages deployment oxc-parser workaround"
git push
```

Cloudflare Pages akan auto-trigger build dengan konfigurasi baru.

## Troubleshooting

### Jika masih error:
1. **Pastikan build command sudah benar** di Dashboard: `npm run cf-build`
2. **Clear build cache** di Cloudflare Pages Settings
3. **Retry deployment** via Deployments tab

### Alternative: Skip postinstall completely
Jika masih ada masalah, edit `package.json`:
```json
"postinstall": "echo 'Skipping type generation for CI'"
```

Lalu build command tetap `npm run cf-build`.
