    window.writeValues = function(form) {
    
    var fname = form.fname.value;
    var lname = form.lname.value;
    var phoneNumber = form.phoneNumber.value;
    var email = form.email.value;
    var address = form.address.value;
    var position1 = form.position1.value;
    var company1 = form.company1.value;
    var startdate1 = form.startdate1.value;
    var enddate1 = form.enddate1.value;
    var description1 = form.description1.value;
    var school = form.school.value;
    var location1 = form.location1.value;
    var major = form.major.value;
    var skills = form.skills.value;
    
    document.getElementById('resumeFinal').innerHTML = "<c>" + "<h1>" + fname + ' ' + lname + "</h1>" +"<br>" + phoneNumber + "<br>" + email + "<br>"+ address + "<br>"+"<br>" + "<h3>"+ "Work Experience" + "</h3>" + "<b>" + company1 + "</b>" + "<br>" + position1 + "<br>" + startdate1 + " - " + enddate1 + "<br>" + description1 + "<h3>"+ "Education" + "</h3>" + "<br>" + school + "<br>" + location1 + "<br>" + major + "<br>" + "<h3>"+ "Skills"+ "</h3>"+ skills ;
}
