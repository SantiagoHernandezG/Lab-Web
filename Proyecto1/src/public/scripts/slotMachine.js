var doing = false;
var spin = [new Audio("/audio/spin.mp3"),new Audio("/audio/spin.mp3"),new Audio("/audio/spin.mp3"),new Audio("/audio/spin.mp3"),new Audio("/audio/spin.mp3"),new Audio("/audio/spin.mp3"),new Audio("/audio/spin.mp3")];
var coin = [new Audio("/audio/coin.mp3"),new Audio("/audio/coin.mp3"),new Audio("/audio/coin.mp3"), new Audio("/audio/coin.mp3")];
var win = new Audio("/audio/win.mp3");
var audio = false;
var info = true;

for (var x of spin){
	x.volume = 0.5;
}
for (var x of coin){
	x.volume = 0.4;
}

function doSlot(displayCode){
	//Separate the displayCode into 4 digits for each of the tiles
	var digits = displayCode.toString().split('');
	var realDigits = digits.map(Number)
	var fixed1= realDigits[0];
	var fixed2= realDigits[1];
	var fixed3= realDigits[2];
	var fixed4= realDigits[3];

	if (doing){return null;}
	doing = true;
	var numChanges = randomInt(1,4)*9
	var numeberSlot1 = numChanges+randomInt(1,9)
	var numeberSlot2 = numChanges+2*7+randomInt(1,9)
	var numeberSlot3 = numChanges+4*7+randomInt(1,9)
    var numeberSlot4 = numChanges+6*7+randomInt(1,9)
    
    var i1 = 0;
	var i2 = 0;
	var i3 = 0;
    var i4 = 0;

	var slotTile1 = document.getElementById("slot1");
	var slotTile2 = document.getElementById("slot2");
	var slotTile3 = document.getElementById("slot3");
	var slotTile4 = document.getElementById("slot4");
	
	var sound = 0
	slot1 = setInterval(spin1, 50);
	slot2 = setInterval(spin2, 50);
	slot3 = setInterval(spin3, 50);
	slot4 = setInterval(spin4, 50);
    
    function spin1(){
		i1++;
		if (i1>=numeberSlot1 && slotTile1.className == "a"+ fixed1){
			coin[0].play()
			clearInterval(slot1);
			console.log(slotTile1.className);
			return null;
		}
		slotTile1 = document.getElementById("slot1");
		if (slotTile1.className=="a9"){
			slotTile1.className = "a0";
		}
		slotTile1.className = "a"+(parseInt(slotTile1.className.substring(1))+1)
	}
	function spin2(){
		i2++;
		if (i2>=numeberSlot2 && slotTile2.className == "a"+ fixed2){
			coin[1].play()
			clearInterval(slot2);
			console.log(slotTile2.className);
			return null;
		}
		slotTile2 = document.getElementById("slot2");
		if (slotTile2.className=="a9"){
			slotTile2.className = "a0";
		}
		slotTile2.className = "a"+(parseInt(slotTile2.className.substring(1))+1)
	}
    function spin3(){
        i3++;
		if (i3>=numeberSlot3 && slotTile3.className == "a"+ fixed3){
			coin[2].play()
			clearInterval(slot3);
			console.log(slotTile3.className);
			return null;
		}
		slotTile3 = document.getElementById("slot3");
		if (slotTile3.className=="a9"){
			slotTile3.className = "a0";
		}
		slotTile3.className = "a"+(parseInt(slotTile3.className.substring(1))+1)

    }
	function spin4(){
		i4++;
		if (i4>=numeberSlot4 && slotTile4.className == "a"+ fixed4){
			coin[3].play()
			clearInterval(slot4);
			console.log(slotTile4.className);
			win.play();
            doing =false;
			return null;
		}
		slotTile4 = document.getElementById("slot4");
		if (slotTile4.className=="a9"){
			slotTile4.className = "a0";
		}
		sound++;
		if (sound==spin.length){
			sound=0;
		}
		spin[sound].play();
		slotTile4.className = "a"+(parseInt(slotTile4.className.substring(1))+1)
	}

}


function toggleAudio(){
	if (!audio){
		audio = !audio;
		
	}else{
		audio = !audio;
		for (var x of spin){
			x.volume = 0;
		}
		for (var x of coin){
			x.volume = 0;
		}
		win.volume = 0;
		lose.volume = 0;
	}
	document.getElementById("audio").src = "res/icons/audio"+(audio?"On":"Off")+".png";
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}