

for (var i = 0; i < projects.project.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
    $(".project-entry:last").append(formattedDescription);
    var formattedImages = HTMLprojectImage.replace("%data%", projects.project[i].images);
    $(".project-entry:last").append(formattedImages)
};

for (var i = 0; i < education.school.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedSchool = HTMLschoolName.replace("%data%", education.school[i].name);
    $(".work-entry:last").append(formattedSchool); 
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[i].degree);
    $(".education-entry:last").append(formattedDegree;
    var formattedDates = HTMLschoolDates.replace("%data%", education.school[i].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[i].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[i].major);
    $(".education-entry:last").append(formattedMajor)
};

for (var i = 0; i < education.onlineCourses.length; i++) {
    $("#education").append(HTMLonlineClasses);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[i].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[i].school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[i].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[i].URL);
    $(".education-entry:last").append(formattedURL)
};

for (var i = 0; i < work.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work[i].employer);
    $(".work-entry:last").append(formattedEmployer)
    var formattedTitle = HTMLworkTitle.replace("%data%", work[i].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work[i].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work[i].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work[i].description);
    $(".project-entry:last").append(formattedDescription);
}


for (var i = 0; i < education.school.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedSchool = HTMLschoolName.replace("%data%", education.school[i].name);
    $(".work-entry:last").append(formattedSchool); 
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[i].degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.school[i].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[i].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[i].major);
    $(".education-entry:last").append(formattedMajor);
    $("#education").append(HTMLonlineClasses);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[i].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[i].school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[i].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[i].URL);
    $(".education-entry:last").append(formattedURL);
    }