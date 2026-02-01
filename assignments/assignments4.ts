const transactions:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];
let totalcreditis:number =0;
let totaldebitis:number =0;
let totalcreditamountis:number=0;
let totaldebitamountis:number=0;
let suspicioustransactions:number=0;

for (const amount of transactions){
    if (amount>0){
        totalcreditis++;
        totalcreditamountis += amount;
    
    if (amount>10000){
        console.log(`suspicious credit trasnactions with amount:${amount}`)
        suspicioustransactions++;
    }
    }
    else
    {
        totaldebitis++;
        totaldebitamountis -= amount;

    
    if (amount < -10000){
        console.log(`suspicious debit transactions with amount:${amount}`);
        suspicioustransactions++;

    }
}
}

const finalbalance:number=totalcreditamountis -totaldebitamountis;

console.log("=========transaction summary=========")
console.log("total number of credit trans:",totalcreditis);
console.log("total number of debit trasns:",totaldebitis);
console.log("total no of  suspicious trans:",suspicioustransactions);
console.log("total credited amount: ",totalcreditamountis);
console.log("total debt amount:",totaldebitamountis);
console.log ("final balnace is:",finalbalance)

export{}
   
