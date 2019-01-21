
const express = require('express');
const server = express();

server.listen(2138);

var arr = [1,1,1,1,1] //Limited awards

server.use('/getRotate',(req,res)=>{
	//First Prize     		1%  210 ～ 270
	//Second Prize          1.5%  -30 ～ 30
	//Third Prize           2%  30 ～ 90
	//Fourth Prize          2.5%  90 ～ 150
	//Fifth Prize           3%	 270 ～ 330
	//No Prize              90%  150 ～ 210

goMove();
function goMove(){
	console.log(arr);
	let rdm = Math.random() * 100;

	if(rdm>=0 && rdm <= 50){
		let rdm2 = Math.random() * 50;
		if(rdm2 >=0 && rdm2 <10){
		
			if(arr[0] == 0){
				goMove();
				return;
			}
			arr[0] = arr[0] - 1;
		
			let num = (210 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'Congratulations! You Win First Prize!',num:num})
		}
		else if(rdm2 >=10 && rdm2 <20){
			if(arr[1] == 0){
				goMove();
				return;
			}
			arr[1] = arr[1] - 1;
			let num = (-30 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'Congratulations! You Win Second Prize!',num:num})
		}
		else if(rdm2>=20 && rdm2 <30){
			if(arr[2] == 0){
				goMove();
				return;
			}
			arr[2] = arr[2] - 1;
			let num = (30 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'Congratulations! You Win Third Prize!',num:num})
		}
		else if(rdm2>=30 && rdm2 <40){
			if(arr[3] == 0){
				goMove();
				return;
			}
			arr[3] = arr[3] - 1;
			let num = (90 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'You are lucky! You Win Fourth Prize!',num:num})
		}
		else if(rdm2>=40 && rdm2 <50){
			if(arr[4] == 0){
				goMove();
				return;
			}
			arr[4] = arr[4] - 1;
			let num = (270 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
			res.send({ok:1,msg:'You are lucky! You Win Fifth Prize!',num:num})
		}

	}
	else{
		let num = (150 + Math.random()*60)+((5+parseInt(Math.random()*6))*360);
		res.send({ok:1,msg:'Sorry, but thank you for participating.',num:num})
	}

}


});
server.use('',express.static('./'))
