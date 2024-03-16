import { useState } from "react";
import Button from "@components/clickables/Button";
import Input from "@components/Input";

const SignUp = () => {
  const [organization, setOrganization] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    // Handle signup logic here
    console.log("Signup clicked");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md mx-4 md:mx-8 lg:mx-12 xl:mx-16">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="organization" className="block mb-2">
              Organization:
            </label>
            <Input
              id="organization"
              type="text"
              placeholder="Enter your Organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="department" className="block mb-2">
              Department Name:
            </label>
            <Input
              id="department"
              type="text"
              placeholder="Enter your Department Name"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="position" className="block mb-2">
              Position/Title:
            </label>
            <Input
              id="position"
              type="text"
              placeholder="Enter your Position/Title"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contactInfo" className="block mb-2">
              Contact Info of Representative:
            </label>
            <Input
              id="contactInfo"
              type="text"
              placeholder="Enter Contact Info of Representative"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button onClick={handleSignup}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
