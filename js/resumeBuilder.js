function format(name, content, pattern) {
  var pattern = pattern || "%data%";
  return name.replace(pattern, content);
}

var bio = { 
  name: "Huibing Yin",
  role: "Software Development Engineer",
  contacts: {
    mobile: "1-217-766-8828",
    email: "huibing.yin@yahoo.com",
    github: "eagleshine",
    location: "Savoy, IL"
  },
  bioPic: "images/huibing.jpg",
  welcomeMessage: "Welcome to the Resume Site.",
  skills: [
    "Core Java", "python", "node.js", "javascript", "OOD", "C/C++"
  ],
  display: function() {
    $("#header")
      .prepend(format(HTMLheaderRole, bio.role))
      .prepend(format(HTMLheaderName, bio.name))
      .append(format(HTMLbioPic, bio.bioPic))
      ;
    $("#topContacts")
      //.append(format(HTMLcontactGeneric, bio.contacts, "%contacts%"))
      .append(format(HTMLmobile, bio.contacts.mobile))
      .append(format(HTMLemail, bio.contacts.email))
      .append(format(HTMLgithub, bio.contacts.github))
      .append(format(HTMLlocation, bio.contacts.location))
      ;
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (var i in bio.skills) {
        $("#skills").append(format(HTMLskills, bio.skills[i]));
      }
    }
  }
};

var education = {
  schools: [
    {
      name: "University of Illinois at Urbana-Champaign",
      location: "Champaign, IL, USA",
      degree: "Ph.D.",
      majors: ["Mechanical Engineer"],
      dates: 2012,
      url: "http://illinois.edu/"
    },
    {
      name: "Graduate University of Chinese Academy of Sciences",
      location: "Shanghai, China",
      degree: "M.E.",
      majors: ["Signal Information Processing"],
      dates: 2006,
      url: "http://english.sitp.cas.cn/"
    },
    {
      name: "University of Science and Technology of China",
      location: "Hefei, Anhui, China",
      degree: "B.E.",
      majors: ["Automatic Control"],
      dates: 2003,
      url: "http://en.ustc.edu.cn/"
    }
  ],
  display: function() {
    for (var i in education.schools) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last")
        .append(format(HTMLschoolName, education.schools[i].name) + format(HTMLschoolDegree, education.schools[i].degree))
        .append(format(HTMLschoolDates, education.schools[i].dates))
        .append(format(HTMLschoolLocation, education.schools[i].location))
        .append(format(HTMLschoolMajor, education.schools[i].majors))
        ;
    }
  }
}

var work = {
  jobs: [
    {
      employer: "Yahoo, Inc.",
      title: "Tech Yahoo, Software Development Engineer",
      dates: "May 2012 - current",
      location: "Champaign, IL",
      description: ""
    },
    {
      employer: "University of Illinois at Urbanan-Champaign",
      title: "Research Assistant",
      dates: "Aug 2006 - May 2012",
      location: "Champaign, IL",
      description: ""
    }
  ],
  display: function() {
    for (var i in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last")
        .append(format(HTMLworkEmployer, work.jobs[i].employer) + format(HTMLworkTitle, work.jobs[i].title))
        .append(format(HTMLworkDates, work.jobs[i].dates))
        .append(format(HTMLworkLocation, work.jobs[i].location))
        .append(format(HTMLworkDescription, work.jobs[i].description));
    }
  }
};

var projects = {
  projects: [
    {
      title: "Data Highway",
      dates: "May 2012 - current",
      description: "Design and develop on Data Highway system to transport large amout of data in large scale",
      images: []
    }
  ],
  display: function() {
    for (var i in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last")
        .append(format(HTMLprojectTitle, projects.projects[i].title))
        .append(format(HTMLprojectDates, projects.projects[i].dates))
        .append(format(HTMLprojectDescription, projects.projects[i].description));
      if (projects.projects[i].images.length > 0) {
        for (var image in projects.projects[i].images) {
          $(".project-entry:last")
            .append(format(HTMLprojectImage, projects.projects[i].images[image]));
        }
      }
    }
  }
};

$("#main").append(internationalizeButton);

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
