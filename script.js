'use-strict';

function openProjects() {

    $(".nav_panel").slideUp('fast');

    $('#main').html(`
       <header class="main_header" role="banner">
        <p>Todd<span>Davis</span></p>
        <hr>
        <p>Full Stack Developer</p>
       </header>
       <h3 class="ph1">recent projects</h3>
       ${generateListOfProjects()}
`
    )

    $('.monuments').click(function () {
        openProjectDetail(0);
    });
}

function generateListOfProjects() {

    const projects = DATA.project_detail.map(project => {
        const li = project.stack.map(l => {
            return `<li class="stack_icon_li ${l}"></li>`
        }).join('\n');

        return `<section class="project">
            <div class=${project.background_css_img}>
                <p class="project_title">${project.title}</p>
            </div>
            <ul class="stack_ul">
                ${li}
            </ul>
        </section>`
    }).join('\n');

    return projects;
}

function openLandingPage () {
    $('.nav_panel').slideUp('fast');

    $('#main').html(`
      <section class="landing">
        <div class="landing_greeting">
            <div class="greeting">
                <h4>Hey I'm</h4>
                <h1>Todd Davis</h1>
            </div>      
        </div>
         <div>
         <h3 class="greeting_desc">
           <p>Full Stack Developer.</p>
           <p>Bike lover.</p>
           <p>Coffee drinker.</p>
         </h3>
         </div>
        <div class="landing_img">
            <img src='./images/cycling_logo_a5be00_small.png' alt='cycling image logo'>
        </div>
        <div class="greeting_desc">
           <h2>About Me</h2>
           <p>${DATA.about.desc}</p>
        </div>
      </section>
      <ul class="about_social_ul">
         <li class="about_social_li"><span class="about_icon"><i class="fab fa-linkedin-in fa-lg"></i></span></li>
         <li class="about_social_li"><span class="about_icon"><i class="fab fa-github fa-lg"></i></span></li>
         <li class="about_social_li"><span class="about_icon"><i class="fas fa-envelope fa-lg"></i></span></li>
      </ul>
`
    );

    $('header').css('width', '100%')

    createSocialClickHandlers();
}

function openProjectDetail(project_id) {

    let project = DATA.project_detail[project_id];

    // generate icons for tech used in project
    const li = project.stack.map(l => {
        return `<li class="stack_icon_li ${l}"></li>`
    }).join('\n');

    $('header').hide('fast');

    $('#main').html(`
      <header class="detail_header" role="banner">
      <img src=${project.detail_img} alt=${project.detail_alt}">
      </header>
      <section class="detail">
        <ul class="demo_ul">
            <li class="demo_li"><span class="demo_icon"><i class="far fa-play-circle fa-2x"></i></span></li>
            <li class="demo_li"><span class="demo_icon"><i class="fab fa-github fa-2x"></i></span></li>
        </ul>
        <ul class="detail_stack_ul">
            ${li}
        </ul>
       
      </section>
       <div class="detail_content">
            <h3>${project.title}</h3>
            <br>
            <h4>Problem</h4>
            <hr>
            <p>${project.problem}</p>
            <br>    
            <h4>Solution</h4>
            <hr>
            <p>${project.solution}</p>
        <br>
      </div>
      <ul class="about_social_ul">
         <li class="about_social_li"><span class="about_icon"><i class="fab fa-linkedin-in fa-lg"></i></span></li>
         <li class="about_social_li"><span class="about_icon"><i class="fab fa-github fa-lg"></i></span></li>
         <li class="about_social_li"><span class="about_icon"><i class="fas fa-envelope fa-lg"></i></span></li>
      </ul>
`
    );

    // point font awesome icons to project spcific links for source
    // code and demo
    $('.fa-play-circle').click(function () {
        window.open(project.demo_location, '_blank');
    });

    $('.fa-github').click(function () {
        window.open(project.src_location, '_blank');
    });
}

function toggleNavPanel() {
    if ($(".nav_panel").is(":hidden")) {
        // open the panel
        $(".nav_panel").slideDown("fast");
        $(".nav_panel").css('display', 'flex');
        $(".nav_panel").css('flex-direction', 'column');
    } else {
        $(".nav_panel").slideUp("fast");
    }
}

function createSocialClickHandlers() {
    $('.fa-github').click(function () {
        window.open(DATA.about.github, '_blank');
        $(".nav_panel").slideUp("fast");
    });

    $('.fa-linkedin-in').click(function () {
        window.open(DATA.about.linkein, '_blank');
        $(".nav_panel").slideUp("fast");
    });

    $('.fa-envelope').click(function () {
        window.open(DATA.about.mailto, 'emailWindow');
        $(".nav_panel").slideUp("fast");
    });
}

function createNavigationClickHandlers() {
    $('#about').click(function () {
        // openAboutMe();
        openLandingPage();
    });

    $('#projects').click(function () {
        openProjects();
    });

    $(".nav_ul li").click(function () {
        $(".nav_panel").slideUp("fast");
    });
    $('.fa-bars').click(function () {
        toggleNavPanel();
    });
}

function startSite() {
    createSocialClickHandlers();
    createNavigationClickHandlers()
    openLandingPage();
}

$(startSite());



