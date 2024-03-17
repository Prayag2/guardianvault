import { useEffect, useState } from "react";
import Button from "@components/clickables/Button";
import Input from "@components/Input";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOTP] = useState("");
  const { confirmationResult } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!confirmationResult) {
      alert("Please sign up first");
      navigate("/signup");
    }
  });

  const verifyOTP = async () => {
    try {
      confirmationResult.confirm(otp).then((result) => {
        navigate("/dashboard");
      });
    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-accent-400">
      <div className="bg-white p-8 rounded-lg shadow-md mx-4 md:mx-8 lg:mx-12 xl:mx-16 w-96">
        <h2 className="text-2xl font-bold mb-6">Verify OTP</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="otp" className="block my-2">
              Enter OTP
            </label>
            <Input
              id="otp"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <Button onClick={verifyOTP} id="sign-in-button">
              Verify OTP
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
