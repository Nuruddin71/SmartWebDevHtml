/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        openSansFont:['Open Sans']
      },
      colors:{
        gray1:"#1E1E1E",
        gray2:"#252526",
        gray3:"#333333",
        gray4:"#474747",
        gray5:"#424242",
        gray6:"c0c0c0",
        gray7:"#616161",
        blue:"#46C3DB",
        blue2:"#3EB8D3",
        blue3:"#87dbec",
        red:"#DB5F46",
        red2:"#cc5643",
        red3:"#d8685b",
        purple:"#DB46C2",
        green:"#46DBA9",
        yellow:"#F3F169",
      },
    
    },
  },
  plugins: [],
}

