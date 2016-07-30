$(document).ready(function(){
	$("button#signIn").on("click",function(){
		if ( $( "#inputEmail" ).val() && $( "#inputPassword" ).val() ) {  
			$("#signInClick").addClass('bg-success');
			$("#signInClick").html("<strong>Congratulations!!</strong>");		
		}
		else{
		$('#signInClick').addClass('text-danger');
		$("#signInClick").html("<strong>Fill again</strong>");
	}
	});
});