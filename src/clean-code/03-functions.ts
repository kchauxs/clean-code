(() => {
  // function to get information about a movie by Id (Remove comment)
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // function to get information about the actors of a movie - Actors or Cast // id = movieId getMovieCast (Remove comment)
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // function to get the actor's bio by id (Remove comment)
  function getUsuario(ActorId: string) {
    console.log({ ActorId });
  }

  // Create a movie (Remove comment)
  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Create a new actor (Remove comment)
  function createActor(fullName: string, birthdate: Date): boolean {
    // async task to check name (Uncomment)
    if (fullName === "Kevin") return false;

    console.log("Create actor", birthdate);
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    return isRetired ? 3000 : 4000;
  };
})();
