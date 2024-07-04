import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

const generateContacts = async (number) => {

    const contacts = await getAllContacts();

    for (let i = 0; i < number; i++) {
        const data = createFakeContact();
        contacts.push(data);
    };
    
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2), 'utf-8');
};

generateContacts(3);
