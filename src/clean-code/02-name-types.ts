(() => {
  // arreglo de temperaturas celsius (Eliminar comentario)
  const temperaturesCelsius = [33.6, 12.34];

  // Dirección ip del servidor (Eliminar comentario)
  const serverIp = "123.123.123.123";

  // Listado de usuarios
  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  // List of user emails (Delete comment)
  const userEmails = users.map((user) => user.email);

  // Boolean variables of a video game (Delete comment)
  const canJump = false;
  const canRun = true;
  const hasItems = false;
  const isLoading = true;

  // initial time (Remove comment)
  const startTime = new Date().getTime();

  // Time at end (Remove comment)
  const endTime = new Date().getTime() - startTime;

  // Functions
  // Get the books (Remove comment)
  function getBooks() {
    throw new Error("Function not implemented.");
  }

  // get books from a URL (Remove comment)
  function getBooksByUrl(url: string) {
    throw new Error("Function not implemented.");
  }

  // get the area of a square based on its sides (Remove comment)
  function getSquareArea(side: number) {
    throw new Error("Function not implemented.");
  }

  // print the job (Uncomment)
  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
