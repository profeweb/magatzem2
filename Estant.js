class Estant {
	
	constructor(id){
		this.id = id;
		this.paquet = null;
		this.entrada = null;
		this.sortida = null;
	}

	afegirPaquet(p){
		var info = $("<p></p>").text("Afegint paquet a l'Estant ...");
		$("#log").append(info);
		this.paquet = p;
		this.entrada = new Date();
	}

	recollirPaquet(){
		var info = $("<p></p>").text("Llevant paquet de l'Estant ...");
		$("#log").append(info);
		this.paquet = null;
		this.sortida = new Date();
	}

	printInfo(){

		var paquetInfo ="";
		if(this.paquet != null){
			paquetInfo += this.paquet.getInfo() + "<br/>";
			paquetInfo += this.formatEntrada() + "<br/>";
		}
		else if(this.sortida!= null){
			paquetInfo += "Sense paquet <br/>";
			paquetInfo += this.formatSortida() + "<br/>";
		}
		else {
			paquetInfo += "Sense paquet";
		}

		return "<b>"+ this.id + "</b><br/>"+ paquetInfo;
	}

	formatEntrada(){
		return this.formataData(this.entrada);
	}

	formatSortida(){
		return this.formataData(this.sortida);
	}

	formataData(d){
		return d.getHours() + ":"+
			   d.getMinutes() + ":"+
			   d.getSeconds();
	}

}