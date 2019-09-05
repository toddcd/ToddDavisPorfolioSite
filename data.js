const DATA = {
    about: {
        title: 'about me',
        cover_img: './images/cover_image2.JPG',
        cover_alt: 'about me',
        linkein: 'https://www.linkedin.com/in/todd-c-davis',
        github: 'https://github.com/toddcd/',
        mailto: 'mailto:tejastcd@gmail.com?subject=Software Engineering Opportunities',
        short_desc: 'I\'m a full stack developer in Boston, MA.\n with a passion for technology,\n design, and cycling.',
        long_desc: "I have diverse infrastructure and software engineering experience that was cultivated while working as a member of talented start-up and corporate technology teams.\n\n I came into software development after a career as a network engineer where I managed data centers, hardware, and security infrastructure. After some retooling, I moved into a role as a Java developer building APIs and ultimately found my way to frontend development.\n\n I’m dedicated to the mission of software engineering and design, and aiding company and customer success.\n\r When I’m not writing code and exploring new technologies, you can find me racking up miles on my bicycle or enjoying a flat white at the local cafe."},
    project_detail: [
        {
            id: 1,
            title: 'Risk Budgeting Tool',
            background_css_img: 'riskbudget',
            detail_img: './images/burroughs_detail.jpg',
            detail_alt: 'merckx podium',
            stack: [
                'html5_icon',
                'javascript_icon',
                'react_icon',
                'nodejs_icon',
                'postgresql_icon'
            ],
            problem: 'Risk budgeting is a portfolio construction method where capital is allocated based on an individual assets risk and return contributions as it relates to other funds in the portfolio and the over-all investment strategy.'+
                'The Risk Budgeting Tool helps provide insight by taking in fund performance along with weight, risk, and return variables that can then be used to analyzed the portfolio and identify potential areas where capital may be redistributed.',
            solution: 'After using the portfolio template to construct a portfolio, and providing the important performance data for the underlying funds, the portfolio can be imported into the application and persisted to the database.',
            active: true,
            demo_location: 'https://td3-riskbudget.now.sh/',
            src_location: 'https://github.com/toddcd/risk-budget-client'
        },
        {
            id: 2,
            title: 'Ciclismo Snack Finder',
            background_css_img: 'ciclismo',
            detail_img: './images/merckxPodium_detail.png',
            detail_alt: 'merckx podium',
            stack: [
                'html5_icon',
                'javascript_icon',
                'jquery_icon'
            ],
            problem: 'Professional cycling has a rich and deep history in Europe and each one of the Monument events is the equivalent of the Superbowl or Worlds Series. Unfortunately cycling is a complicated and hard to understand sport.',
            solution: 'The Cycling Monuments Quiz tests and builds a player’s knowledge of cycling’s hardest and most prestigious one-day races in professional cycling with interesting questions and compelling photos.  There are multiple choice questions that players answer and receive intimidate feedback. At the end they are notified how they did.',
            active: true,
            demo_location: 'http://ciclismosnackfinder.com',
            src_location: 'https://github.com/toddcd/CiclismoSnackFinder'
        },
        {
            id: 3,
            title: 'Velo Notes',
            background_css_img: 'velonotes',
            detail_img: './images/merckxPodium_detail.png',
            detail_alt: 'merckx podium',
            stack: [
                'html5_icon',
                'javascript_icon',
                'react_icon',
                'nodejs_icon',
                'postgresql_icon'
            ],
            problem: 'Professional cycling has a rich and deep history in Europe and each one of the Monument events is the equivalent of the Superbowl or Worlds Series. Unfortunately cycling is a complicated and hard to understand sport.',
            solution: 'The Cycling Monuments Quiz tests and builds a player’s knowledge of cycling’s hardest and most prestigious one-day races in professional cycling with interesting questions and compelling photos.  There are multiple choice questions that players answer and receive intimidate feedback. At the end they are notified how they did.',
            active: true,
            demo_location: 'http://velonotes.com',
            src_location: 'https://github.com/toddcd/velonotes-client'
        },
        {
            id: 4,
            title: 'Cycling Monuments',
            background_css_img: 'monuments',
            detail_img: './images/merckxPodium_detail.png',
            detail_alt: 'merckx podium',
            stack: [
                'html5_icon',
                'javascript_icon',
                'jquery_icon'
            ],
            problem: 'Professional cycling has a rich and deep history in Europe and each one of the Monument events is the equivalent of the Superbowl or Worlds Series. Unfortunately cycling is a complicated and hard to understand sport.',
            solution: 'The Cycling Monuments Quiz tests and builds a player’s knowledge of cycling’s hardest and most prestigious one-day races in professional cycling with interesting questions and compelling photos.  There are multiple choice questions that players answer and receive intimidate feedback. At the end they are notified how they did.',
            active: true,
            demo_location: 'https://toddcd.github.io/monument-quiz/',
            src_location: 'https://github.com/toddcd/monument-quiz'
        }
    ]
}