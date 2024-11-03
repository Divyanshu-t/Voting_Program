
// Voting Program 
confirm("This Is Voting Program ");
document.write("<div class='a'>")
let nationality = prompt("Are you from India? If yes, write Y; otherwise, write N.");
if (nationality === "Y" || nationality === "y") {
    let govid = prompt("Do you have any government ID? If yes, write Y; otherwise, write N.");
    if (govid === "Y" || govid === "y") {
        let age = Number(prompt("Enter your age:"));
        if (age >= 18 && age <= 120) {
            document.write("<marquee>Congratulations! You can vote.</marquee>");
        } else {
            document.write("<marquee>Sorry! You cannot vote because you are not 18 years old.</marquee>");
        }
    } else {
        document.write("<marquee>Sorry! You cannot vote because you don't have any government ID.</marquee>");
    }
} else {
    document.write("<marquee>Sorry! You cannot vote because you are not an Indian citizen.</marquee>");
}
document.write("</div>")


/*
document.write("<div class='marquee'><span>Congratulations! You can vote.</span></div>"); // Message for eligible voters
                                                or                                                                      
document.write("<marquee>  This Is Marque Text     </marquee>")                                             
we can also do this -- todays dat 3 Novenber */ 