import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import AllTreatments from "../AllTreatments/AllTreatments";
import MyAppionments from "../MyAppoinments/MyAppionments";
import Profile from "../Profile/Profile";
import BookMark from "../Banner/BookMark";
import Login from "../Login/Login";
import Register from "../Register/Register";
import CheckOut from "../CheckOut/CheckOut";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
// import Details from "../Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const dataRes = await fetch("/service.json");
          const servicesData = await dataRes.json();

          const feedBackRes = await fetch("/review.json");
          const feedBackData = await feedBackRes.json();

          return { servicesData, feedBackData };
        },
      },
      {
        path: "/AllTreatments",
        element: <AllTreatments></AllTreatments>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/myAppoinments",
        element: <MyAppionments></MyAppionments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/bookMark",
        element: <BookMark></BookMark>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/appointmentModal",
        element:  <AppointmentModal></AppointmentModal>
      },

      //   {
      //     path: "/details/:id",
      //     element: <Details></Details>,
      //     loader: async ({ params }) => {
      //       try {
      //         console.log("Received ID from URL:", params.id);

      //         const res = await fetch("/service.json"); // Fetch data
      //         if (!res.ok) {
      //           throw new Error("Failed to load data");
      //         }

      //         const data = await res.json();
      //         console.log("Fetched Data:", data);

      //         // Ensure id types match (string or number)
      //         const singleData = data.find((d) => String(d.id) === params.id);

      //         console.log("Found Data:", singleData);

      //         if (!singleData) {
      //           throw new Response("Data not found", { status: 404 });
      //         }

      //         return singleData;
      //       } catch (error) {
      //         console.error("Error:", error);
      //         throw new Response("Internal Server Error", { status: 500 });
      //       }
      //     }

      //   },
    ],
  },
]);
export default router;
