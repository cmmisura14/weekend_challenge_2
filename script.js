
var i;
var j;
var k;
var randomOrder = [];
var teamNum;
var team = [];
var fullTeam = [];
var buttonValue;


var students = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];

var teamSize = [0,0,[10,10], [7,7,6], [5,5,5,5], [4,4,4,4,4], [4,4,3,3,3,3], [3,3,3,3,3,3,2], [3,3,3,3,2,2,2,2], [3,3,2,2,2,2,2,2,2], [2,2,2,2,2,2,2,2,2,2]];

function createButtons(){
    for (i = 2; i < 11; i++) {
        $(".buttons").append("<button class='numTeams' value='" + i + "'>" + i + "</button>");
    }
}

function shuffleArray(array) {
    for(i = (array.length - 1); i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function createTeams(buttonValue){
	var students = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];

	randomOrder = shuffleArray(students);
	for (j = 0; j < teamSize[buttonValue].length; j++) {
        team = [];
        teamNum = j + 1;
        var length = teamSize[buttonValue][j];
        for ( k = 0; k < length; k++) {
            var student = randomOrder.pop();
            team.push(student);
        }
        fullTeam.push(team);
        console.log(team);
    }
}

$(document).ready(function(){

	createButtons();

	$(".buttons").on("click", ".numTeams", function(){
		buttonValue = $(this).val();
		console.log("Button value:"+buttonValue);
		createTeams(buttonValue);
	
	});
	var action = 0
	$(".generate").on("click", ".displayTeams", function(){
		action++;
		if(action == 1){
			if(buttonValue == undefined){
				alert("You must pick how many teams you would like!");
			} else{
				$(".table").empty();
				for(i = 0; i < fullTeam.length; i++){
					teamNum = i + 1;
					$(".table").append("<div class='team' id='column'>Team " + teamNum + "<br>");
					for(k = 0; k < fullTeam[i].length; k++){
						$(".table").hide().slideDown("slow").append("<br>" + fullTeam[i][k] + "<br>");
					}
					$(".table").append("</div>");
				}
				$(".table").animate({
					width: "+=150",
					height: "+=50",
					fontSize: "+=3px"
				}, 3000);
			}
		} else {
			fullTeam = [];
			$(".table").children().remove();
			$(".table").empty();
			// action--;
		
			createTeams(buttonValue);
				for(i = 0; i < fullTeam.length; i++){
					teamNum = i + 1;
					$(".table").append("<div class='team' id='column'>Team " + teamNum);
					for(k = 0; k < fullTeam[i].length; k++){
						$(".table").hide().slideDown("slow").append("<br>" + fullTeam[i][k] + "<br>");
					}
					$(".table").append("</div>");
				}
				$(".table").animate({
					width: "+=150",
					height: "+=50",
					fontSize: "+=3px"
				}, 3000);
		}
	});

	

});



