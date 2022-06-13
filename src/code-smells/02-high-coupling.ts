(() => {
  // Not applying the single responsibility principle
  type Gender = "M" | "F";

  // High Coupling

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, new Date(), name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "/urs/home",
    "/development",
    "kevin@google.com",
    "F",
    "kevin",
    "M",
    new Date("1995-09-00")
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
