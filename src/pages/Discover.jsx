import Map from "../components/map/Map";
import UsersList from "../components/users/UsersList";
import SearchBar from "../components/common/SearchBar";
import FilterPanel from "../components/common/FilterPanel";

const Discover = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Sidebar */}
        <div className="md:w-96 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h2 className="text-xl font-bold mb-4">Find Friends Nearby</h2>
            <SearchBar />
            <FilterPanel />
          </div>
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <UsersList />
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 h-[calc(100vh-120px)]">
          <div className="bg-white rounded-xl shadow-sm border h-full">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
