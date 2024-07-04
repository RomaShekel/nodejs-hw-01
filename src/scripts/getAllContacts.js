import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    return JSON.parse(data);
};

console.log(await getAllContacts());
