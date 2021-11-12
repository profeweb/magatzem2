
class Paquet {

	constructor(id, destinatari, pes){
		this.id = id;
		this.destinatari = destinatari;
		this.pes = pes;
	}

	getInfo(){
		return this.id+"<br/>"+this.destinatari+"<br/>"+this.pes+"Kg";
	}

}