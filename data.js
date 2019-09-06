const DATA = {
    about: {
        title: 'about me',
        cover_img: './images/landing/cover_image2.JPG',
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
            detail_header_img: './images/riskbudget/burroughs_detail.jpg',
            detail_header_alt: 'burroughs adding machine',
            detail_body_img: './images/riskbudget/portfolioDetail_500.png',
            detail_body_alt: 'port detail',
            detail_footer_img: './images/riskbudget/chartDetail_500.png',
            detail_footer_alt: 'chart',
            stack: [
                'html5_icon',
                'javascript_icon',
                'react_icon',
                'nodejs_icon',
                'postgresql_icon'
            ],
            description: 'Risk budgeting is a portfolio construction method where capital is allocated based on an individual assets risk and return contributions as it relates to other funds in the portfolio and the over-all investment strategy.',
            problem: "The risk budgeting approach is historically only available to experts in the financial industry and high-wealth individuals. RBT aims to make this strategy available to the masses and help with financial literacy.\n\n The portfolio construction approach requires quality performance data for the underlying funds which can be expensive to provide to users on a large scale.",
            solution: 'Simplify the risk budgeting process by breaking it down into 3 steps and providing a template example showing what might be in a portfolio.\n\n Users provide the important performance data for the underlying funds which is imported into the application and persisted to the database.',
            active: true,
            demo_location: 'https://td3-riskbudget.now.sh/',
            src_location: 'https://github.com/toddcd/risk-budget-client'
        },
        {
            id: 2,
            title: 'Ciclismo Snack Finder',
            background_css_img: 'ciclismo',
            detail_header_img: './images/ciclismo/orange-logo.png',
            detail_header_alt: 'merckx podium',
            detail_body_img: './images/ciclismo/searchDetails_500.png',
            detail_body_alt: 'search details',
            detail_footer_img: './images/ciclismo/searchResults_500.png',
            detail_footer_alt: 'search results',
            stack: [
                'html5_icon',
                'javascript_icon',
                'jquery_icon'
            ],
            description: 'Snacks are a quintessential part of cycling culture. Grabbing a pre-ride coffee, mid-ride scone, or post-ride tacos and beer can often be just as important as the ride itself.',
            problem: 'Finding quality snacks at independent style establishments with artisan coffee, micro brews, or street tacos in a specific location.',
            solution: 'Ciclismo Snack Finder uses Google APIs and geolocation to help locate snacks where you are or where you\'re going to be.\n\n Then it leverages Google Maps to provide detailed directions and get you where you need to be.',
            active: true,
            demo_location: 'http://ciclismosnackfinder.com',
            src_location: 'https://github.com/toddcd/CiclismoSnackFinder'
        },
        {
            id: 3,
            title: 'VeloNotes',
            background_css_img: 'velonotes',
            detail_header_img: './images/velonotes/geometryDetail_500.png',
            detail_header_alt: 'frame geometry',
            detail_body_img: './images/velonotes/positionDetail_500.png',
            detail_body_alt: 'position detail',
            detail_footer_img: null,
            detail_footer_alt: null,
            stack: [
                'html5_icon',
                'javascript_icon',
                'react_icon',
                'nodejs_icon',
                'postgresql_icon'
            ],
            description: 'Cyclists can be fanatical about the fit of their bicycle. Fit and position can be tied to optimal performance, comfort and  injury prevention.',
            problem: ' Fit and position data is normally tracked on paper or in spreadsheets. When tracked it often becomes stale or lost.',
            solution: 'Velonotes provides a single place to track this important information.\n\n Fit and position data can be analyzed or time from bicycle to bicycle as it relates to different manufacture\'s frame geometry.\n\n Notes can provide a historical record of what, when and why.',
            active: true,
            demo_location: 'http://velonotes.com',
            src_location: 'https://github.com/toddcd/velonotes-client'
        },
        {
            id: 4,
            title: 'Cycling Monuments',
            background_css_img: 'monuments',
            detail_header_img: './images/monuments/merckxPodium_detail.png',
            detail_header_alt: 'merckx podium',
            detail_body_img: './images/monuments/jungelsWin.jpg',
            detail_body_alt: 'jungles win',
            detail_footer_img: null,
            detail_footer_alt: null,
            stack: [
                'html5_icon',
                'javascript_icon',
                'jquery_icon'
            ],
            description: 'Professional cycling has a rich and deep history in Europe and each one of the Monument events is the equivalent of the Superbowl or Worlds Series.',
            problem: ' Unfortunately cycling is a complicated and hard to understand. This can make it inaccessible and non-inclusive.',
            solution: 'The Cycling Monuments Quiz tests and builds a player’s knowledge of cycling’s hardest and most prestigious one-day races in professional cycling with interesting questions and compelling photos.\n\n There are multiple choice questions that players answer and receive intimidate feedback. At the end they are notified how they did and become cycling fans!',
            active: true,
            demo_location: 'https://toddcd.github.io/monument-quiz/',
            src_location: 'https://github.com/toddcd/monument-quiz'
        }
    ]
}