interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = "home",
  Studio = "studio",
  Office = "office",
}

// api
const fetchContacts = (): Promise<Array<Contact>> => {
  const contacts: Array<Contact> = [
    {
      name: "Tony",
      address: "Malibu",
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: "Banner",
      address: "New York",
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: "마동석",
      address: "서울시 강남구",
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(contacts), 2000);
  });
};

// main
class AddressBook {
  contacts: Array<Contact> = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then((response) => {
      (this.contacts as any) = response;
    });
  }

  findContactByName(name: string): Array<Contact> {
    return this.contacts.filter((contact) => contact.name === name);
  }

  findContactByAddress(address: string): Array<Contact> {
    return this.contacts.filter((contact) => contact.address === address);
  }

  findContactByPhone(
    phoneNumber: number,
    phoneType: PhoneType
  ): Array<Contact> {
    return this.contacts.filter(
      (contact) => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): Array<string> {
    this.contacts.map((contact) => console.log(contact.name));
    return this.contacts.map((contact) => contact.name);
  }

  displayListByAddress(): Array<string> {
    return this.contacts.map((contact) => contact.address);
  }
  /* ------------------------------------------------ */
}

const test = new AddressBook();
test.fetchData();
test.displayListByName();
