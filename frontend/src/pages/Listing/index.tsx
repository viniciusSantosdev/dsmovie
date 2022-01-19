import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

function Listing() {
  return (
    // isso eh uma fragmentacao
    // inves de usar div, usamos fragmentacao
    // nao muda nada!
    <>
      <Pagination />

      <div className="container">
        <div className="row">
            {/* nesse caso estou falando que esse card vai ocupar 6 colunas das 12 do grid system quando chegar em 576px;
                quando chegar em 992, vai ficar com 3 cards
            */}
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3" mb-3>
            <MovieCard />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3" mb-3>
            <MovieCard />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3" mb-3>
            <MovieCard />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3" mb-3>
            <MovieCard />
          </div>
          
          </div>
        </div>
    </>
  );
}

export default Listing;
