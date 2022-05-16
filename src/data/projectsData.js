import one from '../assets/svg/projects/unacademy.jpg'
import two from '../assets/svg/projects/pepperfry.jpg'
import three from '../assets/svg/projects/flyPlane.jpg'
import redux from '../assets/svg/skills/redux.svg'
import react from '../assets/svg/skills/react.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import express from '../assets/svg/skills/express.svg'
import css from '../assets/svg/skills/css.svg'
import html from '../assets/svg/skills/html.svg'
import javascript from '../assets/svg/skills/javascript.svg'
export const projectsData = [
    {
        id: 1,
        projectName: 'UNACADEMY-REPLICA',
        projectDesc: 'A Full Stack clone, replicating the user flow and behaviour of Unacademy.com.',
        projectResp: "Areas Of Responsibilities",
        responsibility: ["Main Course and subscription Page", "User Authentication","Backend Integration","Redux Integration", "Payment Portal"],
        tags: [react,express,redux],
        code: 'https://github.com/wizard3107/Unacademy',
        demo: 'https://unacademy-clone-alpha.vercel.app/',
        image: one
    },
    {
        id: 2,
        projectName: 'PEPPER-FRY-REPLICA',
        projectDesc: 'All round Frontend integrated clone Replicating the user flow and behaviour of Pepperfry.com.',
        projectResp: "Areas Of Responsibilities",
        responsibility: ["UserAuthentication", "Integration of Routes", "Cart Page", "Carousels"],
        tags: [react, redux, materialui],
        code: 'https://github.com/wizard3107/pepperfry_clone',
        demo: 'https://pepperfryclone.netlify.app/',
        image: two
    },
    {
        id: 3,
        projectName: 'COLORLIB-FLYPLANE',
        projectDesc: 'A static clone of ColorLib FlyPlane that lets helps user to get their desired tours.',
        projectResp: "Areas Of Responsibilities",
        responsibility: ["Developed fully responsive: Home page", "Made the Navbar and Footer Part of Website"],
        tags: [html, css, javascript],
        code: 'https://github.com/wizard3107/fly_plane',
        demo: 'https://f-l-y-plane.netlify.app/',
        image: three
    },
]




// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/