function SearchImage(ImageName){
console.log(ImageName)
let xmlContent='';
fetch('shot_similaires.xml').then((response) =>{
	response.text().then((xml) =>{
	xmlContent=xml
	let parser=new DOMParser();
	let xmlDOM=parser.parseFromString(xmlContent,'application/xml')
	let donnee= xmlDOM.childNodes[0].getElementsByTagName("shot")
	for(var i=0;i<donnee.length;i++){
		if(donnee[i].getAttribute('Name') == ImageName){
			document.getElementById('images').innerHTML='';
			//------------------ADD IMAGE INIT -----------------
			document.getElementById('myimageInit').innerHTML=''
			var sourceImg='key frames/TRECVID2010_'+cutString(ImageName)+'/'+ImageName+'.jpg'
			var img=document.createElement('img')
			img.src=sourceImg
			img.width='100'
			img.height='100'
			document.getElementById('myimageInit').appendChild(img)
			for(var j=0;j<donnee[i].children.length;j++){

				//console.log(donnee[i].children[j].getAttribute('Name'))
				//var sourceImg='http://localhost:2000/base--images/'+donnee[i].children[j].getAttribute('Name')+'.jpg';
				//console.log('http://localhost:2000/base--images/'+donnee[i].children[j].getAttribute('Name')+'.jpg')
				var imgSimsrc=donnee[i].children[j].getAttribute('Name');
				console.log('key frames/TRECVID2010_'+cutString(imgSimsrc)+'/'+imgSimsrc+'.jpg')
				
				var sourceImg='key frames/TRECVID2010_'+cutString(imgSimsrc)+'/'+imgSimsrc+'.jpg'
				var img=document.createElement('img')
				img.src=sourceImg
				img.width='100'
				img.height='100'
				document.getElementById('images').appendChild(img)
				
			}
		}
	}


})
})
}
function cutString(chaine){
	resultat=''
	for(var i=4;i<chaine.length;i++){
		if(chaine[i] == '_'){
			return resultat
		}
		else{
			resultat+=chaine[i]
		}
	}
}
