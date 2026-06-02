---
name: framer-motion-animator
description: Build delightful animations and interactions with Framer Motion's declarative API. Animation patterns for entrance, exit, hover, gestures, and orchestrated sequences.
---

# Framer Motion Animator

Build delightful animations and interactions with Framer Motion's declarative API.

## Core Workflow

1. **Identify animation needs**: Entrance, exit, hover, gestures
2. **Choose animation type**: Simple, variants, gestures, layout
3. **Define motion values**: Opacity, scale, position, rotation
4. **Add transitions**: Duration, easing, spring physics
5. **Orchestrate sequences**: Stagger, delay, parent-child
6. **Optimize performance**: GPU-accelerated properties

## Installation

```bash
npm install framer-motion
```

## Basic Motion Component

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
  Content
</motion.div>
```

## Variants System

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24
    }
  }
}

<motion.ul
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.li key={item.id} variants={itemVariants}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

## Gestures & Interactions

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  whileFocus={{ outline: '2px solid #f4a900' }}
>
  Click me
</motion.button>

<motion.div
  drag
  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
  dragElastic={0.2}
>
  Draggable
</motion.div>
```

## Scroll-Triggered Animations

```tsx
import { motion, useScroll, useTransform } from 'framer-motion'

function ParallaxSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return <motion.div style={{ y }}>Parallax Content</motion.div>
}

// In-view animations
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6 }}
>
  Reveals on scroll
</motion.div>
```

## Layout Animations

```tsx
// Automatic layout animations
<motion.div layout style={{ borderRadius: isOpen ? 20 : 8 }}>
  <motion.div layout="position">
    Title (only position animates)
  </motion.div>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Expanded content
    </motion.div>
  )}
</motion.div>
```

## Exit Animations (AnPresence)

```tsx
import { AnimatePresence, motion } from 'framer-motion'

<AnimatePresence mode="wait">
  {isVisible && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      Modal Content
    </motion.div>
  )}
</AnimatePresence>
```

## Spring Physics

```tsx
<motion.div
  animate={{ x: 100 }}
  transition={{
    type: 'spring',
    stiffness: 300,  // Higher = snappier
    damping: 30,     // Higher = less bounce
    mass: 1          // Weight of object
  }}
/>
```

## Keyframes

```tsx
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    rotate: [0, 90, 0],
    borderRadius: ['20%', '50%', '20%']
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse'
  }}
/>
```

## Performance Best Practices

```tsx
// ✅ GPU-accelerated properties (cheap)
motion.div style={{ x, y, scale, rotate, opacity }}

// ❌ Layout-triggering properties (expensive)
// Avoid animating: width, height, top, left, margin, padding

// Use transform instead
<motion.div
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  style={{ originX: 0 }} // Transform origin
/>

// will-change hint
<motion.div
  style={{ willChange: 'transform' }}
  // Framer Motion adds this automatically
/>
```

## Astro Islands Integration

```astro
---
// MotionWrapper.tsx (Client Component)
'use client'
import { motion } from 'framer-motion'
---

<motion.div
  client:visible
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Interactive content
</motion.div>
```

```tsx
// AnimatedSection.tsx
'use client'
import { motion } from 'framer-motion'

export function AnimatedSection({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.section>
  )
}
```

## Easing Functions

```tsx
// Common easings
const easeOut = [0, 0, 0.2, 1]
const easeIn = [0.4, 0, 1, 1]
const easeInOut = [0.4, 0, 0.2, 1]
const springLike = [0.34, 1.56, 0.64, 1] // slight overshoot

<motion.div
  transition={{ ease: easeOut, duration: 0.3 }}
/>

// Built-in names
<motion.div
  transition={{ ease: 'easeOut', duration: 0.3 }}
  // 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'circIn' | 'circOut' etc.
/>
```

## Common Patterns for Web

```tsx
// Page entrance
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

// Staggered list
const listVariants = {
  animate: {
    transition: { staggerChildren: 0.05 }
  }
}

// Hover lift card
<motion.div
  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
  transition={{ type: 'spring', stiffness: 300 }}
/>

// Image zoom on hover
<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
  <img src="..." />
</motion.div>
```

## Reference

- [Framer Motion Docs](https://www.framer.com/motion/)
- [API Reference](https://www.framer.com/motion/api/)
- [Examples Gallery](https://www.framer.com/motion/examples/)
