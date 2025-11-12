#  Lipstick - Product Showcase

 one-page product showcase website for a lipstick product, built with React and Framer Motion. Features smooth animations, interactive elements, and a responsive design.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

##  Animation Choices & UX Improvements

### Animation Strategy

The website uses Framer Motion to create a smooth, engaging user experience that guides attention and enhances the product presentation:

1. **Intro Animation (Hero Section)**
   - The product image fades in and scales up on page load, creating an immediate visual focus on the lipstick
   - Text elements fade in with a subtle upward motion, creating a natural reading flow
   - The hero section gradually fades out as you scroll, providing smooth visual effect

2. **Scroll Animations (Viewport Detection)**
   - Elements animate as they enter the viewport using Framer Motion's `whileInView` prop
   - Stagger animations on lists create a effect that draws attention to each feature 

3. **Interactive Animations**
   - Product image tilts and bounces on hover, adding playfulness and encouraging interaction
   - Variant cards scale up and rotate slightly on hover, making it easy to explore different shades
   - Buttons have hover effects with color transitions and subtle lift animations 

4. **Smooth Transitions**
   - All animations use easing functions (`easeOut`) for clear motion
   - Transitions between sections feel seamless with consistent animation timing

### How Framer Motion Improved UX
- **Accessibility**: Built-in support for `prefers-reduced-motion` ensures animations are disabled or reduced for users who need them, improving accessibility
- **Engagement**: The combination of scroll-triggered and interactive animations creates a dynamic, modern feel that keeps users engaged 
- **Visual Hierarchy**: Stagger animations and sequential reveals guide the user's eye through the content
- **Professional Polish**: Smooth, coordinated animations elevate the perceived quality of the product and brand

Made With <3 by Agata
