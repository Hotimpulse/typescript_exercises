import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { IDataObj } from "./interfaces/IDataObj";
import useDebounce from "./hooks/useDebounce";

// Create an application that can be used to search through a list of heroes
// One field for entering the hero's name
// After the response, display the list of heroes

//https://rickandmortyapi.com/api/character?name=${name}&page=${page}

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<IDataObj[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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

  //ref approach

  // const timeoutRef = useRef<number>();

  // useEffect(() => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }

  //   timeoutRef.current = setTimeout(() => {
  //     setPage(1);
  //     fetchData();
  //   }, 500);

  //   return () => {
  //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
  //   };
  // }, [search]);

  // custom hook approach using useEffects

  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    if (debouncedSearch) {
      setPage(1);
      fetchData();
    }
  }, [debouncedSearch]);

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
      <input
        type="search"
        placeholder="Type in a name"
        value={search}
        onChange={(e) => {
          const val = e.target.value.trimStart();
          setSearch(val);
          if (val === "") {
            setData([]);
            setError("");
            setPage(1);
          }
        }}
      />
      <button className={styles.btn} onClick={handleSearch}>
        Search
      </button>

      {loading && <p>Loading...</p>}

      {error && <div>{error}</div>}

      {!loading && !error && data.length > 0 && (
        <>
          <h3>List of heroes:</h3>
          <ul className={styles.list}>
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

      {data.length > 0 ? (
        <div className={styles.btn_container}>
          <button className={styles.btn} disabled={page === 1} onClick={handlePrev}>
            Prev
          </button>
          <p>Page {page}</p>
          <button className={styles.btn} disabled={!search.trim() || data.length === 0} onClick={handleNext}>
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
