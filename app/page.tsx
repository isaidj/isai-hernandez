export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <header className="flex flex-row justify-start w-full">
        <h2
          className="text-2xl font-extralight text-white"
          style={{ width: "35rem" }}
        >
          Greetings, I am <strong className="font-bold">Isai Hernández</strong>,
          a Systems Engineer. With a great passion for{" "}
          <strong className="font-bold">technology and programming</strong>.
          Eager to design{" "}
          <strong className="font-bold">innovative solutions!</strong>
        </h2>
      </header>
      <section className="flex flex-col items-center justify-center ">
        <h1
          className="text-8xl  font-bold   text-transparent bg-clip-text sm:text-10xl md:text-15xl"
          style={{
            // fontSize: "15rem",
            background:
              "linear-gradient(to top, rgb(255, 255, 255)0%, rgb(190, 190, 190) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Developer
        </h1>
      </section>
    </main>
  );
}
