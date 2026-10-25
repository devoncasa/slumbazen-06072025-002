module.exports = {
      content: ['./Restoration.tsx','./pages/{HomePage,CollectionsPage,WhiteSheetsPage,PremiumColorsPage,BeddingSetsPage,TowelsPage,MaterialsPage,WhatIsTencelPage,SizesPage,HotelsPage,DeliveryWarrantyPage,ContactPage}.tsx','./components/{Header,Footer,Button,InlineImage,MissionStatementSection,BeddingSetCard}.tsx'],
      important: '.legacy-site',
      corePlugins: {preflight:false},
      theme: {
        extend: {
          fontFamily: {
            sans: ['Sarabun', 'Noto Sans SC', 'Noto Sans Devanagari', 'Noto Sans Arabic', 'sans-serif'],
            'brand-base': ['"Nunito Sans"', 'Sarabun', 'sans-serif'],
            'brand-zen': ['"Baloo 2"', 'cursive'],
          },
          colors: {
            // New high-fashion, pastel/earthy palette
            brand: {
              // Primary actions, headings, accents
              primary: '#A58A7A', // Muted Clay/Rose
              // Secondary buttons, backgrounds for highlighted content
              secondary: '#E2D7C8', // Pale Beige
              // Lightest background shade
              light: '#F9F6F3', // Soft Off-White
              // Darkest shade for text, dark mode backgrounds
              dark: '#34384A', // Midnight Blue / Dark Slate
              // Gold for frames and accents
              gold: '#D4AF37',
            },
            pastel: {
              pink: '#FFF0F5',
              mint: '#F0FFF4',
              blue: '#E6F0FF',
              lavender: '#F5F3FF',
            },
            neutral: {
              // Main background
              100: '#F9F6F3', // Soft Off-White
              // Borders, dividers, subtle backgrounds
              200: '#EAE5E0', // Light Warm Grey
              // Lighter text, captions
              500: '#8C7D73', // Muted Brown
              // Main body text
              700: '#4A413A', // Dark Umber
              // Headings, strong text
              900: '#34384A', // Midnight Blue / Dark Slate
            }
          }
        }
      }
    }