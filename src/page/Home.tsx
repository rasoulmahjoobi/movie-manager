import MovieSection from "../components/ MovieSection";
// import ButtonAdd from "../components/button-add";
// import Filter from "../components/Filter";
import Header from "../components/header/Header";
// import MovieCard from "../components/MovieCard";
// import Search from "../components/SearchBar";

function HomePage() {
  return (
    <>
      <Header />
    <MovieSection/>
            {/* <div className="flex justify-between">
        <div className="flex gap-3 m-4">
          <Search />
          <Filter />
        </div>
        <ButtonAdd />
      </div>
      <MovieCard /> */}

    </>
  );
}

export default HomePage;
