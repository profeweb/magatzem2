class Magatzem {
	
	constructor(num){
		this.numEstants = num;
		this.estants = new Array();
	}

	inicialitza(){
		for(var i=0; i<this.numEstants; i++){
			this.estants[i] = new Estant("ESTANT "+i);
		}
	}


	afegirPaquet(p, pos){

		var info = "<p>Entrant paquet al Magatzem ...</p>";
		$("#log").append(info);
		this.estants[pos].afegirPaquet(p);
		this.mostraTaula();
	}

	recollirPaquet(numEstant){
		var info = "<p>Sortint paquet al Magatzem ...</p>";
		$("#log").append(info);
		var p = this.estants[numEstant].paquet;
		this.estants[numEstant].recollirPaquet();
		this.mostraTaula();
		return p;
	}

	getNumLliures(){
		var n = 0;
		for(var i=0; i<this.estants.length; i++){
			if(this.estants[i].paquet == null){
				n++;
			}
		}
		return n;				
	}

	getNumOcupats(){
		return this.numEstants - this.getNumLliures();
	}

	mostraTaula(){
		
		var oH2 = $("<h2></h2").addClass("text-center").text("MAGATZEM ("+this.getNumLliures()+")");
		var oTABLE = $("<table></table>").addClass("table table-bordered");

		// Crear zona THEAD
		var oTHEAD = $("<thead></thead>").addClass("thead-dark");
		var oTR1   = $("<tr></tr>");
		for(var i=0; i<this.numEstants; i++){
			var oTH = $("<th></th>").attr("width", "100px").text(i);
			oTR1.append(oTH);
		}
		oTHEAD.append(oTR1);

		// Crear TBODY
		var oTBODY = $("<tbody></tbody>");
		var oTR2   = $("<tr></tr>");
		for(var i=0; i<this.numEstants; i++){
			var e = this.estants[i];
			var oTD = $("<td></td>").attr("width", "100px").html(e.printInfo());
			oTR2.append(oTD);
		}
		oTBODY.append(oTR2);

		// Afegeix a TABLE el THEAD i TBODY
		oTABLE.append(oTHEAD, oTBODY);

		// Afegeix H2 i TABLE a DIV
		$("#content").html("").append(oH2, oTABLE);
	}

	calculaPreus(){
		var info = $("<p></p>").text("Calculant preus al Magatzem ...");
		$("#log").append(info);
		this.estants.forEach(calculaPreuPaquet);
	}

	calculaPreuPaquet(item, index, array){
		if(item.paquet!=null){
			var pvp = parseFloat(item.paquet.pes) * 0.75;
			var info = $("<p></p>").text("Preu paquet "+index+" és "+pvp+"€.");
			$("#log").append(info);
		}
	}

	ordenaPes(){
		var info = $("<p></p>").text("Ordenant paquets al Magatzem ...");
		$("#log").append(info);
		this.estants.sort(function(a, b){
			var pesA = (a.paquet != null)? a.paquet.pes : 0; 
			var pesB = (b.paquet != null)? b.paquet.pes : 0; 
			return pesA - pesB; 
		});
	}

	paquetMesVell(){
		var info = $("<p></p>").text("Cercant el paquet més vell al Magatzem ...");
		$("#log").append(info);
		var minTemps =  new Date();
		var pMesVell = null;
		for(var i=0; i<this.numEstants; i++){
			if(this.estants[i].paquet!=null){
				var p = this.estants[i].paquet;
				if(this.estants[i].entrada < minTemps){
					pMesVell = p;
					minTemps = p.entrada;
				}
			}
		}
		return pMesVell;
	}

}