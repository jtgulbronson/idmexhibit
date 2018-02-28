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
});