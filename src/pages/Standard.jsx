
import { useNavigate } from "react-router-dom";
import Button from "@components/clickables/Button"; 

const StandardPackagePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
     
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Cloud Storage Service</h1>
         
          <div className="flex items-center space-x-4">
            <button
              className="bg-gray-200 p-2 rounded-full"
              onClick={() => navigate("/profile")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Unlock the Power of Collaboration with Our Standard Package
          </h2>
          <p className="text-lg text-gray-600">
            Get access to essential features for seamless collaboration and
            productivity.
          </p>
          <Button to="/pricing" size="large" colour="primary" outlined>
            View Pricing
          </Button>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">10GB Storage</h3>
              <p className="text-gray-600 mb-6">
                Store all your files securely in the cloud with ample storage
                space.
              </p>
              <Button size="medium" colour="primary">
                Learn More
              </Button>
            </div>
           
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Advanced Search Functionality
              </h3>
              <p className="text-gray-600 mb-6">
                Quickly find documents and information with our powerful search
                tools.
              </p>
              <Button size="medium" colour="primary">
                Learn More
              </Button>
            </div>
          
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Real-time Collaboration
              </h3>
              <p className="text-gray-600 mb-6">
                Work together seamlessly with colleagues in real-time, enhancing
                productivity.
              </p>
              <Button size="medium" colour="primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StandardPackagePage;