function eveluateLoan(

    customerName:String,
    creditscore:number,
    income:number,
    isEmployed:Boolean,
    debtToIncomeRatio:number):void{
        // Dispaly intial msg
        console.log("Loan Evalution result for:" + customerName)

    if (creditscore > 750){
        console.log("the loan is auto approved");
    } else if(creditscore >=650){
        if (income>=50000){
            if(isEmployed){
                if (debtToIncomeRatio<40){
                    console.log("loan is approved:meets all cretiria");
                }else{
                    console.log("debt income is >40%");
                }}
                else{
                    console.log("customer is unemployed");
                }
            }else{
                console.log("customer saslry is less than 50000")
                }
            }else{
                    console.log("loan is rejected becuase of low creditscore")
                }
            
            }

eveluateLoan("john",755,55000,true,39)
        
    




