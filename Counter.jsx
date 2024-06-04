// import usestate untuk menggunakan state
import { useEffect, useState } from "react";

function Counter() {
  
  /**
   * parameter kedua(array)
   * digunakan untuk custom lifecycle update
   * lifecycle update dijalankan ketika state di array berubah
   */
  useEffect(() => {
    // menjalankan side effect: update dom
    function manipulateDOM(){
    console.log("Lifecycle: Component dimount");
    document.title = 'Result: ${angka}';
  }
  manipulateDOM();
}, [angka]);

  console.log("Lifecycle: Component dirender");
  const [angka, setAngka] = useState(0);

  function addAngka() {
    // update angka menggunakan setangka
    setAngka(angka+1);
    console.log(angka);
  }

  return (
    <div>
      <p>Result: {angka}</p>
      {/**menambahkan event onclick */}
      <button ocClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
