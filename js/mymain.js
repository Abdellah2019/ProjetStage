function search(Name){
	console.log('Adult'==Name)

	fetch('Contextes_concepts.xml').then((response) =>{
		response.text().then((xml) =>{

			xmlContent=xml
			let parser=new DOMParser();
			let xmlDOM=parser.parseFromString(xmlContent,'application/xml')
			
			var Contextes = xmlDOM.childNodes[0].getElementsByTagName("Contexte");
			for(var i =0;i<Contextes.length;i++){

				var concepts=Contextes[i].getAttribute('Name')
				if(concepts == return_Descripteur(Name)){
					var length=Contextes[i].children.length
					//const ul=document.querySelector('ul');
					//ul.innerHTML='';
					document.getElementById('resultat').innerHTML=''
					
					for(var j=0;j<length;j++){
						//document.getElementById('resultat').textContent='';

						var newLi=document.createElement('li')
						newLi.innerHTML=Contextes[i].children[j].getAttribute('ConceptName')
						const Concept_Name=Contextes[i].children[j].getAttribute('ConceptName')
						//newLi.onclick=searchImage(Contextes[i].children[j].getAttribute('ConceptName'))
						document.getElementById('resultat').style.cursor="pointer";
						newLi.style.textDecoration="none";
						newLi.addEventListener('click',function (){

								//console.log(Concept_Name)
								let xmlContent='';
								fetch('Concepts_Videos.xml').then((response) =>{
									response.text().then((xml) =>{
										xmlContent=xml
										let parser=new DOMParser();
										let xmlDOM=parser.parseFromString(xmlContent,'application/xml')
										let donnee=xmlDOM.querySelectorAll('concept')

										donnee.forEach(donneeXmlNode =>{

											
											if(donneeXmlNode.getAttribute('Name')==Concept_Name){
												var length=donneeXmlNode.children.length
												document.getElementById('images').innerHTML='';
												for(var i =0;i<length;i++){
													var sourceImg='../key frames/'+donneeXmlNode.children[i].getAttribute('Name')+'/'+donneeXmlNode.children[i].getAttribute('shotrepres')+'.jpg';
													var img=document.createElement('img')
														img.src=sourceImg
														img.width='100'
														img.height='100'
														document.getElementById('images').appendChild(img)

												}
											}
										})
									})
								})
							}
						);
						document.getElementById('resultat').appendChild(newLi)
						console.log(Contextes[i].children[j].getAttribute('ConceptName'))
					}
				}
				
				}
			})
			
	})
}



function searchImage(Name){
	//----------------------------------------------------
	//Permet d'effacer les images avant le nouveau affichage
	//document.getElementById('images').removeChild()
	//----------------------------------------------------
	console.log(Name)
	let xmlContent='';
	fetch('Concepts_Videos.xml').then((response) =>{
		response.text().then((xml) =>{
			xmlContent=xml
			let parser=new DOMParser();
			let xmlDOM=parser.parseFromString(xmlContent,'application/xml')
			let donnee=xmlDOM.querySelectorAll('concept')

			donnee.forEach(donneeXmlNode =>{

				var length=donneeXmlNode.children.length
				for(var i=0;i<length;i++){
						for(var j=0;j<donneeXmlNode.children[i].children.length;j++){
						if(donneeXmlNode.children[i].children[j].getAttribute('ConceptName') == Name){
							var sourceImg='key frames/TRECVID2010_'+donneeXmlNode.children[i].getAttribute('numvid')+'/'+donneeXmlNode.children[i].getAttribute('Name')+'.jpg';

							var img=document.createElement('img')
							img.src=sourceImg
							img.width='100'
							img.height='100'
							document.getElementById('images').appendChild(img)

							console.log(sourceImg)
							Images.push(sourceImg)
						}
					}	
				}
			})
		})
	})
}
//-------------------VECTEUR DESCRIPTEUR-------------------------------------------------------------
function return_Descripteur(Name){
	//var dest_Face=['character']
	var desc_Explosion_Fire=['Explosion fire','explosion fire','Explosion','Fire','Fires','Explosions']
	var desc_Weather=['wheather','storm','tempest','blast']
	var desc_Airplane=['airplane','plane']
	var desc_Person=['Person','human']
	var desc_Vehicle=['vehicle','car','cars']
	var desc_Sports=['Sports','sport','basketball','tennis','rugby','Golf']
	var desc_Adult=['journalist']
	var desc_Actor=['actor']
	//-------------------------------------------------
	for(var i=0;i<desc_Explosion_Fire.length;i++){
		if(desc_Explosion_Fire[i] == Name){
			return 'Explosion_Fire'
		}
	}
	//---------------------------------------------------
	for(var j=0;j<desc_Weather.length;j++){
		if(desc_Weather[i] == Name){
			return 'Weather'
		}
	}
	//----------------------------------------------------
	for(var i=0;i<desc_Airplane.length;i++){
		if(desc_Airplane[i] == Name){
			return 'Airplane'
		}
	}
	//----------------------------------------------------
	for(var i=0;i<desc_Person.length;i++){
		if(desc_Person[i] == Name){
			return 'Person'
		}
	}
	//---------------------------------------------------
	for(var i=0;i<desc_Vehicle.length;i++){
		if(desc_Vehicle[i] == Name){
			return 'Vehicle'
		}
	}
	//---------------------------------------------------
	for(var i=0;i<desc_Sports.length;i++){
		if(desc_Sports[i] == Name){
			return 'Sports'
		}
	}
	//----------------------------------------------------
	for(var i=0;i<desc_Adult;i++){
		if(desc_Adult[i] == Name){
			return 'Adult'
		}
	}
	//---------------------------------------------------
	for(var i=0;i<desc_Actor.length;i++){
		if(desc_Actor[i] == Name){
			return 'Actor'
		}
	}
	return Name
}