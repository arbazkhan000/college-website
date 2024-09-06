import otpGenerator from "otp-generator";

export const otpService = async (req, res) => {
    try {
        const otp = otpGenerator.generate(6, {
            digits: true,
            alphabets: false,
            upperCase: false,
            specialCharacters: false,
        });

        console.log(otp, "pure digits");
        return otp;
    } catch (error) {}
};
