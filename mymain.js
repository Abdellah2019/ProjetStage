
/*
var Donnee=[]
var Images=[]
function search(Name){
Donnee=[]
let xmlContent='';
document.getElementById('resultat').innerHTML='';
	fetch('Contextes_concepts.xml').then((response) =>{
		response.text().then((xml) =>{
			xmlContent=xml
			let parser=new DOMParser();
			let xmlDOM=parser.parseFromString(xmlContent,'application/xml')
			let donnee=xmlDOM.querySelectorAll('Contexte')
			//console.log(xmlDOM.childNodes[0].getElementsByTagName("Contexte"))
			donnee.forEach(donneeXmlNode =>{
				if(donneeXmlNode.getAttribute('Name') == Name){
					var length=donneeXmlNode.children.length
										//console.log("Enfin :) trouvee")
					for(var i =0;i<length;i++){
						console.log(donneeXmlNode.children[i].getAttribute('ConceptName'))
						
						var newLi=document.createElement('li')
						newLi.innerHTML=donneeXmlNode.children[i].getAttribute('ConceptName')

						
						document.getElementById('resultat').appendChild(newLi)
						//Donnee.push(donneeXmlNode.children[i].getAttribute('ConceptName'))
						//Donnee[i]=donneeXmlNode.children[0].getAttribute('ConceptName')
						//console.log("Donnee 0:",Donnee[i])
						//searchImage(Donnee[i])
					}
				}
			})
		})
	})

}
//====================================================================
function displayContextes() {
    var Contextes = xmlDoc.childNodes[0].getElementsByTagName("Contexte");

    for (var i = 0; i < Contextes.length; i++) {
        var Contexte = Contextes[i].getAttribute('Name');
        //-----------------MES CONTEXTES--------------------
        My_Contextes[i]=Contexte
        var ulSubList = document.createElement("ul");

        ulSubList.id = "id" + Contexte;
        ulSubList.className = 'weighted';
        ulSubList.style.display = "none";
        var concepts = Contextes[i].getElementsByTagName("concept");


        for (var j = 0; j < concepts.length; j++) {
            var ConceptWeight = concepts[j].getAttribute('Weight');
            var conceptName = concepts[j].getAttribute('ConceptName');

             //-----------MES CONCEPTS----------------------------
            My_Concepts[j]=conceptName

            var liSubList = document.createElement("li");

            var aliSubList = document.createElement("a");
            aliSubList.href = 'javascript:void:(0);';

            var finalWeight = ConceptWeight.replace(",", ".") * 100 + "px";

            aliSubList.style.fontSize = finalWeight;
            aliSubList.setAttribute("dataweight", ConceptWeight.replace(",", ".") * 40);

            aliSubList.appendChild(document.createTextNode(conceptName));
            aliSubList.addEventListener("click", function () { displayImages(this.innerText); });

            liSubList.appendChild(aliSubList);
            ulSubList.appendChild(liSubList);

        }

        var li = document.createElement("li");
        li.id = Contexte;
        li.appendChild(document.createTextNode(Contexte));
        li.append(ulSubList);



        ulContextes.appendChild(li);



    }
    console.log('bal'+My_Concepts)

    displayFirst();
}
//=====================================================================================
function searchImage(Name){
	//----------------------------------------------------
	//Permet d'effacer les images avant le nouveau affichage
	//document.getElementById('images').removeChild()
	//----------------------------------------------------
	let xmlContent='';
	fetch('donnee_image.xml').then((response) =>{
		response.text().then((xml) =>{
			xmlContent=xml
			let parser=new DOMParser();
			let xmlDOM=parser.parseFromString(xmlContent,'application/xml')
			let donnee=xmlDOM.querySelectorAll('shots')

			donnee.forEach(donneeXmlNode =>{

				var length=donneeXmlNode.children.length
				//console.log(length)
				//console.log(donneeXmlNode.children[0].children.length)
				for(var i=0;i<length;i++){
						for(var j=0;j<donneeXmlNode.children[i].children.length;j++){
							//console.log(donneeXmlNode.children[i].children[j].getAttribute('ConceptName'))
						
						//console.log(donneeXmlNode.children[i].children[j].getAttribute('ConceptName'))
						if(donneeXmlNode.children[i].children[j].getAttribute('ConceptName') == Name){
							var sourceImg='key frames/TRECVID2010_'+donneeXmlNode.children[i].getAttribute('numvid')+'/'+donneeXmlNode.children[i].getAttribute('Name')+'.jpg';
							//if(!Images.find(sourceImg)){
							
							var img=document.createElement('img')
							img.src=sourceImg
							img.width='100'
							img.height='100'
							document.getElementById('images').appendChild(img)
							//console.log(donneeXmlNode.children[i].length)
						//	}
							console.log(sourceImg)
							Images.push(sourceImg)
						}
					}
						
				}
				
			})


		})
	})
}
*/