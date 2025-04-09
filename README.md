# Multi-Step Form with Next.js

A responsive multi-step form with validation, dark mode support, and simulated API submission built with:

- Next.js (App Router)
- React Hook Form + Zod for form handling and validation
- TailwindCSS for styling
- React Query for API simulation
- TypeScript for type safety

## Features

✅ Multi-step form navigation with progress indicator  
✅ Field validation with Zod schema validation  
✅ Error messages for invalid fields  
✅ Dark mode toggle  
✅ Responsive design for all screen sizes  
✅ Form data summary before submission  
✅ Simulated API submission with React Query  
✅ Type-safe form state management

## Prerequisites

- Node.js (v18 or later recommended)
- npm (v9 or later) or yarn
- Git (optional)

## Installation

1. **Clone the repository** (or create a new project):

````bash
git clone https://github.com/mostafizur610/multi-step-form.git
cd multi-step-form

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

src/
├── app/
│ ├── layout.tsx            # Root layout with providers
│ ├── page.tsx              # Main page with the form
│ └── providers.tsx         # React Query provider
├── components/ 
│ ├── MultiStepForm.tsx     # Main form component
│ └── form-steps/           # Individual form steps
│ ├── PersonalInfoStep.tsx
│ ├── AddressDetailsStep.tsx
│ ├── AccountSetupStep.tsx
│ └── FormSummary.tsx
├── types/
│ └── form.ts               # Zod schemas and types
└── app/globals.css         # Global styles
