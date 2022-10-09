window.onload = function(){
	const electionDates = [
		"05.10.1848",
		"04.12.1849",
		"04.08.1852",
		"26.02.1853",
		"27.05.1853",
		"01.12.1854",
		"14.06.1855",
		"14.06.1858",
		"14.06.1861",
		"07.06.1864",
		"04.06.1866",
		"12.10.1866",
		"22.09.1869",
		"20.09.1872",
		"14.11.1873",
		"25.04.1876",
		"03.01.1879",
		"24.05.1881",
		"26.07.1881",
		"25.06.1884",
		"28.01.1887",
		"21.01.1890",
		"20.04.1892",
		"09.04.1895",
		"05.04.1898",
		"03.04.1901",
		"16.06.1903",
		"29.05.1906",
		"25.05.1909",
		"20.05.1910",
		"20.05.1913",
		"07.05.1915",
		"22.04.1918",
		"26.04.1920",
		"06.07.1920",
		"21.09.1920",
		"11.04.1924",
		"02.12.1926",
		"24.04.1929",
		"16.11.1932",
		"22.10.1935",
		"03.04.1939",
		"23.03.1943",
		"30.10.1945",
		"28.10.1947",
		"05.09.1950",
		"21.04.1953",
		"22.09.1953",
		"14.05.1957",
		"15.11.1960",
		"22.09.1964",
		"22.11.1966",
		"23.01.1968",
		"21.09.1971",
		"04.12.1973",
		"09.01.1975",
		"15.02.1977",
		"23.10.1979",
		"08.12.1981",
		"10.01.1984",
		"08.09.1987",
		"10.05.1988",
		"12.12.1990",
		"21.09.1994",
		"11.03.1998",
		"20.11.2001",
		"08.02.2005",
		"13.11.2007",
		"15.09.2011",
		"18.06.2015",
		"05.06.2019",
	];
	document.getElementById("calculate_button").onclick = function(){
		document.getElementById("result").innerText = "";
		document.getElementById("birthdate_input").classList = "";
		document.getElementById("input_error_message").innerText = "";
		document.getElementById("input_error_message").style.display = "none";
		if(document.getElementById("birthdate_input").value != ""){
			let birthdate = document.getElementById("birthdate_input").value;
			if(birthdate.indexOf("-") <= 0){
				document.getElementById("input_error_message").innerText = "Ugyldig fødselsdagsdato format";
				document.getElementById("input_error_message").style.display = "block";
			} else {
				birthdate = birthdate.split("-");
				if(birthdate.length != 3){
					document.getElementById("input_error_message").innerText = "Ugyldig fødselsdagsdato format";
					document.getElementById("input_error_message").style.display = "block";
				} else {
					let birth_year = Number(birthdate[0]);
					let birth_month = Number(birthdate[1]) - 1;
					let birth_day = Number(birthdate[2]);
					let eighteenth_timestamp = new Date(birth_year+18, birth_month, birth_day).getTime();
					
					let voting_counter = 0;
					electionDates.forEach(function(v){
						let electiondate = v.split(".");
						let election_year = Number(electiondate[2]);
						let election_month = Number(electiondate[1]) - 1;
						let election_day = Number(electiondate[0]);
						let election_timestamp = new Date(election_year, election_month, election_day).getTime();
						if(election_timestamp >= eighteenth_timestamp) voting_counter++;
					});
					document.getElementById("result").innerText = "Du har haft kunne stemme " + voting_counter + " gang(e).";
				}
			}
		} else {
			document.getElementById("birthdate_input").classList = "input_error";
			document.getElementById("input_error_message").innerText = "Ikke gyldig dato";
			document.getElementById("input_error_message").style.display = "block";
		}
	}
	document.getElementById("birthdate_input").onfocus = function(){
		document.getElementById("birthdate_input").classList = "";
		document.getElementById("input_error_message").innerText = "";
		document.getElementById("input_error_message").style.display = "none";
	}
}