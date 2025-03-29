import fs from "node:fs/promises";

import { PATH_DB } from "../constants/contacts.js";

export const writeContacts = async (updatedContacts) => {
  fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 1));
};
