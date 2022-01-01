const paginate = followers => {
   const itemsPerPage = 10;
   const pages = Math.ceil(followers.length / itemsPerPage);

   // el primer argumento dice cuantos items va a tener el array, el segundo hace un map para ver q pone en cada item ( index ); el indice va a ser solo de la cantidad de elementos del array nuevo, NO del original
   // => para le 1er item el slice va a agarrar del 0 al 8 y pal 2do ...
   const newFollowers = Array.from({ length: pages }, (_, index) => {
      const start = index * itemsPerPage;

      return followers.slice(start, start + itemsPerPage);
   });

   return newFollowers;
};

export default paginate;
