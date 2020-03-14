import React from 'react';




export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'James.',
        headerTagline: [//Line 1 For Header
                        'Hi Im James, thank for visiting my portfolio.',
                        //Line 2 For Header
                        'Full stack developer',
                        //Line 3 For Header
                        'From St.Paul, MN'
    ],
        //Contact Email
        contactEmail:'James.E.Caples@gmail.com',
        // Add Your About Text Here
        abouttext: "Customer-centric multichannel digital business leader with year’s experience successfully defining strategy driving change and delivering initiatives resulting in customer value, financial growth and operational efficiency. Disciplined and proven approach to driving profitable growth by uncovering consumer insights, building great solutions, and executing meticulously.",
        aboutImage:"",
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'First Group Project, //Project Title - Add Your Project Title Here',
             service:'Full Stack Development', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"",
             //Project URL - Add Your Project Url Here
             url:""
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Second Project',
                service: 'Back-End Development',
                imageSrc: <img src="/img/project_insight.png" alt="project"/>,
                url: 'https://bigtunaproj.herokuapp.com'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Third Project',
                service: 'Web App',
                imageSrc: '',
                url: ''
            },
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/jamescaples'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/jamescaples/'
            },
            {
                name: 'Twitter',
                url: 'https://twitter.com/jaycapes'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/__jimmy_digital/'
            }

        ]
    }