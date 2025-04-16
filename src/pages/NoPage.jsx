import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <div className="m-auto h-screen max-w-7xl text-white p-8 flex flex-col justify-center items-center">
      <h1>I guess we don't have this page yet</h1>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/skip")}
      >
        Go Back to skip select
      </button>
    </div>
  );
};

export default NoPage;
