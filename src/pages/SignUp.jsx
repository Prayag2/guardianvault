import { useEffect, useState } from "react";
import Button from "@components/clickables/Button";
import Input from "@components/Input";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";

/* 
  const [organization, setOrganization] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [email, setEmail] = useState("");
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
*/

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate("/");
  }, [currentUser, navigate]);

  const handleSignup = () => {
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    register(email, password).catch((err) => {
      alert(err.message);
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-accent-400">
      <div className="bg-white p-8 rounded-lg shadow-md mx-4 md:mx-8 lg:mx-12 xl:mx-16 w-96">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="organization" className="block my-2">
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email" className="block my-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="phone" className="block my-2">
              Phone
            </label>
            <Input
              id="phone"
              type="text"
              placeholder="Enter your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="password" className="block my-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="confirmPassword" className="block my-2">
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button onClick={handleSignup}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
