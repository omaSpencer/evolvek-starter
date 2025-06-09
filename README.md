# 🧱 Turborepo Monorepo Starter

Ez a monorepo a [Turborepo](https://turbo.build/repo)-t használja a modern full-stack fejlesztéshez, újrahasznosítható csomagokkal és moduláris architektúrával.

## 📁 Mappa struktúra

```bash
.
├── apps/
│   └── web/              # Next.js alkalmazás
├── packages/
│   ├── eslint-config/      # Eslint konfiguráció
│   ├── typescript-config/  # Typescript konfiguráció
│   ├── db/                 # Drizzle ORM konfiguráció és sémák
│   ├── ui/                 # UI komponensek (shadcn/ui)
│   └── tailwindcss-config/ # TailwindCSS közös konfiguráció
├── turbo.json              # Turborepo konfiguráció
└── package.json
```

## 🧰 Használt technológiák

- **Turborepo** – gyorsított monorepo fejlesztés
- **Next.js** – webalkalmazás (SSR/ISR támogatással)
- **shadcn/ui** – komponens-alapú UI fejlesztés
- **TailwindCSS** – utility-first CSS framework
- **Drizzle ORM** – típusbiztos adatbázis lekérdezések

## 🚀 Indítás

1. **Repo klónozása:**

```bash
git clone <repo-url>
cd <repo-name>
```

2. **Függőségek telepítése:**

```bash
npm install
```

3. **Fejlesztői szerver indítása:**

```bash
npm dev --filter=web
```

## 📦 Csomagok

### `packages/db`

- `drizzle` ORM konfiguráció
- Adatbázis séma definíciók
- Újrahasznosítható kapcsolódási logika

### `packages/ui`

- `shadcn/ui` komponensek
- Stílus és layout egységesítés

### `packages/tailwindcss-config`

- Közös Tailwind konfiguráció
- `tailwind.config.ts` és `postcss.config.js`

## 🧼 Hasznos parancsok

```bash
npm build             # Összes csomag és app buildelése
npm lint              # Kódellenőrzés a teljes monorepóra
npm dev --filter=web  # Csak a web app fejlesztői mód
```

## 📄 Licenc

MIT
