import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

// Create an application that can be used to search through a list of heroes

// One field for entering the hero's name

// After the response, display the list of heroes

//https://rickandmortyapi.com/api/character?name=${name}&page=${page}

interface IDataObj {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [];
  url: string;
  created: Date;
}

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<IDataObj[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const timeoutRef = useRef<number>();

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  const fetchData = async () => {
    if (!search) {
      setData([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character?name=${search}&page=${page}`);
      if (!res.ok) throw new Error("No heroes found!");

      const json = await res.json();
      setData(json.results);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);

      setData([]);
      setError(message || "Getting an error on fetchData");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setPage(1);
      fetchData();
    }, 500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [search]);

  useEffect(() => {
    if (search) fetchData();
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    fetchData();
  };

  const handleNext = () => setPage((p) => p + 1);
  const handlePrev = () => setPage((p) => (p > 1 ? p - 1 : 1));

  return (
    <div className={styles.main}>
      <h2>Search for your heroes</h2>
      <input type="search" placeholder="Type in a name" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button className={styles.btn} onClick={handleSearch}>
        Search
      </button>

      {loading && <p>Loading...</p>}

      {error && <div>{error}</div>}

      {!loading && !error && data.length > 0 && (
        <>
          <h3>List of heroes:</h3>
          <ul>
            {filteredData.map((char: IDataObj) => (
              <li key={char.id}>
                <img src={char.image} alt={char.name} width={80} height={80} />
                <div>
                  <strong>{char.name}</strong>
                  <p>{char.status}</p>
                  <p>{char.species}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      <div style={{ marginTop: "20px" }}>
        <button disabled={page === 1} onClick={handlePrev}>
          Prev
        </button>
        <span style={{ margin: "0 15px" }}>Page {page}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
