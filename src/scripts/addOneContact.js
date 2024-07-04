import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
    const contacts = await getAllContacts();
    const newContact = createFakeContact();

    await fs.writeFile(PATH_DB, JSON.stringify([...contacts, newContact], undefined, 2));
};

addOneContact();
