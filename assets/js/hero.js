<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/assets/main.css">
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=" crossorigin="anonymous"></script>
	<script src="https://use.fontawesome.com/f2b29d30d8.js"></script>

	<!-- Liquid variables -->
	
</head>



<nav>
	<div class="navbar">
		<div class="navbar-logo">
			<a href="/http://cuatroconsulting.siteleaf.net">
				
					<img src="assets/images/logo.png" class="navbar-image"></img>
				
			</a>
		</div>

		<ul class="navbar-list">
			
				
			
				
					<li class="navbar-item">
						<a href="/">
							Home
						</a>
					</li>
				
			
				
			
				
			
		</ul>

		<div class="navbar-mobile">
			<i class="fa fa-bars fa-2x"></i>
		</div>
	</div>
</nav>
<ul class="navbar-mobile-list">
	
		
	
		
			<li class="navbar-item">
				<a href="/">
					Home
				</a>
			</li>
		
	
		
	
		
	
</ul>







	<div class="hero-container hero-container-small">
		<h1>
			
		</h1>
	</div>



<div class="container default-container">
	//use liquid to get the hero image list
var pics = {};

	pics[1] = 'images/hero/hero1.png';

	pics[2] = 'images/hero/hero2.png';

	pics[3] = 'images/hero/hero3.png';

	pics[4] = 'images/hero/hero4.png';


$(document).ready(function() {
	var p = 'assets/' + pics[Math.floor(1 + Math.random() * 4)];
	$(".hero-container").css({"background-image": "linear-gradient(rgba(75,75,75, 0.5),rgba(0, 0, 0, 0.9)), url('" + p + "')" })
});
</div>

<footer>
	<div class="footer-container">
		<p>
			3601 Kyle Crossing
Kyle, Texas 78640
			<br/>
			(512) 312-5040
			<br/>
			cuatro@cuatroconsultants.com
		</p>
		<p>
			Cuatro Consultants, Ltd. is a civil engineering/consulting Firm offering a full range of design, permitting, and land development services throughout the Austin metropolitan and Central Texas area.  We serve a diverse Clientele ranging from individuals and small local companies to large national corporations.  We assist our Clients through all phases of their Projects, starting with concept development and ending with construction completion.
		</p>
	</div>

	<p>
		Copyright © 2018 Cuatro Consultants, Ltd.
	</p>
</footer>
<script src="/assets/js/navbar.js"></script>

<script src="/assets/js/hero.js"></script>
