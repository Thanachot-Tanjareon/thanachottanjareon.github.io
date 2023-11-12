import { IntroInterface } from "./data/@myData.interface";
import CalcAge from "./utils/CalcAge/CalcAge";
import "./style/main.css";
import "./style/responsive.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import "./SPAConfig";


export const myIntro: IntroInterface = {
    "name": "Thanachot Tanjareon",
    "profileUrl": {
        "url": "/images/profile-image.jpg",
        "explaination_image": "Thanachot Tanjareon's profile"
    },
    "age": new CalcAge(6, 6, 2006).age,
    "skills": {
        "coding": [
            {
                "skill": "HTML",
                "icon": "/images/icons/html-5-svgrepo-com.svg"
            },
            {
                "skill": "CSS",
                "icon": "/images/icons/css3-svgrepo-com.svg"
            },
            {
                "skill": "JavaScript",
                "icon": "/images/icons/js-official-svgrepo-com.svg"
            },
            {
                "skill": "NodeJS",
                "icon": "/images/icons/nodejs-1-logo-svgrepo-com.svg"
            },
            {
                "skill": "TypeScript",
                "icon": "/images/icons/typescript-logo-svgrepo-com.svg"
            },
            {
                "skill": "PHP",
                "icon": "/images/icons/php-svgrepo-com.svg"
            },
            {
                "skill": "MySQL",
                "icon": "/images/icons/mysql-logo-svgrepo-com.svg"
            }
        ],
        "graphic": [
            {
                "skill": "Photoshop",
                "icon": "/images/icons/photoshop-cc-logo-svgrepo-com.svg"
            }
        ],
        "media": [
            {
                "skill": "Premiere pro",
                "icon": "/images/icons/premiere-cc-logo-svgrepo-com.svg"
            }
        ]
    },
    "shortExplaination": ["Web Developer.", "Graphic designer.", "Video editor."],
    "qouteExplaination": "Hi, I'm Thanachot Tanjareon. I'm 17 years old (since 2023). I felt good when coding and drawing a pictures alway, which I practiced programming since I studied at grade 9, Thailand. I practiced programming as self-taught learning from more knowledges source such as Youtube, article website, and technologies docs. It's feel very good for learn a new things",
    "projects": null,
    "contacts": {
        "facebook": {
            "icon": {
                "url": "/images/icons/facebook-color-svgrepo-com.svg",
                "icon_explaination": "Facebook icon"
            },
            "text": "Thanachot Tanjareon",
            "url": "https://www.facebook.com/ThanachotTanjareon/"
        },
        "gmail": {
            "icon": {
                "url": "/images/icons/gmail-old-svgrepo-com.svg",
                "icon_explaination": "Gmail icon"
            },
            "text": "thanachot2549.orther@gmail.com"
        },
        "github": {
            "icon": {
                "url": "/images/icons/github-142-svgrepo-com.svg",
                "icon_explaination": "Github icon"
            },
            "text": "Thanachot Tanjareon",
            "url": "https://www.github.com/Thanachot-Tanjareon/"
        }
    },
    "copyright": {
        "owner": "Thanachot Tanjareon",
        "copyright_text": "Copyright 2023, All right reserved."
    }
}