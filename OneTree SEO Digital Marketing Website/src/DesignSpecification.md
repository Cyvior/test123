# OneTree SEO Website - Design Specification

## Overview
A modern, professional SEO agency website featuring clean minimalist design with creative animations and interactive elements. The design emphasizes trust, expertise, and results through ultra-realistic imagery and compelling visual storytelling.

## Design System

### Color Palette

#### Primary Colors
- **Primary Blue**: `#4f46e5` (Indigo 600)
- **Primary Purple**: `#7c3aed` (Violet 600) 
- **Primary Pink**: `#db2777` (Pink 600)

#### Gradient Combinations
- **Main Gradient**: `linear-gradient(135deg, #4f46e5, #7c3aed, #db2777)`
- **Blue-Purple**: `from-blue-500 to-purple-500`
- **Purple-Pink**: `from-purple-500 to-pink-500`
- **Green-Emerald**: `from-green-500 to-emerald-500`
- **Orange-Red**: `from-orange-500 to-red-500`

#### Neutral Colors
- **Text Primary**: `#0f172a` (Slate 900)
- **Text Secondary**: `#64748b` (Slate 500)
- **Background**: `#ffffff` (White)
- **Background Alt**: `#f8fafc` (Slate 50)
- **Border**: `rgba(0, 0, 0, 0.1)`

### Typography

#### Font System
- **Base Font Size**: 14px
- **Font Weight Normal**: 400
- **Font Weight Medium**: 500

#### Heading Hierarchy
- **H1**: 2xl size, medium weight, 1.5 line-height
- **H2**: xl size, medium weight, 1.5 line-height  
- **H3**: lg size, medium weight, 1.5 line-height
- **H4**: base size, medium weight, 1.5 line-height

#### Body Text
- **Paragraph**: base size, normal weight, 1.5 line-height
- **Labels**: base size, medium weight, 1.5 line-height

### Spacing & Layout

#### Container
- **Max Width**: 7xl (1280px)
- **Padding**: 6 (24px) on mobile, responsive

#### Section Spacing
- **Vertical**: py-20 (80px top/bottom)
- **Component Gap**: 12 (48px) between major components
- **Card Gap**: 8 (32px) between cards

#### Border Radius
- **Small**: 0.375rem (6px)
- **Medium**: 0.625rem (10px) 
- **Large**: 1rem (16px)
- **XL**: 1.5rem (24px)

## Component Design

### Buttons

#### Primary CTA (Glow Button)
```css
.glow-button {
  background: linear-gradient(135deg, #4f46e5, #7c3aed, #db2777);
  box-shadow: 
    0 0 20px rgba(79, 70, 229, 0.3),
    0 0 40px rgba(124, 58, 237, 0.2),
    0 0 60px rgba(219, 39, 119, 0.1);
  animation: glow-pulse 2s ease-in-out infinite alternate;
}
```

**Features:**
- Animated glow effect with pulsing shadow
- Shimmer effect on hover (left-to-right light sweep)
- Slight upward translation on hover (-2px)
- White text with sparkle icon

#### Secondary Button
- Outlined style with gradient border on hover
- Background fill animation on hover
- Scale and icon animations

### Cards

#### Service Cards
- **Background**: White with subtle shadow
- **Hover Effects**: 
  - Tilt perspective transform
  - Gradient background overlay
  - Glowing border effect
  - Scale animations on icons
- **Content**: Icon, title, description, feature list
- **Animation**: Slide-in-up with staggered delays

#### Stat Cards
- **Background**: White/transparent with backdrop blur
- **Features**: Floating animation, gradient borders
- **Hover**: Scale transforms, sparkle animations
- **Numbers**: Gradient text treatment

### Images

#### Hero Image
- **Treatment**: Rounded corners (2xl), shadow-2xl
- **Hover**: Tilt perspective effect
- **Overlay**: Subtle gradient overlay with shimmer animation
- **Border**: Glowing gradient border effect

#### Service Images
- **Style**: Ultra-realistic stock photos from Unsplash
- **Treatment**: Consistent rounded corners and shadows
- **Integration**: Seamless with card designs

## Animations & Effects

### Glow Animations

#### Subtle Background Glow
```css
.subtle-glow-bg::before {
  background: radial-gradient(
    circle at 30% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 50%
  ),
  radial-gradient(
    circle at 70% 20%, rgba(147, 51, 234, 0.06) 0%, transparent 50%
  ),
  radial-gradient(
    circle at 20% 80%, rgba(219, 39, 119, 0.05) 0%, transparent 50%
  );
  animation: subtle-glow-move 15s ease-in-out infinite;
}
```

### Movement Animations

#### Float Animation (6s cycle)
- **Usage**: Floating elements, decorative shapes
- **Movement**: 20px vertical oscillation
- **Timing**: ease-in-out infinite

#### Bounce Subtle (3s cycle)
- **Usage**: Secondary floating elements
- **Movement**: 10px vertical bounce
- **Timing**: ease-in-out infinite

#### Pulse Grow (2s cycle)
- **Usage**: Icons, decorative elements
- **Movement**: Scale 1.0 to 1.05
- **Timing**: ease-in-out infinite

### Gradient Animations

#### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, #4f46e5, #7c3aed, #db2777);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
```

#### Shimmer Effect
- **Usage**: Image overlays, interactive elements
- **Pattern**: 45-degree light sweep
- **Duration**: 2s infinite loop

### Morphing Effects

#### Morph Shape
```css
.morph-shape {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: morph 8s ease-in-out infinite;
}
```

**Usage**: Logo backgrounds, decorative elements

## Layout Sections

### Header
- **Style**: Fixed position with backdrop blur
- **Background**: White/95% opacity with blur effect
- **Logo**: Animated with morph shape and gradient
- **Navigation**: Horizontal with underline hover effects
- **CTA**: Glowing primary button

### Hero Section
- **Layout**: Two-column grid (content + image)
- **Background**: Gradient with floating decorative elements
- **Features**: 
  - Animated badge with icons
  - Large gradient headline
  - Dual CTA buttons (primary + secondary)
  - Trust indicators with hover animations
  - Floating stats card overlay

### Services Section
- **Layout**: 3-column responsive grid
- **Cards**: Hover-activated tilt and glow effects
- **Icons**: Gradient backgrounds with scale animations
- **CTA**: Bottom section with glowing call-to-action

### Benefits Section
- **Layout**: Split content (stats grid + image)
- **Stats**: 2x3 grid with animated counters
- **Image**: Enhanced with overlays and effects
- **Bottom CTA**: Full-width gradient banner

### Contact Section
- **Layout**: Two-column (form + contact info)
- **Form**: Enhanced inputs with hover states
- **Submit**: Glowing primary button
- **Info Cards**: Hover effects with gradient backgrounds

## Interactive States

### Hover Effects
- **Buttons**: Glow intensity increase, transform translate
- **Cards**: Tilt perspective, gradient overlays, border glow
- **Icons**: Scale transforms, sparkle appearances
- **Links**: Underline animations, background fills

### Loading States
- **Page Load**: Slide-in-up animations with staggered delays
- **Intersection Observer**: Progressive reveal on scroll
- **Smooth Scrolling**: Enhanced anchor navigation

## Background Elements

### Decorative Shapes
- **Large Gradients**: Fixed position, extreme blur
- **Floating Particles**: Various sizes, subtle animations
- **Geometric Shapes**: Rotating borders, pulsing circles
- **Morphing Blobs**: Organic shape transformations

### Positioning Strategy
- **Fixed Background**: Non-interfering decorative layer
- **Relative Content**: All interactive content above decorations
- **Z-Index Hierarchy**: Proper layering for interactions

## Responsive Behavior

### Breakpoints
- **Mobile**: < 768px (single column layouts)
- **Tablet**: 768px - 1024px (adjusted grids)
- **Desktop**: > 1024px (full multi-column layouts)

### Mobile Adaptations
- **Navigation**: Collapsible hamburger menu
- **Grids**: Single column stacking
- **Typography**: Responsive sizing
- **Animations**: Reduced motion on mobile

## Performance Considerations

### Animation Optimization
- **CSS Transforms**: Prefer over position changes
- **Will-Change**: Applied to animated elements
- **Reduced Motion**: Respect user preferences
- **Hardware Acceleration**: GPU-optimized animations

### Image Optimization
- **Fallback System**: ImageWithFallback component
- **Responsive Images**: Multiple sizes for different viewports
- **Lazy Loading**: Intersection Observer implementation

## Brand Voice & Messaging

### Tone
- **Professional**: Industry expertise and credibility
- **Approachable**: Friendly and accessible communication
- **Results-Focused**: Data-driven and outcome-oriented
- **Trustworthy**: Reliable and transparent

### Visual Language
- **Clean Minimalism**: Plenty of white space
- **Premium Feel**: High-quality imagery and smooth animations
- **Modern Technology**: Gradient effects and subtle interactions
- **Professional Polish**: Consistent styling and typography

## Implementation Notes

### CSS Architecture
- **Tailwind V4**: Utility-first approach with custom animations
- **CSS Custom Properties**: Consistent color and spacing tokens
- **Layer Organization**: Base, components, utilities structure
- **Animation Library**: Custom keyframes in utilities layer

### Component Structure
- **Modular Design**: Separate components for each section
- **Reusable Elements**: Consistent card and button patterns
- **Icon Integration**: Lucide React for consistent iconography
- **Image Handling**: Centralized fallback system

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Focus Management**: Visible focus states and keyboard navigation
- **Motion Preferences**: Respect for reduced motion settings
- **Color Contrast**: WCAG compliant color combinations

This specification serves as the complete design reference for the OneTree SEO website, ensuring consistency and quality across all implementations.