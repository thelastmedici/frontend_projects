# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Gradient: hsl(6, 100%, 80%) to hsl(335, 100%, 65%)

### Neutral

- Pale Blue: hsl(243, 100%, 93%)
- Grayish Blue: hsl(229, 7%, 55%)
- Dark Blue: hsl(228, 56%, 26%)
- Very Dark Blue: hsl(229, 57%, 11%)

## Typography

### Body Copy

- Font size: 14px

### Font

- Family: [Raleway](https://fonts.google.com/specimen/Raleway)
- Weights: 400, 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.




<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
    <link rel="stylesheet" href="./output.css">
    <title>Frontend Mentor | Fylo data storage component</title>
  </head>

<body class="bg-black text-white p-0 m-0 flex justify-center items-center flex-col h-screen">

  <div class="bg-[url('../images/bg-mobile.png')] font-raleway w-[23rem]  md:bg-[url('../images/bg-desktop.png')] md:bg-no-repeat md:w-2xl md:flex md:items-center md:justify-between lg:w-6xl h-[42rem]">
    <div class=" w-[315px] bg-[hsl(228,56%,26%)] mx-6 mt-30 rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-tr-[120px] md:w-[320px]">
      <div class="py-10 mx-8">
        <img src="../images/logo.svg"  alt="" srcset="">
      </div>
      <div class=" flex pl-8  gap-x-3  pb-9">
        <div class="block  rounded-t-lg rounded-b-lg bg-[hsl(229,57%,11%)] p-3">
          <img src="../images/icon-document.svg" alt="icon-document" srcset="">
        </div>
        <div class="block  rounded-t-lg rounded-b-lg bg-[hsl(229,57%,11%)] p-3">
          <img src="../images/icon-folder.svg" alt="icon-folder" srcset="">
        </div>
        <div class="block  rounded-t-lg rounded-b-lg bg-[hsl(229,57%,11%)] p-3">
          <img src="../images/icon-upload.svg" alt="icon-upload" srcset="">
        </div>
      </div> 
    </div>

    <div class="relative lower-card w-[315px] h-[165px] bg-[hsl(228,56%,26%)] mx-6 mt-5 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:flex-1">
      <p class="text-sm text-center pt-8 pb-4">You’ve used <span class="font-bold">815 GB</span> of your storage</p>
        <div class="relative w-[270px] mx-5 h-5 bg-[hsl(229,_57%,_11%)] rounded-full overflow-hidden">
          <div class="h-4 w-[75%] top-0.5 left-0.5  bg-gradient-to-r from-pink-300 via-pink-500 to-fuchsia-600 rounded-full relative">
            <div class="absolute right-2 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
            </div>
        </div>

        <div class="flex justify-between px-5 pt-2 text-xs font-bold text-white">
          <div>0 GB</div>
          <div>1000 GB</div>
        </div>

        <div class="absolute left-1/2 transform -translate-x-1/2 bottom-[-40px] w-[190px] h-[75px] bg-white px-5 py-2  rounded-xl shadow-md flex items-baseline  space-x-1">
          <span class="text-5xl font-bold text-[hsl(229,_57%,_11%)]">185</span>
          <span class="text-xs text-gray-400 tracking-wider font-semibold">GB LEFT</span>
        </div>
      
      
      
    </div>
  </div>
  
  <div class="attribution"> 
    Coded by <a href="github.com/thelastmedici">thelastmedici</a>.
  </div>
</body>
</html>