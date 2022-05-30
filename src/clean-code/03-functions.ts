(() => {
  // función para obtener información de una película por Id (Eliminar comentario)
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast (Eliminar comentario)
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id (Eliminar comentario)
  function getUsuario(ActorId: string) {
    console.log({ ActorId });
  }

  // Crear una película (Eliminar comentario)
  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor (Eliminar comentario)
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre (Eliminar comentario)
    // ..
    // ..
    if (fullName === "Kevin") return false;

    console.log("Crear actor", birthdate);
    return true;
  }
})();
