# Luxe Lipstick - Product Showcase

A modern, one-page product showcase website for a lipstick product, built with React and Framer Motion. Features smooth animations, interactive elements, and a responsive design.

## 🚀 Getting Started

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

## 🎨 Animation Choices & UX Improvements

### Animation Strategy

The website uses Framer Motion to create a smooth, engaging user experience that guides attention and enhances the product presentation:

1. **Intro Animation (Hero Section)**
   - The product image fades in and scales up on page load, creating an immediate visual focus on the lipstick
   - Text elements fade in with a subtle upward motion, creating a natural reading flow
   - The hero section gradually fades out as you scroll, providing smooth visual continuity

2. **Scroll Animations (Viewport Detection)**
   - Elements animate as they enter the viewport using Framer Motion's `whileInView` prop
   - Features alternate between sliding in from left and right, creating visual interest and preventing monotony
   - Stagger animations on lists create a cascading effect that draws attention to each feature sequentially

3. **Interactive Animations**
   - Product image tilts and bounces on hover, adding playfulness and encouraging interaction
   - Variant cards scale up and rotate slightly on hover, making it easy to explore different shades
   - Buttons have hover effects with color transitions and subtle lift animations, providing clear feedback

4. **Smooth Transitions**
   - All animations use easing functions (`easeOut`) for natural, non-jarring motion
   - Transitions between sections feel seamless with consistent animation timing

### How Framer Motion Improved UX

- **Performance**: Framer Motion uses optimized animations that leverage GPU acceleration, ensuring smooth 60fps animations even on lower-end devices
- **Accessibility**: Built-in support for `prefers-reduced-motion` ensures animations are disabled or reduced for users who need them, improving accessibility
- **Engagement**: The combination of scroll-triggered and interactive animations creates a dynamic, modern feel that keeps users engaged without being distracting
- **Visual Hierarchy**: Stagger animations and sequential reveals guide the user's eye through the content, making the information easier to digest
- **Professional Polish**: Smooth, coordinated animations elevate the perceived quality of the product and brand

## 📱 Features

- ✅ One-page layout with clear sections (Hero, Features, Variants, CTA)
- ✅ Framer Motion animations (intro, scroll, interactive)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Accessibility support (prefers-reduced-motion)
- ✅ Custom SVG lipstick illustrations
- ✅ Modern, clean UI design

## 🛠️ Technologies Used

- React 19
- Framer Motion
- Vite
- CSS3

## 📄 Project Structure

```
src/
  ├── App.jsx              # Main application component with animations
  ├── components/
  │   └── LipstickSVG.jsx  # Reusable lipstick SVG component
  ├── index.css            # Global styles and responsive design
  └── main.jsx             # Application entry point
```

## 🎯 Sections

1. **Hero Section**: Introduction with animated product image and tagline
2. **Features Section**: Key product features with scroll-triggered animations
3. **Variants Section**: Interactive color variant showcase
4. **CTA Section**: Call-to-action with engaging animations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is created for educational purposes.