# React Calculator Documentation

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Components](#components)
   - [Calculator](#calculator)
   - [Display](#display)
   - [Keypad](#keypad)
   - [Button](#button)
5. [State Management](#state-management)
   - [Calculator Logic](#calculator-logic)
   - [Error Handling](#error-handling)
6. [Features](#features)
   - [Basic Operations](#basic-operations)
7. [Testing](#testing)
   - [Unit Tests](#unit-tests)
8. [Accessibility](#accessibility)
   - [Keyboard Navigation](#keyboard-navigation)
   - [ARIA Labels](#aria-labels)
9. [Contributing](#contributing)
   - [Code Style](#code-style)

## Overview
A simple calculator application built with React.js that provides basic arithmetic operations with an accessible and user-friendly interface.

## Installation
1. Clone the repository

## State Management

### Calculator Logic
- Uses React's useState for state management
- Handles mathematical operations
- Maintains expression history
- Supports continuous calculations

### Error Handling
- Graceful error handling for invalid expressions
- Clear error display
- Auto-reset functionality

## Features

### Basic Operations
- Addition (+)
- Subtraction (-)
- Multiplication (×)
- Division (÷)
- Clear function (C)
- Continuous calculations

## Accessibility

### Keyboard Navigation
Fully keyboard accessible with the following shortcuts:
- Number keys (0-9)
- Operation keys (+, -, *, /)
- Enter/= for calculation
- Escape for clear

### ARIA Labels
- Semantic HTML structure
- ARIA labels on all buttons
- Screen reader friendly

## Contributing

### Code Style
- TypeScript for type safety
- ESLint configuration for code consistency
- Tailwind CSS for styling
- Dark mode support using CSS variables

## Testing

### Unit Tests
- Test cases for all components and functions
- Coverage reports

## Project Structure
```
src/
├── app/
│   ├── layout.tsx    # Root layout with font configuration
│   ├── page.tsx      # Main calculator page
│   └── globals.css   # Global styles and theme variables
├── components/
│   ├── Calculator.tsx # Main calculator logic
│   ├── Display.tsx   # Calculator display component
│   ├── Keypad.tsx    # Calculator keypad layout
│   └── Button.tsx    # Reusable button component
```

## Components

### Calculator
The main component that manages calculator state and logic. Features:
- State management for display and expressions
- Keyboard event handling
- Operation processing
Reference: 
```typescript:basic-react-calculator/src/components/Calculator.tsx
startLine: 7
endLine: 79
```

### Display
Renders the calculator's display area with:
- Current value display
- Expression history
- Dark mode support
Reference:
```typescript:basic-react-calculator/src/components/Display.tsx
startLine: 1
endLine: 21
```

### Keypad
Grid layout of calculator buttons including:
- Numeric keys (0-9)
- Operation buttons (+, -, ×, ÷)
- Clear and equals buttons
Reference:
```typescript:basic-react-calculator/src/components/Keypad.tsx
startLine: 10
endLine: 34
```

### Button
Customizable button component with:
- Three variants: default, operator, equals
- Dark mode support
- Accessibility features
Reference:
```typescript:basic-react-calculator/src/components/Button.tsx
startLine: 8
endLine: 26
```


