$( document ).ready(function() {
   document.getElementById("img1").innerHTML = DarEntero(1000, 9999);
   document.getElementById("img2").innerHTML = DarFlotante(1000, 9999) + "." + DarDecimales(100, 999);
   document.getElementById("img3").innerHTML = Hex(4096, 65000);
   document.getElementById("img4").innerHTML = bin(128, 255);
   
   
   //Dar un entero
   function DarEntero(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;   //(Math.floor(Math.random() * 10000) + 1);
	}
	
	//Dar un flotante
   function DarFlotante(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;
	}
	//Dar decimales
   function DarDecimales(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;
	}
	
	
   function toHexadecimal(number){
		var result=[],i;
		for (i=number;i>0;i=parseInt(i/16)){
		result.push(i%16);
		}
		for (i=0;i<result.length;i++) {
		switch(result[i]){
		
		case 10:
		result[i]="A";
		break;
		
		case 11:
		result[i]="B";
		break;
		
		case 12:
		result[i]="C";
		break;
		
		case 13:
		result[i]="D";
		break;
		
		case 14:
		result[i]="E";
		break;
		
		case 15:
		result[i]="F";
		break;
		}
		}
		return result.reverse().join("");
   }
		function Hex(min, max){
		var H
        H = Math.round(Math.random()*(65000-4096))+4096;
		var Y=toHexadecimal(H)
		return Y
		}
		function bin(min, max){
			 var num = Math.floor(Math.random() * (max - min) ) + min;
			var T = num.toString(2);
			return T
		}
			
			
		
});