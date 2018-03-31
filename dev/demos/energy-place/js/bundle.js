(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var meditate = document.getElementById('meditate');

var dance = document.getElementById('dance');

meditate.addEventListener('click', function () {
    let posx = (Math.random() * 1024).toFixed();
    let posy = (Math.random() * 768).toFixed();

    $newMeditate =
        $(`<div class="svg"><?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="-70 -100 900 1000" style="enable-background:new -70 -100 900 1000;" xml:space="preserve">
    
    <style type="text/css">
        .st1{fill:url(#SVGID_1); opacity: .3;}
        .st2{fill:url(#SVGID_2); opacity: .3;}
        .st3{fill:url(#SVGID_3); opacity: .3;}

    </style>
    <defs>
        <filter id="newglow" x="-50%" y="-50%" height="500%" width="500%">
        <feGaussianBlur stdDeviation="12" result="coloredBlur"/></filter>
    </defs>
    <title>Energy 3</title>
    <g>
        <g id="Layer_2">
            <g id="en-one">
            <image style="overflow:visible;" width="404" height="776" xlink:href="img/energy-left.png"  opacity=".4" transform="matrix(1 0 0 1 1.032 -1.3694)">
            </image>
                <g id="Color">

                        <linearGradient id="SVGID_1" gradientUnits="userSpaceOnUse" x1="203.2197" y1="977.08" x2="203.2197" y2="213.25" gradientTransform="matrix(1 0 0 1 0 -192.93)">
                        <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
                        <stop  offset="0" style="stop-color:#0a5"/>
                        <stop  offset="1" style="stop-color:#0a5"/>
                    </linearGradient>
                    <path class="st1" d="M246.7,753.6c0,0-7.1,9.5-11.3,11.4c-3.3,1.7-9.5,13.6-23.3,8.9c-13.5-5.6-55.3-31.8-55.3-31.8l-58.1-29.9
                        c0,0-41.2-23.8-47-32.1S42,667,34,633.5C26,600.2,7,511,7,511s-12.5-77.8,9.3-138.5c18.2-50.7,41-123.4,124.4-214.8
                        c73.5-80.7,121-123.5,121-123.5v-5.3c0,0,21-21.9,41.3-20.7c14.8-2.6,48.9-4.4,51.8-7s31.5,0.9,33.4,8.6s10.2,50.8,11.1,63.9
                        s3.7,84.6,3.7,84.6v72.2l-3.7,78.2l-7.6,85.2c0,0-6.9,65.1-8.2,66.3c-0.7,4.1-16.1,83.4-24.3,95.4c-3.1,8.1-20.4,52.7-24.7,59.9
                        c-3.2,6.5-36.6,71.2-41,75.5C289.4,697.9,258,742.1,246.7,753.6z" filter="url(#newglow)" opacity=".4"/>
                </g>
            </g>
            <g id="en-three">
            <image style="overflow:visible;" width="630" height="560" xlink:href="img/energy-bottom.png"  opacity=".4" transform="matrix(1 0 0 1 102.9133 295.1348)">
            </image>
                <g id="Color3">

                        <linearGradient id="SVGID_3" gradientUnits="userSpaceOnUse" x1="-73.7667" y1="974.0126" x2="-73.7667" y2="253.1626" gradientTransform="matrix(-0.92 0.6 0.53 0.82 70.62 96.58)">
                        <stop  offset="0" style="stop-color:#05a"/>
                        <stop  offset="1" style="stop-color:#0a5"/>
                    </linearGradient>
                    <path class="st3" d="M601.2,851.5c0,0,11,3.3,15.5,2.5c3.7-0.5,15.1,5.2,24.8-6.2c9-12,32.3-55.8,32.3-55.8l35.7-55.9
                        c0,0,24-41.6,24.9-51.3s1.8-15.7-8-46.2c-9.7-30.3-37.7-110-37.7-110s-28-67.3-77.3-102c-41.2-29-97.4-72.5-215.7-96.4
                        c-104.4-21.1-167.2-27.6-167.2-27.6l-2.6-4.1c0,0-29.3-5.1-46.3,7.2c-14.2,6.3-44.8,24.1-48.6,23.8c-3.8-0.4-27,18.4-24.7,25.5
                        s16.5,45.1,22.2,55.7s39.1,67.6,39.1,67.6l36.1,55.8l42.3,58.5l49.3,61.7c0,0,38.6,46.5,40.3,46.7c2.7,2.8,55.7,55.6,68.9,60.2
                        c6.8,4.5,44.1,29.3,51.4,32.5c6,3.2,67.4,34.5,73.4,35.4C536.2,832.3,585.6,849,601.2,851.5z" filter="url(#newglow)" opacity=".4"/>
                </g>
            </g>
            <g id="en-two">
            <image style="overflow:visible;" width="354" height="717" xlink:href="img/energy-right.png"  opacity=".4" transform="matrix(1 0 0 1 415.0094 60.7158)">
            </image>
                <g id="Color2">

                        <linearGradient id="SVGID_2" gradientUnits="userSpaceOnUse" x1="218.5785" y1="767.1669" x2="218.5785" y2="68.5269" gradientTransform="matrix(-0.94 0.34 -0.34 -0.94 948.15 699.68)">
                        <stop  offset="0" style="stop-color:#0a5"/>
                        <stop  offset="1" style="stop-color:#05a"/>
                    </linearGradient>
                    <path class="st2" d="M455,89.9c0,0,3.2-10.4,6.2-13.3c2.3-2.5,4-14.6,17.4-14.9C492,62.4,536,72.2,536,72.2l59.3,7.9
                        c0,0,42.8,7.8,50.3,13.2s12.4,8.5,29.6,34.9c17.1,26.2,60.8,97.3,60.8,97.3s34.7,63.2,34.5,122.2
                        c-0.2,49.3,2.5,118.9-41.2,223.3C690.8,663,663,714.5,663,714.5l1.6,4.5c0,0-11.4,25.3-29.2,30.5c-11.9,6.8-40.8,18.8-42.5,21.9
                        s-27.4,8.9-31.4,2.8s-24.4-40.7-29.2-51.6s-29.1-71.7-29.1-71.7L481,588.7l-20.8-68.5l-19.6-75.8c0,0-14-58.2-13.3-59.7
                        c-0.7-3.8-11.8-76.8-8.4-89.7c0.2-8,1.4-51.6,2.9-59.2c0.7-6.6,9.7-72.5,12.1-77.6C435.4,151.1,448.9,103.3,455,89.9z" opacity=".4" filter="url(#newglow)"/>
                </g>
            </g>
        </g>
    </g>
    </svg>
    </div>`);

    $newMeditate.css({
        'position': 'absolute',
        'left': posx + 'px',
        'top': posy + 'px'
    }).appendTo('body').fadeIn(100);
});

dance.addEventListener('click', function () {

    let posx = (Math.random() * 1024).toFixed();
    let posy = (Math.random() * 768).toFixed();

    $newDance =
        $(`<div id="dancesvg">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve">
    <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="#05a"/>
          <stop offset="100%" stop-color="#0a5"/>
        </linearGradient>
            <filter id="glow" x="-50%" y="-50%" height="500%" width="500%">
        <feGaussianBlur stdDeviation="7" result="coloredBlur"/></filter>
        <filter id="intenseglow" x="-50%" y="-50%" height="500%" width="500%">
        <feGaussianBlur stdDeviation="7" result="coloredBlur"/></filter>
        <filter id="lessglow" x="-50%" y="-50%" height="500%" width="500%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur"/></filter>
        <filter id="barelyglow" x="-10%" y="-10%" height="100%" width="100%">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/></filter>
        <filter id="moreglow" x="-10%" y="-10%" height="100%" width="100%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/></filter>
      </defs>
    <g id="main">
        <title>lightPath</title>
        <g id="main_1_">
            <g class="lightPath">
                <path linejoin="round" stroke-linecap='round' class="lines main" d="M86.9,22.2c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4s-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9C286.4,64.5,158.7,83,155,106.4c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    C32.9,145.2,14.4,106,69.3,97.8c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2S75.5,97.1,53.9,77.4
                    C33,58.3,47.4,35.8,86.9,22.2z" filter="url(#barelyglow)"/>
            </g>
            <g id="lightPath_8">
                <path linejoin="round" stroke-linecap='round' class="lines" d="M86.9,22.2c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4s-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9C286.4,64.5,158.7,83,155,106.4c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    C32.9,145.2,14.4,106,69.3,97.8c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2S75.5,97.1,53.9,77.4
                    C33,58.3,47.4,35.8,86.9,22.2z" filter="url(#glow)"/>
            </g>
        </g>
    </g>
    <g id="under">
                <path linejoin="round" stroke-linecap='round' class="lines five" d="M86.9,124c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4c-14.8,14.8-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9c-1.8-30.2-129.5-11.7-133.2,11.7c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    c-25.3-30.2-43.8-69.5,11.1-77.7c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2s-267.6,26.5-289.2,6.8
                    C33,160.1,47.4,137.6,86.9,124z" filter="url(#intenseglow)"/>
                <path linejoin="round" stroke-linecap='round' class="lines five" d="M86.9,114.6c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4c-14.8,14.8-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9c-1.8-30.2-129.5-11.7-133.2,11.7c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    c-25.3-30.2-43.8-69.5,11.1-77.7c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2s-267.6,26.5-289.2,6.8
                    C33,150.7,47.4,128.2,86.9,114.6z" filter="url(#lessglow)"/>
                <path linejoin="round" stroke-linecap='round' class="lines four" d="M86.9,105.6c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4s-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9c-1.8-30.2-129.5-11.7-133.2,11.7c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    c-25.3-30.2-43.8-69.5,11.1-77.7c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2s-267.6,26.5-289.2,6.8
                    C33,141.7,47.4,119.1,86.9,105.6z" filter="url(#moreglow)"/>
                <path linejoin="round" stroke-linecap='round' class="lines four" d="M86.9,95.9c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4s-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9c-1.8-30.2-129.5-11.7-133.2,11.7c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    c-25.3-30.2-43.8-69.5,11.1-77.7c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2S75.5,170.8,53.9,151
                    C33,132,47.4,109.4,86.9,95.9z" filter="url(#lessglow)"/>
                <path linejoin="round" stroke-linecap='round' class="lines three" d="M86.9,86.4c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4s-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9c-1.8-30.2-129.5-11.7-133.2,11.7c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    c-25.3-30.2-43.8-69.5,11.1-77.7c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2s-267.6,26.5-289.2,6.8
                    C33,122.5,47.4,100,86.9,86.4z" filter="url(#intenseglow)"/>
                <path linejoin="round" stroke-linecap='round' class="lines three" d="M86.9,77.4c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4s-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9c-1.8-30.2-129.5-11.7-133.2,11.7c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    c-25.3-30.2-43.8-69.5,11.1-77.7c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2s-267.6,26.5-289.2,6.8
                    C33,113.5,47.4,91,86.9,77.4z" filter="url(#lessglow)"/>
                <path linejoin="round" stroke-linecap='round' class="lines two" d="M86.9,68.8c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4s-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9C286.4,111,158.7,129.5,155,153c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    c-25.3-30.2-43.8-69.5,11.1-77.7c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2S75.5,143.7,53.9,124
                    C33,104.9,47.4,82.4,86.9,68.8z" filter="url(#moreglow)"/>
                <path linejoin="round" stroke-linecap='round' class="lines two" d="M86.9,59.4c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4s-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9c-1.8-30.2-129.5-11.7-133.2,11.7c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    c-25.3-30.2-43.8-69.5,11.1-77.7c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2s-267.6,26.5-289.2,6.8
                    C33,95.5,47.4,72.9,86.9,59.4z" filter="url(#lessglow)"/>
                <path linejoin="round" stroke-linecap='round' class="lines one" d="M86.9,50.4c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4s-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9c-1.8-30.2-129.5-11.7-133.2,11.7c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    c-25.3-30.2-43.8-69.5,11.1-77.7c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2s-267.6,26.5-289.2,6.8
                    C33,86.5,47.4,63.9,86.9,50.4z" filter="url(#intenseglow)"/>
                <path linejoin="round" stroke-linecap='round' class="lines one" d="M86.9,40.6c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4s-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9c-1.8-30.2-129.5-11.7-133.2,11.7c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    c-25.3-30.2-43.8-69.5,11.1-77.7c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2S75.5,115.6,53.9,95.8
                    C33,76.7,47.4,54.2,86.9,40.6z" filter="url(#lessglow)"/>
                <path linejoin="round" stroke-linecap='round' class="lines" d="M86.9,31.2c39.5-13.6,130-6.1,139.7,8.9c9.9,15.4-32.7,29.6-47.5,44.4s-2.9,41.9,28.4,45
                    c30.8,3.1,82-6.6,80.8-25.9C286.4,73.5,158.7,92,155,115.4c-2.9,18.6,66.6,51.2,56.7,69.1c-9.9,17.9-122.5,37.1-153.5,0
                    c-25.3-30.2-43.8-69.5,11.1-77.7c61.7-9.2,110.4,98.7,181.9,90c28.8-3.5,166.5-97.4,91.9-117.2S75.5,106.1,53.9,86.4
                    C33,67.3,47.4,44.8,86.9,31.2z" filter="url(#intenseglow)"/>
    </g>
    </svg>
    
    </div>`);

    $newDance.css({
        'position': 'absolute',
        'left': posx + 'px',
        'top': posy + 'px'
    }).appendTo('body').fadeIn(100);

    var convert = require('svg-to-canvas');
    var svg = document.querySelector('svg');

    convert(svg, function thumbnail(canvas) {
        var image = new Image();
        image.onload = function () {
            image.setAttribute('height', image.height * 0.3);
            image.setAttribute('width', image.width * 0.3);
            window.document.body.appendChild(image);
        };
        image.src = canvas.toDataURL();
    });

   
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

        ctx.save();
        ctx.translate(0,0);
        ctx.translate(0,0);
        ctx.translate(0,0);
        ctx.scale(0,0);
        ctx.translate(0,0);
        ctx.strokeStyle = 'rgba(0,0,0,0)';
        ctx.lineCap = 'butt';
        ctx.lineJoin = 'miter';
        ctx.miterLimit = 4;
        ctx.save();
        ctx.save();
        ctx.restore();
        ctx.save();
        ctx.save();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,22.2);
        ctx.bezierCurveTo(126.4,8.6,216.9,16.1,226.6,31.1);
        ctx.bezierCurveTo(236.5,46.5,193.89999999999998,60.7,179.1,75.5);
        ctx.bezierCurveTo(164.3,90.3,176.2,117.4,207.5,120.5);
        ctx.bezierCurveTo(238.3,123.6,289.5,113.9,288.3,94.6);
        ctx.bezierCurveTo(286.4,64.5,158.7,83,155,106.4);
        ctx.bezierCurveTo(152.1,125,221.6,157.60000000000002,211.7,175.5);
        ctx.bezierCurveTo(201.79999999999998,193.4,89.19999999999999,212.6,58.19999999999999,175.5);
        ctx.bezierCurveTo(32.9,145.2,14.4,106,69.3,97.8);
        ctx.bezierCurveTo(131,88.6,179.7,196.5,251.2,187.8);
        ctx.bezierCurveTo(280,184.3,417.7,90.4,343.1,70.60000000000001);
        ctx.bezierCurveTo(268.50000000000006,50.80000000000001,75.5,97.1,53.9,77.4);
        ctx.bezierCurveTo(33,58.3,47.4,35.8,86.9,22.2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.restore();
        ctx.save();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,22.2);
        ctx.bezierCurveTo(126.4,8.6,216.9,16.1,226.6,31.1);
        ctx.bezierCurveTo(236.5,46.5,193.89999999999998,60.7,179.1,75.5);
        ctx.bezierCurveTo(164.3,90.3,176.2,117.4,207.5,120.5);
        ctx.bezierCurveTo(238.3,123.6,289.5,113.9,288.3,94.6);
        ctx.bezierCurveTo(286.4,64.5,158.7,83,155,106.4);
        ctx.bezierCurveTo(152.1,125,221.6,157.60000000000002,211.7,175.5);
        ctx.bezierCurveTo(201.79999999999998,193.4,89.19999999999999,212.6,58.19999999999999,175.5);
        ctx.bezierCurveTo(32.9,145.2,14.4,106,69.3,97.8);
        ctx.bezierCurveTo(131,88.6,179.7,196.5,251.2,187.8);
        ctx.bezierCurveTo(280,184.3,417.7,90.4,343.1,70.60000000000001);
        ctx.bezierCurveTo(268.50000000000006,50.80000000000001,75.5,97.1,53.9,77.4);
        ctx.bezierCurveTo(33,58.3,47.4,35.8,86.9,22.2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.restore();
        ctx.restore();
        ctx.restore();
        ctx.save();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,124);
        ctx.bezierCurveTo(126.4,110.4,216.9,117.9,226.6,132.9);
        ctx.bezierCurveTo(236.5,148.3,193.89999999999998,162.5,179.1,177.3);
        ctx.bezierCurveTo(164.29999999999998,192.10000000000002,176.2,219.20000000000002,207.5,222.3);
        ctx.bezierCurveTo(238.3,225.4,289.5,215.70000000000002,288.3,196.4);
        ctx.bezierCurveTo(286.5,166.20000000000002,158.8,184.70000000000002,155.10000000000002,208.1);
        ctx.bezierCurveTo(152.20000000000002,226.7,221.70000000000002,259.3,211.8,277.2);
        ctx.bezierCurveTo(201.9,295.09999999999997,89.30000000000001,314.3,58.30000000000001,277.2);
        ctx.bezierCurveTo(33.000000000000014,247,14.500000000000014,207.7,69.4,199.5);
        ctx.bezierCurveTo(131.10000000000002,190.3,179.8,298.2,251.3,289.5);
        ctx.bezierCurveTo(280.1,286,417.8,192.1,343.20000000000005,172.3);
        ctx.bezierCurveTo(268.6000000000001,152.50000000000003,75.60000000000002,198.8,54.00000000000006,179.10000000000002);
        ctx.bezierCurveTo(33,160.1,47.4,137.6,86.9,124);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,114.6);
        ctx.bezierCurveTo(126.4,101,216.9,108.5,226.6,123.5);
        ctx.bezierCurveTo(236.5,138.9,193.89999999999998,153.1,179.1,167.9);
        ctx.bezierCurveTo(164.29999999999998,182.70000000000002,176.2,209.8,207.5,212.9);
        ctx.bezierCurveTo(238.3,216,289.5,206.3,288.3,187);
        ctx.bezierCurveTo(286.5,156.8,158.8,175.3,155.10000000000002,198.7);
        ctx.bezierCurveTo(152.20000000000002,217.29999999999998,221.70000000000002,249.89999999999998,211.8,267.79999999999995);
        ctx.bezierCurveTo(201.9,285.69999999999993,89.30000000000001,304.9,58.30000000000001,267.79999999999995);
        ctx.bezierCurveTo(33.000000000000014,237.59999999999997,14.500000000000014,198.29999999999995,69.4,190.09999999999997);
        ctx.bezierCurveTo(131.10000000000002,180.89999999999998,179.8,288.79999999999995,251.3,280.09999999999997);
        ctx.bezierCurveTo(280.1,276.59999999999997,417.8,182.69999999999996,343.20000000000005,162.89999999999998);
        ctx.bezierCurveTo(268.6000000000001,143.1,75.60000000000002,189.39999999999998,54.00000000000006,169.7);
        ctx.bezierCurveTo(33,150.7,47.4,128.2,86.9,114.6);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,105.6);
        ctx.bezierCurveTo(126.4,92,216.9,99.5,226.6,114.5);
        ctx.bezierCurveTo(236.5,129.9,193.89999999999998,144.1,179.1,158.9);
        ctx.bezierCurveTo(164.3,173.70000000000002,176.2,200.8,207.5,203.9);
        ctx.bezierCurveTo(238.3,207,289.5,197.3,288.3,178);
        ctx.bezierCurveTo(286.5,147.8,158.8,166.3,155.10000000000002,189.7);
        ctx.bezierCurveTo(152.20000000000002,208.29999999999998,221.70000000000002,240.89999999999998,211.8,258.79999999999995);
        ctx.bezierCurveTo(201.9,276.69999999999993,89.30000000000001,295.9,58.30000000000001,258.79999999999995);
        ctx.bezierCurveTo(33.000000000000014,228.59999999999997,14.500000000000014,189.29999999999995,69.4,181.09999999999997);
        ctx.bezierCurveTo(131.10000000000002,171.89999999999998,179.8,279.79999999999995,251.3,271.09999999999997);
        ctx.bezierCurveTo(280.1,267.59999999999997,417.8,173.69999999999996,343.20000000000005,153.89999999999998);
        ctx.bezierCurveTo(268.6000000000001,134.1,75.60000000000002,180.39999999999998,54.00000000000006,160.7);
        ctx.bezierCurveTo(33,141.7,47.4,119.1,86.9,105.6);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,95.9);
        ctx.bezierCurveTo(126.4,82.30000000000001,216.9,89.80000000000001,226.6,104.80000000000001);
        ctx.bezierCurveTo(236.5,120.20000000000002,193.89999999999998,134.4,179.1,149.20000000000002);
        ctx.bezierCurveTo(164.3,164.00000000000003,176.2,191.10000000000002,207.5,194.20000000000002);
        ctx.bezierCurveTo(238.3,197.3,289.5,187.60000000000002,288.3,168.3);
        ctx.bezierCurveTo(286.5,138.10000000000002,158.8,156.60000000000002,155.10000000000002,180);
        ctx.bezierCurveTo(152.20000000000002,198.6,221.70000000000002,231.2,211.8,249.1);
        ctx.bezierCurveTo(201.9,267,89.30000000000001,286.2,58.30000000000001,249.1);
        ctx.bezierCurveTo(33.000000000000014,218.9,14.500000000000014,179.6,69.4,171.39999999999998);
        ctx.bezierCurveTo(131.10000000000002,162.2,179.8,270.09999999999997,251.3,261.4);
        ctx.bezierCurveTo(280.1,257.9,417.8,163.99999999999997,343.20000000000005,144.2);
        ctx.bezierCurveTo(268.6000000000001,124.4,75.5,170.8,53.9,151);
        ctx.bezierCurveTo(33,132,47.4,109.4,86.9,95.9);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,86.4);
        ctx.bezierCurveTo(126.4,72.80000000000001,216.9,80.30000000000001,226.6,95.30000000000001);
        ctx.bezierCurveTo(236.5,110.70000000000002,193.89999999999998,124.9,179.1,139.70000000000002);
        ctx.bezierCurveTo(164.3,154.50000000000003,176.2,181.60000000000002,207.5,184.70000000000002);
        ctx.bezierCurveTo(238.3,187.8,289.5,178.10000000000002,288.3,158.8);
        ctx.bezierCurveTo(286.5,128.60000000000002,158.8,147.10000000000002,155.10000000000002,170.5);
        ctx.bezierCurveTo(152.20000000000002,189.1,221.70000000000002,221.7,211.8,239.6);
        ctx.bezierCurveTo(201.9,257.5,89.30000000000001,276.7,58.30000000000001,239.6);
        ctx.bezierCurveTo(33.000000000000014,209.4,14.500000000000014,170.1,69.4,161.89999999999998);
        ctx.bezierCurveTo(131.10000000000002,152.7,179.8,260.59999999999997,251.3,251.89999999999998);
        ctx.bezierCurveTo(280.1,248.39999999999998,417.8,154.49999999999997,343.20000000000005,134.7);
        ctx.bezierCurveTo(268.6000000000001,114.9,75.60000000000002,161.2,54.00000000000006,141.5);
        ctx.bezierCurveTo(33,122.5,47.4,100,86.9,86.4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,77.4);
        ctx.bezierCurveTo(126.4,63.800000000000004,216.9,71.30000000000001,226.6,86.30000000000001);
        ctx.bezierCurveTo(236.5,101.70000000000002,193.89999999999998,115.9,179.1,130.70000000000002);
        ctx.bezierCurveTo(164.3,145.50000000000003,176.2,172.60000000000002,207.5,175.70000000000002);
        ctx.bezierCurveTo(238.3,178.8,289.5,169.10000000000002,288.3,149.8);
        ctx.bezierCurveTo(286.5,119.60000000000001,158.8,138.10000000000002,155.10000000000002,161.5);
        ctx.bezierCurveTo(152.20000000000002,180.1,221.70000000000002,212.7,211.8,230.6);
        ctx.bezierCurveTo(201.9,248.5,89.30000000000001,267.7,58.30000000000001,230.6);
        ctx.bezierCurveTo(33.000000000000014,200.4,14.500000000000014,161.1,69.4,152.89999999999998);
        ctx.bezierCurveTo(131.10000000000002,143.7,179.8,251.59999999999997,251.3,242.89999999999998);
        ctx.bezierCurveTo(280.1,239.39999999999998,417.8,145.49999999999997,343.20000000000005,125.69999999999997);
        ctx.bezierCurveTo(268.6000000000001,105.89999999999998,75.60000000000002,152.2,54.00000000000006,132.49999999999997);
        ctx.bezierCurveTo(33,113.5,47.4,91,86.9,77.4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,68.8);
        ctx.bezierCurveTo(126.4,55.199999999999996,216.9,62.699999999999996,226.6,77.7);
        ctx.bezierCurveTo(236.5,93.10000000000001,193.89999999999998,107.30000000000001,179.1,122.1);
        ctx.bezierCurveTo(164.3,136.89999999999998,176.2,164,207.5,167.1);
        ctx.bezierCurveTo(238.3,170.2,289.5,160.5,288.3,141.2);
        ctx.bezierCurveTo(286.4,111,158.7,129.5,155,153);
        ctx.bezierCurveTo(152.1,171.6,221.6,204.2,211.7,222.1);
        ctx.bezierCurveTo(201.79999999999998,240,89.19999999999999,259.2,58.19999999999999,222.1);
        ctx.bezierCurveTo(32.89999999999999,191.9,14.399999999999991,152.6,69.29999999999998,144.39999999999998);
        ctx.bezierCurveTo(131,135.2,179.7,243.09999999999997,251.2,234.39999999999998);
        ctx.bezierCurveTo(280,230.89999999999998,417.7,136.99999999999997,343.1,117.19999999999997);
        ctx.bezierCurveTo(268.50000000000006,97.39999999999998,75.5,143.7,53.9,124);
        ctx.bezierCurveTo(33,104.9,47.4,82.4,86.9,68.8);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,59.4);
        ctx.bezierCurveTo(126.4,45.8,216.9,53.3,226.6,68.3);
        ctx.bezierCurveTo(236.5,83.7,193.89999999999998,97.9,179.1,112.69999999999999);
        ctx.bezierCurveTo(164.3,127.49999999999997,176.2,154.6,207.5,157.7);
        ctx.bezierCurveTo(238.3,160.79999999999998,289.5,151.1,288.3,131.79999999999998);
        ctx.bezierCurveTo(286.5,101.59999999999998,158.8,120.09999999999998,155.10000000000002,143.49999999999997);
        ctx.bezierCurveTo(152.20000000000002,162.09999999999997,221.70000000000002,194.7,211.8,212.59999999999997);
        ctx.bezierCurveTo(201.9,230.49999999999997,89.30000000000001,249.69999999999996,58.30000000000001,212.59999999999997);
        ctx.bezierCurveTo(33.000000000000014,182.39999999999998,14.500000000000014,143.09999999999997,69.4,134.89999999999998);
        ctx.bezierCurveTo(131.10000000000002,125.69999999999997,179.8,233.59999999999997,251.3,224.89999999999998);
        ctx.bezierCurveTo(280.1,221.39999999999998,417.8,127.49999999999997,343.20000000000005,107.69999999999997);
        ctx.bezierCurveTo(268.6000000000001,87.89999999999998,75.60000000000002,134.2,54.00000000000006,114.49999999999997);
        ctx.bezierCurveTo(33,95.5,47.4,72.9,86.9,59.4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,50.4);
        ctx.bezierCurveTo(126.4,36.8,216.9,44.3,226.6,59.3);
        ctx.bezierCurveTo(236.5,74.7,193.89999999999998,88.9,179.1,103.69999999999999);
        ctx.bezierCurveTo(164.3,118.49999999999997,176.2,145.6,207.5,148.7);
        ctx.bezierCurveTo(238.3,151.79999999999998,289.5,142.1,288.3,122.79999999999998);
        ctx.bezierCurveTo(286.5,92.59999999999998,158.8,111.09999999999998,155.10000000000002,134.49999999999997);
        ctx.bezierCurveTo(152.20000000000002,153.09999999999997,221.70000000000002,185.7,211.8,203.59999999999997);
        ctx.bezierCurveTo(201.9,221.49999999999997,89.30000000000001,240.69999999999996,58.30000000000001,203.59999999999997);
        ctx.bezierCurveTo(33.000000000000014,173.39999999999998,14.500000000000014,134.09999999999997,69.4,125.89999999999996);
        ctx.bezierCurveTo(131.10000000000002,116.69999999999996,179.8,224.59999999999997,251.3,215.89999999999998);
        ctx.bezierCurveTo(280.1,212.39999999999998,417.8,118.49999999999997,343.20000000000005,98.69999999999997);
        ctx.bezierCurveTo(268.6000000000001,78.89999999999998,75.60000000000002,125.19999999999997,54.00000000000006,105.49999999999997);
        ctx.bezierCurveTo(33,86.5,47.4,63.9,86.9,50.4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,40.6);
        ctx.bezierCurveTo(126.4,27,216.9,34.5,226.6,49.5);
        ctx.bezierCurveTo(236.5,64.9,193.89999999999998,79.1,179.1,93.9);
        ctx.bezierCurveTo(164.3,108.70000000000002,176.2,135.8,207.5,138.9);
        ctx.bezierCurveTo(238.3,142,289.5,132.3,288.3,113);
        ctx.bezierCurveTo(286.5,82.8,158.8,101.3,155.10000000000002,124.7);
        ctx.bezierCurveTo(152.20000000000002,143.3,221.70000000000002,175.9,211.8,193.8);
        ctx.bezierCurveTo(201.9,211.70000000000002,89.30000000000001,230.9,58.30000000000001,193.8);
        ctx.bezierCurveTo(33.000000000000014,163.60000000000002,14.500000000000014,124.30000000000001,69.4,116.10000000000001);
        ctx.bezierCurveTo(131.10000000000002,106.9,179.8,214.8,251.3,206.10000000000002);
        ctx.bezierCurveTo(280.1,202.60000000000002,417.8,108.70000000000002,343.20000000000005,88.90000000000002);
        ctx.bezierCurveTo(268.6000000000001,69.10000000000002,75.5,115.6,53.9,95.8);
        ctx.bezierCurveTo(33,76.7,47.4,54.2,86.9,40.6);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(86.9,31.2);
        ctx.bezierCurveTo(126.4,17.6,216.9,25.1,226.6,40.1);
        ctx.bezierCurveTo(236.5,55.5,193.89999999999998,69.7,179.1,84.5);
        ctx.bezierCurveTo(164.3,99.3,176.2,126.4,207.5,129.5);
        ctx.bezierCurveTo(238.3,132.6,289.5,122.9,288.3,103.6);
        ctx.bezierCurveTo(286.4,73.5,158.7,92,155,115.4);
        ctx.bezierCurveTo(152.1,134,221.6,166.60000000000002,211.7,184.5);
        ctx.bezierCurveTo(201.79999999999998,202.4,89.19999999999999,221.6,58.19999999999999,184.5);
        ctx.bezierCurveTo(32.89999999999999,154.3,14.399999999999991,115,69.29999999999998,106.8);
        ctx.bezierCurveTo(131,97.6,179.7,205.5,251.2,196.8);
        ctx.bezierCurveTo(280,193.3,417.7,99.4,343.1,79.60000000000001);
        ctx.bezierCurveTo(268.50000000000006,59.80000000000001,75.5,106.1,53.9,86.4);
        ctx.bezierCurveTo(33,67.3,47.4,44.8,86.9,31.2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.restore();
        ctx.restore();
});
},{"svg-to-canvas":2}],2:[function(require,module,exports){
module.exports = function convert(svg, cb) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var image = new Image();
  image.onload = function load() {
    canvas.height = image.height;
    canvas.width = image.width;
    ctx.drawImage(image, 0, 0);
    cb(canvas);
  };
  image.src = 'data:image/svg+xml;charset-utf-8,' + encodeURIComponent(svg.outerHTML);
};

},{}]},{},[1]);
