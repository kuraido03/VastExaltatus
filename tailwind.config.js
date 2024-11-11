/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#f6e0b5',
        secondary:'#a39193'
      },
        fontFamily:{
          rblack:["Raleway-Black","sans-serif"],
          rblackItalic:["Raleway-BlackItalic","sans-serif"],
          rbold:["Raleway-Bold","sans-serif"],
          rboldItalic:["Raleway-BoldItalic","sans-serif"],
          rextrabold:["Raleway-ExtraBold","sans-serif"],
          rextraboldItalic:["Raleway-ExtraBoldItalic","sans-serif"],
          rextralight:["Raleway-ExtraLight","sans-serif"],
          rextralightItalic:["Raleway-ExtraLightItalic","sans-serif"],
          ritalic:["Raleway-Italic","sans-serif"],
          rlight:["Raleway-Light","sans-serif"],
          rlightItalic:["Raleway-LightItalic","sans-serif"],
          rmedium:["Raleway-Medium","sans-serif"],
          rmediumItalic:["Raleway-MediumItalic","sans-serif"],
          rregular:["Raleway-Regular","sans-serif"],
          rsemibold:["Raleway-SemiBold","sans-serif"],
          rsemiboldItalic:["Raleway-SemiBoldItalic","sans-serif"],
          rthin:["Raleway-Thin","sans-serif"],
          rthinItalic:["Raleway-ThinItalic","sans-serif"],
        }

    },
  },
  plugins: [],
}

