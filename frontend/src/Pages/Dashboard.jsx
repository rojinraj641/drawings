import Navbar from "../Components/Navbar";
import OverviewBar from "../Components/OverviewBar";
import Search from "../Components/Search";
import Sort from "../Components/Sort";
import Table from "../Components/Table";
import Footer from "../Components/Footer";
import AddDrawing from "../Components/AddDrawing";

const Dashboard = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-600 to-cyan-500">
            <Navbar />
            <AddDrawing />
            <OverviewBar />
            <Search />
            <Sort />
            <Table />
            <Footer />
        </div>
    )
}

export default Dashboard