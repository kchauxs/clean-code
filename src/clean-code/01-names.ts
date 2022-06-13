(() => {
  // Example
  // Files to evaluate - files to evaluate (Remove comment)
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Files marked for deletion - files to delete (Delete comment)
  const files = filesToEvaluate.map((file) => file.flagged);

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Better
  class User {}
  interface User {}

  // All: Task (Remove comment)

  // today - today (Remove comment)
  const today = new Date();

  // elapsed days - elapsed time in days (Remove comment)
  const elapsedTimeInDays: number = 23;

  // number of files in a directory - number of files in directory (Remove comment)
  const numberOfFilesInDirectory = 33;

  // first name - first name (Remove comment)
  const firstName = "Fernando";

  // first surname - last name (Remove comment)
  const lastName = "Herrera";

  // days since last modification - days since modification (Remove comment)
  const daysSinceModification = 12;

  // max number of classes per student - max classes per student (Remove comment)
  const maxClassesPerStudent = 6;
})();
