import { useState } from "react";
// import component alert
import Alert from "../Components/Alert/Alert";
import { nanoid } from "nanoid";

function AddMovieForm(props) {
  /**
   * ini hanya snippet (potongan) code
   * kode yang lainnya tetap sama
   */

  /**
   * handle multipe input dengan 1 state
   * membuat state formdata
   * nilai state menggunakan object
   */
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  // membuat state: istitleerror, isdateerror
  const [IsTitleError, setIsTitleError] = useState(false);
  const [IsDateError, setIsDateError] = useState(false);
  
  // membuat state title
  const [title, setTitle] = useState("");

  /**
   * membuat fungsi handtitle 
   * dijalankan ketika nilai input berubah
   */

  function handleTitle(e) {
    /**
     * jalankan fungsi settitle
     * set title nilai baru: input saat ini
     */
    return (
      <input
        id="title"
        type="text"
        // memberikan value input: title
        value={title}
        //memberikan event onChange
        onChange={handleTitle}
      />
      )
  
      /**
       * membuat inline if: operator &&
       * jika istitleerror true maka render error
       */
      {IsTitleError && <Alert>title wajib diisi</Alert>}
      setTitle(e.target.value);

      // membuat handlechange untuk handle input form (dinamis)
      function handleChange(e) {
        // destructing name dan value
        const { name, value } = e.target;

        // destructing state formdata
        const {title, date, poster, type} = formData;

        //update handler function di setiap input form
        <input id="title" type="text" value={title} name= "title" onChange={handleChange}.></input>
        <input id="title" type="text" value={date} name= "date" onChange={handleChange}.></input>
        <input id="title" type="text" value={type} name= "poster" onChange={handleChange}.></input>
        <input id="type", type="text" value={type} name="type" onChange={handleChange}></input>
        /*
       * update state dengan object baru:
       * copy state sblmnya menggunkan spread operator
       * update property berdasarkan apapun nilai name
       */
      setFormData({
        ...formData, [name]: value,
      })
      }
      
      // membuat fungsi untuk handle setiap input
      function handleTitle(e) {
        setIsTitle(e.target.value);
      }

      function handleDate(e) {
        setDate(e.target.value);

        /**
         * jalankan fungsi setdate
         * set date nilai baru: input saat ini
         */
        return (
          <input
            id="date"
            type="text"
            // memberikan value input: date
            value={date}
            //memberikan event onChange
            onChange={handleDate}
          />
        )
        /**
       * membuat inline if: operator &&
       * jika istitleerror true maka render error
       */
      {IsDateError && <Alert>date wajib diisi</Alert>}
        setDate(e.target.value);
      }

      /**
       * fungsi handlesubmit menjalankan 2 fungsi:
       * validate: fungsi validasi
       * addmovie: tambah movie
       */

      function handlePoster(e) {
        setPoster(e.target.value);
      }

      function handleType(e) {
        setType(e.target.value);
        
        // membuat state untuk input form
      const [title, setTitle] = useState("");
      const [date, setDate] = useState("");
      const [poster, setPoster] = useState("");
      const [type, setType] = useState("");

        // menambahkan atribut name di setiap input
        // tujuan agar fungsi mengupdate state berdasarkan name
      <input id="title" type="text" value={title} name="title"></input>
      <input id="title" type="text" value={title} name="date"></input>
      <input id="title" type="text" value={title} name="poster"></input>
      <input id="title" type="text" value={title} name="type"></input>
      }

      function handleSubmit (e) {
        e.preventDefault();

        validate() && addMovie();

        // validasi
        if (title === "") {
          setIsTitleError(true);
        }
        else if (date === "") {
          setIsDateError(true);
          setIsTitleError(false);
        }
        else if (poster === "") {
          setIsPosterError(true);
          setIsDateError(false);
        }
        else {
          // Add Movie
          const movie = {
            id: nanoid(), title: title,
            year: date, type: "Movie",
            poster: "https://picsum.photos/300/400",
          };
          setMovies([...movies, movie]);

          // set eror menjadi false
          setIsTitleError(false);
          setIsDateError(false);
        }
      }

      // membuat fungsi validasi form
      function validate() {
        if (title === "") {
          setIsTitleError(true);
          return false;
        }
        else if (date === "") {
          setIsDateError(true);
          setIsTitleError(false);
          return false;
        }
        else if (poster === "") {
          setIsPosterError(true);
          setIsDateError(false);
          return false;
        }
        else {
          setIsTitleError(false);
          setIsDateError(false);
          return true;
        }
      }
      
      // membuat fungsi menambahkan movie
      function addMovie() {
        const movie = {
          id: nanoid(), title: title,
          year: date, type: "Movie",
          poster: poster,
        };
        setMovies([...movies, movie]);
      }
  };

export default AddMovieForm;