

/* GET home page. */
exports.index  = function(req, res) {
  res.render('index', { 
    company: 'The Technology Advisor',
    copyright: 'Copyright 2015. The Technology Advisor. All Rights Reserved.',
    website: 'www.tekadvizor.com',
    title: 'The Technology Advisor',
    Pageheading: 'Solutions for Residential and Small Businesses',
    Cat1: 'Residential Services',
    Cat1Desc: 'Get the support you need when you need it. We make it easy to get back to being productive.',
    Cat2: 'Business Services',
    Cat2Desc: 'Time is money. Every minute counts.  You cannot afford to be down or wait.',
    Cat3: 'Surveillance Solutions',
    Cat3Desc: 'www.tekadvizor.com',
  });
}

exports.about  = function(req, res) {
  res.render('about', { 
        company: 'The Technology Advisor',
        subheading: 'Who We Are..',
            title: 'The Technology Advisor',
            aboutttadesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?",
  });
}

exports.services  = function(req, res) {
  res.render('services', { 
        company: 'The Technology Advisor',
            title: 'The Technology Advisor',
  });
}

exports.contact  = function(req, res) {
  res.render('contact', { 
    heading: 'Contact Us',
     title: 'The Technology Advisor',
    subheading: 'Let us help get you back to work..',
    email: 'brian@tekadvizor.com',
    phonetext: '919-307-9775', 
    hours: 'Monday - Friday: 7:00 AM to 7:00 PM',
  });
}