(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate (Eliminar comentario)
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Archivos marcados para borrar - files to delete (Eliminar comentario)
  const files = filesToEvaluate.map((file) => file.flagged);

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea (Eliminar comentario)

  // día de hoy - today (Eliminar comentario)
  const today = new Date();

  // días transcurridos - elapsed time in days (Eliminar comentario)
  const elapsedTimeInDays: number = 23;

  // número de archivos en un directorio - number of files in directory (Eliminar comentario)
  const numberOfFilesInDirectory = 33;

  // primer nombre - first name (Eliminar comentario)
  const firstName = "Fernando";

  // primer apellido - last name (Eliminar comentario)
  const lastName = "Herrera";

  // días desde la última modificación - days since modification (Eliminar comentario)
  const daysSinceModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student (Eliminar comentario)
  const maxClassesPerStudent = 6;
})();
