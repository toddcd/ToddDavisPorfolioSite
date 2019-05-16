'use-strict';


// open nav panel
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

function goToAbout() {

    $(".nav_panel").slideUp("fast");

    $('#main').html(`
      <section class="about">
        <h1>about me</h1>
        <p>I’m a full stack developer and accomplished technology professional with a diverse experience across start-up and corporate, infrastructure and software development domains.</p>
        <br>
        <p>I came into software development after a career as a network engineer where I managed data centers, hardware, and security infrastructure. After some retooling, I moved into a role as a developer building Java APIs and ultimately found my way to frontend development. I’m dedicated to the mission of software development and aiding company and customer success.</p>
        <br>
        <ul class="nav_ul">
            <li onclick="window.open('https://www.linkedin.com/in/todd-c-davis/','target=blank')" class="icon_li linkedin_icon"></li>
            <li onclick="window.open('https://github.com/toddcd','target=blank')" class="icon_li github_icon"></li>
            <li class="icon_li email_icon"></li>
        </ul>
        </section>
`
    );

}

function goToProjects() {

    $(".nav_panel").slideUp("fast");

    $('#main').html(`
       <h1 class="ph1">projects</h1>
       <section class="project">
            <div class="monuments">
                <p>Cycling Monuments</p>
            </div>
            <ul class="stack_ul">
                <li class="icon_li html5_icon"></li>
                <li class="icon_li javascript_icon"></li>
                <li class="icon_li jquery_icon"></li>
            </ul>
        </section>
        <section class="project">
            <div>
                <p>Ciclismo Snack Finder</p>
            </div>
            <ul class="stack_ul">
                <li class="icon_li html5_icon"></li>
                <li class="icon_li javascript_icon"></li>
                <li class="icon_li react_icon"></li>
            </ul>
        </section>
        <section class="project">
            <div>
                <p>Cycling Position Notes</p>
            </div>
            <ul class="stack_ul">
                <li class="icon_li html5_icon"></li>
                <li class="icon_li javascript_icon"></li>
                <li class="icon_li react_icon"></li>
                <li class="icon_li nodejs_icon"></li>
            </ul>
        </section>`
    )

    $('.monuments').click(function(){
        projectDetail();
    });
}

function projectDetail(){

    $('#main').html(`
      <section class="detail">
        <h1>Cycling Monuments</h1>
        <p>HTML5, Javascript, Jquery</p>
        <hr>
        <p>This quiz tests and builds a player’s knowledge of cycling’s hardest and most prestigious one-day races in professional cycling. There are multiple choice questions that players answer and receive intimidate feedback. At the end they are notified how they did.
        <hr>
        <p>Live Demo: <a href="https://toddcd.github.io/monument-quiz/" target="_blank">Shall we play a game?</a></p>
        <p>Source code: <a href="https://github.com/toddcd/monument-quiz" target="_blank">Here on git hub.</a></p>
      </section>`
    );


}


function setupClickHandlers () {

    $('.fa-bars').click(function () {
        toggleNavPanel();
    });

    $('#about').click(function(){
        goToAbout();
    });

    $('#projects').click(function(){
        goToProjects();
    });

    $(".nav_ul li").click(function(){
        $(".nav_panel").slideUp("fast");
    });

    $('.monuments').click(function(){
       projectDetail();
    });
}

$(setupClickHandlers);



