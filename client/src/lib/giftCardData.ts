import couldntDoItWithoutYouImg from '../assets/couldntdoitwithoutyou.jpg';
import couldntDoItWithoutYouImg2 from '../assets/couldntdoitwithoutyou2.jpg';

interface GiftCard {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

interface GiftCardsByCategory {
  [key: string]: GiftCard[];
}

export const giftCardCategories = [
  { id: 'featured', title: 'Featured' },
  { id: 'adminAppreciation', title: 'Admin Appreciation' },
  { id: 'birthday', title: 'Birthday' },
  { id: 'thankYou', title: 'Thank You' },
  { id: 'celebration', title: 'Celebration' },
  { id: 'appreciation', title: 'Appreciation' },
  { id: 'spring', title: 'Spring' },
  { id: 'mothersDay', title: 'Mother\'s Day' },
  { id: 'teacherAppreciation', title: 'Teacher Appreciation' },
  { id: 'nurseAppreciation', title: 'Nurse Appreciation' },
  { id: 'encouragement', title: 'Encouragement' },
  { id: 'workplace', title: 'Workplace' }
];

export const giftCards: GiftCardsByCategory = {
  featured: [
    {
      id: '001',
      title: 'Spring',
      imageUrl: couldntDoItWithoutYouImg, 
      category: 'featured'
    },
    {
      id: '002',
      title: 'Happy Birthday',
      imageUrl: couldntDoItWithoutYouImg2,
      category: 'featured'
    },
    {
      id: '003',
      title: 'Couldn\'t Do It Without You',
      imageUrl: couldntDoItWithoutYouImg,
      category: 'featured'
    },
    {
      id: '004',
      title: 'Thank You',
      imageUrl: couldntDoItWithoutYouImg2,
      category: 'featured'
    },
    {
      id: '005',
      title: 'You Are Awesome',
      imageUrl: couldntDoItWithoutYouImg,
      category: 'featured'
    },
    {
      id: '006',
      title: 'Celebration',
      imageUrl: couldntDoItWithoutYouImg2,
      category: 'featured'
    }
  ],
  adminAppreciation: [
    {
      id: '007',
      title: 'Couldn\'t Do It Without You',
      imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'adminAppreciation'
    },
    {
      id: '008',
      title: 'Great Work Deserves Coffee',
      imageUrl: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'adminAppreciation'
    },
    {
      id: '009',
      title: 'Above + Beyond',
      imageUrl: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'adminAppreciation'
    }
  ],
  birthday: [
    {
      id: '010',
      title: 'Happy Birthday',
      imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'birthday'
    },
    {
      id: '011',
      title: 'Holiday Birthday',
      imageUrl: 'https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'birthday'
    }
  ],
  thankYou: [
    {
      id: '012',
      title: 'Thank You',
      imageUrl: 'https://images.unsplash.com/photo-1522120657009-060ca01afcd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'thankYou'
    },
    {
      id: '013',
      title: 'My Treat',
      imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'thankYou'
    },
    {
      id: '014',
      title: 'Big Thank You',
      imageUrl: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'thankYou'
    }
  ],
  celebration: [
    {
      id: '015',
      title: 'Celebration',
      imageUrl: 'https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'celebration'
    }
  ],
  appreciation: [
    {
      id: '016',
      title: 'You Are Awesome',
      imageUrl: 'https://images.unsplash.com/photo-1504542982118-59308b40fe0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'appreciation'
    },
    {
      id: '017',
      title: 'Couldn\'t Do It Without You',
      imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'appreciation'
    }
  ],
  spring: [
    {
      id: '018',
      title: 'Spring',
      imageUrl: 'https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'spring'
    },
    {
      id: '019',
      title: 'Spring Tulips',
      imageUrl: 'https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'spring'
    }
  ],
  // mothersDay: [
  //   {
  //     id: '020',
  //     title: 'Happy Mother\'s Day',
  //     imageUrl: 'https://images.unsplash.com/photo-1588875985407-dc9f5693be03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //     category: 'mothersDay'
  //   },
  //   {
  //     id: '021',
  //     title: 'Love You, Mom!',
  //     imageUrl: 'https://images.unsplash.com/photo-1557428894-56bcc97113fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //     category: 'mothersDay'
  //   }
  // ],
  teacherAppreciation: [
    {
      id: '022',
      title: 'You Make Learning Fun',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'teacherAppreciation'
    },
    {
      id: '023',
      title: 'Amazing Teacher',
      imageUrl: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'teacherAppreciation'
    }
  ],
  // nurseAppreciation: [
  //   {
  //     id: '024',
  //     title: 'For A Healthcare Hero',
  //     imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //     category: 'nurseAppreciation'
  //   },
  //   {
  //     id: '025',
  //     title: 'A World Of Thanks',
  //     imageUrl: 'https://images.unsplash.com/photo-1577368385284-a9971f650f0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  //     category: 'nurseAppreciation'
  //   }
  // ],
  encouragement: [
    {
      id: '026',
      title: 'You Got This',
      imageUrl: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'encouragement'
    },
    {
      id: '027',
      title: 'Good Vibes',
      imageUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'encouragement'
    }
  ],
  workplace: [
    {
      id: '028',
      title: 'Above + Beyond',
      imageUrl: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'workplace'
    },
    {
      id: '029',
      title: 'Great Work',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'workplace'
    }
  ]
};
