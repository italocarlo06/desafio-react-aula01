//something is wrong with the code. Fix it so that the code works as expected.
function profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <profile />
        <profile />
        <profile />
      </section>
    );
  }
  