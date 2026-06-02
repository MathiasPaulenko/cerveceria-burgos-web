---
name: vercel-react-best-practices
description: Comprehensive performance optimization guide for React and Next.js applications, maintained by Vercel. Contains 70 rules across 8 categories, prioritized by impact to guide automated refactoring and code generation.
---

# Vercel React Best Practices

Comprehensive performance optimization guide for React and Next.js applications, maintained by Vercel. Contains 70 rules across 8 categories, prioritized by impact to guide automated refactoring and code generation.

## When to Apply

Reference these guidelines when:

- Writing new React components or Next.js pages
- Implementing data fetching (client or server-side)
- Reviewing code for performance issues
- Refactoring existing React/Next.js code
- Optimizing bundle size or load times

## Rule Categories by Priority

### Critical (Performance Impact: High)

1. **Server Components by Default** — Use React Server Components for non-interactive UI
2. **Client Component Boundaries** — Move Client Components to leaves of the tree
3. **Image Optimization** — Use Next.js Image component with proper sizing
4. **Font Optimization** — Use next/font for automatic optimization
5. **Script Loading** — Use next/script for third-party scripts with proper loading strategies

### High Priority

6. **State Colocation** — Keep state as close to where it's used as possible
7. **Memoization Strategy** — Use React.memo, useMemo, useCallback appropriately
8. **List Virtualization** — For long lists, use windowing/virtualization
9. **Code Splitting** — Use dynamic imports for code splitting
10. **CSS-in-JS Considerations** — Prefer CSS Modules or Tailwind over runtime CSS-in-JS

### Medium Priority

11. **Event Handler Optimization** — Debounce/throttle expensive handlers
12. **Animation Performance** — Use transform/opacity, avoid layout thrashing
13. **Intersection Observer** — Use for lazy loading and scroll-based triggers
14. **Web Workers** — Offload heavy computations
15. **Service Workers** — Implement for caching strategies

## React Patterns

### Server Components (RSC)

```tsx
// Server Component (default in Next.js App Router)
// No 'use client' directive = runs on server
async function Page() {
  const data = await fetchData() // Direct data fetching on server
  return <ClientComponent data={data} />
}
```

### Client Components

```tsx
'use client'

import { useState } from 'react'

// Only when interactivity needed
export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

### Data Fetching Patterns

```tsx
// Parallel fetching
const [user, posts] = await Promise.all([
  fetchUser(),
  fetchPosts()
])

// Sequential when dependent
const user = await fetchUser()
const posts = await fetchPosts(user.id)
```

### Memoization Guidelines

```tsx
// Memoize expensive computations
const sortedItems = useMemo(() => 
  items.sort((a, b) => b.score - a.score),
  [items]
)

// Memoize callback props to prevent child re-renders
const handleClick = useCallback((id: string) => {
  navigate(`/item/${id}`)
}, [navigate])

// Memoize entire component when props are stable
export const ListItem = React.memo(function ListItem({ item }) {
  return <div>{item.name}</div>
})
```

## Next.js Specific

### Route Segments

```tsx
// app/page.tsx - Server Component by default
// app/layout.tsx - Root layout
// app/loading.tsx - Loading UI
// app/error.tsx - Error boundaries
```

### Image Optimization

```tsx
import Image from 'next/image'

<Image
  src="/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for LCP images
  placeholder="blur"
/>
```

### Font Optimization

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

### Script Loading

```tsx
import Script from 'next/script'

<Script
  src="https://analytics.com/script.js"
  strategy="lazyOnload" // or 'beforeInteractive', 'afterInteractive', 'worker'
/>
```

## Anti-Patterns to Avoid

### ❌ Don't

```tsx
// Don't use useEffect for data fetching in RSC
'use client'
function Page() {
  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData)
  }, [])
}

// Don't pass server data through Context unnecessarily
// Don't over-memoize simple computations
// Don't use CSS-in-JS that requires runtime
```

### ✅ Do

```tsx
// Fetch directly in Server Components
async function Page() {
  const data = await fetchData()
  return <View data={data} />
}

// Use CSS Modules or Tailwind
// Keep state local when possible
// Profile before optimizing
```

## Performance Checklist

- [ ] Server Components for non-interactive UI
- [ ] Image optimization with next/image
- [ ] Font optimization with next/font
- [ ] Proper loading strategies for scripts
- [ ] State colocation
- [ ] Strategic memoization
- [ ] Code splitting with dynamic imports
- [ ] Virtualization for long lists
- [ ] Debounced event handlers
- [ ] Optimized animations (transform/opacity)

## Reference

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Web Vitals](https://web.dev/vitals/)
