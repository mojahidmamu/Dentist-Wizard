import { useState } from "react";

const WatchButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Button to Open Modal */}
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
          Watch
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4">
              A lot of Thanks by Abdullah all Mojahid
            </h2>
            <h2 className="text-xl font-bold mb-4 text-red-500">
              Welcome ! Welcome ! Welcome ! In My Website....{" "}
            </h2>

            <div className="mt-4 flex justify-end">
              <button
                className="btn btn-secondary"
                onClick={() => setIsOpen(false)}
              >
                Satisfaid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchButton;
