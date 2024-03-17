import Button from "@components/clickables/Button"; 

const Dashboard = () => {
    // Dummy data for documents
    const documents = [
      { id: 1, name: "Land Papers", type: "PDF" },
      { id: 2, name: "Jewellry", type: "Image" },
      { id: 3, name: "Bills", type: "PDF" },
      { id: 4, name: "Contracts", type: "Word" },
      { id: 5, name: "Insurance", type: "PDF" },
      { id: 6, name: "Photos", type: "Image" },
      { id: 7, name: "Receipts", type: "PDF" },
      { id: 8, name: "Tax Documents", type: "PDF" },
      { id: 9, name: "Certificates", type: "PDF" },
      { id: 10, name: "Miscellaneous", type: "PDF" },
      // Add more dummy data as needed
    ];
  
    // Ensure there are at least 10 documents
    while (documents.length < 10) {
      documents.push({ id: documents.length + 1, name: "Document " + (documents.length + 1), type: "PDF" });
    }
  
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold">DASHBOARD</h1>
            <nav className="flex mt-2">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Profile</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Notifications</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Help/Support</a>
            </nav>
          </div>
          <div className="space-x-4" >
            <Button size="medium" colour="secondary" className="mr-4">Create Folder</Button>
            <Button size="medium" colour="secondary">Upload Documents</Button>
          </div>
        </header>
  
        <div className="container mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {documents.map((document) => (
            <div key={document.id} className="bg-secondary-300 p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold mb-2">{document.name}</h2>
              <p className="text-gray-600">{document.type}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Dashboard;