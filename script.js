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

function openAboutMe() {

    $('.nav_panel').slideUp('fast');

    $('header').detach();

    $('#main').html(`
      <header role="banner">
      <div class="about_header">
        <h1>${DATA.about.title}</h1>
        <img src=${DATA.about.cover_img} alt=${DATA.about.cover_alt}">
      </div>
      </header>
      <section class="about">
        <h4>${DATA.about.subtitle}</h4>
        <br>
        <p>${DATA.about.desc}</p>
        <br>
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
        <p>${project.solution}</p>
        <br>
      </div>
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
        openAboutMe();
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
    openProjects();
}

$(startSite());



