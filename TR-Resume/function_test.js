var projects = {
    "project": [{
        "title": "Portfolio",
        "dates": "2016",
        "description": "First iteration of my personal portfolio. Updates will be coming out as projects are finished and/or updated.",
        "images": "images/Portfolio_mk1.15.jpg"
    }, {
        "title": "Dylan's Page",
        "dates": "2016",
        "description": "I built this one for practice right after finishing the portfolio project. It has JavaScript modals built in, providing larger images and notes from the photographer and parents.",
        "images": "images/Dylans_page.jpg"
    }, {
        "title": "Animal Trading Card",
        "dates": "2016",
        "description": "This one was simple but fun.",
        "images": "images/AnimalCard.jpg"
    }, {
        "title": "Under Construction",
        "dates": "2016",
        "description": "As always, there are projects in the works. There should be at least two more projects and several more classes listed on this resume in the near future. Until then, have a picture of a puppy.",
        "images": "http://lorempixel.com/640/480/animals/8"
    }]
}

projects.display = function () {
	for (project in projects.projects) {
		if (projects.projects[project] > 0) {
			$(".project-entry:last").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects[project]);
			if (projects.projects[project].images.length >0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}	
	}
}


