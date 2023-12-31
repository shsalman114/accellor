import { ReactComponent as IconSetting } from './assets/images/settings-icons/configuration.svg';
import { ReactComponent as IconUsers } from './assets/images/settings-icons/users.svg';
import { ReactComponent as IconSwap } from './assets/images/settings-icons/swap.svg';
import { ReactComponent as IconSlot } from './assets/images/settings-icons/slot.svg';
import { ReactComponent as IconLocation } from './assets/images/settings-icons/location.svg';
import { ReactComponent as IconLanguage } from './assets/images/settings-icons/language.svg';
import { ReactComponent as IconDoctor } from './assets/images/settings-icons/doctor-label.svg';
import { v4 as uuidv4 } from 'uuid';

export const settingsMenu = [
  {
    id: uuidv4(),
    name: 'Configuration',
    icon: <IconSetting />,
  },
  {
    id: uuidv4(),
    name: 'Users',
    icon: <IconUsers />,
  },
  {
    id: uuidv4(),
    name: 'Language',
    icon: <IconLanguage />,
  },
  {
    id: uuidv4(),
    name: 'Locations',
    icon: <IconLocation />,
  },
  {
    id: uuidv4(),
    name: 'Slots',
    icon: <IconSlot />,
  },
  {
    id: uuidv4(),
    name: 'Strapi roles',
    icon: <IconSwap />,
  },
  {
    id: uuidv4(),
    name: 'Doctor labels',
    icon: <IconDoctor />,
  },
  {
    id: uuidv4(),
    name: 'Mappings',
    icon: <IconLocation />,
  },
]

export const sectionNamesData = [
  {
    id: uuidv4(),
    name: 'John',
  },
  {
    id: uuidv4(),
    name: 'Paul',
  },
  {
    id: uuidv4(),
    name: 'Nadeem',
  },
  {
    id: uuidv4(),
    name: 'Naziya',
  },
]

export const sectionTabsData = [

  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "Paul", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "Paul", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "Paul", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "Paul", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "Paul", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "Paul", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "Paul", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "Nadeem", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "Nadeem", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "Nadeem", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "Nadeem", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "Nadeem", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "Nadeem", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "Nadeem", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "Nadeem", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "rejected", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "John", type: "Hero Banner" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "John", type: "Type A" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Type A" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "rejected", "rejected_on": "23 April", "rejected_by": "John", type: "Type A" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "Naziya", type: "Type A" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "Naziya", type: "Type B" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "Naziya", type: "Type B" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "rejected", "rejected_on": "23 April", "rejected_by": "Naziya", type: "Type B" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "Naziya", type: "Type B" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "Naziya", type: "Type C" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "Naziya", type: "Type C" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "rejected", "rejected_on": "23 April", "rejected_by": "Naziya", type: "Type C" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "Naziya", type: "Type C" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "draft", "created on": "23 April", "created by": "Naziya", type: "Type D" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "submitted", "rejected_on": "23 April", "rejected_by": "John", type: "Type D" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "rejected", "rejected_on": "23 April", "rejected_by": "John", type: "Type D" },
  { id: uuidv4(), title: 'HB_Compaigning', "status": "published", "rejected_on": "23 April", "rejected_by": "John", type: "Type D" }
];