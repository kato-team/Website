export const sendOTP = async (phoneNumber: string) =>{
    if(!phoneNumber || phoneNumber.length > 10){
        throw new Error("Phone Number invalid")
        
    }

    //Our Backend code
    console.log(`We have sent you an OTP on +91${phoneNumber}`)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({success : true, Message: "OTP Sent Successfully"})
        },1500)
    })
}

export const verifyOTP = async(otp : string) => {
    console.log(`Verifying OTP: ${otp}`)
    return otp === '123456'
}