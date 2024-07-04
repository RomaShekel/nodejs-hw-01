import { PATH_DB } from '../constants/contacts.js';
import { countContacts } from './countContacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
    const contacts = await getAllContacts();
    if (contacts.length === 0){return};
    const lastIndex = contacts.length - 1;
    await fs.writeFile(PATH_DB, JSON.stringify(contacts.slice(0, lastIndex), undefined, 2));
};

removeLastContact();
